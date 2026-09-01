import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import {
  articles,
  images,
  localeConfig,
  origin,
  primaryNav,
  routeIds,
  routePath,
  site,
  socialLinks
} from "./site-data.mjs";

const root = process.cwd();
const locales = Object.keys(localeConfig);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeJson(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function absolute(locale, routeId) {
  return `${origin}${routePath(locale, routeId)}`;
}

function link(locale, routeId, label, className = "") {
  return `<a href="${routePath(locale, routeId)}"${className ? ` class="${className}"` : ""}>${escapeHtml(label)}</a>`;
}

function localeLinks(locale, routeId) {
  return `<nav class="locale-nav" aria-label="Language">
    ${locales.map((key) => `<a href="${routePath(key, routeId)}" hreflang="${localeConfig[key].hreflang}" lang="${localeConfig[key].htmlLang}"${key === locale ? ' aria-current="true"' : ""}>${localeConfig[key].short}</a>`).join("")}
  </nav>`;
}

function header(locale, routeId) {
  const t = site[locale];
  const nav = primaryNav.map((id) => `<a href="${routePath(locale, id)}"${id === routeId ? ' aria-current="page"' : ""}>${escapeHtml(t.nav[id])}</a>`).join("");
  const mobileNav = routeIds.map((id) => `<a href="${routePath(locale, id)}"${id === routeId ? ' aria-current="page"' : ""}>${escapeHtml(t.nav[id])}</a>`).join("");
  return `<header class="site-header">
    <div class="header-inner">
      <a class="brand" href="${routePath(locale, "home")}" aria-label="TPK Park ${t.nav.home}">
        <span class="brand-mark" aria-hidden="true">TPK</span><span class="brand-name">TPK Park</span>
      </a>
      <nav class="desktop-nav" aria-label="Primary">${nav}</nav>
      ${localeLinks(locale, routeId)}
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="${escapeHtml(t.menuOpen)}"><span></span></button>
    </div>
    <div id="mobile-menu" class="mobile-panel" data-open="false">
      <nav class="mobile-nav" aria-label="Mobile">${mobileNav}</nav>
      ${localeLinks(locale, routeId)}
    </div>
  </header>`;
}

function footer(locale) {
  const t = site[locale];
  const explore = ["about", "homeLiving", "automotive", "lifestyle", "leasing", "news", "milestones", "profile"]
    .map((id) => link(locale, id, t.nav[id])).join("");
  const social = socialLinks.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}<span class="visually-hidden"> (${escapeHtml(t.external)})</span></a>`).join("");
  return `<footer class="site-footer">
    <div class="shell">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="${routePath(locale, "home")}"><span class="brand-mark" aria-hidden="true">TPK</span><span>TPK Park</span></a>
          <p>${escapeHtml(t.footerIntro)}</p>
        </div>
        <div><p class="footer-title">${escapeHtml(t.explore)}</p><nav class="footer-links" aria-label="Footer">${explore}</nav></div>
        <div><p class="footer-title">${escapeHtml(t.connect)}</p><nav class="footer-links" aria-label="Social links">
          ${link(locale, "contact", t.nav.contact)}
          <a href="tel:+60380765200">+60 3 8076 5200</a>
          <a href="mailto:info@tpkpark.com">info@tpkpark.com</a>${social}
        </nav></div>
      </div>
      <div class="footer-bottom"><span>© 2026 ${escapeHtml(t.rights)}</span><span>Taman Perindustrian Kinrara · Puchong · Selangor</span></div>
    </div>
  </footer>`;
}

function pageHero(locale, routeId, page) {
  const t = site[locale];
  return `<section class="page-hero"><div class="shell">
    <nav class="breadcrumb" aria-label="Breadcrumb"><a href="${routePath(locale, "home")}">${escapeHtml(t.breadcrumbHome)}</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(page.eyebrow)}</span></nav>
    <div class="page-hero-grid"><div><p class="eyebrow">${escapeHtml(page.eyebrow)}</p><h1>${escapeHtml(page.title)}</h1></div><p class="page-hero-copy">${escapeHtml(page.lead)}</p></div>
  </div></section>`;
}

function homeHero(locale, page) {
  const t = site[locale];
  return `<section class="hero" aria-labelledby="hero-title">
    <img class="hero-media" src="${page.image}" alt="" fetchpriority="high" referrerpolicy="no-referrer">
    <div class="hero-content"><p class="eyebrow">${escapeHtml(page.eyebrow)}</p><h1 id="hero-title">${escapeHtml(page.title)}</h1><p class="hero-lead">${escapeHtml(page.lead)}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="${routePath(locale, "homeLiving")}">${escapeHtml(t.discover)} <span class="arrow" aria-hidden="true">→</span></a>
        <a class="button button-secondary" href="${routePath(locale, "leasing")}">${escapeHtml(t.enquiries)}</a>
      </div>
    </div>
  </section>`;
}

function sectionHeader(block) {
  return `<div class="section-header"><div><span class="section-number">${escapeHtml(block.kicker || "")}</span></div><div><h2>${escapeHtml(block.title || "")}</h2>${block.text ? `<p>${escapeHtml(block.text)}</p>` : ""}</div></div>`;
}

function renderCards(locale, block) {
  const t = site[locale];
  const items = block.items.map((item) => {
    const href = item.route ? routePath(locale, item.route) : "";
    const more = href ? `<a class="text-link" href="${href}">${escapeHtml(t.readMore)} <span class="arrow" aria-hidden="true">→</span></a>` : "";
    if (item.image) {
      return `<article class="card image-card"><img src="${item.image}" alt="" loading="lazy" referrerpolicy="no-referrer"><div class="image-card-content"><span class="number">${escapeHtml(item.number)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p>${more}</div></article>`;
    }
    return `<article class="card"><span class="number">${escapeHtml(item.number)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p>${more}</article>`;
  }).join("");
  return `<section class="section"><div class="shell">${sectionHeader(block)}<div class="card-grid">${items}</div></div></section>`;
}

function renderSplit(locale, block, index) {
  const t = site[locale];
  const action = block.route ? `<a class="button button-dark" href="${routePath(locale, block.route)}">${escapeHtml(t.readMore)} <span class="arrow" aria-hidden="true">→</span></a>` : "";
  const image = `<img class="split-media" src="${block.image}" alt="${escapeHtml(block.alt)}" loading="lazy" referrerpolicy="no-referrer">`;
  const copy = `<div class="split-copy"><span class="section-number">${String(index + 1).padStart(2, "0")}</span><h2>${escapeHtml(block.title)}</h2><p>${escapeHtml(block.text)}</p>${action}</div>`;
  return `<section class="split section-sage">${index % 2 ? `${copy}${image}` : `${image}${copy}`}</section>`;
}

function renderStats(block) {
  const items = block.items.map((item) => `<div class="stat"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></div>`).join("");
  return `<section class="section-compact"><div class="shell"><div class="stats">${items}</div></div></section>`;
}

function renderDirectory(block) {
  const items = block.items.map(([category, name]) => `<div class="directory-item"><span>${escapeHtml(category)}</span><h3>${escapeHtml(name)}</h3></div>`).join("");
  return `<section class="section"><div class="shell">${sectionHeader(block)}<div class="directory">${items}</div></div></section>`;
}

function renderTimeline(block) {
  const rows = block.items.map((item) => `<article class="timeline-row"><span class="year">${escapeHtml(item.year)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`).join("");
  return `<section class="section"><div class="shell">${sectionHeader(block)}<div class="timeline">${rows}</div></div></section>`;
}

function renderQuote(block) {
  return `<section class="quote-band"><blockquote>${escapeHtml(block.text)}</blockquote><cite>— ${escapeHtml(block.cite)}</cite></section>`;
}

function renderNews(locale, block) {
  const t = site[locale];
  const lang = localeConfig[locale].htmlLang;
  const cards = articles.slice(0, block.limit).map((article) => {
    const date = new Intl.DateTimeFormat(lang, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${article.date}T00:00:00Z`));
    return `<article class="news-card">
      <a href="${article.url}" target="_blank" rel="noopener noreferrer"><img src="${article.image}" alt="${escapeHtml(article.title[locale])}" loading="lazy" referrerpolicy="no-referrer"></a>
      <div class="news-meta"><span>${escapeHtml(article.source)}</span><time datetime="${article.date}">${escapeHtml(date)}</time></div>
      <h3>${escapeHtml(article.title[locale])}</h3>
      <a class="text-link" href="${article.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.readMore)} <span class="arrow" aria-hidden="true">↗</span><span class="visually-hidden"> (${escapeHtml(t.external)})</span></a>
    </article>`;
  }).join("");
  const all = block.limit < articles.length ? `<div style="margin-top:34px">${link(locale, "news", t.viewAll, "button button-outline")}</div>` : "";
  return `<section class="section"><div class="shell">${sectionHeader(block)}<div class="news-grid">${cards}</div>${all}</div></section>`;
}

function renderFaq(block) {
  const items = block.items.map((item) => `<details><summary>${escapeHtml(item.q)}</summary><p>${escapeHtml(item.a)}</p></details>`).join("");
  return `<section class="section section-sage"><div class="shell">${sectionHeader(block)}<div class="faq-list">${items}</div></div></section>`;
}

function renderNotice(block) {
  return `<section class="section-compact"><div class="shell"><p class="notice"><span class="archive-label">Archive / Notice</span><br><br>${escapeHtml(block.text)}</p></div></section>`;
}

function renderProfile(page, block) {
  return `<section class="section"><div class="shell"><div class="profile-hero">
    <div><p class="profile-role">${escapeHtml(page.lead)}</p><p class="profile-descriptor">${escapeHtml(block.descriptor)}</p><p class="profile-intro">${escapeHtml(block.introduction)}</p></div>
    <figure class="profile-portrait"><img src="${images.portrait}" alt="${escapeHtml(block.imageAlt)}" loading="eager" referrerpolicy="no-referrer"></figure>
  </div></div></section>`;
}

function renderContact(locale, block) {
  const t = site[locale];
  const f = t.form;
  const labels = block.labels;
  const options = f.options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("");
  return `<section class="section"><div class="shell"><div class="contact-grid">
    <div class="contact-list">
      <div class="contact-row"><span>${escapeHtml(labels.phone)}</span><a href="tel:+60380765200">+60 3 8076 5200</a></div>
      <div class="contact-row"><span>${escapeHtml(labels.email)}</span><a href="mailto:info@tpkpark.com">info@tpkpark.com</a></div>
      <div class="contact-row"><span>${escapeHtml(labels.hours)}</span><p>${escapeHtml(block.officeHours)}</p></div>
      <div class="contact-row"><span>${escapeHtml(labels.address)}</span><p>${escapeHtml(block.address)}</p></div>
    </div>
    <div><p class="eyebrow">${escapeHtml(labels.formTitle)}</p><form class="form-grid" data-email-form>
      <div class="field"><label for="name">${escapeHtml(f.name)}</label><input id="name" name="name" autocomplete="name" required></div>
      <div class="field"><label for="company">${escapeHtml(f.company)}</label><input id="company" name="company" autocomplete="organization"></div>
      <div class="field"><label for="email">${escapeHtml(f.email)}</label><input id="email" name="email" type="email" autocomplete="email" required></div>
      <div class="field"><label for="phone">${escapeHtml(f.phone)}</label><input id="phone" name="phone" type="tel" autocomplete="tel"></div>
      <div class="field field-full"><label for="interest">${escapeHtml(f.interest)}</label><select id="interest" name="interest" required><option value="">${escapeHtml(f.select)}</option>${options}</select></div>
      <div class="field field-full"><label for="message">${escapeHtml(f.message)}</label><textarea id="message" name="message" required></textarea></div>
      <p class="form-note">${escapeHtml(t.emailApp)}</p>
      <div class="field-full"><button class="button button-dark" type="submit">${escapeHtml(f.send)} <span class="arrow" aria-hidden="true">→</span></button></div>
    </form></div>
  </div></div></section>`;
}

function renderBlock(locale, routeId, page, block, index) {
  switch (block.type) {
    case "cards": return renderCards(locale, block);
    case "split": return renderSplit(locale, block, index);
    case "stats": return renderStats(block);
    case "directory": return renderDirectory(block);
    case "timeline": return renderTimeline(block);
    case "quote": return renderQuote(block);
    case "news": return renderNews(locale, block);
    case "faq": return renderFaq(block);
    case "notice": return renderNotice(block);
    case "profile": return renderProfile(page, block);
    case "contact": return renderContact(locale, block);
    default: throw new Error(`Unknown block type: ${block.type}`);
  }
}

function cta(locale) {
  const t = site[locale];
  return `<aside class="cta-panel"><div><h2>${escapeHtml(t.ctaTitle)}</h2><p>${escapeHtml(t.ctaText)}</p></div><a class="button button-primary" href="${routePath(locale, "contact")}">${escapeHtml(t.ctaButton)} <span class="arrow" aria-hidden="true">→</span></a></aside>`;
}

function schemas(locale, routeId, page) {
  const url = absolute(locale, routeId);
  const graph = [
    {
      "@type": "Organization",
      "@id": `${origin}/#organization`,
      name: "TPK Park Sdn. Bhd.",
      alternateName: "TPK Park",
      url: `${origin}/`,
      telephone: "+60 3 8076 5200",
      email: "info@tpkpark.com",
      address: { "@type": "PostalAddress", streetAddress: "Taman Perindustrian Kinrara", postalCode: "47180", addressLocality: "Puchong", addressRegion: "Selangor", addressCountry: "MY" },
      sameAs: socialLinks.map(([, socialUrl]) => socialUrl)
    },
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      url: `${origin}/`,
      name: "TPK Park",
      publisher: { "@id": `${origin}/#organization` },
      inLanguage: localeConfig[locale].htmlLang
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": `${origin}/#website` },
      about: { "@id": `${origin}/#organization` },
      inLanguage: localeConfig[locale].htmlLang
    }
  ];

  if (routeId !== "home") {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: site[locale].breadcrumbHome, item: absolute(locale, "home") },
        { "@type": "ListItem", position: 2, name: page.title, item: url }
      ]
    });
  }

  const faq = page.blocks.find((block) => block.type === "faq");
  if (faq) graph.push({ "@type": "FAQPage", mainEntity: faq.items.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) });

  if (routeId === "news") {
    graph.push({ "@type": "ItemList", name: page.title, itemListElement: articles.map((article, index) => ({ "@type": "ListItem", position: index + 1, url: article.url, name: article.title[locale] })) });
  }

  if (routeId === "profile") {
    graph.push({
      "@type": "Person",
      name: "Wong Shung Yen",
      alternateName: "黄松延",
      jobTitle: "Managing Director",
      worksFor: { "@id": `${origin}/#organization` },
      url,
      image: images.portrait,
      sameAs: ["https://www.linkedin.com/in/wong-shung-yen/", "https://www.imdb.com/name/nm6562891/"],
      alumniOf: [{ "@type": "CollegeOrUniversity", name: "University of Melbourne" }, { "@type": "CollegeOrUniversity", name: "Universiti Tunku Abdul Rahman" }],
      knowsAbout: ["Property Development", "Industrial Real Estate", "Asset Management", "Retail Clustering", "Placemaking"]
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function scripts(locale) {
  const t = site[locale];
  return `<script>
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');
    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
        const open = menuButton.getAttribute('aria-expanded') !== 'true';
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.setAttribute('aria-label', open ? ${safeJson(t.menuClose)} : ${safeJson(t.menuOpen)});
        mobileMenu.dataset.open = String(open);
        document.body.classList.toggle('menu-open', open);
      });
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') menuButton.click();
      });
    }
    const emailForm = document.querySelector('[data-email-form]');
    if (emailForm) emailForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(emailForm);
      const subject = 'TPK Park enquiry — ' + data.get('interest');
      const body = [
        '${escapeHtml(t.form.name)}: ' + data.get('name'),
        '${escapeHtml(t.form.company)}: ' + (data.get('company') || '-'),
        '${escapeHtml(t.form.email)}: ' + data.get('email'),
        '${escapeHtml(t.form.phone)}: ' + (data.get('phone') || '-'),
        '${escapeHtml(t.form.interest)}: ' + data.get('interest'),
        '',
        data.get('message')
      ].join('\\n');
      window.location.href = 'mailto:info@tpkpark.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  </script>`;
}

function renderPage(locale, routeId) {
  const t = site[locale];
  const page = t.pages[routeId];
  const canonical = absolute(locale, routeId);
  const alternates = locales.map((key) => `<link rel="alternate" hreflang="${localeConfig[key].hreflang}" href="${absolute(key, routeId)}">`).join("\n  ");
  const hero = routeId === "home" ? homeHero(locale, page) : pageHero(locale, routeId, page);
  const blocks = page.blocks.map((block, index) => renderBlock(locale, routeId, page, block, index)).join("");
  const ogImage = page.image || (routeId === "profile" ? images.portrait : images.park);
  const body = `${hero}${blocks}${routeId === "contact" ? "" : cta(locale)}`;
  return `<!doctype html>
<html lang="${localeConfig[locale].htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(page.title)} | TPK Park</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  <meta name="theme-color" content="#173e31">
  <link rel="canonical" href="${canonical}">
  ${alternates}
  <link rel="alternate" hreflang="x-default" href="${absolute("en", routeId)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="TPK Park">
  <meta property="og:title" content="${escapeHtml(page.title)}">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="stylesheet" href="/css/tailwind.css">
  <script type="application/ld+json">${safeJson(schemas(locale, routeId, page))}</script>
</head>
<body>
  <a class="skip-link" href="#main">${escapeHtml(t.skip)}</a>
  ${header(locale, routeId)}
  <main id="main">${body}</main>
  ${footer(locale)}
  ${scripts(locale)}
</body>
</html>`;
}

function outputFile(locale, routeId) {
  const path = routePath(locale, routeId);
  return path === "/" ? join(root, "index.html") : join(root, path.slice(1), "index.html");
}

for (const locale of locales) {
  for (const routeId of routeIds) {
    const file = outputFile(locale, routeId);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, renderPage(locale, routeId), "utf8");
  }
}

const sitemapEntries = locales.flatMap((locale) => routeIds.map((routeId) => {
  const alternates = locales.map((key) => `    <xhtml:link rel="alternate" hreflang="${localeConfig[key].hreflang}" href="${absolute(key, routeId)}"/>`).join("\n");
  return `  <url>\n    <loc>${absolute(locale, routeId)}</loc>\n${alternates}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute("en", routeId)}"/>\n  </url>`;
})).join("\n");

await writeFile(join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapEntries}\n</urlset>\n`, "utf8");
await writeFile(join(root, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`, "utf8");

console.log(`Generated ${locales.length * routeIds.length} pages across ${locales.length} locales.`);
