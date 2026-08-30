/**
 * TPK Park — Trilingual i18n System (BM / EN / 中文)
 * Storage key: 'tpkpark-lang' | Default: 'en'
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'tpkpark-lang';
  var DEFAULT_LANG = 'en';

  var T = {
    /* ─── Nav ─── */
    'nav-menu':            { ms: 'Menu',               en: 'Menu',               zh: '菜单' },
    'nav-home':            { ms: 'Laman Utama',         en: 'Home',               zh: '首页' },
    'nav-ecosystem':       { ms: 'Ekosistem Perniagaan',en: 'Business Ecosystem',  zh: '商业生态' },
    'nav-leasing':         { ms: 'Peluang Pajakan',     en: 'Leasing Opportunities', zh: '租赁机会' },
    'nav-social':          { ms: 'Media Sosial',        en: 'As Seen on Social',   zh: '社交媒体' },
    'nav-news':            { ms: 'Dalam Berita',        en: 'In the News',         zh: '新闻资讯' },
    'nav-enquire':         { ms: 'Buat Pertanyaan',     en: 'Enquire Now',         zh: '立即咨询' },
    'nav-faq':             { ms: 'Soalan Lazim',        en: 'FAQ',                 zh: '常见问题' },

    /* ─── Hero ─── */
    'hero-heading-p1':     { ms: 'Destinasi #1',        en: "Puchong's",           zh: '蒲种' },
    'hero-heading-num':    { ms: '#1',                  en: '#1',                  zh: '#1' },
    'hero-heading-p2':     { ms: 'Rumah & Gaya Hidup',  en: 'Home & Living',       zh: '家居生活' },
    'hero-heading-p3':     { ms: 'Destinasi',           en: 'Destination',         zh: '首选目的地' },
    'hero-subtitle':       { ms: 'Rumah & Gaya Hidup. Hab Automotif. Gaya Hidup.<br>Satu destinasi meriah di sepanjang Lebuhraya Bukit Jalil.', en: "Home & Living. Auto Hub. Lifestyle.<br>One vibrant destination along the Bukit Jalil Highway.", zh: '家居生活 · 汽车中心 ·  Lifestyle<br>一个坐落于武吉加里尔大道的活力商圈' },
    'hero-explore':        { ms: 'Terokai TPK Park',    en: 'Explore TPK Park',    zh: '探索 TPK Park' },
    'hero-business-owners':{ ms: 'Untuk pemilik perniagaan:', en: 'For business owners:', zh: '企业主：' },
    'hero-view-leasing':   { ms: 'Lihat Peluang Pajakan', en: 'View Leasing Opportunities', zh: '查看租赁机会' },
    'hero-tpk-address':    { ms: 'Taman Perindustrian Kinrara', en: 'Taman Perindustrian Kinrara', zh: '金銮工业园' },

    /* ─── Event badge ─── */
    'event-coming-soon':   { ms: 'Acara Akan Datang',  en: 'Event Coming Soon',    zh: '活动即将举行' },

    /* ─── Malaysia Book of Records ─── */
    'mbor-text':           { ms: 'Satu pencapaian Malaysia Book of Records dalam transformasi TPK Park menjadi destinasi Rumah & Gaya Hidup yang diiktiraf di Puchong.', en: "A Malaysia Book of Records milestone in TPK Park's transformation into Puchong's recognised Home & Living destination.", zh: 'TPK Park 荣获马来西亚纪录大全，标志着其转型为蒲种公认的家居生活目的地的重要里程碑。' },
    'home-carnival':       { ms: 'Karnival Rumah',      en: 'Home Carnival',        zh: '家居嘉年华' },
    'carnival-location':   { ms: '@ TPK Park, Puchong', en: '@ TPK Park, Puchong',  zh: '@ TPK Park, 蒲种' },

    /* ─── Brand showcase ─── */
    'brands-count':        { ms: '9 Jenama Rumah & Gaya Hidup', en: '9 Home & Living Brands Showcase', zh: '9 大品牌联合展示' },
    'brands-tagline':      { ms: 'Dari Pengubahsuaian ke Kehidupan Rumah —', en: 'From Renovation to Home Living —', zh: '从装修到家居 —' },
    'brands-tagline-bold': { ms: 'Semua di Satu Tempat', en: 'All in One Place',      zh: '一站式解决' },

    /* ─── Participating Brands ─── */
    'participating-brands':{ ms: 'Jenama-Jenama Peserta', en: 'Participating Brands', zh: '参展品牌' },
    'participating-desc':  { ms: 'Penyelesaian sehenti untuk semua keperluan rumah dan pengubahsuaian anda.', en: 'One-stop solution for all your home and renovation needs.', zh: '一站式满足您的家居与装修需求。' },

    /* ─── Carnival Rewards ─── */
    'rewards-heading':     { ms: 'Hadiah Eksklusif Karnival', en: 'Exclusive Carnival Rewards', zh: '独家嘉年华奖励' },
    'rewards-subtitle':    { ms: 'Hadiah menanti untuk dimenangi', en: 'Abundant prizes waiting to be won', zh: '丰富奖品等您来赢取' },
    'daily-lucky-draw':    { ms: 'Cabutan Bertuah Harian', en: 'Daily Lucky Draw',   zh: '每日幸运抽奖' },
    'spend-rm500':         { ms: 'Belanja RM500+',       en: 'Spend RM500+',         zh: '消费 RM500+' },
    'how-to-win':          { ms: 'Cara Menang?',        en: 'How to Win?',          zh: '如何赢奖？' },
    'tng-rewards':         { ms: 'Ganjaran eWallet',    en: 'eWallet Rewards',      zh: '电子钱包奖励' },
    'view-prizes':         { ms: 'Lihat Hadiah',         en: 'View Prizes',          zh: '查看奖品' },
    'grand-prize':         { ms: 'Hadiah Utama',         en: 'Grand Prize',          zh: '终极大奖' },
    'refrigerator':        { ms: 'Peti Sejuk',           en: 'Refrigerator',         zh: '冰箱' },
    'days-only':           { ms: '5 Hari Sahaja!',      en: '5 Days Only!',         zh: '仅限5天！' },

    /* ─── MD Message ─── */
    'md-section-title':    { ms: 'Mesej daripada Pengarah Urusan', en: 'A Message from the Managing Director', zh: '董事经理致辞' },
    'md-quote':            { ms: '"Transformasi TPK Park daripada taman perindustrian tradisional kepada destinasi Rumah & Gaya Hidup, Hab Automotif dan Gaya Hidup yang meriah telah menjadi <span class=\\"text-gold\\">perjalanan tiga dekad.</span>"', en: '"TPK Park\'s transformation from a traditional industrial park into a vibrant Home & Living, Auto Hub and Lifestyle destination has been a <span class=\\"text-gold\\">three-decade journey.</span>"', zh: '"TPK Park 从一个传统工业园区转型为集家居生活、汽车中心和 Lifestyle 于一体的活力目的地，这是一段<span class=\\"text-gold\\">三十年的历程。</span>"' },
    'md-para-1':           { ms: 'Apa yang menjadikan transformasi ini bermakna bukan sahaja evolusi fizikal tempat ini, tetapi juga sumbangan kolektif para peniaga, rakan kongsi dan komuniti setempat yang telah menjadi sebahagian daripada perjalanan TPK Park.', en: "What makes this transformation meaningful is not only the physical evolution of the place, but also the collective contribution of the merchants, partners and surrounding community who have been part of TPK Park's journey.", zh: '这一转型的意义不仅在于园区物理面貌的蜕变，更在于商家、合作伙伴及周边社区的集体贡献，他们共同见证了 TPK Park 的发展历程。' },
    'md-para-2':           { ms: 'Melalui kurasi penyewa yang teliti, pengurusan swasta jangka panjang, penambahbaikan peringkat estet dan penglibatan konstruktif dengan pihak berkuasa tempatan, TPK Park telah berkembang menjadi destinasi yang mudah untuk pemilik rumah, perniagaan dan pengunjung.', en: 'Through careful tenant curation, long-term private management, estate-level improvements and constructive engagement with local authorities, TPK Park has evolved into a convenient destination for homeowners, businesses and visitors alike.', zh: '通过精心筛选租户、长期私人物业管理、园区级升级改造以及与地方政府的建设性合作，TPK Park 已发展成为业主、企业和游客皆宜的便捷目的地。' },
    'md-para-3':           { ms: 'Hari ini, ia menghimpunkan penyelesaian pengubahsuaian rumah, perkhidmatan automotif dan tawaran gaya hidup dalam satu persekitaran terurus.', en: 'Today, it brings together home improvement solutions, automotive services and lifestyle offerings in one managed environment.', zh: '如今，TPK Park 将家居装修解决方案、汽车服务和 Lifestyle 业态汇聚于一个统一管理的环境中。' },
    'md-para-4':           { ms: 'Ke hadapan, kami akan terus mengukuhkan ekosistem perniagaan kami, meningkatkan pengalaman pelanggan dan peniaga, dan membina TPK Park sebagai destinasi yang diiktiraf untuk Rumah & Gaya Hidup, Hab Automotif dan Gaya Hidup di Puchong.', en: 'Moving forward, we will continue to strengthen our business ecosystem, enhance the customer and merchant experience, and build TPK Park as a recognised destination for Home & Living, Auto Hub and Lifestyle in Puchong.', zh: '展望未来，我们将继续强化商业生态，提升顾客与商家体验，将 TPK Park 打造为蒲种公认的家居生活、汽车中心和 Lifestyle 目的地。' },
    'md-name':             { ms: 'Wong Shung Yen',       en: 'Wong Shung Yen',        zh: 'Wong Shung Yen' },
    'md-title-label':      { ms: 'Pengarah Urusan',     en: 'Managing Director',     zh: '董事经理' },
    'md-company':          { ms: 'TPK Park',             en: 'TPK Park',              zh: 'TPK Park' },
    'md-signature-name':   { ms: 'Wong Shung Yen',       en: 'Wong Shung Yen',        zh: 'Wong Shung Yen' },

    /* ─── Social Preview ─── */
    'social-section-title':{ ms: 'Media Sosial',        en: 'As Seen on Social',     zh: '社交媒体' },
    'social-heading':      { ms: 'Lawatan Nyata.<br class=\\"block md:hidden\\"> <span class=\\"hidden md:inline\\"> </span>Detik Nyata.<br class=\\"block md:hidden\\"> <span class=\\"hidden md:inline\\"> </span>Kisah Nyata.', en: 'Real Visits.<br class="block md:hidden"> <span class="hidden md:inline"> </span>Real Moments.<br class="block md:hidden"> <span class="hidden md:inline"> </span>Real Stories.', zh: '真实探店 ·<br class="block md:hidden"> <span class="hidden md:inline"> </span>真实瞬间 ·<br class="block md:hidden"> <span class="hidden md:inline"> </span>真实故事' },
    'social-explore':      { ms: 'Terokai Sorotan Sosial', en: 'Explore Social Highlights', zh: '探索社交亮点' },

    /* ─── View Post / Reel ─── */
    'view-post':           { ms: 'Lihat Siaran',        en: 'View Post',             zh: '查看帖子' },
    'view-reel':           { ms: 'Lihat Reel',          en: 'View Reel',             zh: '查看 Reel' },

    /* ─── News Section ─── */
    'news-heading':        { ms: 'Dalam Berita',        en: 'In the News',           zh: '新闻资讯' },
    'news-desc':           { ms: 'Liputan media, cerita ciri dan perkembangan terkini tentang evolusi TPK Park daripada taman perindustrian tradisional kepada destinasi Rumah & Gaya Hidup, Hab Automotif dan Gaya Hidup yang diiktiraf di Puchong.', en: "Media coverage, feature stories and updates on TPK Park's evolution from a traditional industrial park into a recognised Home & Living, Auto Hub and Lifestyle destination in Puchong.", zh: '媒体报道、专题故事及 TPK Park 从传统工业园转型为蒲种公认的家居生活、汽车中心与 Lifestyle 目的地的最新进展。' },
    'news-more':           { ms: 'Berita Lain',         en: 'More News',             zh: '更多新闻' },
    'read-more':           { ms: 'Baca Lagi',           en: 'Read More',             zh: '阅读更多' },

    /* ─── Leasing Opportunities (home) ─── */
    'leasing-section-title':{ ms: 'Peluang Pajakan',    en: 'Leasing Opportunities', zh: '租赁机会' },
    'leasing-heading':     { ms: 'Lokasi Strategik untuk Perniagaan Berkembang', en: 'A Strategic Address for Growing Businesses', zh: '企业成长之选址' },
    'leasing-desc':        { ms: 'Terletak di sepanjang Lebuhraya Bukit Jalil, TPK Park menawarkan keterlihatan hadapan lebuhraya, akses mudah dan kawasan tadahan yang matang. Dibina di sekitar penyewa Rumah & Gaya Hidup, Hab Automotif dan Gaya Hidup, ia menyediakan persekitaran terurus untuk perniagaan yang mencari jangkauan pelanggan dan ruang untuk berkembang.', en: 'Located along the Bukit Jalil Highway, TPK Park offers highway-fronting visibility, convenient access and a mature surrounding catchment. Built around Home & Living, Auto Hub and Lifestyle tenants, it provides a managed environment for businesses seeking customer reach and room to grow.', zh: 'TPK Park 坐落在武吉加里尔大道旁，享有临街可见度、便捷交通和成熟周边商圈。以家居生活、汽车中心和 Lifestyle 业态为核心，为企业提供客户触达与发展空间兼具的管理式商业环境。' },
    'leasing-explore':     { ms: 'Terokai Pilihan Pajakan', en: 'Explore Leasing Options', zh: '探索租赁选项' },
    'leasing-strategic-connectivity': { ms: '01 Hubungan Strategik', en: '01 Strategic Connectivity', zh: '01 战略性交通枢纽' },
    'leasing-connectivity-desc': { ms: 'Lokasi menghadap lebuhraya dengan akses mudah ke bandar-bandar sekitar dan laluan bandar utama.', en: 'Highway-fronting location with convenient access to surrounding townships and key urban routes.', zh: '坐拥大道临街位置，便捷连接周边城镇及主要城市干道。' },
    'leasing-business-ready': { ms: '02 Ruang Sedia Perniagaan', en: '02 Business-Ready Spaces', zh: '02 即用型商业空间' },
    'leasing-business-desc': { ms: 'Ruang fleksibel direka untuk menyokong pameran hadapan pelanggan, kawasan perkhidmatan, storan dan operasi harian yang cekap.', en: 'Flexible spaces designed to support customer-facing display, service areas, storage and efficient day-to-day operations.', zh: '灵活空间设计，支持面向客户的展示区、服务区、仓储及高效日常运营。' },

    /* ─── Ecosystem view ─── */
    'ecosystem-back':      { ms: 'Laman Utama',         en: 'Homepage',              zh: '主页' },
    'ecosystem-section-title': { ms: 'Ekosistem Perniagaan Kami', en: 'Our Business Ecosystem', zh: '我们的商业生态' },
    'ecosystem-heading':   { ms: 'Rumah & Gaya Hidup. Hab Automotif. Gaya Hidup.', en: 'Home & Living. Auto Hub. Lifestyle.', zh: '家居生活 · 汽车中心 · Lifestyle' },
    'ecosystem-desc':      { ms: 'Dibina di sekitar tiga tiang penyewa utama, TPK Park menghimpunkan ruang pameran pengubahsuaian rumah, perkhidmatan automotif, restoran, runcit dan perniagaan gaya hidup dalam satu destinasi terurus yang meriah.', en: 'Built around three key tenant pillars, TPK Park brings together home improvement showrooms, automotive services, dining, retail and lifestyle businesses in one vibrant, managed destination.', zh: 'TPK Park 围绕三大核心业态，汇集家居装修展厅、汽车服务、餐饮、零售及生活品牌于一体，打造充满活力的管理式目的地。' },

    /* ─── Spaces view (Leasing) ─── */
    'spaces-back':         { ms: 'Laman Utama',         en: 'Homepage',              zh: '主页' },
    'spaces-section-title':{ ms: 'Peluang Pajakan',    en: 'Leasing Opportunities',  zh: '租赁机会' },
    'spaces-heading':      { ms: 'Ruang Dibina untuk Jenama Berkembang.', en: 'Spaces Built for Brands to Grow.', zh: '为企业成长而建的空间。' },
    'spaces-desc':         { ms: 'TPK Park menawarkan ruang komersial dan perindustrian yang fleksibel untuk perniagaan yang mencari keterlihatan, aksesibiliti dan ruang untuk beroperasi dalam destinasi terurus yang meriah yang dibina di sekitar Rumah & Gaya Hidup, Hab Automotif dan Gaya Hidup.', en: 'TPK Park offers flexible commercial and industrial spaces for businesses seeking visibility, accessibility and room to operate within a vibrant managed destination built around Home & Living, Auto Hub and Lifestyle.', zh: 'TPK Park 提供灵活的商用及工业空间，适合寻求曝光度、便利交通及运营空间的企业，坐落于以家居生活、汽车中心和 Lifestyle 为核心的活力管理式目的地。' },
    'spaces-premium-shop': { ms: 'Kedai Premium',       en: 'Premium Shop',           zh: '高级店铺' },
    'spaces-premium-limited': { ms: '[Unit Terhad]',    en: '[Limited Units Available]', zh: '[仅余少量单位]' },
    'spaces-premium-desc': { ms: 'Ruang runcit berketerlihatan tinggi di kawasan komersial TPK Park yang menghadap pelanggan. Ideal untuk ruang pameran, runcit gaya hidup, kafe, perkhidmatan dan jenama yang mendapat manfaat daripada trafik pengunjung.', en: "High-visibility retail spaces within TPK Park's customer-facing commercial area. Ideal for showrooms, lifestyle retail, cafés, services and brands that benefit from visitor traffic.", zh: '高能见度零售空间，位于 TPK Park 面向顾客的商业区内。适合展厅、生活零售、咖啡馆、服务类及受益于客流量的品牌。' },
    'spaces-view-details': { ms: 'Lihat Butiran Unit',  en: 'View Unit Details',      zh: '查看单位详情' },
    'spaces-detached-unit':{ ms: 'Unit Berdiri Bebas',  en: 'Detached Unit',          zh: '独栋单位' },
    'spaces-detached-avail': { ms: '[1 Unit Tersedia]', en: '[1 Unit Available]',     zh: '[1个单位可租]' },
    'spaces-detached-desc':{ ms: 'Ruang utama berdiri bebas untuk perniagaan yang memerlukan skala, eksklusiviti dan kehadiran jenama yang kukuh. Sesuai untuk ruang pameran korporat, pusat automotif, runcit format besar dan operasi seperti ibu pejabat.', en: 'Standalone flagship space for businesses that need scale, exclusivity and strong brand presence. Suitable for corporate showrooms, automotive centres, large-format retail and headquarters-style operations.', zh: '独立旗舰空间，适合需要规模、专属感和强大品牌形象的企业。适用于企业展厅、汽车中心、大型零售及总部式运营。' },
    'spaces-semi-detached':{ ms: 'Unit Berkembar',      en: 'Semi-Detached Unit',     zh: '半独立单位' },
    'spaces-semi-avail':   { ms: '[1 Unit Tersedia]',   en: '[1 Unit Available]',     zh: '[1个单位可租]' },
    'spaces-semi-desc':    { ms: 'Ruang luas dengan bahagian hadapan lebih lebar dan ruang dalaman yang fleksibel untuk pameran, perkhidmatan dan operasi. Sesuai untuk galeri perabot, pusat reka bentuk dalaman, perkhidmatan automotif dan jenama Rumah & Gaya Hidup yang mantap.', en: 'Spacious units with wider frontage and flexible internal space for display, service and operations. Suitable for furniture galleries, interior design centres, automotive services and established Home & Living brands.', zh: '宽敞单位，门面更宽，内部空间灵活，适合展示、服务及运营。适用于家具展厅、室内设计中心、汽车服务及成熟的家居生活品牌。' },
    'spaces-terrace-unit': { ms: 'Unit Teres',          en: 'Terrace Unit',           zh: '排屋单位' },
    'spaces-terrace-status':{ ms: '[Kini Dipenuhi Sepenuhnya]', en: '[Currently Fully Occupied]', zh: '[已全部租出]' },
    'spaces-terrace-desc': { ms: 'Unit praktikal dan boleh disesuaikan untuk perniagaan yang sedang berkembang. Sesuai untuk runcit khusus, pengubahsuaian rumah, penyedia perkhidmatan dan operasi ruang pameran yang disokong storan.', en: 'Practical and adaptable units for growing businesses. Suitable for specialised retail, home improvement, service providers and storage-supported showroom operations.', zh: '实用灵活的单位，适合成长型企业。适用于专业零售、家居装修、服务供应商及带仓储的展厅运营。' },
    'spaces-enquire':      { ms: 'Buat Pertanyaan tentang Ruang', en: 'Enquire About Space', zh: '咨询空间' },

    /* ─── Social view ─── */
    'social-back':         { ms: 'Laman Utama',         en: 'Homepage',              zh: '主页' },
    'social-view-title':   { ms: 'MEDIA SOSIAL',        en: 'AS SEEN ON SOCIAL',     zh: '社交媒体' },
    'social-view-heading': { ms: 'Lawatan Nyata.<br class=\\"block md:hidden\\"> <span class=\\"hidden md:inline\\"> </span>Detik Nyata.<br class=\\"block md:hidden\\"> <span class=\\"hidden md:inline\\"> </span>Kisah Nyata.', en: 'Real Visits.<br class="block md:hidden"> <span class="hidden md:inline"> </span>Real Moments.<br class="block md:hidden"> <span class="hidden md:inline"> </span>Real Stories.', zh: '真实探店 ·<br class="block md:hidden"> <span class="hidden md:inline"> </span>真实瞬间 ·<br class="block md:hidden"> <span class="hidden md:inline"> </span>真实故事' },
    'social-view-desc':    { ms: 'Terokai siaran terpilih, ulasan dan pengalaman yang dikongsi oleh KOL, pencipta dan pengunjung di TPK Park.', en: 'Explore selected posts, reviews and experiences shared by KOLs, creators and visitors at TPK Park.', zh: '探索 KOL、创作者和访客在 TPK Park 分享的精选帖子、评价和体验。' },

    /* ─── News view ─── */
    'news-view-back':      { ms: 'Laman Utama',         en: 'Homepage',              zh: '主页' },
    'news-view-heading':   { ms: 'Dalam Berita',        en: 'In the News',           zh: '新闻资讯' },
    'news-view-desc':      { ms: 'Liputan media, cerita ciri dan perkembangan terkini tentang evolusi TPK Park daripada taman perindustrian tradisional kepada destinasi Rumah & Gaya Hidup, Hab Automotif dan Gaya Hidup yang diiktiraf di Puchong.', en: "Media coverage, feature stories and updates on TPK Park's evolution from a traditional industrial park into a recognised Home & Living, Auto Hub and Lifestyle destination in Puchong.", zh: '媒体报道、专题故事及 TPK Park 从传统工业园转型为蒲种公认的家居生活、汽车中心与 Lifestyle 目的地的最新进展。' },

    /* ─── Enquiry Modal ─── */
    'enquiry-title':       { ms: 'Buat Pertanyaan',     en: 'Enquire Now',           zh: '立即咨询' },
    'enquiry-subtitle':    { ms: 'Tinggalkan butiran anda dan pasukan kami akan menghubungi anda tidak lama lagi.', en: 'Leave your details and our team will get in touch with you shortly.', zh: '请留下您的信息，我们的团队将尽快与您联系。' },
    'enquiry-label-name':  { ms: 'Nama',                en: 'Name',                  zh: '姓名' },
    'enquiry-label-phone': { ms: 'Nombor Telefon',      en: 'Phone Number',          zh: '电话号码' },
    'enquiry-label-email': { ms: 'E-mel (Pilihan)',     en: 'Email (Optional)',      zh: '邮箱（选填）' },
    'enquiry-label-type':  { ms: 'Jenis Ruang Berminat',en: 'Interested Space Type',  zh: '感兴趣的空间类型' },
    'enquiry-option-unsure':{ ms: 'Belum Pasti / Teroka Pilihan', en: 'Not Sure Yet / Explore Options', zh: '尚未确定 / 了解选项' },
    'enquiry-label-msg':   { ms: 'Mesej (Pilihan)',     en: 'Message (Optional)',    zh: '留言（选填）' },
    'enquiry-submit':      { ms: 'Hantar Pertanyaan',   en: 'Send Enquiry',          zh: '发送咨询' },

    /* ─── How to Win Modal ─── */
    'how-to-win-title':    { ms: 'Cara Menang?',        en: 'How To Win?',           zh: '如何赢奖？' },
    'htw-eligibility':     { ms: 'Kriteria Kelayakan',  en: 'Eligibility Criteria',  zh: '资格条件' },
    'htw-step1':           { ms: 'Berbelanja minimum <span class=\\"font-futura text-brand-dark\\">RM500</span> dalam satu resit (Setiap Bil).', en: 'Spend a minimum of <span class="font-futura text-brand-dark">RM500</span> in a single receipt (Per Bill).', zh: '单张收据消费至少 <span class="font-futura text-brand-dark">RM500</span>。' },
    'htw-step2':           { ms: 'Terima <span class=\\"font-futura text-brand-dark\\">1 Kupon Cabutan Bertuah</span> bagi setiap resit yang layak.', en: 'Receive <span class="font-futura text-brand-dark">1 Lucky Draw Voucher</span> per qualifying receipt.', zh: '每张合格收据可获得 <span class="font-futura text-brand-dark">1 张幸运抽奖券</span>。' },
    'htw-step3':           { ms: 'Setiap kupon mesti dicop dengan <span class=\\"font-futura text-brand-dark\\">Cop Rasmi</span> peniaga yang mengambil bahagian.', en: "Each voucher must be stamped with the participating merchant's <span class=\"font-futura text-brand-dark\">Official Chop</span>.", zh: '每张抽奖券须盖有参与商家的 <span class="font-futura text-brand-dark">正式印章</span>。' },
    'htw-draw-details':    { ms: 'Butiran Cabutan',     en: 'Draw Details',          zh: '抽奖详情' },
    'htw-venue':           { ms: 'Tempat:',             en: 'Venue:',                zh: '地点：' },
    'htw-time':            { ms: 'Masa:',               en: 'Time:',                 zh: '时间：' },
    'htw-venue-value':     { ms: 'MOTD',                en: 'MOTD',                  zh: 'MOTD' },
    'htw-time-value':      { ms: 'Bermula jam 6:00 PTG setiap hari', en: 'Starts at 6:00 PM daily', zh: '每天下午 6:00 开始' },

    /* ─── TNG Modal ─── */
    'tng-modal-title':     { ms: 'Kumpulan Hadiah Cabutan Bertuah', en: 'Lucky Draw Prize Pool', zh: '幸运抽奖奖池' },

    /* ─── Footer ─── */
    'footer-company':      { ms: 'TPK Park Sdn. Bhd. (201001014739 / 898975-X) <span class=\\"text-charcoal-400 font-century font-light\\"><br class=\\"block xl:hidden\\"> (dahulunya dikenali sebagai HomeBlog Sdn. Bhd.)</span>', en: 'TPK Park Sdn. Bhd. (201001014739 / 898975-X) <span class="text-charcoal-400 font-century font-light"><br class="block xl:hidden">(formerly known as HomeBlog Sdn. Bhd.)</span>', zh: 'TPK Park Sdn. Bhd. (201001014739 / 898975-X) <span class="text-charcoal-400 font-century font-light"><br class="block xl:hidden">（前身为 HomeBlog Sdn. Bhd.）</span>' },
    'footer-address':      { ms: '2 Jalan TPK 1/4 Tmn Perindustrian Kinrara, 47180 Puchong Selangor, Malaysia', en: '2 Jalan TPK 1/4 Tmn Perindustrian Kinrara, 47180 Puchong Selangor, Malaysia', zh: '2 Jalan TPK 1/4 金銮工业园, 47180 蒲种, 雪兰莪, 马来西亚' },
    'footer-phone':        { ms: '+60 3 8076 5200',     en: '+60 3 8076 5200',       zh: '+60 3 8076 5200' },

    /* ─── Badges ─── */
    'badge-top':           { ms: 'Teratas',             en: 'Top',                   zh: '精选' },
    'badge-sponsored':     { ms: 'Ditaja',              en: 'Sponsored',             zh: '赞助' },

    /* ─── FAQ view (prepared for later) ─── */
    'faq-view-back':       { ms: 'Laman Utama',         en: 'Homepage',              zh: '主页' },
    'faq-heading':         { ms: 'Soalan Lazim',        en: 'Frequently Asked Questions', zh: '常见问题' },
    'faq-desc':            { ms: 'Segala yang anda perlu tahu tentang TPK Park — lokasi, jenama, pajakan, acara dan banyak lagi.', en: 'Everything you need to know about TPK Park — location, brands, leasing, events and more.', zh: '关于 TPK Park 您需要了解的一切 — 位置、品牌、租赁、活动等。' },
    'faq.title':           { ms: 'Soalan Lazim',        en: 'Frequently Asked Questions', zh: '常见问题' },
    'faq.desc':            { ms: 'Segala yang anda perlu tahu tentang TPK Park — lokasi, jenama, pajakan, acara dan banyak lagi.', en: 'Everything you need to know about TPK Park — location, brands, leasing, events and more.', zh: '关于 TPK Park 您需要了解的一切 — 位置、品牌、租赁、活动等。' },
    'faq.q1':              { ms: 'Apa itu TPK Park?',    en: 'What is TPK Park?',      zh: '什么是 TPK Park？' },
    'faq.a1':              { ms: 'TPK Park adalah destinasi utama Home & Living, Auto Hub dan Lifestyle di Puchong yang terletak di sepanjang Lebuhraya Bukit Jalil di Taman Perindustrian Kinrara, Puchong, Selangor.', en: 'TPK Park is Puchong\'s premier Home & Living, Auto Hub and Lifestyle destination located along the Bukit Jalil Highway in Taman Perindustrian Kinrara, Puchong, Selangor.', zh: 'TPK Park 是蒲种首屈一指的家居生活、汽车中心和生活方式目的地，位于蒲种金銮工业园的武吉加里尔大道旁。' },
    'faq.q2':              { ms: 'Di mana lokasi TPK Park?', en: 'Where is TPK Park located?', zh: 'TPK Park 在哪里？' },
    'faq.a2':              { ms: 'TPK Park terletak di Taman Perindustrian Kinrara, di sepanjang Lebuhraya Bukit Jalil, Puchong, Selangor, Malaysia. Ia mudah diakses dari lebuhraya utama termasuk Lebuhraya Bukit Jalil, LDP, dan Lebuhraya Puchong-Salak.', en: 'TPK Park is located at Taman Perindustrian Kinrara (Kinrara Industrial Park), along the Bukit Jalil Highway, Puchong, Selangor, Malaysia.', zh: 'TPK Park 位于马来西亚雪兰莪蒲种金銮工业园，沿武吉加里尔大道，可通过多条主要高速公路轻松抵达。' },
    'faq.q3':              { ms: 'Apakah waktu operasi TPK Park?', en: 'What are the operating hours of TPK Park?', zh: 'TPK Park 的营业时间？' },
    'faq.a3':              { ms: 'Jenama-jenama individu menetapkan waktu operasi masing-masing. Pejabat pengurusan TPK Park dibuka 9:00 PG hingga 5:00 PTG Isnin hingga Jumaat dan 9:00 PG hingga 12:00 TH Sabtu.', en: 'Individual brand outlets set their own operating hours. TPK Park management office is open 9:00 AM to 5:00 PM Monday to Friday and 9:00 AM to 12:00 PM Saturday.', zh: '各个品牌门店自行设定营业时间。TPK Park 管理办公时间为周一至周五上午 9:00 至下午 5:00，周六上午 9:00 至中午 12:00。' },
    'faq.q4':              { ms: 'Apakah jenama-jenama di TPK Park?', en: 'What brands and businesses are at TPK Park?', zh: 'TPK Park 有哪些品牌和商家？' },
    'faq.a4':              { ms: 'TPK Park menampilkan jenama home & living terkemuka termasuk Kuche+BaTH, BMS Jubin, V Haus Living, BUILTOP, Baagus, Balens Design, Gahing, Lavino, dan Signature. Taman ini juga menawarkan perkhidmatan automotif, pilihan makanan & minuman, dan perniagaan gaya hidup.', en: 'TPK Park features top home and living brands including Kuche+BaTH, BMS Jubin, V Haus Living, BUILTOP, Baagus, Balens Design, Gahing, Lavino, and Signature.', zh: 'TPK Park 汇聚了顶级家居生活品牌，包括 Kuche+BaTH、BMS Jubin、V Haus Living、BUILTOP、Baagus、Balens Design、Gahing、Lavino 和 Signature。' },
    'faq.q5':              { ms: 'Adakah tempat letak kereta disediakan?', en: 'Is there parking at TPK Park?', zh: 'TPK Park 有停车场吗？' },
    'faq.a5':              { ms: 'Ya, TPK Park menyediakan tempat letak kereta percuma yang luas untuk pengunjung.', en: 'Yes, TPK Park offers ample free parking for visitors.', zh: '有的，TPK Park 为访客提供充足的免费停车位。' },
    'faq.q6':              { ms: 'Bagaimana untuk ke TPK Park dari KL?', en: 'How do I get to TPK Park from KL?', zh: '如何从吉隆坡前往 TPK Park？' },
    'faq.a6':              { ms: 'Dari Kuala Lumpur, ambil Lebuhraya Bukit Jalil menuju ke selatan ke arah Puchong. TPK Park terletak di sepanjang lebuhraya di Taman Perindustrian Kinrara, kira-kira 20 minit dari pusat bandar KL.', en: 'From Kuala Lumpur, take the Bukit Jalil Highway heading south toward Puchong. TPK Park is located along the highway in Taman Perindustrian Kinrara, approximately 20 minutes from KL city centre.', zh: '从吉隆坡出发，沿武吉加里尔大道向南往蒲种方向行驶。TPK Park 位于金銮工业园大道旁，距离吉隆坡市中心约 20 分钟车程。' },
    'faq.q7':              { ms: 'Apakah pilihan makanan di TPK Park?', en: 'What dining and F&B options are available at TPK Park?', zh: 'TPK Park 有哪些餐饮选择？' },
    'faq.a7':              { ms: 'TPK Park menawarkan pelbagai pilihan makanan dari masakan tempatan Malaysia hingga makanan antarabangsa.', en: 'TPK Park offers a variety of dining options ranging from local Malaysian cuisine to international food.', zh: 'TPK Park 提供从本地马来西亚美食到国际美食的各种餐饮选择。' },
    'faq.q8':              { ms: 'Adakah peluang pajakan di TPK Park?', en: 'Are there leasing opportunities at TPK Park?', zh: 'TPK Park 有租赁机会吗？' },
    'faq.a8':              { ms: 'Ya, TPK Park menawarkan ruang komersial yang sedia untuk perniagaan. Untuk pertanyaan, hubungi kami di +603-8076 5200 atau melalui borang Pertanyaan di laman web kami.', en: 'Yes, TPK Park offers business-ready commercial spaces for lease. For enquiries, contact us at +603-8076 5200 or via the Enquiry form on our website.', zh: '是的，TPK Park 提供适合商业租赁的空间。如需咨询，请致电 +603-8076 5200 或通过我们网站上的咨询表格联系我们。' },
    'faq.q9':              { ms: 'Apakah perkhidmatan automotif yang ada?', en: 'What automotive services are available at TPK Park?', zh: 'TPK Park 有哪些汽车服务？' },
    'faq.a9':              { ms: 'TPK Park menampilkan Hub Automotif dengan perkhidmatan termasuk ruang pameran kereta, bengkel, servis tayar dan bateri, aksesori kereta, dan pusat penyelenggaraan kenderaan.', en: 'TPK Park features an Auto Hub with automotive services including car showrooms, workshops, tyre and battery services, car accessories, and vehicle maintenance centres.', zh: 'TPK Park 设有汽车中心，提供汽车展示厅、维修车间、轮胎电池服务、汽车配件和车辆保养中心等服务。' },
    'faq.q10':             { ms: 'Bolehkah saya mengadakan acara di TPK Park?', en: 'Can I host an event at TPK Park?', zh: '我可以在 TPK Park 举办活动吗？' },
    'faq.a10':             { ms: 'Ya, TPK Park mengadakan acara tetap seperti Karnival Home Carnival. Hubungi pasukan pengurusan melalui borang pertanyaan untuk tempahan ruang acara.', en: 'Yes, TPK Park hosts regular events such as the Home Carnival. Contact the management team through our enquiry form for event space booking.', zh: '是的，TPK Park 定期举办 Home Carnival 等活动。通过我们的咨询表格联系管理团队预订活动场地。' },
    'faq.q11':             { ms: 'Adakah TPK Park sesuai untuk keluarga?', en: 'Is TPK Park suitable for families?', zh: 'TPK Park 适合家庭吗？' },
    'faq.a11':             { ms: 'Semestinya. TPK Park adalah destinasi mesra keluarga dengan membeli-belah, makan, dan aktiviti gaya hidup yang sesuai untuk semua peringkat umur.', en: 'Absolutely. TPK Park is a family-friendly destination with home improvement shopping, dining, and lifestyle activities suitable for all ages.', zh: '当然。TPK Park 是一个适合家庭的目的地，提供家居装修购物、餐饮和适合各年龄段的生活方式活动。' },
    'faq.q12':             { ms: 'Apakah jenama pengubahsuaian rumah di TPK Park?', en: 'What home improvement and renovation brands can I find at TPK Park?', zh: 'TPK Park 有哪些家居装修品牌？' },
    'faq.a12':             { ms: 'TPK Park adalah destinasi sehenti untuk keperluan pengubahsuaian rumah, menampilkan jenama seperti BUILTOP, BMS Jubin, Lavino, Baagus, dan Balens Design.', en: 'TPK Park is a one-stop destination for home renovation needs, featuring brands like BUILTOP, BMS Jubin, Lavino, Baagus, and Balens Design.', zh: 'TPK Park 是家居装修需求的一站式目的地，拥有 BUILTOP、BMS Jubin、Lavino、Baagus 和 Balens Design 等品牌。' },
    'faq.q13':             { ms: 'Bagaimana cara menghubungi pengurusan TPK Park?', en: 'How do I contact TPK Park management?', zh: '如何联系 TPK Park 管理层？' },
    'faq.a13':             { ms: 'Anda boleh menghubungi pengurusan TPK Park melalui telefon di +603-8076 5200, emel di info@tpkpark.com, borang Pertanyaan di laman web www.tpkpark.com, atau ikuti kami di media sosial @tpkpark di Facebook, Instagram, dan TikTok.', en: 'You can contact TPK Park management by phone at +603-8076 5200, via email at info@tpkpark.com, through the Enquiry form on our website, or follow us on social media @tpkpark.', zh: '您可以通过电话 +603-8076 5200、电子邮件 info@tpkpark.com、网站上的咨询表格或关注我们的社交媒体 @tpkpark（Facebook、Instagram、TikTok）联系 TPK Park 管理层。' },
    'faq.q14':             { ms: 'Apakah pilihan gaya hidup di TPK Park?', en: 'What lifestyle and leisure options are at TPK Park?', zh: 'TPK Park 有哪些生活方式选择？' },
    'faq.a14':             { ms: 'Selain home improvement dan automotif, TPK Park menawarkan pengalaman gaya hidup termasuk membeli-belah hiasan rumah, perabot, konsultasi reka bentuk dalaman, dan santapan santai.', en: 'Beyond home improvement and automotive, TPK Park offers lifestyle experiences including shopping for home decor, furniture, interior design consultations, and leisure dining.', zh: '除了家居装修和汽车服务外，TPK Park 还提供家居装饰购物、家具、室内设计咨询和休闲餐饮等生活方式体验。' },
    'faq.q15':             { ms: 'Adakah TPK Park sama dengan Taman Perindustrian Kinrara?', en: 'Is TPK Park the same as Taman Perindustrian Kinrara?', zh: 'TPK Park 和 Taman Perindustrian Kinrara 是同一个地方吗？' },
    'faq.a15':             { ms: 'Ya, TPK Park (singkatan untuk Taman Perindustrian Kinrara Park) adalah penjenamaan moden untuk Taman Perindustrian Kinrara di Puchong, yang telah diubah dari taman perindustrian tradisional menjadi destinasi Home & Living, Auto Hub dan Lifestyle yang meriah.', en: 'Yes, TPK Park (short for Taman Perindustrian Kinrara Park) is the modern branding for the Kinrara Industrial Park in Puchong.', zh: '是的，TPK Park（Taman Perindustrian Kinrara Park 的缩写）是蒲种金銮工业园的现代品牌名称。' },

    /* ─── TNG Modal Lucky Draw Pool ─── */
    'lucky-draw-pool':     { ms: 'Kumpulan Hadiah Cabutan Bertuah', en: 'Lucky Draw Prize Pool', zh: '幸运抽奖奖池' },
    'total-prize-pool':    { ms: 'Jumlah Nilai Hadiah:', en: 'Total Prize Pool Value:', zh: '奖品总值：' },
    'more-than-10k':       { ms: 'Lebih RM10,000',      en: 'More than RM10,000',    zh: '超过 RM10,000' },

    /* ─── Various ─── */
    'homepage':            { ms: 'Laman Utama',         en: 'Homepage',              zh: '主页' },
    'view-unit-details':   { ms: 'Lihat Butiran Unit',  en: 'View Unit Details',     zh: '查看单位详情' },
    'how-to-win-modal':    { ms: 'Cara Menang?',        en: 'How To Win?',           zh: '如何赢奖？' },
    'eligibility-criteria':{ ms: 'Kriteria Kelayakan',  en: 'Eligibility Criteria',  zh: '资格条件' },
    'draw-details':        { ms: 'Butiran Cabutan',     en: 'Draw Details',          zh: '抽奖详情' },
  };

  /* ─── Get stored language or default ─── */
  function getLang() {
    var stored;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) { /* noop */ }
    return stored || DEFAULT_LANG;
  }

  /* ─── Apply translations ─── */
  function applyLang(lang) {
    if (!lang) lang = getLang();

    document.documentElement.lang = lang === 'zh' ? 'zh-MY' : lang === 'ms' ? 'ms-MY' : 'en-MY';

    // Translate all elements with data-i18n
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      if (!key || !T[key]) continue;
      var val = T[key][lang] || T[key].en || '';
      // data-i18n-attr overrides: if set to 'placeholder', set placeholder instead
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, val);
      } else {
        el.innerHTML = val;
      }
    }

    // Translate placeholder attributes
    var placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < placeholderEls.length; j++) {
      var pel = placeholderEls[j];
      var pkey = pel.getAttribute('data-i18n-placeholder');
      if (!pkey || !T[pkey]) continue;
      pel.setAttribute('placeholder', T[pkey][lang] || T[pkey].en || '');
    }

    // Translate value attributes (for select options etc)
    var valueEls = document.querySelectorAll('[data-i18n-value]');
    for (var k = 0; k < valueEls.length; k++) {
      var vel = valueEls[k];
      var vkey = vel.getAttribute('data-i18n-value');
      if (!vkey || !T[vkey]) continue;
      vel.textContent = T[vkey][lang] || T[vkey].en || '';
    }

    // Dispatch a custom event so other scripts can react
    var evt = new CustomEvent('langchange', { detail: { lang: lang } });
    document.dispatchEvent(evt);
  }

  /* ─── Switch language (function declaration for onclick compat) ─── */
  window.switchLang = function switchLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* noop */ }
    applyLang(lang);
    closeLangPicker();
  };

  /* ─── Language picker helpers ─── */
  window.toggleLangPicker = function toggleLangPicker() {
    var picker = document.getElementById('langPickerDropdown');
    if (!picker) return;
    var isOpen = picker.classList.contains('opacity-100');
    if (isOpen) {
      closeLangPicker();
    } else {
      picker.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
      picker.classList.add('opacity-100', 'visible', 'pointer-events-auto');
    }
  };

  window.closeLangPicker = function closeLangPicker() {
    var picker = document.getElementById('langPickerDropdown');
    if (!picker) return;
    picker.classList.add('opacity-0', 'invisible', 'pointer-events-none');
    picker.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
  };

  /* ─── Init on DOM ready ─── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyLang(getLang());
    });
  } else {
    applyLang(getLang());
  }

  // Expose T for debugging
  window.__T = T;
  window.__getLang = getLang;
})();
