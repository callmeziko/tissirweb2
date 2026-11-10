/* ============================================================
   TISSIR CONSULTING — script.js
   ============================================================ */

/* ---------- 1. TRANSLATIONS ---------- */
const I18N = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.industries": "Industries",
    "nav.projects": "Projects",
    "nav.partners": "Partners",
    "nav.contact": "Contact",
    "cta.request": "Request Consultation",

    "hero.eyebrow": "Engineering • Environment • Industry",
    "hero.title1": "Engineering Solutions.",
    "hero.title2": "Strategic Consulting.",
    "hero.title3": "Sustainable Growth.",
    "hero.text": "TISSIR CONSULTING provides technical engineering, environmental consulting, industrial project management and strategic business solutions to help organizations achieve sustainable growth.",
    "hero.btnServices": "Explore Services",
    "hero.btnConsult": "Request a Consultation",

    "stat.exp": "Years Combined Experience",
    "stat.projects": "Projects Delivered",
    "stat.divisions": "Service Divisions",
    "stat.languages": "Languages Spoken",

    "about.eyebrow": "About TISSIR",
    "about.title": "A Consulting Firm Built on Engineering Rigor",
    "about.body": "TISSIR CONSULTING is a multi-disciplinary engineering and consulting firm delivering technical excellence across industrial, environmental and commercial sectors. We partner with organizations to design, optimize and implement solutions that are technically sound, commercially viable and environmentally responsible.",
    "about.missionTitle": "Our Mission",
    "about.missionBody": "To deliver engineering and consulting solutions that create measurable, sustainable value for our clients.",
    "about.visionTitle": "Our Vision",
    "about.visionBody": "To be a trusted reference for industrial and environmental consulting across Morocco and international markets.",
    "about.badgeTop": "ISO-Grade",
    "about.badgeBottom": "Engineering Standards",
    "about.val1": "Technical Excellence & Integrity",
    "about.val2": "Sustainability by Design",
    "about.val3": "Client-Centered Partnership",
    "about.val4": "International Standards & Compliance",
    "about.btn": "Discover Our Approach",

    "services.eyebrow": "Our Services",
    "services.title": "Five Divisions. One Integrated Partner.",
    "services.sub": "From technical engineering to international trade, our services are designed to support every stage of your project lifecycle.",
    "svc1.title": "Engineering & Technical Consulting",
    "svc1.i1": "Industrial engineering",
    "svc1.i2": "Technical assistance",
    "svc1.i3": "Technical audits",
    "svc1.i4": "Process optimization",
    "svc1.i5": "Engineering studies",
    "svc2.title": "Environment & Energy",
    "svc2.i1": "Environmental consulting",
    "svc2.i2": "Waste management",
    "svc2.i3": "Wastewater treatment",
    "svc2.i4": "Pollution control",
    "svc2.i5": "Energy transition",
    "svc3.title": "Project Management",
    "svc3.i1": "Project planning",
    "svc3.i2": "Technical supervision",
    "svc3.i3": "Project implementation",
    "svc3.i4": "Coordination & monitoring",
    "svc4.title": "International Trade & Representation",
    "svc4.i1": "Import and export",
    "svc4.i2": "Equipment distribution",
    "svc4.i3": "International representation",
    "svc4.i4": "Commercial partnerships",
    "svc5.title": "Business & Digital Consulting",
    "svc5.i1": "Commercial strategy",
    "svc5.i2": "Digital marketing",
    "svc5.i3": "Social media management",
    "svc5.i4": "Online sales",
    "svc5.i5": "Business development",
    "svcCta.title": "Need a tailored solution?",
    "svcCta.body": "Tell us about your project and our engineers will outline the right approach.",
    "svcCta.btn": "Talk to an Expert →",

    "ind.eyebrow": "Industries We Serve",
    "ind.title": "Sector Expertise Across the Value Chain",
    "ind1.title": "Industrial Manufacturing",
    "ind1.body": "Production optimization, technical audits and industrial engineering support.",
    "ind2.title": "Energy",
    "ind2.body": "Energy transition consulting, efficiency studies and infrastructure support.",
    "ind3.title": "Environmental Services",
    "ind3.body": "Environmental compliance, impact assessments and pollution control.",
    "ind4.title": "Water & Waste Treatment",
    "ind4.body": "Wastewater engineering, treatment plant design and process management.",
    "ind5.title": "Infrastructure",
    "ind5.body": "Technical supervision, planning and project coordination for infrastructure.",
    "ind6.title": "International Trade",
    "ind6.body": "Import/export representation, equipment distribution and market access.",

    "proj.eyebrow": "Projects & References",
    "proj.title": "Work That Speaks for Itself",
    "proj.sub": "A selection of verified engagements across industrial, environmental and water treatment sectors.",
    "proj.link": "View Case Study →",
    "proj1.title": "Industrial Process Optimization",
    "proj1.body": "Process audit and optimization delivering measurable efficiency gains for a manufacturing client.",
    "proj1.tag": "Industrial",
    "proj2.title": "Wastewater Treatment Engineering",
    "proj2.body": "Design support and technical supervision for an industrial wastewater treatment facility.",
    "proj2.tag": "Water",
    "proj3.title": "Energy Transition Study",
    "proj3.body": "Feasibility study for renewable energy integration at an industrial site.",
    "proj3.tag": "Energy",

    "partners.eyebrow": "Partners & Clients",
    "partners.title": "Trusted by Organizations That Demand Precision",
    "partners.note": "Logos displayed are placeholders — replace with authorized partner and client marks only.",

    "contact.eyebrow": "Contact Us",
    "contact.title": "Let's Engineer Your Next Step",
    "contact.sub": "Tell us about your project. Our team responds within one business day.",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone / WhatsApp",
    "contact.officeLabel": "Office",
    "contact.office": "Casablanca, Morocco",

    "form.name": "Full Name *",
    "form.namePh": "Your name",
    "form.email": "Email *",
    "form.emailPh": "you@company.com",
    "form.company": "Company",
    "form.companyPh": "Company name",
    "form.service": "Service of Interest",
    "form.servicePh": "Select a service",
    "form.message": "Message *",
    "form.messagePh": "Describe your project or request...",
    "form.submit": "Send Request",

    "footer.tagline": "Engineering Solutions. Strategic Consulting. Sustainable Growth.",
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved."
  },

  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.industries": "Secteurs",
    "nav.projects": "Projets",
    "nav.partners": "Partenaires",
    "nav.contact": "Contact",
    "cta.request": "Demander une consultation",

    "hero.eyebrow": "Ingénierie • Environnement • Industrie",
    "hero.title1": "Solutions d'ingénierie.",
    "hero.title2": "Conseil stratégique.",
    "hero.title3": "Croissance durable.",
    "hero.text": "TISSIR CONSULTING fournit des services d'ingénierie technique, de conseil environnemental, de gestion de projets industriels et de solutions stratégiques pour aider les organisations à atteindre une croissance durable.",
    "hero.btnServices": "Découvrir nos services",
    "hero.btnConsult": "Demander une consultation",

    "stat.exp": "Années d'expérience combinée",
    "stat.projects": "Projets livrés",
    "stat.divisions": "Divisions de service",
    "stat.languages": "Langues parlées",

    "about.eyebrow": "À propos de TISSIR",
    "about.title": "Un cabinet fondé sur la rigueur de l'ingénierie",
    "about.body": "TISSIR CONSULTING est un cabinet d'ingénierie et de conseil multidisciplinaire qui offre l'excellence technique dans les secteurs industriel, environnemental et commercial. Nous accompagnons les organisations pour concevoir, optimiser et mettre en œuvre des solutions techniquement solides, commercialement viables et écologiquement responsables.",
    "about.missionTitle": "Notre mission",
    "about.missionBody": "Fournir des solutions d'ingénierie et de conseil qui créent une valeur mesurable et durable pour nos clients.",
    "about.visionTitle": "Notre vision",
    "about.visionBody": "Être une référence de confiance pour le conseil industriel et environnemental au Maroc et sur les marchés internationaux.",
    "about.badgeTop": "Normes ISO",
    "about.badgeBottom": "Standards d'ingénierie",
    "about.val1": "Excellence technique & intégrité",
    "about.val2": "Durabilité par conception",
    "about.val3": "Partenariat centré client",
    "about.val4": "Normes internationales & conformité",
    "about.btn": "Découvrir notre approche",

    "services.eyebrow": "Nos services",
    "services.title": "Cinq divisions. Un partenaire intégré.",
    "services.sub": "De l'ingénierie technique au commerce international, nos services couvrent chaque étape du cycle de vie de votre projet.",
    "svc1.title": "Ingénierie & conseil technique",
    "svc1.i1": "Ingénierie industrielle",
    "svc1.i2": "Assistance technique",
    "svc1.i3": "Audits techniques",
    "svc1.i4": "Optimisation des processus",
    "svc1.i5": "Études d'ingénierie",
    "svc2.title": "Environnement & énergie",
    "svc2.i1": "Conseil environnemental",
    "svc2.i2": "Gestion des déchets",
    "svc2.i3": "Traitement des eaux usées",
    "svc2.i4": "Contrôle de la pollution",
    "svc2.i5": "Transition énergétique",
    "svc3.title": "Gestion de projet",
    "svc3.i1": "Planification de projet",
    "svc3.i2": "Supervision technique",
    "svc3.i3": "Mise en œuvre de projet",
    "svc3.i4": "Coordination & suivi",
    "svc4.title": "Commerce international & représentation",
    "svc4.i1": "Import et export",
    "svc4.i2": "Distribution d'équipements",
    "svc4.i3": "Représentation internationale",
    "svc4.i4": "Partenariats commerciaux",
    "svc5.title": "Conseil business & digital",
    "svc5.i1": "Stratégie commerciale",
    "svc5.i2": "Marketing digital",
    "svc5.i3": "Gestion des réseaux sociaux",
    "svc5.i4": "Vente en ligne",
    "svc5.i5": "Développement commercial",
    "svcCta.title": "Besoin d'une solution sur mesure ?",
    "svcCta.body": "Parlez-nous de votre projet, nos ingénieurs vous proposeront l'approche adaptée.",
    "svcCta.btn": "Parler à un expert →",

    "ind.eyebrow": "Secteurs desservis",
    "ind.title": "Une expertise sectorielle sur toute la chaîne de valeur",
    "ind1.title": "Fabrication industrielle",
    "ind1.body": "Optimisation de la production, audits techniques et support d'ingénierie industrielle.",
    "ind2.title": "Énergie",
    "ind2.body": "Conseil en transition énergétique, études d'efficacité et support aux infrastructures.",
    "ind3.title": "Services environnementaux",
    "ind3.body": "Conformité environnementale, évaluations d'impact et contrôle de la pollution.",
    "ind4.title": "Eau & traitement des déchets",
    "ind4.body": "Ingénierie des eaux usées, conception de stations et gestion des procédés.",
    "ind5.title": "Infrastructures",
    "ind5.body": "Supervision technique, planification et coordination de projets d'infrastructure.",
    "ind6.title": "Commerce international",
    "ind6.body": "Représentation import/export, distribution d'équipements et accès aux marchés.",

    "proj.eyebrow": "Projets & références",
    "proj.title": "Des réalisations qui parlent d'elles-mêmes",
    "proj.sub": "Une sélection de missions vérifiées dans les secteurs industriel, environnemental et du traitement de l'eau.",
    "proj.link": "Voir l'étude de cas →",
    "proj1.title": "Optimisation de processus industriels",
    "proj1.body": "Audit et optimisation de processus générant des gains d'efficacité mesurables pour un client industriel.",
    "proj1.tag": "Industriel",
    "proj2.title": "Ingénierie de stations d'épuration",
    "proj2.body": "Support de conception et supervision technique d'une station de traitement des eaux usées industrielles.",
    "proj2.tag": "Eau",
    "proj3.title": "Étude de transition énergétique",
    "proj3.body": "Étude de faisabilité pour l'intégration des énergies renouvelables sur un site industriel.",
    "proj3.tag": "Énergie",

    "partners.eyebrow": "Partenaires & clients",
    "partners.title": "La confiance d'organisations exigeantes",
    "partners.note": "Les logos affichés sont des exemples — remplacez-les uniquement par des marques partenaires et clients autorisées.",

    "contact.eyebrow": "Contactez-nous",
    "contact.title": "Construisons votre prochaine étape",
    "contact.sub": "Parlez-nous de votre projet. Notre équipe répond sous un jour ouvré.",
    "contact.emailLabel": "E-mail",
    "contact.phoneLabel": "Téléphone / WhatsApp",
    "contact.officeLabel": "Bureau",
    "contact.office": "Casablanca, Maroc",

    "form.name": "Nom complet *",
    "form.namePh": "Votre nom",
    "form.email": "E-mail *",
    "form.emailPh": "vous@entreprise.com",
    "form.company": "Société",
    "form.companyPh": "Nom de la société",
    "form.service": "Service souhaité",
    "form.servicePh": "Sélectionnez un service",
    "form.message": "Message *",
    "form.messagePh": "Décrivez votre projet ou votre demande...",
    "form.submit": "Envoyer la demande",

    "footer.tagline": "Solutions d'ingénierie. Conseil stratégique. Croissance durable.",
    "footer.company": "Société",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.rights": "Tous droits réservés."
  },

  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات",
    "nav.industries": "القطاعات",
    "nav.projects": "المشاريع",
    "nav.partners": "الشركاء",
    "nav.contact": "اتصل بنا",
    "cta.request": "اطلب استشارة",

    "hero.eyebrow": "هندسة • بيئة • صناعة",
    "hero.title1": "حلول هندسية.",
    "hero.title2": "استشارات استراتيجية.",
    "hero.title3": "نمو مستدام.",
    "hero.text": "تقدم TISSIR CONSULTING خدمات الهندسة التقنية والاستشارات البيئية وإدارة المشاريع الصناعية والحلول الاستراتيجية لمساعدة المؤسسات على تحقيق نمو مستدام.",
    "hero.btnServices": "استكشف خدماتنا",
    "hero.btnConsult": "اطلب استشارة",

    "stat.exp": "سنوات من الخبرة المشتركة",
    "stat.projects": "مشاريع منجزة",
    "stat.divisions": "أقسام الخدمات",
    "stat.languages": "لغات نتحدثها",

    "about.eyebrow": "عن TISSIR",
    "about.title": "شركة استشارية قائمة على الدقة الهندسية",
    "about.body": "TISSIR CONSULTING شركة هندسة واستشارات متعددة التخصصات تقدم التميز التقني في القطاعات الصناعية والبيئية والتجارية. نعمل مع المؤسسات لتصميم وتحسين وتنفيذ حلول سليمة تقنياً وقابلة للتطبيق تجارياً ومسؤولة بيئياً.",
    "about.missionTitle": "رسالتنا",
    "about.missionBody": "تقديم حلول هندسية واستشارية تحقق قيمة ملموسة ومستدامة لعملائنا.",
    "about.visionTitle": "رؤيتنا",
    "about.visionBody": "أن نكون مرجعاً موثوقاً في الاستشارات الصناعية والبيئية في المغرب والأسواق الدولية.",
    "about.badgeTop": "معايير ISO",
    "about.badgeBottom": "معايير هندسية",
    "about.val1": "التميز التقني والنزاهة",
    "about.val2": "الاستدامة في التصميم",
    "about.val3": "شراكة تركز على العميل",
    "about.val4": "المعايير الدولية والامتثال",
    "about.btn": "اكتشف منهجيتنا",

    "services.eyebrow": "خدماتنا",
    "services.title": "خمسة أقسام. شريك واحد متكامل.",
    "services.sub": "من الهندسة التقنية إلى التجارة الدولية، صُممت خدماتنا لدعم كل مرحلة من دورة حياة مشروعك.",
    "svc1.title": "الهندسة والاستشارات التقنية",
    "svc1.i1": "الهندسة الصناعية",
    "svc1.i2": "المساعدة التقنية",
    "svc1.i3": "التدقيق التقني",
    "svc1.i4": "تحسين العمليات",
    "svc1.i5": "الدراسات الهندسية",
    "svc2.title": "البيئة والطاقة",
    "svc2.i1": "الاستشارات البيئية",
    "svc2.i2": "إدارة النفايات",
    "svc2.i3": "معالجة المياه العادمة",
    "svc2.i4": "مكافحة التلوث",
    "svc2.i5": "التحول الطاقي",
    "svc3.title": "إدارة المشاريع",
    "svc3.i1": "تخطيط المشاريع",
    "svc3.i2": "الإشراف التقني",
    "svc3.i3": "تنفيذ المشاريع",
    "svc3.i4": "التنسيق والمتابعة",
    "svc4.title": "التجارة الدولية والتمثيل",
    "svc4.i1": "الاستيراد والتصدير",
    "svc4.i2": "توزيع المعدات",
    "svc4.i3": "التمثيل الدولي",
    "svc4.i4": "الشراكات التجارية",
    "svc5.title": "الاستشارات التجارية والرقمية",
    "svc5.i1": "الاستراتيجية التجارية",
    "svc5.i2": "التسويق الرقمي",
    "svc5.i3": "إدارة وسائل التواصل",
    "svc5.i4": "البيع عبر الإنترنت",
    "svc5.i5": "تطوير الأعمال",
    "svcCta.title": "هل تحتاج إلى حل مخصص؟",
    "svcCta.body": "أخبرنا عن مشروعك وسيحدد مهندسونا النهج المناسب.",
    "svcCta.btn": "تحدث إلى خبير ←",

    "ind.eyebrow": "القطاعات التي نخدمها",
    "ind.title": "خبرة قطاعية عبر سلسلة القيمة",
    "ind1.title": "التصنيع الصناعي",
    "ind1.body": "تحسين الإنتاج والتدقيق التقني ودعم الهندسة الصناعية.",
    "ind2.title": "الطاقة",
    "ind2.body": "استشارات التحول الطاقي ودراسات الكفاءة ودعم البنية التحتية.",
    "ind3.title": "الخدمات البيئية",
    "ind3.body": "الامتثال البيئي وتقييم الأثر ومكافحة التلوث.",
    "ind4.title": "المياه ومعالجة النفايات",
    "ind4.body": "هندسة المياه العادمة وتصميم محطات المعالجة وإدارة العمليات.",
    "ind5.title": "البنية التحتية",
    "ind5.body": "الإشراف التقني والتخطيط وتنسيق مشاريع البنية التحتية.",
    "ind6.title": "التجارة الدولية",
    "ind6.body": "تمثيل الاستيراد والتصدير وتوزيع المعدات والوصول إلى الأسواق.",

    "proj.eyebrow": "المشاريع والمراجع",
    "proj.title": "أعمال تتحدث عن نفسها",
    "proj.sub": "مجموعة مختارة من المشاريع الموثقة في القطاعات الصناعية والبيئية ومعالجة المياه.",
    "proj.link": "عرض دراسة الحالة ←",
    "proj1.title": "تحسين العمليات الصناعية",
    "proj1.body": "تدقيق وتحسين العمليات يحقق مكاسب قابلة للقياس في الكفاءة لعميل صناعي.",
    "proj1.tag": "صناعي",
    "proj2.title": "هندسة محطات معالجة المياه",
    "proj2.body": "دعم التصميم والإشراف التقني لمنشأة معالجة المياه العادمة الصناعية.",
    "proj2.tag": "مياه",
    "proj3.title": "دراسة التحول الطاقي",
    "proj3.body": "دراسة جدوى لدمج الطاقة المتجددة في موقع صناعي.",
    "proj3.tag": "طاقة",

    "partners.eyebrow": "الشركاء والعملاء",
    "partners.title": "ثقة مؤسسات تبحث عن الدقة",
    "partners.note": "الشعارات المعروضة نماذج — استبدلها فقط بشعارات شركاء وعملاء مصرح لهم.",

    "contact.eyebrow": "اتصل بنا",
    "contact.title": "لنبدأ خطوتك القادمة",
    "contact.sub": "أخبرنا عن مشروعك. يستجيب فريقنا خلال يوم عمل واحد.",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.phoneLabel": "الهاتف / واتساب",
    "contact.officeLabel": "المكتب",
    "contact.office": "الدار البيضاء، المغرب",

    "form.name": "الاسم الكامل *",
    "form.namePh": "اسمك",
    "form.email": "البريد الإلكتروني *",
    "form.emailPh": "you@company.com",
    "form.company": "الشركة",
    "form.companyPh": "اسم الشركة",
    "form.service": "الخدمة المطلوبة",
    "form.servicePh": "اختر خدمة",
    "form.message": "الرسالة *",
    "form.messagePh": "صف مشروعك أو طلبك...",
    "form.submit": "إرسال الطلب",

    "footer.tagline": "حلول هندسية. استشارات استراتيجية. نمو مستدام.",
    "footer.company": "الشركة",
    "footer.services": "الخدمات",
    "footer.contact": "اتصل",
    "footer.rights": "جميع الحقوق محفوظة."
  }
};

/* ---------- 2. LANGUAGE SWITCHER ---------- */
function setLanguage(lang) {
  if (!I18N[lang]) lang = 'en';

  try { localStorage.setItem('tissir-lang', lang); } catch (e) {}

  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = I18N[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = I18N[lang][key];
    if (val !== undefined) el.setAttribute('placeholder', val);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

(function restoreLang() {
  let saved = 'en';
  try { saved = localStorage.getItem('tissir-lang') || 'en'; } catch (e) {}
  setLanguage(saved);
})();

/* ---------- 3. FOOTER YEAR ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- 4. HEADER SCROLL ---------- */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

/* ---------- 5. MOBILE MENU ---------- */
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('primaryNav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.classList.toggle('active');
    nav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', open);
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
    });
  });
}

/* ---------- 6. ACTIVE NAV ON SCROLL ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

/* ---------- 7. REVEAL ON SCROLL ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- 8. COUNTERS ---------- */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.target;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const tick = () => {
      current += step;
      if (current >= target) { el.textContent = target; return; }
      el.textContent = current;
      requestAnimationFrame(tick);
    };
    tick();
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));

/* ---------- 9. CONTACT FORM (demo) ---------- */
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (form && formStatus) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const lang = document.documentElement.lang || 'en';
    const messages = {
      en: "Thank you! Your request has been received. We'll get back to you within one business day.",
      fr: "Merci ! Votre demande a bien été reçue. Nous vous répondrons sous un jour ouvré.",
      ar: "شكراً لك! تم استلام طلبك. سنتواصل معك خلال يوم عمل واحد."
    };
    formStatus.textContent = messages[lang] || messages.en;
    formStatus.style.color = '#7dd3e8';
    form.reset();
  });
}