/**
 * Enas Hasan Portfolio - Interactive JavaScript Engine
 * Language Switcher (AR/EN), Lightbox, Mobile Nav & Gallery Switchers
 */

// --- Translations Dictionary (Arabic Primary & English Secondary) ---
const translations = {
    ar: {
        // Nav
        nav_about: "نبذة عني",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_uiux: "تصاميم UI/UX",
        nav_contact: "تواصل معي",
        btn_cv: "تواصل معي",

        // Hero
        hero_badge: "مهندسة برمجيات 2026 • السيرة الذاتية الرقمية ومعرض الأعمال",
        hero_greeting: "مرحباً، أنا",
        hero_name: "إيناس حسن",
        hero_role: "مهندسة برمجيات ومطوّرة ويب واجهات أمامية",
        hero_desc: "خريجة هندسة وتقنية البرمجيات لعام 2026 من كلية تقنية الحاسوب - غوط الشعال. متخصصة في بناء وتطوير تطبيقات ويب حديثة وعالية الأداء باستخدام Vue 3 و TypeScript، إلى جانب تصميم واجهات وتجربة المستخدم (UI/UX) في Figma.",
        btn_explore: "استعراض المشاريع",
        btn_figma_quick: "تصاميم Figma",
        btn_download_cv: "تحميل / طباعة CV",
        stat_grad: "سنة التخرج",
        stat_grad_val: "2026",
        stat_focus: "التركيز الأساسي",
        stat_focus_val: "Vue 3 & TS",
        stat_design: "أداة التصميم",
        stat_design_val: "Figma UI/UX",
        badge_vue: "Vue 3 & TypeScript",
        badge_figma: "تصميم واجهات في Figma",

        // About
        about_tag: "الملف المهني",
        about_title: "بناء واجهات برمجية تجمع بين رصانة الهندسة وسلاسة التصميم",
        about_subtitle: "الربط بين الفكر التصميمي لتجربة المستخدم (UI/UX) والتطوير البرمجي المنظم وقابل للتوسع.",
        about_p1: "أنا خريجة في هندسة وتقنية البرمجيات، أمتلك شغفاً كبيراً بتطوير الواجهات الأمامية للويب وبناء الحلول الرقمية المتكاملة. منحني مساري الأكاديمي أساساً متيناً في معمارية البرمجيات، وتصميم وتوصيف قواعد البيانات، وإدارة دورة حياة المشروع البرمجي.",
        about_p2: "من خلال مشروعي التخرج 'يقين' وتصميمي لواجهات نظام شركة الشحن 'بريمولا'، اكتسبت خبرة تطبيقية في تحويل متطلبات الأنظمة إلى واجهات سلسة وسريعة الاستجابة. يمثل هذا الموقع سيرتي الذاتية التفاعلية المعتمدة.",
        edu_title: "بكالوريوس في تقنية وهندسة البرمجيات",
        edu_meta: "كلية تقنية الحاسوب - غوط الشعال • دفعة ربيع 2026",
        val1_title: "كود نظيف وهيكلية معيارية",
        val1_desc: "كتابة شيفرات برمجية قابلة للصيانة وإعادة الاستخدام وفق أحدث معايير المكونات والأنماط.",
        val2_title: "دقة تحويل التصميم إلى كود",
        val2_desc: "تحويل المخططات والنماذج من Figma إلى واجهات ويب حقيقية متجاوبة ومتطابقة بأعلى دقة.",
        val3_title: "روح الفريق والمنهجيات الحديثة",
        val3_desc: "القدرة على العمل والتنسيق الفعّال ضمن فرق العمل المتوازية (Parallel Teams).",
        val4_title: "التطوير البرمجي المستمر",
        val4_desc: "توسيع مهاراتي باستمرار، وأعمل حالياً على تعميق معرفتي بإطار العمل React.js.",

        // Skills
        skills_tag: "القدرات التقنية",
        skills_title: "المهارات والتقنيات البرمجية",
        skills_subtitle: "تصنيف شفاف وواضح يميّز بين التقنيات المستخدمة في مشاريع واقعية والتقنيات قيد التعلم المستمر.",
        cat_frontend: "تطوير الواجهات الأمامية (Frontend)",
        cat_backend: "الواجهات الخلفية وقواعد البيانات",
        cat_design: "تصميم واجهات وتجربة المستخدم (UI/UX)",
        cat_learning: "تقنيات قيد التعلم والتطوير",
        cat_soft: "المهارات الهندسية والشخصية",
        badge_applied: "خبرة عملية وتطبيقية",
        badge_active_learn: "قيد التعلم حالياً",
        badge_uiux: "تصميم ونمذجة",

        // Projects
        projects_tag: "دراسات الحالة والمشاريع",
        projects_title: "المشاريع المنفذة ودراسات الحالة",
        projects_subtitle: "استعراض تفصيلي لأهم المشاريع الهندسية والتطبيقية بأسلوب دراسة الحالة.",
        view_figma: "فتح نموذج Figma التفاعلي",
        zoom_hint: "انقر لتكبير لقطة الشاشة",

        // Yaqeen
        yaqeen_tag: "مشروع التخرج المعتمد 2026",
        yaqeen_title: "يقين (Yaqeen) — منصة ويب ذكية لاكتشاف تزييف الوجوه بالذكاء الاصطناعي",
        yaqeen_prob_title: "المشكلة والتحدي",
        yaqeen_prob_desc: "أدى الانتشار الهائل لتقنيات الذكاء الاصطناعي التوليدي والتزييف العميق (Deepfakes) إلى تهديد مصداقية الأدلة الرقمية وصعوبة التمييز بالعين المجردة. كان التحدي بناء منصة ويب متكاملة تجمع بين فحص الوجوه والتحليل الجنائي السريع.",
        yaqeen_sol_title: "الحل الهندسي المنفذ",
        yaqeen_sol_desc: "نظام ويب ذكي يعتمد على معمارية هجينة تجمع بين نماذج التعلم العميق (EfficientNet-B3 مع شبكة الكبسولات CapsuleNet) وأدوات التحليل الجنائي الرقمي (تحليل مستوى الخطأ ELA والبيانات الوصفية EXIF) مع خرائط حرارية تفسيرية (Explainable AI).",
        yaqeen_role_title: "دوري المحدد في المشروع:",
        yaqeen_role_1: "تطوير الواجهات الأمامية للويب ولوحة التحكم الإدارية بالكامل باستخدام Vue 3 و TypeScript و Vite.",
        yaqeen_role_2: "تصميم وتطوير مسارات تفاعل المستخدم لرفع الصور، ومحاذاة الوجوه المستخلصة، وعرض تقارير الفحص والنتائج الجنائية.",
        yaqeen_role_3: "ربط وتكامل الواجهة الأمامية مع واجهة برمجة التطبيقات (Flask API) وإدارة تدفق البيانات مع Microsoft SQL Server.",

        // Primula
        primula_tag: "تصميم واجهات نظام لشركة بريمولا (Figma)",
        primula_title: "نظام شركة بريمولا (Primula) — تصميم واجهات وتجربة مستخدم لنظام إدارة الشحن والطلبيات",
        primula_prob_title: "المشكلة وسياق العمل",
        primula_prob_desc: "شركة بريمولا هي شركة شحن واستيراد طلبيات لزبائنها من المواقع العالمية. واجهت الشركة تحديات تشغيلية كبيرة في فترات الذروة بسبب الأنظمة اليدوية المتفرقة، مما أدى إلى صعوبة تتبع الشحنات وبطء معالجة الطلبات وضعف التواصل بين الأقسام.",
        primula_sol_title: "الحل التصميمي وتجربة المستخدم في Figma",
        primula_sol_desc: "تصميم واجهات وتجربة استخدام متكاملة في Figma لنظام يربط العملاء والموظفين والمندوبين والإدارة. شمل التصميم شاشات تفاعلية لإدارة الطلبيات، ومتابعة الشحنات، وإصدار الفواتير، ونماذج الهاتف المحمول.",
        primula_role_title: "دوري في المشروع والأمانة المهنية:",
        primula_role_1: "المسؤولة عن تحليل وتصميم واجهات وتجربة المستخدم (UI/UX Design) بالكامل باستخدام Figma وبناء النماذج التفاعلية للشاشات.",
        primula_role_2: "تحليل وتوصيف حالات الاستخدام (Use Cases) وتصميم تدفق العمليات من تسجيل الشحنة وحتى التسليم للعميل.",
        primula_notice: "توضيح للأمانة المهنية والعلمية: اقتصر دوري في هذا المشروع على دراسة وتحليل النظام وتصميم واجهات وتجربة المستخدم (UI/UX) باستخدام Figma. تولى فريق الطلاب الآخرين برمجة النظام، وتم اعتماد النظام رسمياً واستخدامه فعلياً من قبل شركة بريمولا.",

        // UI/UX Section
        uiux_tag: "معرض تصاميم UI/UX",
        uiux_title: "التصميم المتمحور حول تجربة المستخدم في Figma",
        uiux_subtitle: "كل تطبيق ويب ناجح يبدأ بتحليل المتطلبات وتخطيط واجهات نظيفة وتجربة استخدام سهلة.",
        step1_title: "البحث والتحليل",
        step1_desc: "فهم متطلبات أصحاب المصلحة وتخطيط مسارات المستخدم (User Journey).",
        step2_title: "المخططات الهيكلية (Wireframes)",
        step2_desc: "رسم الهيكل العام للشاشات مع التركيز على سهولة الوصول والتسلسل البصري.",
        step3_title: "نظم التصميم (Design Systems)",
        step3_desc: "بناء مكونات قابلة لإعادة الاستخدام وتحديد لوحات ألوان وخطوط متناسقة.",
        step4_title: "النماذج التفاعلية (Prototypes)",
        step4_desc: "إنشاء نماذج حية تحاكي التطبيق الفعلي واختبار سهولة الاستخدام قبل مرحلة البرمجة.",
        figma_cta_title: "تصفح مشروع شركة بريمولا التفاعلي على Figma",
        figma_cta_desc: "يمكنك استعراض ملف التصميم الكامل والمكونات والشاشات التفاعلية مباشرة على منصة Figma.",
        btn_open_figma: "فتح نموذج Figma التفاعلي",

        // Contact
        contact_tag: "تواصل معي",
        contact_title: "معلومات التواصل المباشر",
        contact_subtitle: "يسعدني تواصلكم عبر البريد الإلكتروني أو الهاتف أو التيليجرام.",
        info_email: "البريد الإلكتروني",
        info_phone: "رقم الهاتف",
        info_loc: "الموقع",
        info_loc_val: "طرابلس، ليبيا",
        info_status: "الحالة المهنية",
        info_status_val: "جاهزة ومتاحة للعمل • دوام كامل أو عن بُعد",
        form_name: "الاسم الكريم",
        form_email: "البريد الإلكتروني",
        form_msg: "تفاصيل الرسالة أو الاستفسار",
        btn_send: "إرسال الرسالة",
        form_success: "شكراً لتواصلك! سأقوم بالرد عليك في أقرب وقت ممكن.",

        // Footer
        footer_rights: "جميع الحقوق محفوظة.",
        footer_built: "مبني باستخدام HTML5 و CSS3 المتقدم و JavaScript الصافي."
    },

    en: {
        // Nav
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_uiux: "UI/UX Designs",
        nav_contact: "Contact",
        btn_cv: "Contact Me",

        // Hero
        hero_badge: "Software Engineer '26 • Interactive Digital CV & Portfolio",
        hero_greeting: "Hello, I'm",
        hero_name: "Enas Hasan",
        hero_role: "Software Engineer & Web Developer",
        hero_desc: "Software Engineering graduate (Class of 2026) from the College of Computer Technology - Ghot Al-Shaal, Tripoli. Specialized in building clean, high-performance web applications using Vue 3 and TypeScript, alongside human-centered UI/UX design in Figma.",
        btn_explore: "View Projects",
        btn_figma_quick: "Figma Designs",
        btn_download_cv: "Download / Print CV",
        stat_grad: "Graduation",
        stat_grad_val: "2026",
        stat_focus: "Primary Focus",
        stat_focus_val: "Vue 3 & TS",
        stat_design: "Design Tool",
        stat_design_val: "Figma UI/UX",
        badge_vue: "Vue 3 & TypeScript",
        badge_figma: "UI/UX in Figma",

        // About
        about_tag: "Professional Profile",
        about_title: "Engineering Robust Web Solutions with Intuitive Design",
        about_subtitle: "Combining systematic software architecture with human-centered UI/UX design.",
        about_p1: "I am a Software Engineering graduate with a strong focus on modern frontend engineering and scalable web systems. My engineering training grounded me in clean software architecture, database modeling, and complete system development lifecycle.",
        about_p2: "Through my flagship graduation platform 'Yaqeen' and enterprise UI/UX work for 'Primula Shipping', I have demonstrated the ability to turn complex enterprise requirements into pixel-perfect, accessible, and high-performance web interfaces. This portfolio serves as my official digital CV.",
        edu_title: "B.Sc. in Software Engineering & Technology",
        edu_meta: "College of Computer Technology - Ghot Al-Shaal, Tripoli • Class of Spring 2026",
        val1_title: "Clean Code & Modularity",
        val1_desc: "Writing maintainable, typed, and scalable code following modern component patterns.",
        val2_title: "Design-to-Code Precision",
        val2_desc: "Translating Figma wireframes and design tokens into responsive, pixel-perfect layouts.",
        val3_title: "Agile & Team Collaboration",
        val3_desc: "Experience collaborating in parallel development teams and delivering to real enterprises.",
        val4_title: "Continuous Technical Growth",
        val4_desc: "Continuously expanding my capabilities with modern ecosystems like React.js and modern tooling.",

        // Skills
        skills_tag: "Technical Stack",
        skills_title: "Skills & Technical Capabilities",
        skills_subtitle: "A transparent breakdown distinguishing between hands-on production experience and actively developing skills.",
        cat_frontend: "Frontend Development",
        cat_backend: "Backend & Database",
        cat_design: "UI/UX & Prototyping",
        cat_learning: "Currently Expanding",
        cat_soft: "Engineering & Professional Skills",
        badge_applied: "Hands-on Experience",
        badge_active_learn: "Currently Learning",
        badge_uiux: "Design & Systems",

        // Projects
        projects_tag: "Featured Case Studies",
        projects_title: "Key Projects & Case Studies",
        projects_subtitle: "In-depth case studies of real academic and enterprise accomplishments.",
        view_figma: "Open Figma Prototype",
        zoom_hint: "Click to view full screenshot",
        
        // Yaqeen
        yaqeen_tag: "Flagship Graduation Project 2026",
        yaqeen_title: "Yaqeen — AI Face Detection & Digital Forensics Web Platform",
        yaqeen_prob_title: "The Problem & Challenge",
        yaqeen_prob_desc: "The surge of generative AI and deepfakes poses severe security and verification threats that cannot be detected by the naked eye. The objective was engineering a comprehensive web platform for real-time face extraction, deep learning classification, and forensic transparency.",
        yaqeen_sol_title: "The Engineered Solution",
        yaqeen_sol_desc: "A multi-tiered web platform combining hybrid deep learning (EfficientNet-B3 + CapsuleNet with dynamic routing) with digital forensic tools (Error Level Analysis - ELA and EXIF metadata extraction) to produce Explainable AI inspection reports.",
        yaqeen_role_title: "My Specific Responsibilities & Contribution:",
        yaqeen_role_1: "Developed the entire responsive client-side web application and Admin Dashboard using Vue 3, TypeScript, and Vite.",
        yaqeen_role_2: "Engineered intuitive UI workflows for image upload, real-time face alignment cropping previews, and forensic heatmaps.",
        yaqeen_role_3: "Integrated frontend state with the Python/Flask REST API and managed data exchange with Microsoft SQL Server.",

        // Primula
        primula_tag: "System UI/UX Design for Primula Co. (Figma)",
        primula_title: "Primula — Order Shipping & Logistics System UI/UX Design",
        primula_prob_title: "Business Problem & Context",
        primula_prob_desc: "Primula, a growing shipping and international orders delivery enterprise, relied on manual and fragmented procedures, leading to operational bottlenecks during peak times, tracking inaccuracies, and inter-department coordination challenges.",
        primula_sol_title: "System Analysis & UI/UX Solution in Figma",
        primula_sol_desc: "Engineered a centralized, multi-tier system interface in Figma connecting customers, branch offices, and warehouse logistics. Created unified workflows for order placement, shipment tracking, automated invoicing, and representative routing.",
        primula_role_title: "My Specific Role & Academic Transparency:",
        primula_role_1: "Responsible for complete UI/UX Design and Prototyping in Figma, crafting all desktop and mobile interface screens.",
        primula_role_2: "Conducted system analysis, use-case modeling, and interactive wireframes for order lifecycle tracking.",
        primula_notice: "Academic & Professional Integrity Note: My role in this project was strictly UI/UX design, user experience workflows, and system analysis in Figma. The system was programmed by fellow student developers, and was officially adopted and deployed by Primula.",

        // UI/UX Section
        uiux_tag: "UI/UX Design Portfolio",
        uiux_title: "Human-Centered Design in Figma",
        uiux_subtitle: "Every clean web application starts with intentional research, wireframes, and scalable design systems.",
        step1_title: "Research & Analysis",
        step1_desc: "Understanding stakeholder requirements and drafting clear user journey maps.",
        step2_title: "Wireframing",
        step2_desc: "Low-fidelity structural layouts focused on hierarchy and navigation ease.",
        step3_title: "Design Systems",
        step3_desc: "Reusable component tokens, consistent typography scales, and accessible color palettes.",
        step4_title: "Interactive Prototype",
        step4_desc: "High-fidelity clickable prototypes tested for usability prior to developer handoff.",
        figma_cta_title: "Explore the Live Primula System in Figma",
        figma_cta_desc: "Inspect the complete design file, components, screens, and user interaction flows on Figma.",
        btn_open_figma: "Open Figma Prototype",

        // Contact
        contact_tag: "Get in Touch",
        contact_title: "Let's Connect & Discuss Opportunities",
        contact_subtitle: "Feel free to reach out directly via email, phone, or Telegram.",
        info_email: "Email Address",
        info_phone: "Phone Number",
        info_loc: "Location",
        info_loc_val: "Tripoli, Libya",
        info_status: "Availability",
        info_status_val: "Immediate / Full-time, On-site & Remote",
        form_name: "Your Name",
        form_email: "Your Email",
        form_msg: "Your Message",
        btn_send: "Send Message",
        form_success: "Thank you for reaching out! I will respond promptly.",

        // Footer
        footer_rights: "All rights reserved.",
        footer_built: "Engineered with semantic HTML5, Modern CSS & Clean JavaScript."
    }
};

// Current Language State (Default: Arabic)
let currentLang = localStorage.getItem('enas_portfolio_lang') || 'ar';

// Apply Language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('enas_portfolio_lang', lang);

    const isRtl = lang === 'ar';
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    // Update text content of all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update button text
    const langBtnText = document.getElementById('langBtnLabel');
    if (langBtnText) {
        langBtnText.textContent = isRtl ? 'English' : 'عربي';
    }
}

// Toggle Language
function toggleLanguage() {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

// Print / Save CV helper
function printPortfolioCV() {
    window.print();
}

// --- DOM Ready Initializer ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Language to Arabic
    setLanguage(currentLang);

    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', toggleLanguage);
    }
    const mobileLangToggle = document.getElementById('mobileLangToggle');
    if (mobileLangToggle) {
        mobileLangToggle.addEventListener('click', () => {
            toggleLanguage();
            closeMobileDrawer();
        });
    }

    // Print CV buttons
    const cvButtons = document.querySelectorAll('.btn-print-cv');
    cvButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            printPortfolioCV();
        });
    });

    // 2. Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    
    function openMobileDrawer() {
        mobileDrawer.classList.add('open');
        mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = 'hidden';
    }

    function closeMobileDrawer() {
        mobileDrawer.classList.remove('open');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
    }

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            if (mobileDrawer.classList.contains('open')) {
                closeMobileDrawer();
            } else {
                openMobileDrawer();
            }
        });

        // Close drawer when any nav link is clicked
        mobileDrawer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeMobileDrawer);
        });
    }

    // 3. Header Scroll Effect
    const siteHeader = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    // 4. Project Image Gallery Switcher
    setupGallery('yaqeenGallery');
    setupGallery('primulaGallery');

    function setupGallery(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const mainImg = container.querySelector('.gallery-main-img');
        const thumbs = container.querySelectorAll('.gallery-thumb-item');

        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const targetSrc = thumb.getAttribute('data-img');
                const targetCaption = thumb.getAttribute('data-caption') || '';
                
                if (mainImg && targetSrc) {
                    mainImg.src = targetSrc;
                    mainImg.setAttribute('data-caption', targetCaption);
                }

                thumbs.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });

        // Clicking on main image opens lightbox
        const mainFrame = container.querySelector('.gallery-main-frame');
        if (mainFrame && mainImg) {
            mainFrame.addEventListener('click', () => {
                const caption = mainImg.getAttribute('data-caption') || mainImg.alt;
                openLightbox(mainImg.src, caption);
            });
        }
    }

    // 5. Lightbox Modal
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    function openLightbox(src, caption) {
        if (!lightboxModal) return;
        lightboxImg.src = src;
        lightboxCaption.textContent = caption || '';
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });

    // 6. Contact Form Simulation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';

            setTimeout(() => {
                alert(translations[currentLang].form_success);
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 800);
        });
    }
});
