/* ============================================
   KOETE - Scripts
   ============================================ */

(function () {
    'use strict';

    /* -----------------------------------------------
       i18n — English translations
       (Japanese is the default stored in the HTML)
    ----------------------------------------------- */
    var EN = {
        // Nav
        nav_features: 'Features',
        nav_scenes: 'Use Cases',
        nav_pricing: 'Pricing',
        nav_contact: 'Contact',
        nav_cta: 'Free Trial',
        nav_cta_mobile: '14-Day Free Trial',

        // Hero
        hero_tag: 'Poor communication is not a people problem — it\'s a structural one',
        hero_title: 'Breaking language barriers,<br>delivering voices from the field',
        hero_subtitle: 'Managers overseeing 10–20 worksites. Dozens of unread LINE messages pile up, and critical notices get buried.<br>This isn\'t anyone\'s fault — it\'s a <strong>structural problem</strong>.',
        hero_desc: 'KOETE doesn\'t dump everything into one timeline — <strong>one issue, one thread</strong>.<br>AI translation in your native language. Daily reports with just ○△×. Attendance check: "Will you make it?"<br>Topics never get lost, statuses stay visible, and context is preserved — that\'s KOETE.',
        hero_cta: '14-Day Free Trial',
        hero_story: 'Why We Built KOETE',
        stat_lang: 'Languages',
        stat_report: 'Report Rate Improvement (%)',
        stat_attendance: 'Missed Attendance Alerts',

        // Problems
        problems_lead: 'You finish a 1-hour meeting and check your phone — dozens of unread LINE messages.<br>Simple reports and urgent alerts are sent with the same tone.',
        problems_title: 'Which ones have been handled? Which are pending? — You lose track',
        p1_title: 'Language barriers prevent accurate information sharing',
        p1_desc: 'Reports from foreign employees don\'t come in. They\'re unsure about Japanese and can\'t accurately communicate what they need to say.',
        p2_title: 'Daily reports and incidents are scattered across paper, LINE, and verbal communication',
        p2_desc: 'Information is fragmented, making it time-consuming for managers to grasp the situation. Missed follow-ups happen easily.',
        p3_title: 'Attendance and tardiness management depends on individuals and is prone to gaps',
        p3_desc: 'Late arrival and absence notifications are delayed, leaving on-site responses reactive. Managers don\'t know until they physically check.',
        p4_title: 'Using interpreters takes time and prevents real-time response',
        p4_desc: 'Instructions are lost in translation, risking work errors and accidents. Emergency response is delayed.',

        // Solution
        solution_title: 'Dumping everything into one timeline doesn\'t work',
        solution_lead: 'That\'s why we built a structure where each issue gets its own thread.',
        s1_title: 'Threads keep topics from getting buried',
        s1_desc: 'A trouble report stays in its thread. An improvement suggestion stays in its thread. Daily reports stay organized.',
        s1_result: 'Status is visible and context is preserved',
        s2_title: 'Communicate in your native language',
        s2_desc: 'With AI translation, Japanese × foreign, foreign × foreign — everyone communicates in their native language. No copy-paste needed.',
        s2_result: 'Write naturally without thinking about translation',
        s3_title: 'Impossibly simple input design',
        s3_desc: 'Daily reports: just ○△× plus one comment. Attendance: "Will you make it?" With push notifications, input becomes reflexive.',
        s3_result: 'A system you can stick with — reporting becomes a habit',

        // Story
        story_title: 'Why We Built KOETE',
        story_subtitle: 'When reporting fails, it\'s not a people problem — it\'s a structural problem.',
        story1_title: 'The Chaos on the Ground',
        story1_p1: 'A construction site supervisor came to us for help. Managing 10–20 sites simultaneously, after a 1-hour meeting, dozens of unread LINE messages would pile up on their phone.',
        story1_p2: 'Among them were simple reports and urgent messages like "the portable toilet hasn\'t arrived" — all sent with the same urgency. Meanwhile, another trouble call comes in.',
        story1_highlight: 'Which ones have been addressed? Which are pending? Did something get overlooked? — You lose track.',
        story1_p3: 'Days later, when asked "Why didn\'t you handle this?" the reply is "I sent you a message. It\'s your miss." This isn\'t anyone\'s fault — it\'s a <strong>structural problem</strong>.',
        story2_title: 'Dumping Everything into One Timeline Doesn\'t Work',
        story2_p1: 'We realized that funneling every topic into a single chat simply doesn\'t scale.',
        story2_p2: 'That\'s why we prioritized the structure of <strong>"one issue, one thread for conversation."</strong>',
        story2_p3: 'This way, topics don\'t get buried, status is visible, and there\'s a record of who thought what and how they responded. We wanted to embed this culture naturally through a tool.',
        story3_title: 'Communicate in Your Native Language',
        story3_p1: 'This wasn\'t just a problem among Japanese speakers.',
        story3_p2: 'By incorporating AI translation, Japanese × foreign, foreign × foreign — everyone can communicate <strong>in their native language</strong>.',
        story3_p3: 'No need to think about translation. No copy-paste. Just write what you think in your own words — making this possible felt truly groundbreaking.',
        story_cta1: 'Instead of blaming those who can\'t report,<br>build an environment where reporting is easy — through technology.',
        story_cta2: 'That is <span class="brand-name">KOETE</span>',

        // Mockup
        mockup_heading: 'Intuitive and simple — designed for anyone to use',
        mockup1: 'Easy reports with ○△×',
        mockup2: 'Chat in your native language',
        mockup3: '"Will you make it?" pre-check',

        // Features
        features_title: 'KOETE Features',
        features_subtitle: 'All the tools you need to support workplace communication through structure',
        f1_title: 'AI Translation',
        f1_desc: 'Works with any language — no copy-paste needed. Messages are automatically converted from the sender\'s native language to the receiver\'s. Two-way translation lets everyone chat in their mother tongue.',
        f2_title: 'Daily Reports',
        f2_desc: 'Push notifications prompt easy input of work details and self-assessment. All reports are auto-translated so managers can review in their own language.',
        f3_title: 'Trouble Reports',
        f3_desc: 'Select a category and priority to report. Threaded conversations follow each report. Unresolved items stay on the dashboard until marked complete.',
        f4_title: 'Improvement Proposals',
        f4_desc: 'Capture voices from the field and drive improvement. Submit proposals in a few taps from your phone. Thread-based discussion from review to execution.',
        f5_title: 'Attendance Alerts',
        f5_desc: '"Will you make it?" notifications automatically detect tardiness. "No" answers or no responses trigger automatic manager alerts, enabling early awareness.',
        f6_badge: 'Admin',
        f6_title: 'Dashboard',
        f6_desc: 'Designed so unresolved tasks persist. Daily reports, trouble tickets, attendance — items requiring action stay on the dashboard until marked resolved.',

        // Dashboard
        dashboard_title: 'All Information in One Place',
        dashboard_desc: 'Visualize daily reports, trouble tickets, attendance, and more — all from a single dashboard',

        // Scenes
        scenes_title: 'Use Cases',
        scenes_subtitle: 'Used across all industries with multilingual workforces — manufacturing, construction, healthcare, and more',
        sc1_tag: '01 Manufacturing', sc1_title: 'Manufacturing', sc1_desc: 'Production line reports, defect reports, instant equipment trouble sharing',
        sc2_tag: '02 Construction', sc2_title: 'Construction', sc2_desc: 'Safety checks, progress sharing, blueprint instructions, near-miss reports',
        sc3_tag: '03 Healthcare', sc3_title: 'Healthcare & Nursing', sc3_desc: 'Patient condition reports, shift communication, handover note sharing',
        sc4_tag: '04 Logistics', sc4_title: 'Logistics & Warehousing', sc4_desc: 'Inventory checks, delivery status sharing, picking error prevention',
        sc5_tag: '05 Facility Mgmt', sc5_title: 'Cleaning & Facility Management', sc5_desc: 'Task completion reports, supply requests, cleaning checklists',
        sc6_tag: '06 Hospitality', sc6_title: 'Hospitality & Service', sc6_desc: 'Room cleaning checks, front desk coordination, guest request sharing',

        // Cases
        cases_title: 'Case Studies',

        // Pricing
        pricing_title: 'Pricing Plans',
        pricing_subtitle: 'Simple, transparent pricing. All plans include a 14-day free trial',
        plan_mini_target: 'Up to 20 users',
        plan_small_target: '21–50 users',
        plan_std_target: '51–100 users',
        plan_ent_target: '101+ users',
        price_unit: '/mo',
        plan_f1: 'All core features included',
        plan_mini_f2: 'AI Translation (100K chars/mo)',
        plan_mini_f3: '5GB Storage',
        plan_mini_f4: 'Email support',
        plan_small_f2: 'AI Translation (200K chars/mo)',
        plan_small_f3: '10GB Storage',
        plan_std_f2: 'AI Translation (500K chars/mo)',
        plan_std_f3: '30GB Storage',
        plan_std_f4: 'Phone & email support',
        plan_ent_f1: 'All features',
        plan_ent_f2: 'Unlimited AI Translation',
        plan_ent_f3: 'Unlimited Storage',
        plan_ent_f4: 'Dedicated support & onboarding',
        plan_badge: 'First Month Free',
        plan_contact: 'Contact Us',
        pricing_note: '* Annual contract with auto-renewal. * Contact us for details on API limits and storage capacity.',

        // FAQ
        faq_title: 'Frequently Asked Questions',
        faq_subtitle: 'Key points to know before getting started',
        faq1_q: 'Which languages are supported?',
        faq1_a: 'Currently, we support 7 languages: Japanese, English, Chinese, Vietnamese, Indonesian, Tagalog, and Burmese. We plan to expand language support in the future.',
        faq2_q: 'Do we need IT-savvy staff to implement KOETE?',
        faq2_a: 'No technical expertise is required. All you need is a smartphone, and the interface is extremely simple. Our support team will assist you during implementation.',
        faq3_q: 'Are there any charges if we cancel during the free trial?',
        faq3_a: 'No, if you cancel within the 14-day free trial period, no charges will be incurred. Feel free to give it a try.',
        faq4_q: 'How is KOETE different from LINE or Slack?',
        faq4_a: 'LINE and Slack use a timeline format where all information flows together, making important messages easy to miss. KOETE uses a "one issue, one thread" structure that enables both status management and multilingual support simultaneously. It also includes features specialized for the field, such as daily reports, attendance, and trouble reports.',
        faq5_q: 'How accurate is the translation?',
        faq5_a: 'We use the latest AI translation engine, achieving high accuracy for everyday reporting and communication. Even with specialized terminology, the system considers context for better translations.',
        faq6_q: 'Can we change plans mid-contract?',
        faq6_a: 'Yes, you can change your plan at any time based on your usage. Feel free to contact us about adding users or storage.',

        // Contact
        contact_title: 'Contact Us',
        contact_subtitle: 'For 14-day free trials, document requests, demo requests, and more — feel free to reach out',
        form_company: 'Company Name <span class="required-mark">Required</span>',
        form_name: 'Your Name <span class="required-mark">Required</span>',
        form_email: 'Email Address <span class="required-mark">Required</span>',
        form_phone: 'Phone Number',
        form_message: 'Inquiry Details <span class="required-mark">Required</span>',
        form_submit: 'Submit',

        // Footer
        footer_tagline: 'Breaking language barriers, delivering voices from the field',
        footer_ceo: 'CEO: Kazuki Miyazaki',
        footer_product: 'Product',
        footer_support: 'Support',
        footer_faq: 'FAQ',
        footer_company: 'Company',
        footer_about: 'About Us',
        footer_terms: 'Terms of Service',
        footer_privacy: 'Privacy Policy',
        footer_legal: 'Legal Notice',

        // Floating CTA
        floating_cta: 'Start 14-Day Free Trial'
    };

    // Store original Japanese text (captured on first toggle)
    var JA = {};
    var currentLang = 'ja';

    function captureJapanese() {
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            JA[el.getAttribute('data-i18n')] = el.textContent;
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            JA[el.getAttribute('data-i18n-html')] = el.innerHTML;
        });
    }

    function applyLang(lang) {
        var dict = lang === 'en' ? EN : JA;
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });
        document.documentElement.lang = lang === 'en' ? 'en' : 'ja';

        // Update toggle button labels
        var newLabel = lang === 'en' ? 'JP' : 'EN';
        var labelEl = document.getElementById('langLabel');
        var labelMobile = document.getElementById('langLabelMobile');
        if (labelEl) labelEl.textContent = newLabel;
        if (labelMobile) labelMobile.textContent = newLabel;

        currentLang = lang;
    }

    function toggleLang() {
        if (Object.keys(JA).length === 0) captureJapanese();
        applyLang(currentLang === 'ja' ? 'en' : 'ja');
    }

    // Bind toggles
    var langToggle = document.getElementById('langToggle');
    var langToggleMobile = document.getElementById('langToggleMobile');
    if (langToggle) langToggle.addEventListener('click', toggleLang);
    if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLang);

    /* -----------------------------------------------
       Header scroll effect
    ----------------------------------------------- */
    var header = document.getElementById('header');

    function onScroll() {
        if (window.pageYOffset > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* -----------------------------------------------
       Mobile menu
    ----------------------------------------------- */
    var hamburger = document.getElementById('hamburger');
    var mobileNav = document.getElementById('mobileNav');
    var mobileOverlay = document.getElementById('mobileOverlay');

    function openMobileMenu() {
        hamburger.classList.add('active');
        mobileNav.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            mobileNav.classList.contains('active') ? closeMobileMenu() : openMobileMenu();
        });
    }

    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

    if (mobileNav) {
        mobileNav.querySelectorAll('a').forEach(function (l) {
            l.addEventListener('click', closeMobileMenu);
        });
    }

    /* -----------------------------------------------
       Smooth scroll
    ----------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
            }
        });
    });

    /* -----------------------------------------------
       Scroll animations
    ----------------------------------------------- */
    var animEls = document.querySelectorAll('.animate-on-scroll');
    if (animEls.length && 'IntersectionObserver' in window) {
        var animObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('in-view'); animObs.unobserve(e.target); }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        animEls.forEach(function (el) { animObs.observe(el); });
    }

    /* -----------------------------------------------
       Hero fade-up
    ----------------------------------------------- */
    window.addEventListener('load', function () {
        document.querySelectorAll('.hero .fade-up').forEach(function (el) { el.classList.add('visible'); });
    });

    /* -----------------------------------------------
       Counter animation
    ----------------------------------------------- */
    var statNums = document.querySelectorAll('.hero-stat-number[data-count]');
    if (statNums.length && 'IntersectionObserver' in window) {
        var cntObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting && !e.target.dataset.counted) {
                    e.target.dataset.counted = '1';
                    var tgt = parseInt(e.target.dataset.count, 10);
                    if (tgt === 0) { e.target.textContent = '0'; return; }
                    var cur = 0, step = Math.max(1, Math.ceil(tgt / 40));
                    var t = setInterval(function () {
                        cur += step;
                        if (cur >= tgt) { e.target.textContent = tgt; clearInterval(t); }
                        else { e.target.textContent = cur; }
                    }, 30);
                }
            });
        }, { threshold: 0.5 });
        statNums.forEach(function (el) { cntObs.observe(el); });
    }

    /* -----------------------------------------------
       FAQ accordion
    ----------------------------------------------- */
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = this.closest('.faq-item');
            var ans = item.querySelector('.faq-answer');
            var active = item.classList.contains('active');
            document.querySelectorAll('.faq-item.active').forEach(function (o) {
                if (o !== item) { o.classList.remove('active'); o.querySelector('.faq-answer').style.maxHeight = '0'; }
            });
            if (active) { item.classList.remove('active'); ans.style.maxHeight = '0'; }
            else { item.classList.add('active'); ans.style.maxHeight = ans.scrollHeight + 'px'; }
        });
    });

    /* -----------------------------------------------
       Contact form → Airtable integration
       Config loaded from config.js (not in git)
    ----------------------------------------------- */
    var AIRTABLE_API_KEY = (window.KOETE_CONFIG && window.KOETE_CONFIG.AIRTABLE_API_KEY) || '';
    var AIRTABLE_BASE_URL = (window.KOETE_CONFIG && window.KOETE_CONFIG.AIRTABLE_BASE_URL) || '';

    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = this.querySelector('.btn');
            var orig = btn.textContent;
            btn.textContent = currentLang === 'en' ? 'Sending...' : '送信中...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            var formData = {
                company: form.querySelector('#company').value,
                name: form.querySelector('#name').value,
                email: form.querySelector('#email').value,
                phone: form.querySelector('#phone').value,
                message: form.querySelector('#message').value
            };

            fetch(AIRTABLE_BASE_URL, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + AIRTABLE_API_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    records: [{
                        fields: {
                            '会社名': formData.company,
                            'お名前': formData.name,
                            'メールアドレス': formData.email,
                            '電話番号': formData.phone,
                            'お問い合わせ内容': formData.message
                        }
                    }]
                })
            })
            .then(function(response) { return response.json(); })
            .then(function(data) { showThankYou(); })
            .catch(function(error) { showThankYou(); });

            function showThankYou() {
                form.innerHTML = '<div style="text-align:center;padding:40px 20px;">' +
                    '<div style="font-size:48px;margin-bottom:16px;">&#10003;</div>' +
                    '<h3 style="font-size:22px;font-weight:700;margin-bottom:12px;">' +
                    (currentLang === 'en' ? 'Thank you!' : 'お問い合わせありがとうございます') +
                    '</h3>' +
                    '<p style="color:#64748b;line-height:1.8;">' +
                    (currentLang === 'en'
                        ? 'We will contact you within 3 business days.'
                        : '担当者より3営業日以内にご連絡いたします。') +
                    '</p></div>';
            }
        });
    }

    /* -----------------------------------------------
       Floating CTA
    ----------------------------------------------- */
    var floatingCta = document.getElementById('floatingCta');
    if (floatingCta) {
        var fObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                floatingCta.classList.toggle('visible', !e.isIntersecting);
            });
        }, { threshold: 0 });
        var hero = document.querySelector('.hero');
        if (hero) fObs.observe(hero);
    }

})();
