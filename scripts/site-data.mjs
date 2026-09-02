export const origin = "https://www.tpkpark.com";

export const routeSlugs = {
  home: "",
  about: "about",
  homeLiving: "home-living",
  automotive: "automotive",
  lifestyle: "lifestyle",
  leasing: "leasing",
  leasingShop: "leasing/shop-showroom",
  leasingDetached: "leasing/detached-building",
  leasingSemiDetached: "leasing/semi-detached",
  news: "news",
  milestones: "milestones",
  profile: "wong-shung-yen",
  contact: "contact"
};

export const routeIds = Object.keys(routeSlugs);

export const localeConfig = {
  en: { prefix: "", htmlLang: "en-MY", hreflang: "en-MY", ogLocale: "en_MY", short: "EN", label: "English" },
  ms: { prefix: "ms", htmlLang: "ms-MY", hreflang: "ms-MY", ogLocale: "ms_MY", short: "BM", label: "Bahasa Melayu" },
  zh: { prefix: "zh", htmlLang: "zh-Hans-MY", hreflang: "zh-Hans-MY", ogLocale: "zh_MY", short: "中", label: "中文" }
};

export const seoTitles = {
  en: {
    home: "TPK Park Puchong | Home & Living, Automotive & Lifestyle",
    about: "About TPK Park | Industrial Park Renewal in Puchong",
    homeLiving: "Home & Living Showrooms in Puchong | TPK Park",
    automotive: "Automotive Sales & Services in Puchong | TPK Park",
    lifestyle: "Dining, Fitness & Lifestyle in Puchong | TPK Park",
    leasing: "Commercial & Industrial Property for Rent in Puchong | TPK Park",
    leasingShop: "Shop & Showroom for Rent in Puchong | TPK Park",
    leasingDetached: "Detached Building for Rent in Puchong | TPK Park",
    leasingSemiDetached: "Semi-Detached Factory for Rent in Puchong | TPK Park",
    news: "TPK Park News & Media Coverage | Puchong",
    milestones: "TPK Park Milestones | Home & Living Recognition",
    profile: "Wong Shung Yen 黄松延 | Managing Director, TPK Park",
    contact: "Contact TPK Park Puchong | Leasing & Enquiries"
  },
  ms: {
    home: "TPK Park Puchong | Home & Living, Automotif & Lifestyle",
    about: "Tentang TPK Park | Pembaharuan Taman Perindustrian Puchong",
    homeLiving: "Bilik Pameran Home & Living di Puchong | TPK Park",
    automotive: "Jualan & Servis Automotif di Puchong | TPK Park",
    lifestyle: "Makan, Kecergasan & Lifestyle di Puchong | TPK Park",
    leasing: "Premis Komersial & Industri untuk Disewa di Puchong | TPK Park",
    leasingShop: "Kedai & Bilik Pameran untuk Disewa di Puchong | TPK Park",
    leasingDetached: "Bangunan Sesebuah untuk Disewa di Puchong | TPK Park",
    leasingSemiDetached: "Kilang Berkembar untuk Disewa di Puchong | TPK Park",
    news: "Berita & Liputan Media TPK Park | Puchong",
    milestones: "Pencapaian TPK Park | Pengiktirafan Home & Living",
    profile: "Wong Shung Yen 黄松延 | Pengarah Urusan TPK Park",
    contact: "Hubungi TPK Park Puchong | Penyewaan & Pertanyaan"
  },
  zh: {
    home: "蒲种TPK Park | 家居生活、汽车服务与生活品味",
    about: "关于TPK Park | 蒲种成熟工业园更新与地方营造",
    homeLiving: "蒲种家居生活展厅与装修品牌 | TPK Park",
    automotive: "蒲种汽车销售、维修与美容服务 | TPK Park",
    lifestyle: "蒲种餐饮、运动与生活配套 | TPK Park",
    leasing: "蒲种商铺、展厅及工业单位出租 | TPK Park",
    leasingShop: "蒲种商铺及展厅出租 | TPK Park",
    leasingDetached: "蒲种独立式商业建筑出租 | TPK Park",
    leasingSemiDetached: "蒲种半独立式厂房出租 | TPK Park",
    news: "TPK Park新闻与媒体报道 | 蒲种",
    milestones: "TPK Park里程碑 | 家居生活集群认证",
    profile: "黄松延 Wong Shung Yen | TPK Park董事经理",
    contact: "联系蒲种TPK Park | 租赁与一般咨询"
  }
};

const brochureRouteIds = new Set(["leasingShop", "leasingDetached", "leasingSemiDetached"]);
export const routeLastModified = Object.fromEntries(routeIds.map((routeId) => [routeId, brochureRouteIds.has(routeId) ? "2026-09-02" : "2026-09-01"]));

export function routePath(locale, routeId) {
  const prefix = localeConfig[locale].prefix;
  const slug = routeSlugs[routeId];
  const parts = [prefix, slug].filter(Boolean);
  return parts.length ? `/${parts.join("/")}/` : "/";
}

export const images = {
  park: "https://i.imgur.com/an6ruYm.jpg",
  carnival: "https://i.imgur.com/syF6CHS.jpg",
  record: "https://i.imgur.com/yFCJC9P.png",
  portrait: "https://i.imgur.com/vM9ott4.jpg",
  homeLiving: "https://i.imgur.com/EDf26sR.jpg",
  automotive: "https://i.imgur.com/XsscuQz.jpg",
  lifestyle: "https://i.imgur.com/Z5h4hmH.jpg",
  leasing: "https://i.imgur.com/P4Lj1qX.jpg",
  leasingShop: "https://i.imgur.com/fpOMhvX.jpg",
  leasingDetached: "https://i.imgur.com/Ghs7Ubv.jpg",
  leasingSemiDetached: "https://i.imgur.com/I5lSjeF.jpg"
};

export const leasingInventory = {
  shopShowroom: {
    routeId: "leasingShop",
    queryValue: "shop-showroom",
    image: images.leasingShop,
    brochureUrls: {
      en: "/assets/leasing/tpk-park-section-2-shoplots-for-lease.pdf",
      ms: "/assets/leasing/tpk-park-section-2-shoplots-for-lease-ms.pdf",
      zh: "/assets/leasing/tpk-park-section-2-shoplots-for-lease-zh.pdf"
    },
    mapUrl: "https://www.google.com/maps/search/Jalan+TPK+2%2F8,+Taman+Perindustrian+Kinrara,+Puchong",
    values: {
      availability: { en: "Limited units — confirm current options", ms: "Unit terhad — sahkan pilihan semasa", zh: "少量单位 — 请确认当前选择" },
      address: { en: "Shoplots along Jalan TPK 2/8, Taman Perindustrian Kinrara, Puchong", ms: "Deretan kedai di sepanjang Jalan TPK 2/8, Taman Perindustrian Kinrara, Puchong", zh: "蒲种金銮工业园 Jalan TPK 2/8 沿线商铺" },
      builtUp: { en: "Varies by selected unit", ms: "Berbeza mengikut unit yang dipilih", zh: "视所选单位而定" },
      landArea: null,
      askingRent: { en: "Available on enquiry", ms: "Diberikan semasa pertanyaan", zh: "租金请洽询" },
      format: { en: "Customer-facing shop and showroom", ms: "Kedai dan bilik pameran berhadapan pelanggan", zh: "面向顾客的商铺与展厅" }
    }
  },
  detached: {
    routeId: "leasingDetached",
    queryValue: "detached-building",
    image: images.leasingDetached,
    brochureUrls: {
      en: "/assets/leasing/tpk-park-detached-showroom-building-no-7-for-lease.pdf",
      ms: "/assets/leasing/tpk-park-detached-showroom-building-no-7-for-lease-ms.pdf",
      zh: "/assets/leasing/tpk-park-detached-showroom-building-no-7-for-lease-zh.pdf"
    },
    mapUrl: "https://www.google.com/maps/search/No.+7+Jalan+TPK+2%2F4,+Taman+Perindustrian+Kinrara,+Puchong",
    values: {
      availability: { en: "1 building — confirm current availability", ms: "1 bangunan — sahkan ketersediaan semasa", zh: "1栋 — 请确认当前供应" },
      address: { en: "No. 7, Jalan TPK 2/4, Taman Perindustrian Kinrara, Puchong", ms: "No. 7, Jalan TPK 2/4, Taman Perindustrian Kinrara, Puchong", zh: "蒲种金銮工业园 Jalan TPK 2/4 门牌7号" },
      builtUp: { en: "Approx. 10,965 sq ft", ms: "Kira-kira 10,965 kaki persegi", zh: "建筑面积约10,965平方英尺" },
      landArea: { en: "Approx. 21,316 sq ft", ms: "Kira-kira 21,316 kaki persegi", zh: "土地面积约21,316平方英尺" },
      askingRent: { en: "RM58,000 per month (indicative)", ms: "RM58,000 sebulan (indikatif)", zh: "每月RM58,000（参考叫租）" },
      format: { en: "Detached whole building with private compound", ms: "Bangunan sesebuah dengan kawasan persendirian", zh: "带独立范围的整栋建筑" }
    }
  },
  semiDetached: {
    routeId: "leasingSemiDetached",
    queryValue: "semi-detached",
    image: images.leasingSemiDetached,
    brochureUrls: {
      en: "/assets/leasing/tpk-park-semi-detached-showroom-industrial-unit-no-69-for-lease.pdf",
      ms: "/assets/leasing/tpk-park-semi-detached-showroom-industrial-unit-no-69-for-lease-ms.pdf",
      zh: "/assets/leasing/tpk-park-semi-detached-showroom-industrial-unit-no-69-for-lease-zh.pdf"
    },
    mapUrl: "https://www.google.com/maps/search/69+Jalan+TPK+2%2F8,+Taman+Perindustrian+Kinrara,+Puchong",
    values: {
      availability: { en: "1 building — confirm current availability", ms: "1 bangunan — sahkan ketersediaan semasa", zh: "1栋 — 请确认当前供应" },
      address: { en: "69, Jalan TPK 2/8, Taman Perindustrian Kinrara, Puchong", ms: "69, Jalan TPK 2/8, Taman Perindustrian Kinrara, Puchong", zh: "蒲种金銮工业园 Jalan TPK 2/8 门牌69号" },
      builtUp: { en: "Approx. 6,446.88 sq ft", ms: "Kira-kira 6,446.88 kaki persegi", zh: "建筑面积约6,446.88平方英尺" },
      landArea: null,
      askingRent: { en: "RM25,000 per month (indicative)", ms: "RM25,000 sebulan (indikatif)", zh: "每月RM25,000（参考叫租）" },
      format: { en: "Semi-detached whole-building format", ms: "Format keseluruhan bangunan berkembar", zh: "半独立式整栋单位" }
    }
  }
};

export const articles = [
  {
    source: "China Press",
    date: "2026-07-06",
    image: "https://i.imgur.com/onsprL0.jpg",
    url: "https://kl.chinapress.com.my/?p=1626674",
    title: {
      en: "TPK Park receives Malaysia Book of Records recognition",
      ms: "TPK Park raih pengiktirafan Malaysia Book of Records",
      zh: "TPK Park获《马来西亚纪录大全》认证"
    }
  },
  {
    source: "Kwong Wah",
    date: "2026-07-05",
    image: "https://i.imgur.com/Phs3fKB.jpg",
    url: "https://www.kwongwah.com.my/20260705/%E9%BB%84%E6%80%9D%E6%B1%89%EF%BC%9A%E6%84%BF%E6%99%AF%E9%A1%BB%E4%BB%98%E8%AF%B8%E8%A1%8C%E5%8A%A8-%E9%87%91%E9%8A%AE%E5%B7%A5%E4%B8%9A%E5%9B%AD%E8%BD%AC%E5%9E%8B%E6%88%90%E8%92%B2%E7%A7%8D/",
    title: {
      en: "A 30-year industrial park transformation into a Home & Living destination",
      ms: "Transformasi 30 tahun daripada taman perindustrian kepada destinasi Home & Living",
      zh: "三十年工业园转型：愿景必须付诸行动"
    }
  },
  {
    source: "Oriental Daily",
    date: "2026-07-05",
    image: "https://i.imgur.com/o3dIfeA.jpg",
    url: "https://www.orientaldaily.com.my/news/central/2026/07/05/830619",
    title: {
      en: "Industrial park renewal creates a focused Puchong retail destination",
      ms: "Pembaharuan taman perindustrian membentuk destinasi runcit di Puchong",
      zh: "成熟工业园更新，打造蒲种家居生活目的地"
    }
  },
  {
    source: "Harian Metro",
    date: "2026-07-04",
    image: "https://i.imgur.com/t1ZtWIk.jpg",
    url: "https://www.hmetro.com.my/taxonomy/term/2057/2026/07/1377876/tpk-park-kluster-home-living-terbesar-di-malaysia",
    title: {
      en: "TPK Park recognised for Malaysia's largest Home & Living cluster in an industrial park",
      ms: "TPK Park kluster Home & Living terbesar dalam taman perindustrian di Malaysia",
      zh: "TPK Park获认证为工业园内最大家居生活零售集群"
    }
  },
  {
    source: "Kwong Wah",
    date: "2026-07-04",
    image: "https://i.imgur.com/TVeuKhd.jpg",
    url: "https://www.kwongwah.com.my/?p=1801778",
    title: {
      en: "TPK Park brings leading home and living brands together in Kinrara",
      ms: "TPK Park menghimpunkan jenama Home & Living di Kinrara",
      zh: "TPK Park汇聚主要家居生活品牌"
    }
  },
  {
    source: "New Straits Times",
    date: "2026-06-30",
    image: "https://i.imgur.com/cHWqFB9.jpg",
    url: "https://www.nst.com.my/business/corporate/2026/06/1475902/tpk-park-enters-record-books-largest-home-and-living-retail",
    title: {
      en: "TPK Park enters the record books for its Home & Living retail cluster",
      ms: "TPK Park catat rekod bagi kluster peruncitan Home & Living",
      zh: "TPK Park家居生活零售集群载入纪录"
    }
  },
  {
    source: "Guang Ming Daily",
    date: "2026-06-30",
    image: "https://i.imgur.com/3N1S23N.jpg",
    url: "https://guangming.com.my/%e3%80%90%e5%b8%82%e5%9c%ba%e6%83%85%e6%8a%a5%e3%80%91%e5%b7%a5%e4%b8%9a%e5%9b%ad%e6%9c%80%e5%a4%a7%e5%ae%b6%e5%b1%85%e4%b8%8e%e7%94%9f%e6%b4%bb%e9%9b%b6%e5%94%ae%e9%9b%86%e7%be%a4",
    title: {
      en: "Industrial park is home to the largest Home & Living retail cluster",
      ms: "Taman perindustrian menempatkan kluster runcit Home & Living terbesar",
      zh: "工业园内最大家居与生活零售集群"
    }
  },
  {
    source: "Business News",
    date: "2026-06-28",
    image: "https://i.imgur.com/PN8KtTZ.jpg",
    url: "https://businessnews.com.my/tpk-park-30-year-transformation-book-of-record/",
    title: {
      en: "TPK Park's 30-year transformation earns national recognition",
      ms: "Transformasi 30 tahun TPK Park menerima pengiktirafan kebangsaan",
      zh: "TPK Park三十年转型获国家纪录认证"
    }
  },
  {
    source: "Malaya Newsroom",
    date: "2026-06-26",
    image: "https://i.imgur.com/NRbC08K.jpg",
    url: "https://malayanewsroom.com/26/06/2026/tpk-park-raih-pengiktirafan-malaysia-book-of-records-hasil-transformasi-selama-30-tahun/",
    title: {
      en: "Three decades of renewal recognised by the Malaysia Book of Records",
      ms: "Transformasi selama 30 tahun diiktiraf Malaysia Book of Records",
      zh: "三十年更新历程获《马来西亚纪录大全》肯定"
    }
  }
];

const common = {
  en: {
    nav: { home: "Home", about: "About", homeLiving: "Home & Living", automotive: "Automotive", lifestyle: "Lifestyle", leasing: "Leasing", news: "News", milestones: "Milestones", profile: "Leadership", contact: "Contact" },
    skip: "Skip to main content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    discover: "Discover the park",
    enquiries: "Leasing enquiries",
    readMore: "Read more",
    viewAll: "View all news",
    external: "Opens on the publisher's website",
    breadcrumbHome: "Home",
    footerIntro: "A renewed business destination within Taman Perindustrian Kinrara, bringing Home & Living, Automotive and Lifestyle uses together in Puchong.",
    explore: "Explore",
    connect: "Connect",
    rights: "TPK Park Sdn. Bhd. All rights reserved.",
    ctaTitle: "Bring your business into the mix.",
    ctaText: "Speak with the TPK Park management team about suitable commercial or industrial space.",
    ctaButton: "Enquire about space",
    noticeLabel: "Important notice",
    leasingUi: {
      factsKicker: "Property facts",
      factsTitle: "Current leasing information",
      factsText: "Use these details as a starting point, then confirm the latest position with the leasing team.",
      labels: { availability: "Availability", address: "Address", builtUp: "Built-up area", landArea: "Land area", askingRent: "Asking rent", format: "Property format", lastUpdated: "Last updated" },
      lastUpdated: "2 September 2026",
      enquire: "Enquire about this space",
      call: "Call leasing team",
      brochure: "Download leasing information pack (PDF)",
      brochureEnglish: null,
      location: "View location",
      disclaimer: "Availability, dimensions, asking rent and commercial terms are indicative and subject to verification, landlord approval and contract. This page is not an offer or reservation."
    },
    emailApp: "Submitting this form opens your email application. Nothing is stored on this website.",
    form: { name: "Name", company: "Company", email: "Email", phone: "Phone", interest: "Area of interest", spaceType: "Preferred space type", message: "Tell us what you need", send: "Prepare email", select: "Select one", spaceSelect: "Not sure / explore options", options: ["Leasing", "Event collaboration", "Media enquiry", "General enquiry"], spaceOptions: [{ value: "shop-showroom", label: "Shop / showroom" }, { value: "detached-building", label: "Detached building" }, { value: "semi-detached", label: "Semi-detached building" }, { value: "terrace-waitlist", label: "Terrace unit waitlist" }] }
  },
  ms: {
    nav: { home: "Utama", about: "Tentang Kami", homeLiving: "Home & Living", automotive: "Automotif", lifestyle: "Lifestyle", leasing: "Penyewaan", news: "Berita", milestones: "Pencapaian", profile: "Kepimpinan", contact: "Hubungi" },
    skip: "Langkau ke kandungan utama",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
    discover: "Terokai TPK Park",
    enquiries: "Pertanyaan penyewaan",
    readMore: "Baca lanjut",
    viewAll: "Lihat semua berita",
    external: "Dibuka di laman penerbit",
    breadcrumbHome: "Utama",
    footerIntro: "Destinasi perniagaan yang diperbaharui di Taman Perindustrian Kinrara, menghimpunkan Home & Living, Automotif dan Lifestyle di Puchong.",
    explore: "Terokai",
    connect: "Hubungi",
    rights: "TPK Park Sdn. Bhd. Hak cipta terpelihara.",
    ctaTitle: "Bawa perniagaan anda ke dalam ekosistem ini.",
    ctaText: "Berbincang dengan pasukan pengurusan TPK Park mengenai ruang komersial atau perindustrian yang bersesuaian.",
    ctaButton: "Tanya tentang ruang",
    noticeLabel: "Notis penting",
    leasingUi: {
      factsKicker: "Fakta hartanah",
      factsTitle: "Maklumat penyewaan semasa",
      factsText: "Gunakan butiran ini sebagai titik mula, kemudian sahkan kedudukan terkini dengan pasukan penyewaan.",
      labels: { availability: "Ketersediaan", address: "Alamat", builtUp: "Keluasan binaan", landArea: "Keluasan tanah", askingRent: "Sewa diminta", format: "Format hartanah", lastUpdated: "Kemas kini terakhir" },
      lastUpdated: "2 September 2026",
      enquire: "Tanya tentang ruang ini",
      call: "Hubungi pasukan penyewaan",
      brochure: "Muat turun pek maklumat penyewaan (PDF)",
      brochureEnglish: "Muat turun versi Bahasa Inggeris (PDF)",
      location: "Lihat lokasi",
      disclaimer: "Ketersediaan, keluasan, sewa diminta dan terma komersial adalah indikatif serta tertakluk kepada pengesahan, kelulusan tuan tanah dan kontrak. Halaman ini bukan tawaran atau tempahan."
    },
    emailApp: "Borang ini akan membuka aplikasi e-mel anda. Tiada maklumat disimpan di laman ini.",
    form: { name: "Nama", company: "Syarikat", email: "E-mel", phone: "Telefon", interest: "Bidang pertanyaan", spaceType: "Jenis ruang pilihan", message: "Beritahu keperluan anda", send: "Sediakan e-mel", select: "Pilih satu", spaceSelect: "Belum pasti / terokai pilihan", options: ["Penyewaan", "Kerjasama acara", "Pertanyaan media", "Pertanyaan umum"], spaceOptions: [{ value: "shop-showroom", label: "Kedai / bilik pameran" }, { value: "detached-building", label: "Bangunan sesebuah" }, { value: "semi-detached", label: "Bangunan berkembar" }, { value: "terrace-waitlist", label: "Senarai menunggu unit teres" }] }
  },
  zh: {
    nav: { home: "首页", about: "关于我们", homeLiving: "家居生活", automotive: "汽车服务", lifestyle: "生活品味", leasing: "租赁", news: "新闻", milestones: "里程碑", profile: "管理团队", contact: "联系" },
    skip: "跳至主要内容",
    menuOpen: "打开菜单",
    menuClose: "关闭菜单",
    discover: "探索园区",
    enquiries: "租赁咨询",
    readMore: "了解更多",
    viewAll: "查看全部新闻",
    external: "将在媒体网站打开",
    breadcrumbHome: "首页",
    footerIntro: "位于蒲种金銮工业园内的更新型商业目的地，汇聚家居生活、汽车服务及生活品味业态。",
    explore: "探索",
    connect: "联系",
    rights: "TPK Park Sdn. Bhd. 版权所有。",
    ctaTitle: "让您的业务加入这个商业生态。",
    ctaText: "欢迎联系TPK Park管理团队，了解合适的商业或工业空间。",
    ctaButton: "查询租赁空间",
    noticeLabel: "重要说明",
    leasingUi: {
      factsKicker: "物业资料",
      factsTitle: "当前租赁信息",
      factsText: "请以这些资料为初步参考，并向租赁团队确认最新情况。",
      labels: { availability: "供应情况", address: "地址", builtUp: "建筑面积", landArea: "土地面积", askingRent: "参考叫租", format: "物业形式", lastUpdated: "最后更新" },
      lastUpdated: "2026年9月2日",
      enquire: "查询此单位",
      call: "致电租赁团队",
      brochure: "下载租赁资料包（PDF）",
      brochureEnglish: "下载英文版（PDF）",
      location: "查看位置",
      disclaimer: "单位供应、面积、叫租及商业条款均为参考资料，须经核实、业主批准并以合约为准。本页不构成正式报价或预留。"
    },
    emailApp: "提交表格后将打开您的电子邮件应用。本网站不会储存任何资料。",
    form: { name: "姓名", company: "公司", email: "电邮", phone: "电话", interest: "咨询类别", spaceType: "意向空间类型", message: "请说明您的需求", send: "准备电邮", select: "请选择", spaceSelect: "尚未确定 / 了解选择", options: ["租赁", "活动合作", "媒体咨询", "一般咨询"], spaceOptions: [{ value: "shop-showroom", label: "商铺 / 展厅" }, { value: "detached-building", label: "独立式建筑" }, { value: "semi-detached", label: "半独立式单位" }, { value: "terrace-waitlist", label: "排屋单位候补名单" }] }
  }
};

const enPages = {
  home: {
    eyebrow: "Puchong · Selangor",
    title: "A mature industrial place, renewed for everyday life.",
    description: "Explore TPK Park in Puchong: Home & Living showrooms, automotive services, lifestyle amenities and leasing opportunities within Taman Perindustrian Kinrara.",
    lead: "TPK Park brings useful businesses together in an established, accessible setting—Home & Living, Automotive and Lifestyle, thoughtfully curated over time.",
    image: images.park,
    blocks: [
      { type: "cards", kicker: "Three connected clusters", title: "Plan one useful trip.", text: "Compare home ideas, arrange vehicle care, meet over a meal or discover a new activity—within one practical Puchong destination.", items: [
        { number: "01", title: "Home & Living", text: "Showrooms, renovation materials, kitchens, bathrooms, furniture and specialist trades.", route: "homeLiving", image: images.homeLiving },
        { number: "02", title: "Automotive", text: "Sales, servicing, detailing, specialist workshops and technical learning.", route: "automotive", image: images.automotive },
        { number: "03", title: "Lifestyle", text: "Food, fitness, family activities, daily essentials and professional services.", route: "lifestyle", image: images.lifestyle }
      ] },
      { type: "split", title: "Renewal that keeps the place practical.", text: "TPK Park's management work focuses on selected properties and shared visitor experience: tenant curation, landscaping, façade lighting, coordinated signage, parking management, events and destination positioning.", image: images.park, alt: "Commercial and industrial premises at TPK Park in Puchong", route: "about" },
      { type: "stats", items: [
        { value: "16", label: "businesses in the recognised Home & Living cluster" },
        { value: "96,728", label: "sq ft represented by the 2026 recognised cluster" },
        { value: "8", label: "Home & Living categories in the record assessment" }
      ] },
      { type: "news", kicker: "Selected coverage", title: "TPK Park in the news", text: "Independent coverage of the Home & Living milestone and the park's long-term renewal.", limit: 3 },
      { type: "faq", kicker: "Visitor essentials", title: "Before you visit", items: [
        { q: "Where is TPK Park?", a: "TPK Park is within Taman Perindustrian Kinrara, Puchong, Selangor, along the Puchong–Bukit Jalil corridor." },
        { q: "What can I find at TPK Park?", a: "The business mix includes Home & Living showrooms, automotive sales and services, dining, fitness, family activities, daily essentials and professional services." },
        { q: "Are all businesses open at the same time?", a: "No. Each tenant sets its own operating hours. Check with the business you plan to visit before travelling." },
        { q: "Does TPK Park offer space for lease?", a: "Yes. Commercial and industrial spaces may become available. Contact the management team for current options; published availability can change." },
        { q: "How do I contact management?", a: "Call +60 3 8076 5200 or email info@tpkpark.com during management-office hours." }
      ] }
    ]
  },
  about: {
    eyebrow: "About TPK Park",
    title: "A long-term approach to an established place.",
    description: "Learn how TPK Park manages and repositions selected properties within Taman Perindustrian Kinrara through tenant curation, renewal and placemaking.",
    lead: "TPK Park is the destination identity for a managed collection of selected commercial and industrial properties within Taman Perindustrian Kinrara—not a claim of control over the whole industrial area.",
    blocks: [
      { type: "split", title: "Useful first. Distinctive over time.", text: "The work starts with the practical strengths of a mature industrial setting: direct vehicle access, ground-level parking, loading convenience and strong road connections. Renewal then adds a clearer tenant mix and a more welcoming shared environment.", image: images.park, alt: "TPK Park streetscape in Taman Perindustrian Kinrara" },
      { type: "cards", kicker: "How we work", title: "Stewardship, not spectacle.", text: "A grounded management approach built around the needs of tenants and visitors.", items: [
        { number: "01", title: "Property stewardship", text: "Long-term asset and tenancy management across selected premises." },
        { number: "02", title: "Business clustering", text: "A clearer mix around Home & Living, Automotive and Lifestyle uses." },
        { number: "03", title: "Place renewal", text: "Landscaping, lighting, signage coordination, parking and destination activity." }
      ] },
      { type: "timeline", kicker: "Evolution", title: "Built through consistent work", items: [
        { year: "1990s", title: "Industrial foundation", text: "Taman Perindustrian Kinrara develops as a practical industrial address in Puchong." },
        { year: "2010", title: "Focused management", text: "Long-term management and strategic repositioning of selected properties becomes a sustained priority." },
        { year: "2026", title: "A cluster recognised", text: "The Home & Living cluster receives Malaysia Book of Records recognition within the industrial-park category." },
        { year: "Next", title: "Continuous renewal", text: "The focus remains a useful, coherent business ecosystem rather than a one-off campaign." }
      ] }
    ]
  },
  homeLiving: {
    eyebrow: "Home & Living",
    title: "Ideas, materials and specialists—closer together.",
    description: "Discover TPK Park's Home & Living cluster in Puchong, with showrooms and specialists across furniture, kitchens, bathrooms, surfaces, décor and renovation.",
    lead: "A customer can compare more of a project in one trip, while businesses benefit from being part of a focused destination.",
    blocks: [
      { type: "stats", items: [
        { value: "16", label: "businesses in the 2026 recognised cluster" },
        { value: "96,728", label: "sq ft across the recognised businesses" },
        { value: "8", label: "categories represented in the assessment" }
      ] },
      { type: "directory", kicker: "Business mix", title: "A practical renovation journey", text: "Tenant names and operating details may change; contact each business directly before visiting.", items: [
        ["Furniture", "Lavino"], ["Hardware", "Ga Hing"], ["Kitchen & Bath", "Kuche + BaTH"], ["Tiles & Surfaces", "Jubin BMS"],
        ["Kitchen Systems", "Signature"], ["Curtains", "MK Curtain"], ["Interior Finishes", "Baagus"], ["Tools", "Total Tools"],
        ["Furniture", "V Haus Living"], ["Design", "Balens Design"], ["Build Solutions", "BUILTOP"], ["Doors", "Premio Door"],
        ["Interior Design", "Choose Interior"], ["Furniture", "KLOT"], ["Home Products", "DC Moto"], ["Home Products", "Fagolli"]
      ] },
      { type: "cards", kicker: "Plan a visit", title: "From first idea to final detail", text: "Use the cluster as a starting point, then confirm individual stock, appointments and hours directly with each business.", items: [
        { number: "01", title: "Compare", text: "See materials and finishes in person before making a decision." },
        { number: "02", title: "Coordinate", text: "Bring measurements, references and your project timeline." },
        { number: "03", title: "Confirm", text: "Check quotations, warranties, delivery and installation with the relevant retailer." }
      ] }
    ]
  },
  automotive: {
    eyebrow: "Automotive",
    title: "Vehicle care, capability and choice.",
    description: "Explore automotive sales, servicing, detailing, specialist workshops and technical training at TPK Park in Puchong.",
    lead: "A growing automotive mix serves motorists, technicians and learners across sales, maintenance, detailing and specialist work.",
    blocks: [
      { type: "directory", kicker: "Automotive mix", title: "Services for different stages of ownership", text: "Appointments, models and service availability are managed by each business.", items: [
        ["Sales & Service", "Perodua 3S Kinrara"], ["Sales & Service", "Mazda 3S"], ["Service", "Kia 4S Service"], ["Specialist Workshop", "Techtrics Auto"],
        ["Technical Education", "Techtra Automotive Academy"], ["Detailing", "Jon Detailing"], ["Service", "Jaecoo Service Centre"], ["Specialist Workshop", "Toyokar"]
      ] },
      { type: "cards", kicker: "One automotive address", title: "Built around practical access", text: "Industrial-format premises support vehicle movement, servicing, display and technical operations.", items: [
        { number: "01", title: "Sales", text: "Explore selected new and pre-owned vehicle options." },
        { number: "02", title: "Service", text: "Routine maintenance and specialist automotive work." },
        { number: "03", title: "Skills", text: "Technical training and industry-focused learning." }
      ] },
      { type: "split", title: "Call before you drive in.", text: "Each automotive tenant manages its own appointments, operating hours and service scope. Confirm directly with the business to make the most of your visit.", image: images.automotive, alt: "Automotive business premises at TPK Park" }
    ]
  },
  lifestyle: {
    eyebrow: "Lifestyle & Amenities",
    title: "Useful stops that make a place feel lived in.",
    description: "Find dining, fitness, swimming, gymnastics, optical services and daily essentials at TPK Park in Puchong.",
    lead: "Beyond showrooms and workshops, TPK Park supports the routines that bring colleagues, families and visitors back through the week.",
    blocks: [
      { type: "directory", kicker: "Around the park", title: "Eat, move, learn and get things done", text: "Individual businesses manage their own programmes, bookings and opening hours.", items: [
        ["Dining", "m.o.t.d"], ["Dining", "Jazmina Bistro"], ["Swimming", "Optimum Swim School"], ["Gymnastics", "Aces Gymnastics Academy"],
        ["Optical", "Forsee Lens"], ["Convenience", "99 Speedmart"], ["Family Services", "Happivilles"], ["Wellness", "Aafiyah"]
      ] },
      { type: "cards", kicker: "Everyday rhythm", title: "More reasons to return", text: "A mixed destination works best when it supports both planned visits and ordinary daily needs.", items: [
        { number: "01", title: "Meet", text: "Casual dining and practical places to pause between appointments." },
        { number: "02", title: "Move", text: "Structured swimming, gymnastics and wellness activities." },
        { number: "03", title: "Manage", text: "Daily essentials and services alongside business visits." }
      ] },
      { type: "split", title: "Check the programme, then make a day of it.", text: "Classes and activities may require advance booking. Contact the relevant operator for current schedules, age groups and availability.", image: images.lifestyle, alt: "Lifestyle and amenity premises at TPK Park" }
    ]
  },
  leasing: {
    eyebrow: "Property Leasing · Puchong",
    title: "Commercial & Industrial Property for Rent in Puchong",
    description: "Explore commercial and industrial property for rent at TPK Park, Puchong, including shoplots, showrooms, detached buildings and semi-detached premises.",
    lead: "Customer-facing spaces within Taman Perindustrian Kinrara for showrooms, retail, automotive, food, wellness and specialist service businesses.",
    image: images.leasing,
    blocks: [
      { type: "notice", text: "Published availability, dimensions, asking rents and commercial terms are indicative and must be confirmed with the TPK Park leasing team." },
      { type: "cards", kicker: "Available space formats", title: "Choose a property around how your business works", text: "Each permanent page provides the current reference details, location and a direct enquiry route.", items: [
        { number: "01", title: "Shop & showroom", text: "Customer-facing shoplots along Jalan TPK 2/8 for display, specialist retail, services and lifestyle uses.", route: "leasingShop", image: images.leasingShop, linkLabel: "View shops and showrooms" },
        { number: "02", title: "Detached building", text: "A standalone whole-building option for a flagship showroom, automotive centre or larger commercial operation.", route: "leasingDetached", image: images.leasingDetached, linkLabel: "View detached building" },
        { number: "03", title: "Semi-detached building", text: "A flexible whole-building format for showroom, service, display, storage and operational needs.", route: "leasingSemiDetached", image: images.leasingSemiDetached, linkLabel: "View semi-detached building" }
      ] },
      { type: "split", title: "A visible address on the Puchong–Bukit Jalil corridor.", text: "TPK Park combines drive-up access, visitor parking and an established cluster of Home & Living, Automotive and Lifestyle businesses within Taman Perindustrian Kinrara.", image: images.leasing, alt: "Customer-facing commercial property at TPK Park in Puchong", route: "contact", linkLabel: "Discuss your space needs" },
      { type: "cards", kicker: "Preferred tenant fit", title: "Businesses that add to the destination", text: "The leasing strategy favours useful, customer-facing concepts that complement the existing business mix.", items: [
        { number: "A", title: "Home & Living", text: "Furniture, kitchens, wardrobes, tiles, sanitaryware, lighting, interiors and renovation services." },
        { number: "B", title: "Automotive", text: "Sales, accessories, detailing, EV-related services, specialist workshops and mobility uses." },
        { number: "C", title: "Lifestyle & services", text: "Cafés, wellness, education, clinics, family activities and specialist professional services." }
      ] },
      { type: "faq", kicker: "Leasing questions", title: "Before you enquire", items: [
        { q: "What types of property can I rent at TPK Park in Puchong?", a: "Options may include customer-facing shoplots and showrooms, detached whole buildings and semi-detached industrial-commercial premises. Availability changes, so confirm the current list with the leasing team." },
        { q: "Is TPK Park suitable for a showroom or retail business?", a: "Yes. The precinct is curated around customer-facing Home & Living, Automotive and Lifestyle businesses that benefit from visibility, drive-up access, parking and neighbouring complementary brands." },
        { q: "Are asking rents and sizes final?", a: "No. Published figures are indicative reference information. Dimensions, availability, rent, permitted use and all commercial terms must be verified and agreed in contract." },
        { q: "How do I arrange a viewing?", a: "Use the enquiry link on the relevant property page, call +60 3 8076 5200 or email info@tpkpark.com with your preferred use, size and opening timeline." }
      ] }
    ]
  },
  leasingShop: {
    parentRoute: "leasing",
    unitKey: "shopShowroom",
    eyebrow: "Leasing · Shop & Showroom",
    title: "Shop & Showroom for Rent in Puchong",
    description: "Explore customer-facing shop and showroom space for rent along Jalan TPK 2/8 at TPK Park in Taman Perindustrian Kinrara, Puchong.",
    lead: "High-visibility commercial space for brands that need display, direct customer access and a place within an established business cluster.",
    image: images.leasingShop,
    blocks: [
      { type: "notice", text: "Limited shop and showroom options may be available. Confirm the exact unit, floor area, asking rent, permitted use and viewing arrangements before making a decision." },
      { type: "unitDetails", inventory: "shopShowroom" },
      { type: "split", title: "Designed for businesses customers need to see.", text: "The shoplots along Jalan TPK 2/8 suit furniture, kitchen, wardrobe, tile, sanitaryware, lighting, interior, café, wellness and specialist service concepts. Ground-level access and neighbouring destination businesses support planned visits and comparison shopping.", image: images.leasing, alt: "Shop and showroom frontage at TPK Park in Puchong" },
      { type: "cards", kicker: "Practical strengths", title: "A customer-facing commercial format", text: "Assess the exact unit against your operating and fit-out requirements.", items: [
        { number: "01", title: "Visibility", text: "Street-facing presence within an active commercial and industrial precinct." },
        { number: "02", title: "Access", text: "Drive-up convenience and shared visitor parking for customer appointments." },
        { number: "03", title: "Cluster effect", text: "Neighbouring Home & Living, Automotive and Lifestyle businesses create useful trip reasons." }
      ] },
      { type: "faq", kicker: "Shop & showroom FAQ", title: "Planning your enquiry", items: [
        { q: "Where are the shop and showroom units?", a: "The referenced shoplots are along Jalan TPK 2/8 within Taman Perindustrian Kinrara, Puchong." },
        { q: "What businesses are a good fit?", a: "Customer-facing showrooms, specialist retail, renovation and home-improvement brands, cafés, wellness, education, clinics and complementary services are priority uses, subject to approval." },
        { q: "Can I download more information?", a: "Yes. Download the leasing information pack (PDF) on this page, then contact management to confirm the current unit, measurements, rent and viewing availability." }
      ] }
    ]
  },
  leasingDetached: {
    parentRoute: "leasing",
    unitKey: "detached",
    eyebrow: "Leasing · Detached Building",
    title: "Detached Commercial Building for Rent in Puchong",
    description: "Detached commercial and industrial building for rent at No. 7 Jalan TPK 2/4, Puchong, with approximately 10,965 sq ft built-up area.",
    lead: "A standalone whole-building option with a private compound for a flagship showroom, automotive centre or larger customer-facing operation.",
    image: images.leasingDetached,
    blocks: [
      { type: "notice", text: "The listed building, dimensions and RM58,000 monthly asking rent are indicative. Confirm current availability, permitted use, condition and all commercial terms with the leasing team." },
      { type: "unitDetails", inventory: "detached" },
      { type: "split", title: "Whole-building control for a stronger brand presence.", text: "The detached format provides scale, a recognisable standalone address and a private compound. It may suit a corporate showroom, automotive centre, large-format retailer, experience centre or headquarters-style operation with customer-facing needs.", image: images.leasingDetached, alt: "Detached commercial building at Jalan TPK 2/4 in Puchong" },
      { type: "cards", kicker: "Property fit", title: "Space for a larger operating brief", text: "Confirm access, loading, utilities, approvals and fit-out requirements during the viewing.", items: [
        { number: "01", title: "Standalone identity", text: "A detached building supports clearer signage, arrival and customer recognition." },
        { number: "02", title: "Private compound", text: "Dedicated surrounding space can support controlled access and operational planning." },
        { number: "03", title: "Flexible scale", text: "Approximate built-up and land areas support display, service, office and back-of-house functions." }
      ] },
      { type: "faq", kicker: "Detached building FAQ", title: "Key points to confirm", items: [
        { q: "What is the size of the detached building?", a: "The reference information lists approximately 10,965 sq ft of built-up area and approximately 21,316 sq ft of land. All measurements must be verified." },
        { q: "What is the asking rent?", a: "The indicative asking rent is RM58,000 per month, subject to current availability, negotiation, landlord approval and contract." },
        { q: "What uses may be suitable?", a: "Potential uses include a flagship showroom, automotive centre, large-format retail, experience centre or other customer-facing commercial operation, subject to planning, licensing and landlord approval." }
      ] }
    ]
  },
  leasingSemiDetached: {
    parentRoute: "leasing",
    unitKey: "semiDetached",
    eyebrow: "Leasing · Semi-Detached Building",
    title: "Semi-Detached Factory for Rent in Puchong",
    description: "Semi-detached industrial-commercial building for rent at 69 Jalan TPK 2/8, Puchong, with approximately 6,446.88 sq ft built-up area.",
    lead: "A whole-building format for brands that need a mix of showroom, service, display, storage and operational space.",
    image: images.leasingSemiDetached,
    blocks: [
      { type: "notice", text: "The listed building, dimensions and RM25,000 monthly asking rent are indicative. Confirm current availability, permitted use, condition and all commercial terms with the leasing team." },
      { type: "unitDetails", inventory: "semiDetached" },
      { type: "split", title: "A practical balance of frontage and operating space.", text: "The semi-detached format can support furniture galleries, interior design centres, home-improvement brands, automotive services and specialist operators that combine customer display with back-of-house functions.", image: images.leasingSemiDetached, alt: "Semi-detached industrial-commercial building at Jalan TPK 2/8 in Puchong" },
      { type: "cards", kicker: "Property fit", title: "Flexible for display, service and operations", text: "Confirm the exact access, floor configuration, services and fit-out conditions during the viewing.", items: [
        { number: "01", title: "Wider frontage", text: "A recognisable customer-facing presence for display-led businesses." },
        { number: "02", title: "Whole-building use", text: "Plan customer, office, service, storage and operational areas around one tenancy." },
        { number: "03", title: "TPK Park setting", text: "Operate near complementary Home & Living, Automotive and Lifestyle businesses." }
      ] },
      { type: "faq", kicker: "Semi-detached FAQ", title: "Key points to confirm", items: [
        { q: "What is the size of the semi-detached building?", a: "The reference information lists approximately 6,446.88 sq ft of built-up area. The exact measurement and configuration must be verified." },
        { q: "What is the asking rent?", a: "The indicative asking rent is RM25,000 per month, subject to current availability, negotiation, landlord approval and contract." },
        { q: "Can it be used as a showroom and operational space?", a: "That mixed format may be suitable, but the proposed use, fit-out, licensing, loading and other operational requirements must be reviewed before agreement." }
      ] }
    ]
  },
  news: {
    eyebrow: "News & Coverage",
    title: "Reporting on a place in transition.",
    description: "Read selected independent media coverage of TPK Park's Home & Living milestone and long-term industrial park renewal in Puchong.",
    lead: "A selected archive of independent coverage. Articles open on their original publishers' websites.",
    blocks: [{ type: "news", kicker: "Media archive", title: "Selected coverage", text: "Publication titles and links are retained for reference.", limit: 20 }]
  },
  milestones: {
    eyebrow: "Milestones Archive",
    title: "A record that belongs to one focused cluster.",
    description: "Archive of TPK Park's 2026 Home Carnival and Malaysia Book of Records recognition for its Home & Living retail cluster.",
    lead: "In 2026, the Home & Living cluster—not the whole park—was recognised as the largest Home & Living retail cluster in an industrial park.",
    blocks: [
      { type: "notice", text: "Archive: the 2026 Home Carnival has ended. This page preserves the milestone and does not advertise a current event." },
      { type: "stats", items: [
        { value: "16", label: "businesses included in the record assessment" },
        { value: "96,728", label: "sq ft across the recognised cluster" },
        { value: "8", label: "Home & Living categories represented" }
      ] },
      { type: "split", title: "Recognition built on a working business cluster.", text: "The record marked the result of sustained tenant curation and property renewal. It was celebrated alongside the 2026 Home Carnival, bringing businesses and visitors together around the cluster.", image: images.carnival, alt: "TPK Park Home Carnival 2026 archive image" },
      { type: "timeline", kicker: "Archive", title: "From renewal to recognition", items: [
        { year: "Before", title: "A practical industrial base", text: "Mature premises and direct access provide the foundation for customer-facing businesses." },
        { year: "Over time", title: "A clearer tenant mix", text: "Home & Living businesses are curated into a more coherent destination." },
        { year: "2026", title: "Record recognition", text: "The cluster is assessed at 16 businesses, 96,728 sq ft and eight categories." },
        { year: "Ongoing", title: "The work continues", text: "The milestone supports—rather than completes—the longer renewal of the place." }
      ] }
    ]
  },
  profile: {
    eyebrow: "Leadership",
    title: "Wong Shung Yen 黄松延",
    description: "Profile of Wong Shung Yen, Managing Director of TPK Park, and his work in property stewardship, retail clustering and industrial park renewal.",
    lead: "Managing Director, TPK Park",
    blocks: [
      { type: "profile", descriptor: "Property Development · Industrial Park Renewal · Retail Clustering · Placemaking", introduction: "Wong Shung Yen is Managing Director of TPK Park Sdn. Bhd. He leads the long-term management and repositioning of selected properties within Taman Perindustrian Kinrara, with a focus on renewing mature industrial property through tenant curation, retail clustering and placemaking.", imageAlt: "Wong Shung Yen, Managing Director of TPK Park" },
      { type: "quote", text: "TPK Park's transformation from a traditional industrial park into a vibrant Home & Living, Automotive and Lifestyle destination has been a three-decade journey.", cite: "Wong Shung Yen" },
      { type: "cards", kicker: "Current focus", title: "A long-term approach to place", text: "Strengthening a mature industrial environment without losing the practical qualities that make it useful.", items: [
        { number: "01", title: "Property stewardship", text: "Long-term asset and tenancy management across selected industrial, commercial and retail premises." },
        { number: "02", title: "Business clustering", text: "Tenant-mix planning around Home & Living, Automotive and Lifestyle uses." },
        { number: "03", title: "Industrial park renewal", text: "Landscaping, façade lighting, coordinated signage, parking, events and destination positioning." }
      ] },
      { type: "timeline", kicker: "Professional background", title: "Property, law and community", items: [
        { year: "1996—Present", title: "Property development", text: "As a Director of Rasmi Indah Sdn. Bhd. and Dayamam Sdn. Bhd., contributed to the development of Sections 1 and 2 of Taman Perindustrian Kinrara respectively." },
        { year: "2010—Present", title: "TPK Park", text: "Leads long-term management and strategic repositioning of selected properties through asset management, tenant curation and environmental improvement." },
        { year: "Education", title: "Melbourne and UTAR", text: "B.Comm (1993) and LL.B (Honours) (1995), University of Melbourne; admitted in Victoria (1996) and Malaya (1997). Currently pursuing a Master of Real Estate Development at UTAR." },
        { year: "Community", title: "Education and culture", text: "Treasurer of SJK(C) Shin Cheng's Board of Governors since 2010; co-curator of a 2024 National Art Gallery jade exhibition; Associate Producer of Lelaki Harapan Dunia (2014)." }
      ] }
    ]
  },
  contact: {
    eyebrow: "Contact",
    title: "Start with a conversation.",
    description: "Contact TPK Park management in Puchong for leasing, event collaboration, media or general enquiries.",
    lead: "For leasing, media, events or general matters, contact the management office or prepare an email using the form below.",
    blocks: [{ type: "contact", officeHours: "Monday–Friday, 9:00am–5:00pm; Saturday, 9:00am–12:00pm", address: "Taman Perindustrian Kinrara, 47180 Puchong, Selangor, Malaysia", labels: { phone: "Telephone", email: "Email", hours: "Management office", address: "Location", formTitle: "What would you like to discuss?" } }]
  }
};

const msPages = {
  home: {
    eyebrow: "Puchong · Selangor",
    title: "Kawasan perindustrian matang, diperbaharui untuk kehidupan seharian.",
    description: "Terokai TPK Park di Puchong: pameran Home & Living, perkhidmatan automotif, kemudahan gaya hidup dan peluang penyewaan di Taman Perindustrian Kinrara.",
    lead: "TPK Park menghimpunkan perniagaan yang berguna dalam persekitaran yang mudah diakses—Home & Living, Automotif dan Lifestyle, dibentuk dengan teliti dari semasa ke semasa.",
    image: images.park,
    blocks: [
      { type: "cards", kicker: "Tiga kluster saling melengkapi", title: "Rancang satu perjalanan yang berguna.", text: "Bandingkan idea rumah, uruskan kenderaan, nikmati hidangan atau cuba aktiviti baharu—semuanya dalam satu destinasi praktikal di Puchong.", items: [
        { number: "01", title: "Home & Living", text: "Bilik pameran, bahan renovasi, dapur, bilik mandi, perabot dan kemahiran khusus.", route: "homeLiving", image: images.homeLiving },
        { number: "02", title: "Automotif", text: "Jualan, servis, detailing, bengkel khusus dan pembelajaran teknikal.", route: "automotive", image: images.automotive },
        { number: "03", title: "Lifestyle", text: "Makanan, kecergasan, aktiviti keluarga, keperluan harian dan perkhidmatan profesional.", route: "lifestyle", image: images.lifestyle }
      ] },
      { type: "split", title: "Pembaharuan yang mengekalkan nilai praktikal.", text: "Pengurusan TPK Park memberi tumpuan kepada hartanah terpilih dan pengalaman bersama pengunjung: pemilihan penyewa, landskap, pencahayaan fasad, penyelarasan papan tanda, pengurusan parkir, acara dan penjenamaan destinasi.", image: images.park, alt: "Premis komersial dan perindustrian di TPK Park, Puchong", route: "about" },
      { type: "stats", items: [
        { value: "16", label: "perniagaan dalam kluster Home & Living yang diiktiraf" },
        { value: "96,728", label: "kaki persegi dalam kluster yang diiktiraf pada 2026" },
        { value: "8", label: "kategori Home & Living dalam penilaian rekod" }
      ] },
      { type: "news", kicker: "Liputan pilihan", title: "TPK Park dalam berita", text: "Liputan bebas tentang pencapaian Home & Living dan pembaharuan jangka panjang taman ini.", limit: 3 },
      { type: "faq", kicker: "Maklumat pengunjung", title: "Sebelum anda berkunjung", items: [
        { q: "Di manakah TPK Park?", a: "TPK Park terletak dalam Taman Perindustrian Kinrara, Puchong, Selangor, di koridor Puchong–Bukit Jalil." },
        { q: "Apakah yang terdapat di TPK Park?", a: "Campuran perniagaan merangkumi bilik pameran Home & Living, jualan dan servis automotif, makanan, kecergasan, aktiviti keluarga, keperluan harian dan perkhidmatan profesional." },
        { q: "Adakah semua perniagaan dibuka pada waktu yang sama?", a: "Tidak. Setiap penyewa menetapkan waktu operasinya sendiri. Semak dengan perniagaan berkenaan sebelum berkunjung." },
        { q: "Adakah ruang untuk disewa?", a: "Ya. Ruang komersial dan perindustrian mungkin tersedia dari semasa ke semasa. Hubungi pengurusan untuk pilihan terkini." },
        { q: "Bagaimana menghubungi pengurusan?", a: "Hubungi +60 3 8076 5200 atau e-mel info@tpkpark.com pada waktu pejabat pengurusan." }
      ] }
    ]
  },
  about: {
    eyebrow: "Tentang TPK Park",
    title: "Pendekatan jangka panjang terhadap tempat yang telah matang.",
    description: "Ketahui bagaimana TPK Park mengurus dan memperbaharui hartanah terpilih dalam Taman Perindustrian Kinrara melalui pemilihan penyewa dan pembentukan tempat.",
    lead: "TPK Park ialah identiti destinasi bagi koleksi hartanah komersial dan perindustrian terpilih yang diurus dalam Taman Perindustrian Kinrara—bukan tuntutan mengawal keseluruhan kawasan perindustrian.",
    blocks: [
      { type: "split", title: "Praktikal dahulu. Lebih tersusun dari semasa ke semasa.", text: "Asasnya ialah kekuatan persekitaran perindustrian matang: akses kenderaan terus, parkir aras tanah, pemunggahan mudah dan hubungan jalan raya yang baik. Pembaharuan menambah campuran penyewa yang lebih jelas dan persekitaran bersama yang lebih mesra.", image: images.park, alt: "Persekitaran TPK Park di Taman Perindustrian Kinrara" },
      { type: "cards", kicker: "Cara kami bekerja", title: "Pengurusan yang konsisten.", text: "Pendekatan yang berpijak pada keperluan penyewa dan pengunjung.", items: [
        { number: "01", title: "Pengurusan hartanah", text: "Pengurusan aset dan penyewaan jangka panjang bagi premis terpilih." },
        { number: "02", title: "Pengelompokan perniagaan", text: "Campuran lebih jelas berasaskan Home & Living, Automotif dan Lifestyle." },
        { number: "03", title: "Pembaharuan tempat", text: "Landskap, pencahayaan, penyelarasan papan tanda, parkir dan aktiviti destinasi." }
      ] },
      { type: "timeline", kicker: "Evolusi", title: "Dibina melalui usaha berterusan", items: [
        { year: "1990-an", title: "Asas perindustrian", text: "Taman Perindustrian Kinrara berkembang sebagai alamat perindustrian praktikal di Puchong." },
        { year: "2010", title: "Pengurusan berfokus", text: "Pengurusan jangka panjang dan pembaharuan strategik hartanah terpilih menjadi keutamaan berterusan." },
        { year: "2026", title: "Kluster diiktiraf", text: "Kluster Home & Living menerima pengiktirafan Malaysia Book of Records dalam kategori taman perindustrian." },
        { year: "Seterusnya", title: "Pembaharuan berterusan", text: "Tumpuan kekal pada ekosistem perniagaan yang berguna, bukan kempen sementara." }
      ] }
    ]
  },
  homeLiving: {
    eyebrow: "Home & Living",
    title: "Idea, bahan dan pakar—lebih dekat antara satu sama lain.",
    description: "Terokai kluster Home & Living TPK Park di Puchong, merangkumi perabot, dapur, bilik mandi, permukaan, dekorasi dan renovasi.",
    lead: "Pelanggan boleh membandingkan lebih banyak pilihan dalam satu perjalanan, manakala perniagaan mendapat manfaat daripada destinasi yang berfokus.",
    blocks: [
      { type: "stats", items: [
        { value: "16", label: "perniagaan dalam kluster yang diiktiraf pada 2026" }, { value: "96,728", label: "kaki persegi keseluruhan perniagaan yang diiktiraf" }, { value: "8", label: "kategori dalam penilaian" }
      ] },
      { type: "directory", kicker: "Campuran perniagaan", title: "Perjalanan renovasi yang praktikal", text: "Nama penyewa dan waktu operasi boleh berubah; hubungi setiap perniagaan sebelum berkunjung.", items: [
        ["Perabot", "Lavino"], ["Perkakasan", "Ga Hing"], ["Dapur & Bilik Mandi", "Kuche + BaTH"], ["Jubin & Permukaan", "Jubin BMS"], ["Sistem Dapur", "Signature"], ["Langsir", "MK Curtain"], ["Kemasan Dalaman", "Baagus"], ["Peralatan", "Total Tools"], ["Perabot", "V Haus Living"], ["Reka Bentuk", "Balens Design"], ["Penyelesaian Binaan", "BUILTOP"], ["Pintu", "Premio Door"], ["Reka Bentuk Dalaman", "Choose Interior"], ["Perabot", "KLOT"], ["Produk Rumah", "DC Moto"], ["Produk Rumah", "Fagolli"]
      ] },
      { type: "cards", kicker: "Rancang kunjungan", title: "Daripada idea awal hingga perincian akhir", text: "Gunakan kluster ini sebagai titik mula, kemudian sahkan stok, janji temu dan waktu secara terus.", items: [
        { number: "01", title: "Bandingkan", text: "Lihat bahan dan kemasan secara fizikal sebelum membuat keputusan." }, { number: "02", title: "Selaraskan", text: "Bawa ukuran, rujukan dan garis masa projek anda." }, { number: "03", title: "Sahkan", text: "Semak sebut harga, jaminan, penghantaran dan pemasangan dengan peruncit." }
      ] }
    ]
  },
  automotive: {
    eyebrow: "Automotif",
    title: "Penjagaan kenderaan, kepakaran dan pilihan.",
    description: "Terokai jualan, servis, detailing, bengkel khusus dan latihan teknikal automotif di TPK Park, Puchong.",
    lead: "Campuran automotif yang berkembang memenuhi keperluan pemandu, juruteknik dan pelajar dalam jualan, penyelenggaraan dan kerja khusus.",
    blocks: [
      { type: "directory", kicker: "Campuran automotif", title: "Perkhidmatan untuk pelbagai peringkat pemilikan", text: "Janji temu, model dan ketersediaan servis diurus oleh setiap perniagaan.", items: [
        ["Jualan & Servis", "Perodua 3S Kinrara"], ["Jualan & Servis", "Mazda 3S"], ["Servis", "Kia 4S Service"], ["Bengkel Khusus", "Techtrics Auto"], ["Pendidikan Teknikal", "Techtra Automotive Academy"], ["Detailing", "Jon Detailing"], ["Servis", "Jaecoo Service Centre"], ["Bengkel Khusus", "Toyokar"]
      ] },
      { type: "cards", kicker: "Satu alamat automotif", title: "Direka untuk akses praktikal", text: "Premis berformat industri menyokong pergerakan kenderaan, servis, pameran dan operasi teknikal.", items: [
        { number: "01", title: "Jualan", text: "Terokai pilihan kenderaan baharu dan terpakai terpilih." }, { number: "02", title: "Servis", text: "Penyelenggaraan berkala dan kerja automotif khusus." }, { number: "03", title: "Kemahiran", text: "Latihan teknikal dan pembelajaran berfokus industri." }
      ] },
      { type: "split", title: "Hubungi sebelum datang.", text: "Setiap penyewa automotif mengurus janji temu, waktu operasi dan skop servis sendiri. Sahkan secara terus untuk memanfaatkan kunjungan anda.", image: images.automotive, alt: "Premis perniagaan automotif di TPK Park" }
    ]
  },
  lifestyle: {
    eyebrow: "Lifestyle & Kemudahan",
    title: "Persinggahan berguna yang menghidupkan sesuatu tempat.",
    description: "Temui makanan, kecergasan, renang, gimnastik, optik dan keperluan harian di TPK Park, Puchong.",
    lead: "Di samping bilik pameran dan bengkel, TPK Park menyokong rutin yang membawa pekerja, keluarga dan pengunjung kembali sepanjang minggu.",
    blocks: [
      { type: "directory", kicker: "Sekitar taman", title: "Makan, bergerak, belajar dan selesaikan urusan", text: "Setiap perniagaan mengurus program, tempahan dan waktu operasinya sendiri.", items: [["Makanan", "m.o.t.d"], ["Makanan", "Jazmina Bistro"], ["Renang", "Optimum Swim School"], ["Gimnastik", "Aces Gymnastics Academy"], ["Optik", "Forsee Lens"], ["Kedai Serbaneka", "99 Speedmart"], ["Perkhidmatan Keluarga", "Happivilles"], ["Kesejahteraan", "Aafiyah"]] },
      { type: "cards", kicker: "Rentak harian", title: "Lebih banyak sebab untuk kembali", text: "Destinasi bercampur berfungsi baik apabila menyokong kunjungan terancang dan keperluan biasa.", items: [
        { number: "01", title: "Bertemu", text: "Tempat makan santai dan berhenti seketika antara janji temu." }, { number: "02", title: "Bergerak", text: "Aktiviti renang, gimnastik dan kesejahteraan berstruktur." }, { number: "03", title: "Mengurus", text: "Keperluan harian dan perkhidmatan bersama kunjungan perniagaan." }
      ] },
      { type: "split", title: "Semak jadual, kemudian rancang hari anda.", text: "Kelas dan aktiviti mungkin memerlukan tempahan awal. Hubungi pengendali berkaitan untuk jadual dan ketersediaan terkini.", image: images.lifestyle, alt: "Premis lifestyle dan kemudahan di TPK Park" }
    ]
  },
  leasing: {
    eyebrow: "Penyewaan Hartanah · Puchong",
    title: "Premis Komersial & Perindustrian untuk Disewa di Puchong",
    description: "Terokai premis komersial dan perindustrian untuk disewa di TPK Park, Puchong, termasuk kedai, bilik pameran, bangunan sesebuah dan bangunan berkembar.",
    lead: "Ruang berhadapan pelanggan di Taman Perindustrian Kinrara untuk bilik pameran, runcit, automotif, makanan, kesejahteraan dan perkhidmatan khusus.",
    image: images.leasing,
    blocks: [
      { type: "notice", text: "Ketersediaan, keluasan, sewa diminta dan terma komersial yang diterbitkan adalah indikatif dan perlu disahkan dengan pasukan penyewaan TPK Park." },
      { type: "cards", kicker: "Format ruang tersedia", title: "Pilih hartanah mengikut cara perniagaan anda beroperasi", text: "Setiap halaman kekal menyediakan butiran rujukan semasa, lokasi dan laluan pertanyaan terus.", items: [
        { number: "01", title: "Kedai & bilik pameran", text: "Kedai berhadapan pelanggan di Jalan TPK 2/8 untuk pameran, runcit khusus, perkhidmatan dan kegunaan lifestyle.", route: "leasingShop", image: images.leasingShop, linkLabel: "Lihat kedai dan bilik pameran" },
        { number: "02", title: "Bangunan sesebuah", text: "Pilihan keseluruhan bangunan untuk bilik pameran utama, pusat automotif atau operasi komersial lebih besar.", route: "leasingDetached", image: images.leasingDetached, linkLabel: "Lihat bangunan sesebuah" },
        { number: "03", title: "Bangunan berkembar", text: "Format fleksibel untuk keperluan pameran, servis, paparan, penyimpanan dan operasi.", route: "leasingSemiDetached", image: images.leasingSemiDetached, linkLabel: "Lihat bangunan berkembar" }
      ] },
      { type: "split", title: "Alamat mudah dilihat di koridor Puchong–Bukit Jalil.", text: "TPK Park menggabungkan akses terus, parkir pengunjung dan kluster perniagaan Home & Living, Automotif serta Lifestyle yang mapan dalam Taman Perindustrian Kinrara.", image: images.leasing, alt: "Hartanah komersial berhadapan pelanggan di TPK Park, Puchong", route: "contact", linkLabel: "Bincangkan keperluan ruang anda" },
      { type: "cards", kicker: "Kesesuaian penyewa", title: "Perniagaan yang melengkapi destinasi", text: "Strategi penyewaan mengutamakan konsep berguna dan berhadapan pelanggan yang melengkapi campuran perniagaan sedia ada.", items: [
        { number: "A", title: "Home & Living", text: "Perabot, dapur, almari, jubin, perkakasan sanitari, pencahayaan, dalaman dan renovasi." },
        { number: "B", title: "Automotif", text: "Jualan, aksesori, detailing, perkhidmatan EV, bengkel khusus dan kegunaan mobiliti." },
        { number: "C", title: "Lifestyle & perkhidmatan", text: "Kafe, kesejahteraan, pendidikan, klinik, aktiviti keluarga dan perkhidmatan profesional khusus." }
      ] },
      { type: "faq", kicker: "Soalan penyewaan", title: "Sebelum membuat pertanyaan", items: [
        { q: "Apakah jenis hartanah yang boleh disewa di TPK Park, Puchong?", a: "Pilihan mungkin merangkumi kedai dan bilik pameran berhadapan pelanggan, keseluruhan bangunan sesebuah serta premis industri-komersial berkembar. Ketersediaan berubah, jadi sahkan senarai semasa dengan pasukan penyewaan." },
        { q: "Adakah TPK Park sesuai untuk bilik pameran atau perniagaan runcit?", a: "Ya. Kawasan ini dibentuk untuk perniagaan Home & Living, Automotif dan Lifestyle berhadapan pelanggan yang mendapat manfaat daripada keterlihatan, akses terus, parkir dan jenama berdekatan yang saling melengkapi." },
        { q: "Adakah sewa diminta dan keluasan yang diterbitkan adalah muktamad?", a: "Tidak. Angka yang diterbitkan ialah maklumat rujukan indikatif. Keluasan, ketersediaan, sewa, kegunaan dibenarkan dan semua terma komersial mesti disahkan dan dipersetujui dalam kontrak." },
        { q: "Bagaimana saya mengatur lawatan tapak?", a: "Gunakan pautan pertanyaan pada halaman hartanah berkaitan, hubungi +60 3 8076 5200 atau e-mel info@tpkpark.com dengan kegunaan, saiz dan garis masa pembukaan anda." }
      ] }
    ]
  },
  leasingShop: {
    parentRoute: "leasing",
    unitKey: "shopShowroom",
    eyebrow: "Penyewaan · Kedai & Bilik Pameran",
    title: "Kedai & Bilik Pameran untuk Disewa di Puchong",
    description: "Terokai ruang kedai dan bilik pameran untuk disewa di Jalan TPK 2/8, TPK Park dalam Taman Perindustrian Kinrara, Puchong.",
    lead: "Ruang komersial berketerlihatan tinggi untuk jenama yang memerlukan paparan, akses terus pelanggan dan lokasi dalam kluster perniagaan mapan.",
    image: images.leasingShop,
    blocks: [
      { type: "notice", text: "Pilihan kedai dan bilik pameran terhad mungkin tersedia. Sahkan unit, keluasan lantai, sewa diminta, kegunaan dibenarkan dan aturan lawatan sebelum membuat keputusan." },
      { type: "unitDetails", inventory: "shopShowroom" },
      { type: "split", title: "Untuk perniagaan yang perlu dilihat pelanggan.", text: "Kedai di Jalan TPK 2/8 sesuai untuk perabot, dapur, almari, jubin, perkakasan sanitari, pencahayaan, dalaman, kafe, kesejahteraan dan perkhidmatan khusus. Akses aras jalan dan perniagaan destinasi berdekatan menyokong lawatan terancang dan perbandingan pilihan.", image: images.leasing, alt: "Bahagian hadapan kedai dan bilik pameran di TPK Park, Puchong" },
      { type: "cards", kicker: "Kekuatan praktikal", title: "Format komersial berhadapan pelanggan", text: "Nilai unit sebenar berdasarkan keperluan operasi dan ubah suai anda.", items: [
        { number: "01", title: "Keterlihatan", text: "Kehadiran menghadap jalan dalam kawasan komersial dan perindustrian yang aktif." },
        { number: "02", title: "Akses", text: "Kemudahan akses terus dan parkir pengunjung bersama untuk janji temu pelanggan." },
        { number: "03", title: "Kesan kluster", text: "Perniagaan Home & Living, Automotif dan Lifestyle berdekatan mewujudkan sebab kunjungan yang berguna." }
      ] },
      { type: "faq", kicker: "Soalan kedai & bilik pameran", title: "Merancang pertanyaan anda", items: [
        { q: "Di manakah unit kedai dan bilik pameran?", a: "Kedai rujukan terletak di sepanjang Jalan TPK 2/8 dalam Taman Perindustrian Kinrara, Puchong." },
        { q: "Perniagaan apakah yang sesuai?", a: "Bilik pameran berhadapan pelanggan, runcit khusus, jenama renovasi dan penambahbaikan rumah, kafe, kesejahteraan, pendidikan, klinik dan perkhidmatan pelengkap adalah antara kegunaan keutamaan, tertakluk kepada kelulusan." },
        { q: "Bolehkah saya memuat turun maklumat tambahan?", a: "Ya. Muat turun pek maklumat penyewaan (PDF) pada halaman ini, kemudian hubungi pengurusan untuk mengesahkan unit, ukuran, sewa dan ketersediaan lawatan semasa." }
      ] }
    ]
  },
  leasingDetached: {
    parentRoute: "leasing",
    unitKey: "detached",
    eyebrow: "Penyewaan · Bangunan Sesebuah",
    title: "Bangunan Komersial Sesebuah untuk Disewa di Puchong",
    description: "Bangunan komersial dan perindustrian sesebuah untuk disewa di No. 7 Jalan TPK 2/4, Puchong, dengan keluasan binaan kira-kira 10,965 kaki persegi.",
    lead: "Pilihan keseluruhan bangunan dengan kawasan persendirian untuk bilik pameran utama, pusat automotif atau operasi berhadapan pelanggan yang lebih besar.",
    image: images.leasingDetached,
    blocks: [
      { type: "notice", text: "Bangunan, keluasan dan sewa diminta RM58,000 sebulan yang disenaraikan adalah indikatif. Sahkan ketersediaan, kegunaan dibenarkan, keadaan dan semua terma komersial semasa." },
      { type: "unitDetails", inventory: "detached" },
      { type: "split", title: "Kawalan keseluruhan bangunan untuk kehadiran jenama lebih kukuh.", text: "Format sesebuah menawarkan skala, alamat berdiri sendiri yang mudah dikenali dan kawasan persendirian. Ia mungkin sesuai untuk bilik pameran korporat, pusat automotif, runcit format besar, pusat pengalaman atau operasi seperti ibu pejabat yang berhadapan pelanggan.", image: images.leasingDetached, alt: "Bangunan komersial sesebuah di Jalan TPK 2/4, Puchong" },
      { type: "cards", kicker: "Kesesuaian hartanah", title: "Ruang untuk operasi berskala lebih besar", text: "Sahkan akses, pemunggahan, utiliti, kelulusan dan keperluan ubah suai semasa lawatan.", items: [
        { number: "01", title: "Identiti tersendiri", text: "Bangunan sesebuah menyokong papan tanda, ketibaan dan pengecaman pelanggan yang lebih jelas." },
        { number: "02", title: "Kawasan persendirian", text: "Ruang sekeliling khusus boleh menyokong akses terkawal dan perancangan operasi." },
        { number: "03", title: "Skala fleksibel", text: "Anggaran keluasan binaan dan tanah menyokong fungsi pameran, servis, pejabat dan sokongan operasi." }
      ] },
      { type: "faq", kicker: "Soalan bangunan sesebuah", title: "Perkara penting untuk disahkan", items: [
        { q: "Berapakah keluasan bangunan sesebuah ini?", a: "Maklumat rujukan menyenaraikan kira-kira 10,965 kaki persegi keluasan binaan dan kira-kira 21,316 kaki persegi keluasan tanah. Semua ukuran mesti disahkan." },
        { q: "Berapakah sewa yang diminta?", a: "Sewa diminta indikatif ialah RM58,000 sebulan, tertakluk kepada ketersediaan semasa, rundingan, kelulusan tuan tanah dan kontrak." },
        { q: "Apakah kegunaan yang mungkin sesuai?", a: "Kegunaan berpotensi termasuk bilik pameran utama, pusat automotif, runcit format besar, pusat pengalaman atau operasi komersial berhadapan pelanggan, tertakluk kepada perancangan, pelesenan dan kelulusan tuan tanah." }
      ] }
    ]
  },
  leasingSemiDetached: {
    parentRoute: "leasing",
    unitKey: "semiDetached",
    eyebrow: "Penyewaan · Bangunan Berkembar",
    title: "Kilang Berkembar untuk Disewa di Puchong",
    description: "Bangunan industri-komersial berkembar untuk disewa di 69 Jalan TPK 2/8, Puchong, dengan keluasan binaan kira-kira 6,446.88 kaki persegi.",
    lead: "Format keseluruhan bangunan untuk jenama yang memerlukan gabungan bilik pameran, servis, paparan, penyimpanan dan ruang operasi.",
    image: images.leasingSemiDetached,
    blocks: [
      { type: "notice", text: "Bangunan, keluasan dan sewa diminta RM25,000 sebulan yang disenaraikan adalah indikatif. Sahkan ketersediaan, kegunaan dibenarkan, keadaan dan semua terma komersial semasa." },
      { type: "unitDetails", inventory: "semiDetached" },
      { type: "split", title: "Keseimbangan praktikal antara bahagian hadapan dan ruang operasi.", text: "Format berkembar boleh menyokong galeri perabot, pusat reka bentuk dalaman, jenama penambahbaikan rumah, perkhidmatan automotif dan pengendali khusus yang menggabungkan paparan pelanggan dengan fungsi sokongan.", image: images.leasingSemiDetached, alt: "Bangunan industri-komersial berkembar di Jalan TPK 2/8, Puchong" },
      { type: "cards", kicker: "Kesesuaian hartanah", title: "Fleksibel untuk paparan, servis dan operasi", text: "Sahkan akses, susun atur lantai, perkhidmatan dan keadaan ubah suai sebenar semasa lawatan.", items: [
        { number: "01", title: "Bahagian hadapan lebih luas", text: "Kehadiran berhadapan pelanggan yang mudah dikenali untuk perniagaan berasaskan paparan." },
        { number: "02", title: "Penggunaan keseluruhan bangunan", text: "Rancang kawasan pelanggan, pejabat, servis, penyimpanan dan operasi dalam satu penyewaan." },
        { number: "03", title: "Persekitaran TPK Park", text: "Beroperasi berhampiran perniagaan Home & Living, Automotif dan Lifestyle yang saling melengkapi." }
      ] },
      { type: "faq", kicker: "Soalan bangunan berkembar", title: "Perkara penting untuk disahkan", items: [
        { q: "Berapakah keluasan bangunan berkembar ini?", a: "Maklumat rujukan menyenaraikan kira-kira 6,446.88 kaki persegi keluasan binaan. Ukuran dan susun atur sebenar mesti disahkan." },
        { q: "Berapakah sewa yang diminta?", a: "Sewa diminta indikatif ialah RM25,000 sebulan, tertakluk kepada ketersediaan semasa, rundingan, kelulusan tuan tanah dan kontrak." },
        { q: "Bolehkah ia digunakan sebagai bilik pameran dan ruang operasi?", a: "Format campuran itu mungkin sesuai, tetapi kegunaan, ubah suai, pelesenan, pemunggahan dan keperluan operasi lain mesti dikaji sebelum persetujuan." }
      ] }
    ]
  },
  news: {
    eyebrow: "Berita & Liputan",
    title: "Laporan mengenai sebuah tempat yang sedang berubah.",
    description: "Baca liputan media bebas tentang pencapaian Home & Living dan pembaharuan jangka panjang TPK Park di Puchong.",
    lead: "Arkib pilihan liputan bebas. Artikel dibuka di laman penerbit asal.",
    blocks: [{ type: "news", kicker: "Arkib media", title: "Liputan pilihan", text: "Tajuk penerbitan dan pautan dikekalkan sebagai rujukan.", limit: 20 }]
  },
  milestones: {
    eyebrow: "Arkib Pencapaian",
    title: "Rekod yang khusus untuk satu kluster berfokus.",
    description: "Arkib Home Carnival 2026 dan pengiktirafan Malaysia Book of Records bagi kluster runcit Home & Living TPK Park.",
    lead: "Pada 2026, kluster Home & Living—bukan keseluruhan taman—diiktiraf sebagai kluster runcit Home & Living terbesar dalam sebuah taman perindustrian.",
    blocks: [
      { type: "notice", text: "Arkib: Home Carnival 2026 telah berakhir. Halaman ini memelihara pencapaian tersebut dan bukan iklan acara semasa." },
      { type: "stats", items: [{ value: "16", label: "perniagaan dalam penilaian rekod" }, { value: "96,728", label: "kaki persegi dalam kluster yang diiktiraf" }, { value: "8", label: "kategori Home & Living" }] },
      { type: "split", title: "Pengiktirafan berasaskan kluster perniagaan yang berfungsi.", text: "Rekod itu menandakan hasil pemilihan penyewa dan pembaharuan hartanah yang berterusan. Ia diraikan bersama Home Carnival 2026.", image: images.carnival, alt: "Imej arkib Home Carnival TPK Park 2026" },
      { type: "timeline", kicker: "Arkib", title: "Daripada pembaharuan kepada pengiktirafan", items: [
        { year: "Sebelum", title: "Asas industri praktikal", text: "Premis matang dan akses terus menjadi asas perniagaan berhadapan pelanggan." }, { year: "Beransur", title: "Campuran penyewa lebih jelas", text: "Perniagaan Home & Living dibentuk menjadi destinasi yang lebih tersusun." }, { year: "2026", title: "Pengiktirafan rekod", text: "Kluster dinilai merangkumi 16 perniagaan, 96,728 kaki persegi dan lapan kategori." }, { year: "Berterusan", title: "Usaha diteruskan", text: "Pencapaian ini menyokong—bukan menamatkan—pembaharuan jangka panjang." }
      ] }
    ]
  },
  profile: {
    eyebrow: "Kepimpinan",
    title: "Wong Shung Yen 黄松延",
    description: "Profil Wong Shung Yen, Pengarah Urusan TPK Park, dan usaha beliau dalam pengurusan hartanah, pengelompokan runcit dan pembaharuan taman perindustrian.",
    lead: "Pengarah Urusan, TPK Park",
    blocks: [
      { type: "profile", descriptor: "Pembangunan Hartanah · Pembaharuan Taman Perindustrian · Pengelompokan Runcit · Pembentukan Tempat", introduction: "Wong Shung Yen ialah Pengarah Urusan TPK Park Sdn. Bhd. Beliau menerajui pengurusan jangka panjang dan pembaharuan strategik hartanah terpilih di Taman Perindustrian Kinrara, dengan tumpuan kepada pemilihan penyewa, pengelompokan peruncitan dan pembentukan tempat.", imageAlt: "Wong Shung Yen, Pengarah Urusan TPK Park" },
      { type: "quote", text: "Transformasi TPK Park daripada taman perindustrian tradisional kepada destinasi Home & Living, Automotif dan Lifestyle yang dinamik merupakan perjalanan selama tiga dekad.", cite: "Wong Shung Yen" },
      { type: "cards", kicker: "Tumpuan semasa", title: "Pendekatan jangka panjang terhadap sesuatu tempat", text: "Mengukuhkan persekitaran industri matang tanpa menghilangkan kelebihan praktikalnya.", items: [
        { number: "01", title: "Pengurusan hartanah", text: "Pengurusan aset dan penyewaan jangka panjang bagi premis terpilih." }, { number: "02", title: "Pengelompokan perniagaan", text: "Perancangan campuran penyewa Home & Living, Automotif dan Lifestyle." }, { number: "03", title: "Pembaharuan taman", text: "Landskap, pencahayaan fasad, papan tanda, parkir, acara dan penjenamaan destinasi." }
      ] },
      { type: "timeline", kicker: "Latar belakang profesional", title: "Hartanah, undang-undang dan masyarakat", items: [
        { year: "1996—Kini", title: "Pembangunan hartanah", text: "Sebagai Pengarah Rasmi Indah Sdn. Bhd. dan Dayamam Sdn. Bhd., menyumbang kepada pembangunan Seksyen 1 dan 2 Taman Perindustrian Kinrara." }, { year: "2010—Kini", title: "TPK Park", text: "Menerajui pengurusan jangka panjang dan pembaharuan strategik hartanah terpilih." }, { year: "Pendidikan", title: "Melbourne dan UTAR", text: "Sarjana Muda Perdagangan (1993) dan LL.B (Kepujian) (1995), University of Melbourne; diterima masuk di Victoria (1996) dan Malaya (1997). Kini mengikuti Sarjana Pembangunan Hartanah di UTAR." }, { year: "Masyarakat", title: "Pendidikan dan budaya", text: "Bendahari Lembaga Pengelola SJK(C) Shin Cheng sejak 2010; kurator bersama pameran jed Balai Seni Negara 2024; Penerbit Bersekutu Lelaki Harapan Dunia (2014)." }
      ] }
    ]
  },
  contact: {
    eyebrow: "Hubungi",
    title: "Mulakan dengan perbualan.",
    description: "Hubungi pengurusan TPK Park di Puchong untuk penyewaan, kerjasama acara, media atau pertanyaan umum.",
    lead: "Untuk penyewaan, media, acara atau perkara umum, hubungi pejabat pengurusan atau sediakan e-mel melalui borang berikut.",
    blocks: [{ type: "contact", officeHours: "Isnin–Jumaat, 9:00 pagi–5:00 petang; Sabtu, 9:00 pagi–12:00 tengah hari", address: "Taman Perindustrian Kinrara, 47180 Puchong, Selangor, Malaysia", labels: { phone: "Telefon", email: "E-mel", hours: "Pejabat pengurusan", address: "Lokasi", formTitle: "Apakah yang ingin anda bincangkan?" } }]
  }
};

const zhPages = {
  home: {
    eyebrow: "蒲种 · 雪兰莪",
    title: "成熟工业空间，为日常生活持续更新。",
    description: "探索蒲种TPK Park：金銮工业园内的家居生活展厅、汽车服务、生活配套及租赁机会。",
    lead: "TPK Park在交通便利的成熟环境中，逐步汇聚家居生活、汽车服务及生活品味业态。",
    image: images.park,
    blocks: [
      { type: "cards", kicker: "三大互补集群", title: "一趟完成更多实用安排。", text: "比较家居方案、安排汽车护理、用餐或体验新活动，都可在这个蒲种目的地进行。", items: [
        { number: "01", title: "家居生活", text: "展厅、装修材料、厨房、卫浴、家具及专业服务。", route: "homeLiving", image: images.homeLiving },
        { number: "02", title: "汽车服务", text: "销售、维修、美容、专业车厂及技术教育。", route: "automotive", image: images.automotive },
        { number: "03", title: "生活品味", text: "餐饮、运动、亲子活动、日常所需及专业服务。", route: "lifestyle", image: images.lifestyle }
      ] },
      { type: "split", title: "更新之余，保留实用本质。", text: "TPK Park的管理工作聚焦于特定产业及访客共享体验，包括租户组合、园林、建筑照明、招牌协调、停车管理、活动及目的地推广。", image: images.park, alt: "蒲种TPK Park商业与工业单位", route: "about" },
      { type: "stats", items: [{ value: "16", label: "获认证家居生活集群内的企业" }, { value: "96,728", label: "2026年获认证集群总平方英尺" }, { value: "8", label: "纪录评估涵盖的家居生活类别" }] },
      { type: "news", kicker: "精选报道", title: "媒体眼中的TPK Park", text: "关于家居生活里程碑及园区长期更新的独立报道。", limit: 3 },
      { type: "faq", kicker: "访客须知", title: "出发前先了解", items: [
        { q: "TPK Park在哪里？", a: "TPK Park位于雪兰莪州蒲种金銮工业园，坐落在蒲种—武吉加里尔走廊。" },
        { q: "TPK Park有哪些商家？", a: "园内业态包括家居生活展厅、汽车销售与维修、餐饮、运动、亲子活动、日常所需及专业服务。" },
        { q: "所有商家的营业时间相同吗？", a: "不同。各租户自行决定营业时间，出发前请直接向相关商家确认。" },
        { q: "是否有单位出租？", a: "部分商业与工业空间会不定时开放租赁。请联系管理团队了解最新选择。" },
        { q: "如何联系管理处？", a: "请在管理处办公时间致电+60 3 8076 5200或电邮info@tpkpark.com。" }
      ] }
    ]
  },
  about: {
    eyebrow: "关于TPK Park",
    title: "以长期视角经营成熟空间。",
    description: "了解TPK Park如何通过租户组合、产业更新及地方营造，管理金銮工业园内的特定产业。",
    lead: "TPK Park是金銮工业园内一组特定商业及工业产业的目的地品牌，并不代表管理整个工业园区。",
    blocks: [
      { type: "split", title: "实用为先，逐步形成特色。", text: "成熟工业环境的优势包括车辆直达、地面停车、装卸便利及良好道路连接。在此基础上，通过更清晰的租户组合及更友善的共享环境持续更新。", image: images.park, alt: "金銮工业园内的TPK Park街景" },
      { type: "cards", kicker: "我们的方式", title: "持续管理，脚踏实地。", text: "以租户及访客的实际需要为基础。", items: [
        { number: "01", title: "产业管理", text: "对特定单位进行长期资产与租赁管理。" }, { number: "02", title: "商业集群", text: "围绕家居生活、汽车服务及生活品味规划业态。" }, { number: "03", title: "地方更新", text: "园林、照明、招牌协调、停车及目的地活动。" }
      ] },
      { type: "timeline", kicker: "发展历程", title: "由持续工作逐步形成", items: [
        { year: "1990年代", title: "工业基础", text: "金銮工业园发展为蒲种实用的工业地址。" }, { year: "2010", title: "聚焦管理", text: "特定产业的长期管理及策略性重新定位成为持续重点。" }, { year: "2026", title: "集群获认证", text: "家居生活集群获《马来西亚纪录大全》工业园类别认证。" }, { year: "未来", title: "持续更新", text: "重点始终是实用而协调的商业生态，而非一次性活动。" }
      ] }
    ]
  },
  homeLiving: {
    eyebrow: "家居生活",
    title: "灵感、材料与专家，距离更近。",
    description: "探索蒲种TPK Park家居生活集群，涵盖家具、厨房、卫浴、表面材料、装饰及装修服务。",
    lead: "顾客可在一趟行程中比较更多方案，商家也能从聚焦型目的地中产生协同效应。",
    blocks: [
      { type: "stats", items: [{ value: "16", label: "2026年获认证集群内的企业" }, { value: "96,728", label: "获认证企业总平方英尺" }, { value: "8", label: "评估涵盖的类别" }] },
      { type: "directory", kicker: "业态组合", title: "实用的装修采购路线", text: "租户及营业信息可能变更，出发前请直接向商家确认。", items: [["家具", "Lavino"], ["五金", "Ga Hing"], ["厨卫", "Kuche + BaTH"], ["瓷砖与表面", "Jubin BMS"], ["厨房系统", "Signature"], ["窗帘", "MK Curtain"], ["室内饰面", "Baagus"], ["工具", "Total Tools"], ["家具", "V Haus Living"], ["设计", "Balens Design"], ["建筑方案", "BUILTOP"], ["门类", "Premio Door"], ["室内设计", "Choose Interior"], ["家具", "KLOT"], ["家居产品", "DC Moto"], ["家居产品", "Fagolli"]] },
      { type: "cards", kicker: "规划行程", title: "从第一步灵感到最后细节", text: "可先从集群寻找方向，再直接确认库存、预约及营业时间。", items: [
        { number: "01", title: "比较", text: "亲自查看材料与饰面后再作决定。" }, { number: "02", title: "协调", text: "带上尺寸、参考图片及项目时间表。" }, { number: "03", title: "确认", text: "向商家确认报价、保修、送货及安装安排。" }
      ] }
    ]
  },
  automotive: {
    eyebrow: "汽车服务",
    title: "汽车护理、专业能力与更多选择。",
    description: "探索蒲种TPK Park的汽车销售、维修、美容、专业车厂及技术培训。",
    lead: "持续扩展的汽车业态，为车主、技师及学员提供销售、保养、美容及专业服务。",
    blocks: [
      { type: "directory", kicker: "汽车业态", title: "覆盖不同用车阶段的服务", text: "预约、车型及服务由各商家自行管理。", items: [["销售与维修", "Perodua 3S Kinrara"], ["销售与维修", "Mazda 3S"], ["维修", "Kia 4S Service"], ["专业车厂", "Techtrics Auto"], ["技术教育", "Techtra Automotive Academy"], ["汽车美容", "Jon Detailing"], ["维修", "Jaecoo Service Centre"], ["专业车厂", "Toyokar"]] },
      { type: "cards", kicker: "一站式汽车地址", title: "以实用通行为核心", text: "工业型单位适合车辆进出、维修、展示及技术操作。", items: [
        { number: "01", title: "销售", text: "探索精选新车及二手车选择。" }, { number: "02", title: "维修", text: "定期保养及专业汽车服务。" }, { number: "03", title: "技能", text: "技术培训及行业导向学习。" }
      ] },
      { type: "split", title: "到访前先联系。", text: "各汽车商家自行安排预约、营业时间及服务范围。请直接确认，让行程更顺利。", image: images.automotive, alt: "TPK Park汽车业务单位" }
    ]
  },
  lifestyle: {
    eyebrow: "生活品味与配套",
    title: "实用的日常停靠，让地方更有活力。",
    description: "在蒲种TPK Park寻找餐饮、健身、游泳、体操、眼镜服务及日常所需。",
    lead: "除了展厅与车厂，TPK Park也通过日常配套，让员工、家庭及访客在一周内有更多回访理由。",
    blocks: [
      { type: "directory", kicker: "园区周边", title: "用餐、运动、学习与处理日常事务", text: "各商家自行管理课程、预约及营业时间。", items: [["餐饮", "m.o.t.d"], ["餐饮", "Jazmina Bistro"], ["游泳", "Optimum Swim School"], ["体操", "Aces Gymnastics Academy"], ["眼镜", "Forsee Lens"], ["便利店", "99 Speedmart"], ["亲子服务", "Happivilles"], ["健康", "Aafiyah"]] },
      { type: "cards", kicker: "日常节奏", title: "更多回访理由", text: "混合型目的地既支持计划行程，也照顾日常需要。", items: [
        { number: "01", title: "会面", text: "在预约之间用餐或短暂停留。" }, { number: "02", title: "活动", text: "游泳、体操及健康课程。" }, { number: "03", title: "办事", text: "配合商业行程处理日常所需。" }
      ] },
      { type: "split", title: "先查课程，再规划一天。", text: "部分课程及活动需提前预约。请向相关商家查询最新时间、年龄组及名额。", image: images.lifestyle, alt: "TPK Park生活配套单位" }
    ]
  },
  leasing: {
    eyebrow: "蒲种物业租赁",
    title: "蒲种商业与工业单位出租",
    description: "查找蒲种TPK Park商业及工业单位出租信息，包括商铺、展厅、独立式建筑及半独立式厂房。",
    lead: "位于金銮工业园的面客空间，适合展厅、零售、汽车、餐饮、健康及专业服务业务。",
    image: images.leasing,
    blocks: [
      { type: "notice", text: "网页所列的单位供应、面积、叫租及商业条款均为参考资料，须向TPK Park租赁团队确认。" },
      { type: "cards", kicker: "可租空间类型", title: "按业务运营方式选择物业", text: "每个长期保留的单位页面均提供当前参考资料、地点及直接查询方式。", items: [
        { number: "01", title: "商铺与展厅", text: "位于Jalan TPK 2/8的面客商铺，适合展示、专业零售、服务及生活业态。", route: "leasingShop", image: images.leasingShop, linkLabel: "查看商铺与展厅" },
        { number: "02", title: "独立式建筑", text: "整栋独立物业，适合旗舰展厅、汽车中心或较大型商业运营。", route: "leasingDetached", image: images.leasingDetached, linkLabel: "查看独立式建筑" },
        { number: "03", title: "半独立式单位", text: "适合展厅、服务、陈列、储存及运营需求的灵活整栋空间。", route: "leasingSemiDetached", image: images.leasingSemiDetached, linkLabel: "查看半独立式单位" }
      ] },
      { type: "split", title: "位于蒲种—武吉加里尔走廊的醒目商业地址。", text: "TPK Park位于金銮工业园，结合便捷驶入、访客停车，并汇聚成熟的家居生活、汽车服务及生活业态。", image: images.leasing, alt: "蒲种TPK Park面客商业物业", route: "contact", linkLabel: "讨论您的空间需求" },
      { type: "cards", kicker: "优先租户类型", title: "为园区增加价值的业务", text: "租赁策略优先考虑实用、面向顾客，并能补充现有商业组合的业态。", items: [
        { number: "A", title: "家居生活", text: "家具、厨房、衣柜、瓷砖、卫浴、灯饰、室内设计及装修服务。" },
        { number: "B", title: "汽车服务", text: "销售、配件、美容、电动车相关服务、专业车厂及移动出行业务。" },
        { number: "C", title: "生活与服务", text: "咖啡馆、健康、教育、诊所、亲子活动及专业服务。" }
      ] },
      { type: "faq", kicker: "租赁常见问题", title: "查询前须知", items: [
        { q: "蒲种TPK Park有哪些物业可出租？", a: "选择可能包括面客商铺与展厅、整栋独立式建筑，以及半独立式工业商业单位。供应会变化，请向租赁团队确认当前名单。" },
        { q: "TPK Park适合展厅或零售业务吗？", a: "适合。园区围绕面客的家居生活、汽车服务及生活业态规划，商家可受益于醒目位置、直接驶入、停车及互补品牌集聚。" },
        { q: "网页所列叫租和面积是最终资料吗？", a: "不是。所列数字仅供参考。面积、供应、租金、准许用途及所有商业条款均须核实，并以合约为准。" },
        { q: "如何预约看单位？", a: "请使用相关物业页面的查询链接，致电+60 3 8076 5200，或电邮info@tpkpark.com，并注明用途、所需面积及预计开业时间。" }
      ] }
    ]
  },
  leasingShop: {
    parentRoute: "leasing",
    unitKey: "shopShowroom",
    eyebrow: "租赁 · 商铺与展厅",
    title: "蒲种商铺与展厅出租",
    description: "查找蒲种金銮工业园TPK Park Jalan TPK 2/8沿线的商铺及展厅出租信息。",
    lead: "适合需要商品展示、顾客直接到访，并希望进驻成熟商业集群的品牌。",
    image: images.leasingShop,
    blocks: [
      { type: "notice", text: "目前可能仅有少量商铺与展厅选择。作决定前，请确认具体单位、楼面面积、叫租、准许用途及看房安排。" },
      { type: "unitDetails", inventory: "shopShowroom" },
      { type: "split", title: "为需要被顾客看见的业务而设。", text: "Jalan TPK 2/8沿线商铺适合家具、厨房、衣柜、瓷砖、卫浴、灯饰、室内设计、咖啡馆、健康及专业服务。地面直接通行和邻近目的地型商家，有助计划性到访与比较选购。", image: images.leasing, alt: "蒲种TPK Park商铺与展厅门面" },
      { type: "cards", kicker: "实用优势", title: "面向顾客的商业空间", text: "请按实际运营及装修需求评估具体单位。", items: [
        { number: "01", title: "醒目位置", text: "位于活跃商业及工业区内，具面向街道的品牌展示机会。" },
        { number: "02", title: "便利通行", text: "顾客可直接驶入，并使用园区共用访客停车位。" },
        { number: "03", title: "集群效应", text: "邻近家居生活、汽车服务及生活业态，为顾客创造实用到访理由。" }
      ] },
      { type: "faq", kicker: "商铺与展厅常见问题", title: "规划您的查询", items: [
        { q: "商铺与展厅位于哪里？", a: "本页所指商铺位于蒲种金銮工业园Jalan TPK 2/8沿线。" },
        { q: "哪些业务较适合？", a: "面客展厅、专业零售、装修与家居品牌、咖啡馆、健康、教育、诊所及互补服务均属优先考虑用途，但须经批准。" },
        { q: "可以下载更详细的租赁资料吗？", a: "可以。下载本页的租赁资料包（PDF），然后联系管理团队确认当前单位、尺寸、租金及看房时间。" }
      ] }
    ]
  },
  leasingDetached: {
    parentRoute: "leasing",
    unitKey: "detached",
    eyebrow: "租赁 · 独立式建筑",
    title: "蒲种独立式商业建筑出租",
    description: "蒲种Jalan TPK 2/4门牌7号独立式商业及工业建筑出租，建筑面积约10,965平方英尺。",
    lead: "带独立范围的整栋物业，适合旗舰展厅、汽车中心或较大型面客运营。",
    image: images.leasingDetached,
    blocks: [
      { type: "notice", text: "所列建筑、面积及每月RM58,000叫租均为参考资料。请确认当前供应、准许用途、物业状况及所有商业条款。" },
      { type: "unitDetails", inventory: "detached" },
      { type: "split", title: "整栋自主使用，建立更鲜明的品牌形象。", text: "独立式建筑提供较大规模、清晰的独立地址及专属范围，可能适合企业展厅、汽车中心、大型零售、体验中心或具面客需求的总部式运营。", image: images.leasingDetached, alt: "蒲种Jalan TPK 2/4独立式商业建筑" },
      { type: "cards", kicker: "物业特点", title: "满足较大型运营需求的空间", text: "看房时请确认通行、装卸、水电、审批及装修要求。", items: [
        { number: "01", title: "独立品牌识别", text: "独立式建筑有利于清晰招牌、到达体验及顾客辨识。" },
        { number: "02", title: "专属范围", text: "建筑周边专属空间可支持出入管理及运营规划。" },
        { number: "03", title: "灵活规模", text: "参考建筑及土地面积可容纳展示、服务、办公室及后勤功能。" }
      ] },
      { type: "faq", kicker: "独立式建筑常见问题", title: "需要确认的重点", items: [
        { q: "独立式建筑面积是多少？", a: "参考资料列出建筑面积约10,965平方英尺，土地面积约21,316平方英尺。所有尺寸均须核实。" },
        { q: "参考叫租是多少？", a: "参考叫租为每月RM58,000，须视当前供应、协商、业主批准及合约而定。" },
        { q: "哪些用途可能适合？", a: "可能用途包括旗舰展厅、汽车中心、大型零售、体验中心或其他面客商业运营，但须符合规划、执照及业主批准。" }
      ] }
    ]
  },
  leasingSemiDetached: {
    parentRoute: "leasing",
    unitKey: "semiDetached",
    eyebrow: "租赁 · 半独立式单位",
    title: "蒲种半独立式厂房出租",
    description: "蒲种Jalan TPK 2/8门牌69号半独立式工业商业建筑出租，建筑面积约6,446.88平方英尺。",
    lead: "适合需要结合展厅、服务、陈列、储存及运营空间的整栋单位。",
    image: images.leasingSemiDetached,
    blocks: [
      { type: "notice", text: "所列建筑、面积及每月RM25,000叫租均为参考资料。请确认当前供应、准许用途、物业状况及所有商业条款。" },
      { type: "unitDetails", inventory: "semiDetached" },
      { type: "split", title: "兼顾门面展示与运营空间。", text: "半独立式单位可支持家具展厅、室内设计中心、家居改善品牌、汽车服务及专业运营商，把顾客展示与后勤功能结合在同一物业。", image: images.leasingSemiDetached, alt: "蒲种Jalan TPK 2/8半独立式工业商业建筑" },
      { type: "cards", kicker: "物业特点", title: "灵活用于展示、服务与运营", text: "看房时请确认实际通行、楼层布局、设施及装修条件。", items: [
        { number: "01", title: "较宽门面", text: "为以展示为主的业务提供容易辨识的面客形象。" },
        { number: "02", title: "整栋使用", text: "可在一个租约内规划顾客、办公室、服务、储存及运营区域。" },
        { number: "03", title: "TPK Park环境", text: "邻近互补的家居生活、汽车服务及生活业态。" }
      ] },
      { type: "faq", kicker: "半独立式单位常见问题", title: "需要确认的重点", items: [
        { q: "半独立式单位面积是多少？", a: "参考资料列出建筑面积约6,446.88平方英尺。实际尺寸与布局均须核实。" },
        { q: "参考叫租是多少？", a: "参考叫租为每月RM25,000，须视当前供应、协商、业主批准及合约而定。" },
        { q: "可以同时作为展厅与运营空间吗？", a: "这种混合用途可能适合，但拟议用途、装修、执照、装卸及其他运营要求必须在签约前审查。" }
      ] }
    ]
  },
  news: {
    eyebrow: "新闻与报道",
    title: "记录一个地方的转变。",
    description: "阅读关于TPK Park家居生活里程碑及蒲种成熟工业园长期更新的独立媒体报道。",
    lead: "精选独立媒体报道，文章将在原媒体网站打开。",
    blocks: [{ type: "news", kicker: "媒体档案", title: "精选报道", text: "保留媒体标题及链接供参考。", limit: 20 }]
  },
  milestones: {
    eyebrow: "里程碑档案",
    title: "属于一个聚焦集群的纪录。",
    description: "TPK Park 2026 Home Carnival及家居生活零售集群获《马来西亚纪录大全》认证的档案。",
    lead: "2026年，家居生活集群——并非整个园区——获认证为工业园内最大型家居生活零售集群。",
    blocks: [
      { type: "notice", text: "档案说明：2026 Home Carnival已经结束。本页保存该里程碑，并非现行活动广告。" },
      { type: "stats", items: [{ value: "16", label: "纪录评估涵盖的企业" }, { value: "96,728", label: "获认证集群总平方英尺" }, { value: "8", label: "家居生活类别" }] },
      { type: "split", title: "认证源于真实运作的商业集群。", text: "该纪录反映长期租户组合及产业更新的成果，并配合2026 Home Carnival与商家及访客共同庆祝。", image: images.carnival, alt: "TPK Park 2026 Home Carnival档案图片" },
      { type: "timeline", kicker: "档案", title: "从更新走向认证", items: [
        { year: "之前", title: "实用工业基础", text: "成熟单位与直接通行成为面向顾客业务的基础。" }, { year: "逐步", title: "更清晰的租户组合", text: "家居生活商家逐渐形成协调的目的地。" }, { year: "2026", title: "纪录认证", text: "集群经评估涵盖16家企业、96,728平方英尺及八个类别。" }, { year: "持续", title: "更新继续", text: "里程碑支持——而非完成——地方的长期更新。" }
      ] }
    ]
  },
  profile: {
    eyebrow: "管理团队",
    title: "Wong Shung Yen 黄松延",
    description: "TPK Park董事经理黄松延的个人资料，以及他在产业管理、零售集群及成熟工业园更新方面的工作。",
    lead: "TPK Park（金銮工业园）董事经理",
    blocks: [
      { type: "profile", descriptor: "房地产发展 · 工业园更新 · 零售集群 · 地方营造", introduction: "黄松延是TPK Park Sdn. Bhd.的董事经理，主导公司在金銮工业园内所持特定产业的长期管理与重新定位，重点通过租户组合规划、零售集群及地方营造推动成熟工业物业更新。", imageAlt: "TPK Park董事经理黄松延" },
      { type: "quote", text: "TPK Park从传统工业园逐步转型为汇聚家居生活、汽车服务及生活品味的多元目的地，是一段历时三十年的旅程。", cite: "黄松延" },
      { type: "cards", kicker: "目前重点", title: "以长期视角经营一片地方", text: "在保留成熟工业环境实用优势的同时，进一步提升其商业价值。", items: [
        { number: "01", title: "产业长期管理", text: "对特定工业、商业及零售产业进行长期资产与租赁管理。" }, { number: "02", title: "商业集群规划", text: "围绕家居生活、汽车服务及生活品味规划租户组合。" }, { number: "03", title: "成熟工业园更新", text: "园林、建筑照明、招牌协调、停车、活动及目的地推广。" }
      ] },
      { type: "timeline", kicker: "专业背景", title: "房地产、法律与社会贡献", items: [
        { year: "1996年至今", title: "房地产开发", text: "担任Rasmi Indah Sdn. Bhd.及Dayamam Sdn. Bhd.董事，分别参与金銮工业园第一区及第二区的发展。" }, { year: "2010年至今", title: "TPK Park", text: "主导特定产业的长期管理与策略性重新定位。" }, { year: "教育", title: "墨尔本大学与拉曼大学", text: "墨尔本大学商学学士（1993）及法学荣誉学士（1995）；1996年及1997年取得维多利亚州及马来亚律师资格。目前在拉曼大学攻读房地产发展硕士。" }, { year: "社会", title: "教育与文化", text: "自2010年任深静（哈古乐）华小董事会财政；联合策划2024年国家美术馆古玉展；担任电影《Lelaki Harapan Dunia》（2014）协同制片人。" }
      ] }
    ]
  },
  contact: {
    eyebrow: "联系",
    title: "从一次对话开始。",
    description: "联系蒲种TPK Park管理团队，查询租赁、活动合作、媒体或一般事项。",
    lead: "如有租赁、媒体、活动或一般事项，请联系管理处，或使用以下表格准备电邮。",
    blocks: [{ type: "contact", officeHours: "星期一至五，上午9时至下午5时；星期六，上午9时至中午12时", address: "Taman Perindustrian Kinrara, 47180 Puchong, Selangor, Malaysia", labels: { phone: "电话", email: "电邮", hours: "管理处办公时间", address: "地点", formTitle: "您希望讨论什么？" } }]
  }
};

export const site = {
  en: { ...common.en, pages: enPages },
  ms: { ...common.ms, pages: msPages },
  zh: { ...common.zh, pages: zhPages }
};

export const primaryNav = ["about", "homeLiving", "automotive", "lifestyle", "leasing", "news", "contact"];

export const socialLinks = [
  ["Facebook", "https://www.facebook.com/tpkpark.my/"],
  ["Instagram", "https://www.instagram.com/tpkpark/"],
  ["TikTok", "https://www.tiktok.com/@tpkpark"]
];
