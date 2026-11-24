/**
 * KamChi (កម្ចី) — Landing Page Script
 * Plain vanilla JavaScript:
 *  - EN / KM localization with localStorage persistence & browser language fallback
 *  - Light / Dark theme toggle
 *  - Mobile menu drawer
 *  - Interactive screenshot tabs
 *  - Monthly / Yearly pricing toggle
 *  - Accessible FAQ accordion
 *  - Early access form validation & submission handler
 *  - IntersectionObserver scroll-reveal animations
 */

(function () {
  'use strict';

  /* =========================================================================
     1. TRANSLATIONS OBJECT (EN / KM)
     Replace or adjust copy here. Every [data-i18n] element swaps automatically.
     ========================================================================= */
  var translations = {
    en: {
      pageTitle: 'KamChi (កម្ចី) — Lend with confidence. Track every riel.',
      skipToContent: 'Skip to main content',
      navFeatures: 'Features',
      navHowItWorks: 'How it works',
      navPricing: 'Pricing',
      navFaq: 'FAQ',
      navCta: 'Get early access',

      heroKicker: 'KamChi (កម្ចី) · Personal Loan Ledger',
      heroTitle: 'Lend with confidence. Track every riel.',
      heroSubtitle:
        'A clear, reliable mobile app for personal lenders in Cambodia. Keep borrower IDs, repayment schedules, and USD or KHR collections organized—even without internet.',
      heroPrimaryCta: 'Get early access',
      heroSecondaryCta: 'See features',
      heroNote: 'Free starter plan · Android & iOS · Built for Cambodia',

      mockupMonth: 'Nov 2026',
      mockupTotalLent: 'Total Principal Lent',
      mockupCollected: 'Collected',
      mockupOverdue: 'Overdue',
      mockupActiveLoans: 'Due This Week',
      mockupLoanCount: '3 active',
      mockupBorrower1: 'Sokha Chan',
      mockupMeta1: 'Monthly · ABA · 8/12 paid',
      mockupBorrower2: 'Dara Kim',
      mockupMeta2: 'Weekly · KHQR · On time',
      mockupBorrower3: 'Vanna Meas',
      mockupMeta3: '2 days overdue · Cash',
      mockupChartLabel: 'Collection rate · 94%',

      trust1: 'Made for Cambodian lenders',
      trust2: 'Works offline',
      trust3: 'USD and KHR',
      trust4: 'Khmer and English',

      psKicker: 'Why switch from paper',
      psTitle: 'Stop losing track of payments in notebooks and spreadsheets',
      psLead:
        'Personal lending runs on trust and accuracy. One missed note or spreadsheet formula error can cost you money and strain relationships.',
      psBeforeLabel: 'Before',
      psBeforeTitle: 'Paper notebooks & Excel sheets',
      psBefore1: 'Hard to tell who is overdue without flipping through pages',
      psBefore2: 'Manual interest calculations take time and cause mistakes',
      psBefore3: 'USD and KHR balances mixed together in separate columns',
      psBefore4: 'Borrower ID photos lost in chat threads with no backup',
      psAfterLabel: 'With KamChi',
      psAfterTitle: 'One calm, organized app',
      psAfter1: 'See today’s collections and overdue borrowers on one screen',
      psAfter2: 'Automatic schedules for flat, reducing balance, or interest-only',
      psAfter3: 'Clear separate totals for USD and KHR with KHQR receipt logs',
      psAfter4: 'ID photos, guarantors, and encrypted backups safely in your pocket',

      featKicker: 'Built for real lending workflows',
      featTitle: 'Everything you need to lend clearly',
      featLead:
        'Designed around how individual lenders and small family lending businesses actually work in Cambodia.',
      f1Title: 'Borrower profiles & guarantor',
      f1Desc: 'Store borrower contact details, national ID photos, address notes, and guarantor records together.',
      f2Title: 'Flexible loan structures',
      f2Desc: 'Choose flat rate, reducing balance, or interest-only loans with daily, weekly, or monthly terms.',
      f3Title: 'Auto repayment schedule',
      f3Desc: 'Generate exact principal, interest, and due dates automatically the moment you create a loan.',
      f4Title: 'Payment tracking & receipts',
      f4Desc: 'Record cash, ABA, or KHQR payments in one tap and send clean digital receipts to borrowers.',
      f5Title: 'Overdue alerts & late fees',
      f5Desc: 'Spot missed due dates early and optionally calculate simple late fees without awkward guesswork.',
      f6Title: 'Dashboard and reports',
      f6Desc: 'View total capital lent, interest earned, and monthly collection progress at a glance.',
      f7Title: 'USD and KHR support',
      f7Desc: 'Lend in US dollars, Cambodian riels, or both—with clean currency formatting and separate totals.',
      f8Title: 'Works offline, syncs later',
      f8Desc: 'Log repayments anywhere in the province with zero signal. Your ledger syncs once you reconnect.',
      f9Title: 'PIN lock and encrypted backup',
      f9Desc: 'Protect private borrower records with a 6-digit PIN and restore your data safely if you switch phones.',

      howKicker: 'Simple workflow',
      howTitle: 'Start tracking in three steps',
      step1Title: 'Add borrower',
      step1Desc: 'Save name, phone number, national ID photo, and guarantor contact in under a minute.',
      step2Title: 'Create loan',
      step2Desc: 'Enter the amount in USD or KHR, pick the interest model and schedule, and confirm.',
      step3Title: 'Collect and track',
      step3Desc: 'Record cash, ABA, or KHQR payments, share instant receipts, and keep every riel accounted for.',

      screenKicker: 'Inside the app',
      screenTitle: 'Clean screens built for quick daily use',
      tabDashboard: 'Dashboard',
      tabSchedule: 'Schedule',
      tabReceipt: 'Receipts',
      tabProfile: 'Borrower',

      scrDashTitle: 'Portfolio overview in USD & KHR',
      scrDashDesc:
        'Know exactly how much capital is out, how much interest came in this month, and which borrowers need a gentle reminder today.',
      scrDashP1: 'Separate USD and KHR balance totals',
      scrDashP2: 'Due today and overdue filters',
      scrDashP3: 'Offline status indicator when traveling',

      scrSchedTitle: 'Automatic installment schedules',
      scrSchedDesc:
        'Every loan generates a clear repayment calendar showing principal, interest, and paid status for each due date.',
      scrSchedP1: 'Supports flat, reducing balance, and interest-only',
      scrSchedP2: 'Daily, weekly, or monthly intervals',
      scrSchedP3: 'Clear upcoming and paid markers',

      scrRecTitle: 'Instant cash, ABA & KHQR receipts',
      scrRecDesc:
        'Record any payment in seconds and keep a transparent receipt history that both lender and borrower can trust.',
      scrRecP1: 'Track payment channel (Cash, ABA, KHQR)',
      scrRecP2: 'Automatic remaining balance update',
      scrRecP3: 'Ready to share via Telegram or screenshot',

      scrProfTitle: 'Complete borrower & guarantor files',
      scrProfDesc:
        'Keep national ID photos, phone numbers, and guarantor information tied directly to each borrower’s loan history.',
      scrProfP1: 'Front and back ID photo storage',
      scrProfP2: 'Linked guarantor phone and notes',
      scrProfP3: 'Full repayment history in one view',

      scrDashMockHead: "Today's Summary",
      scrDashMockOut: 'Active Lent',
      scrDashMockKhr: 'KHR Lent',
      scrDashMockRow1: 'Collected this month',
      scrDashMockRow1Sub: '18 repayments logged',
      scrDashMockRow2: 'Due today',
      scrDashMockRow2Sub: '2 borrowers scheduled',

      scrSchedMockHead: 'Loan #KC-108 · 6 Months',
      scrSchedMethod: 'Reducing Balance',
      scrPaid: 'Paid',
      scrUpcoming: 'Next due',

      scrRecMockHead: 'Payment Receipt',
      scrRecMeta: 'Paid via ABA KHQR · 15 Nov 2026',
      scrRecBorrower: 'Borrower',
      scrRecBalance: 'Remaining balance',

      scrProfMockHead: 'Borrower Profile',
      scrProfId: 'National ID',
      scrProfIdSub: 'Front & back photo saved',
      scrVerified: 'Saved',
      scrProfGuar: 'Guarantor',
      scrLinked: 'Linked',

      roadKicker: 'Product roadmap',
      roadTitle: 'Built step by step with Cambodian lenders',
      roadP1Meta: 'Phase 1 · Early Access',
      roadP1Title: 'Core Loan Ledger',
      roadP1Item1: 'Borrower profiles with ID photo and guarantor',
      roadP1Item2: 'Flat, reducing balance, and interest-only calculators',
      roadP1Item3: 'Payment logging (Cash, ABA, KHQR) & receipts',
      roadP1Item4: 'Offline mode with PIN lock',
      roadP2Meta: 'Phase 2 · Next Release',
      roadP2Title: 'Reports & Cloud Backup',
      roadP2Item1: 'Monthly profit, capital, and delinquency reports',
      roadP2Item2: 'Unified USD & KHR multi-currency ledger view',
      roadP2Item3: 'Automatic encrypted cloud backup & restore',
      roadP2Item4: 'CSV & PDF export for personal records',
      roadP3Meta: 'Phase 3 · Expansion',
      roadP3Title: 'Contracts & Team Tools',
      roadP3Item1: 'Bilingual Khmer/English printable loan contracts',
      roadP3Item2: 'Staff & collector accounts with role permissions',
      roadP3Item3: 'Smart AI assistant for payment reminder drafts',

      priceKicker: 'Transparent pricing',
      priceTitle: 'Start free, upgrade as your book grows',
      priceLead: 'Placeholder launch pricing. Early access members lock in founding rates.',
      billMonthly: 'Monthly',
      billYearly: 'Yearly · Save 20%',
      perMonth: '/ month',
      planPopular: 'Most popular',

      planFreeName: 'Free',
      planFreeDesc: 'For individuals lending to a few trusted contacts.',
      planFreeF1: 'Up to 10 active loans',
      planFreeF2: 'Borrower ID & guarantor profiles',
      planFreeF3: 'USD & KHR tracking + offline mode',
      planFreeF4: 'PIN lock protection',
      planFreeCta: 'Join free beta',

      planProName: 'Pro',
      planProDesc: 'For active personal lenders managing regular collections.',
      planProF1: 'Unlimited borrowers & loans',
      planProF2: 'Digital receipts & overdue alerts',
      planProF3: 'Encrypted cloud backup & restore',
      planProF4: 'Monthly profit & collection reports',
      planProCta: 'Reserve Pro access',

      planBizName: 'Business',
      planBizDesc: 'For family offices and small lending teams with collectors.',
      planBizF1: 'Everything in Pro',
      planBizF2: 'Up to 5 staff collector accounts',
      planBizF3: 'Printable Khmer/English contracts',
      planBizF4: 'Priority Telegram & phone support',
      planBizCta: 'Request Business beta',

      faqKicker: 'Questions & answers',
      faqTitle: 'Frequently asked questions',
      faq1Q: 'Is KamChi free to use?',
      faq1A:
        'Yes. KamChi includes a Free plan for up to 10 active loans with full USD and KHR tracking, offline access, and PIN lock. Paid plans unlock unlimited loans, cloud backup, and team accounts.',
      faq2Q: 'Is my borrower and loan data safe?',
      faq2A:
        'Your records stay private on your device behind a 6-digit PIN lock. When cloud backup is enabled, data is encrypted so only your account can read or restore it.',
      faq3Q: 'Does it work offline without internet?',
      faq3A:
        'Yes. You can add borrowers, create loans, and record payments with zero mobile data. Everything saves locally first and syncs automatically once you are back online.',
      faq4Q: 'Can I use the app completely in Khmer?',
      faq4A:
        'Yes. Every screen, receipt, and report works in clear, natural Khmer or English, and you can switch languages anytime with one tap.',
      faq5Q: 'Can my staff or collectors use it too?',
      faq5A:
        'Multi-staff accounts with collector permissions are part of the Business plan in Phase 3, letting team members log daily collections while you keep full control over settings and reports.',

      formKicker: 'Early access',
      formTitle: 'Get invited to the KamChi beta',
      formLead:
        'Join Cambodian personal lenders testing KamChi ahead of public launch. Early members get priority onboarding and founding pricing.',
      formPerk1: 'Direct setup help via Telegram',
      formPerk2: 'Shape Phase 2 & Phase 3 features',
      formPerk3: 'No spam—only your invite link',

      fieldName: 'Full name',
      phName: 'e.g. Sokha Vann',
      fieldContact: 'Phone or Telegram',
      phContact: 'e.g. 012 345 678 or @sokhavann',
      fieldEmail: 'Email address',
      phEmail: 'you@example.com',
      fieldVolume: 'Monthly loan volume',
      volSelect: 'Select an estimated range',
      vol1: 'Under $5,000',
      vol2: '$5,000 – $25,000',
      vol3: '$25,000 – $100,000',
      vol4: 'Over $100,000',
      formSubmit: 'Request early access',

      errNameReq: 'Please enter your name.',
      errContactReq: 'Please enter a valid phone number or Telegram username.',
      errEmailReq: 'Please enter a valid email address.',
      errVolumeReq: 'Please select your monthly loan volume.',

      successTitle: 'You are on the early access list',
      successDesc: 'Thank you for signing up. We will message you with your KamChi beta invite soon.',
      successAnother: 'Submit another request',

      footerTagline: 'Lend with confidence. Track every riel.',
      footerCopy: '© 2026 KamChi. All rights reserved.',
      footerMadeIn: 'Made in Cambodia'
    },

    km: {
      pageTitle: 'KamChi (កម្ចី) — ឱ្យខ្ចីដោយទំនុកចិត្ត តាមដានគ្រប់រៀល',
      skipToContent: 'រំលងទៅខ្លឹមសារសំខាន់',
      navFeatures: 'មុខងារ',
      navHowItWorks: 'របៀបប្រើ',
      navPricing: 'តម្លៃ',
      navFaq: 'សំណួរញឹកញាប់',
      navCta: 'ស្នើសុំប្រើមុនគេ',

      heroKicker: 'KamChi (កម្ចី) · កម្មវិធីគ្រប់គ្រងកម្ចីផ្ទាល់ខ្លួន',
      heroTitle: 'ឱ្យខ្ចីដោយទំនុកចិត្ត តាមដានគ្រប់រៀល',
      heroSubtitle:
        'កម្មវិធីទូរស័ព្ទច្បាស់លាស់ និងងាយស្រួលសម្រាប់អ្នកឱ្យខ្ចីប្រាក់នៅកម្ពុជា។ រក្សាទុកអត្តសញ្ញាណអ្នកខ្ចី កាលវិភាគសងប្រាក់ និងបញ្ជីប្រាក់ដុល្លារ ឬប្រាក់រៀលយ៉ាងមានរបៀប ទោះគ្មានអ៊ីនធឺណិតក៏ដោយ។',
      heroPrimaryCta: 'ស្នើសុំប្រើមុនគេ',
      heroSecondaryCta: 'មើលមុខងារ',
      heroNote: 'គម្រោងឥតគិតថ្លៃ · Android & iOS · បង្កើតសម្រាប់កម្ពុជា',

      mockupMonth: 'វិច្ឆិកា ២០២៦',
      mockupTotalLent: 'ប្រាក់ដើមបានឱ្យខ្ចីសរុប',
      mockupCollected: 'ប្រមូលបាន',
      mockupOverdue: 'យឺតពេល',
      mockupActiveLoans: 'ត្រូវសងសប្តាហ៍នេះ',
      mockupLoanCount: '៣ កំពុងដំណើរការ',
      mockupBorrower1: 'សុខា ចាន់',
      mockupMeta1: 'ប្រចាំខែ · ABA · សង 8/12',
      mockupBorrower2: 'តារា គីម',
      mockupMeta2: 'ប្រចាំសប្តាហ៍ · KHQR · ទាន់ពេល',
      mockupBorrower3: 'វណ្ណា មាស',
      mockupMeta3: 'យឺត ២ ថ្ងៃ · សាច់ប្រាក់',
      mockupChartLabel: 'អត្រាប្រមូលប្រាក់ · 94%',

      trust1: 'បង្កើតសម្រាប់អ្នកឱ្យខ្ចីនៅកម្ពុជា',
      trust2: 'ប្រើបានទោះគ្មានអ៊ីនធឺណិត',
      trust3: 'គាំទ្រប្រាក់ដុល្លារ និងរៀល',
      trust4: 'ភាសាខ្មែរ និងអង់គ្លេស',

      psKicker: 'ហេតុអ្វីគួរប្តូរពីសៀវភៅកំណត់ត្រា',
      psTitle: 'ឈប់បារម្ភរឿងបាត់ទិន្នន័យសងប្រាក់ក្នុងសៀវភៅ និង Excel',
      psLead:
        'ការឱ្យខ្ចីប្រាក់ពឹងផ្អែកលើទំនុកចិត្ត និងភាពត្រឹមត្រូវ។ ការភ្លេចកត់ត្រា ឬគណនាខុសតែម្តង អាចនាំឱ្យខាតបង់ប្រាក់ និងបាត់បង់ទំនាក់ទំនងល្អ។',
      psBeforeLabel: 'ពីមុន',
      psBeforeTitle: 'សៀវភៅកត់ត្រា និងតារាង Excel',
      psBefore1: 'ពិបាករកមើលថាអ្នកណាយឺតពេល ដោយត្រូវបើករកមើលម្តងមួយទំព័រ',
      psBefore2: 'គណនាការប្រាក់ដោយដៃចំណាយពេលយូរ និងងាយភ្លាំងភ្លាត់',
      psBefore3: 'បញ្ជីប្រាក់ដុល្លារ និងប្រាក់រៀលលាយឡំគ្នា ពិបាកបូកសរុប',
      psBefore4: 'រូបថតអត្តសញ្ញាណប័ណ្ណបាត់ក្នុងឆាត និងគ្មានការបម្រុងទុក',
      psAfterLabel: 'ជាមួយ KamChi',
      psAfterTitle: 'កម្មវិធីតែមួយ ច្បាស់លាស់ និងមានរបៀប',
      psAfter1: 'មើលឃើញបញ្ជីត្រូវប្រមូលថ្ងៃនេះ និងអ្នកយឺតពេលលើអេក្រង់តែមួយ',
      psAfter2: 'បង្កើតតារាងសងប្រាក់ស្វ័យប្រវត្តិ (ការថេរ បន្ថយដើម ឬបង់តែការ)',
      psAfter3: 'បំបែកសមតុល្យដុល្លារ និងរៀលច្បាស់លាស់ ព្រមទាំងកំណត់ត្រា KHQR',
      psAfter4: 'រក្សាទុកអត្តសញ្ញាណប័ណ្ណ អ្នកធានា និងទិន្នន័យបម្រុងទុកដោយសុវត្ថិភាព',

      featKicker: 'បង្កើតឡើងសម្រាប់ការងារជាក់ស្តែង',
      featTitle: 'មុខងារគ្រប់គ្រាន់សម្រាប់ការឱ្យខ្ចីប្រកបដោយទំនុកចិត្ត',
      featLead:
        'រចនាឡើងស្របតាមរបៀបធ្វើការជាក់ស្តែងរបស់អ្នកឱ្យខ្ចីប្រាក់ផ្ទាល់ខ្លួន និងអាជីវកម្មគ្រួសារនៅកម្ពុជា។',
      f1Title: 'ប្រវត្តិអ្នកខ្ចី និងអ្នកធានា',
      f1Desc: 'រក្សាទុកលេខទូរស័ព្ទ រូបថតអត្តសញ្ញាណប័ណ្ណ អាសយដ្ឋាន និងព័ត៌មានអ្នកធានានៅកន្លែងតែមួយ។',
      f2Title: 'ទម្រង់កម្ចីបត់បែន',
      f2Desc: 'ជ្រើសរើសការប្រាក់ថេរ បន្ថយដើម ឬបង់តែការប្រាក់ ជាមួយការសងប្រចាំថ្ងៃ សប្តាហ៍ ឬខែ។',
      f3Title: 'កាលវិភាគសងប្រាក់ស្វ័យប្រវត្តិ',
      f3Desc: 'គណនាប្រាក់ដើម ការប្រាក់ និងថ្ងៃកំណត់សងដោយស្វ័យប្រវត្តិភ្លាមៗពេលបង្កើតកម្ចី។',
      f4Title: 'កត់ត្រាការសង និងបង្កាន់ដៃ',
      f4Desc: 'កត់ត្រាការបង់ជាសាច់ប្រាក់ ABA ឬ KHQR ក្នុងមួយប៉ះ រួចផ្ញើបង្កាន់ដៃស្អាតទៅអ្នកខ្ចី។',
      f5Title: 'ការជូនដំណឹងយឺតពេល និងប្រាក់ពិន័យ',
      f5Desc: 'ដឹងមុនពេលដល់ថ្ងៃកំណត់ ឬយឺតពេល ហើយអាចកំណត់គណនាប្រាក់ពិន័យយឺតពេលយ៉ាងងាយស្រួល។',
      f6Title: 'ផ្ទាំងសង្ខេប និងរបាយការណ៍',
      f6Desc: 'តាមដានប្រាក់ដើមសរុប ការប្រាក់រកបាន និងវឌ្ឍនភាពប្រមូលប្រាក់ប្រចាំខែបានភ្លាមៗ។',
      f7Title: 'គាំទ្រប្រាក់ដុល្លារ និងរៀល',
      f7Desc: 'ឱ្យខ្ចីជាដុល្លារអាមេរិក ឬប្រាក់រៀលខ្មែរ ឬទាំងពីរ ដោយមានការបង្ហាញតួលេខដាច់ដោយឡែកច្បាស់លាស់។',
      f8Title: 'ប្រើបានពេលគ្មានអ៊ីនធឺណិត',
      f8Desc: 'កត់ត្រាការបង់ប្រាក់នៅតាមខេត្តទោះគ្មានសេវាអ៊ីនធឺណិត។ ទិន្នន័យនឹងធ្វើសមកាលកម្មពេលភ្ជាប់អ៊ីនធឺណិតវិញ។',
      f9Title: 'ចាក់សោលេខកូដ PIN និងបម្រុងទុក',
      f9Desc: 'ការពារឯកជនភាពទិន្នន័យដោយលេខកូដ ៦ ខ្ទង់ និងអាចស្តារទិន្នន័យមកវិញពេលប្តូរទូរស័ព្ទ។',

      howKicker: 'ដំណើរការងាយស្រួល',
      howTitle: 'ចាប់ផ្តើមតាមដានក្នុង ៣ ជំហាន',
      step1Title: 'បន្ថែមអ្នកខ្ចី',
      step1Desc: 'បញ្ចូលឈ្មោះ លេខទូរស័ព្ទ រូបថតអត្តសញ្ញាណប័ណ្ណ និងអ្នកធានាក្នុងពេលតិចជាងមួយនាទី។',
      step2Title: 'បង្កើតកម្ចី',
      step2Desc: 'បញ្ចូលចំនួនទឹកប្រាក់ជាដុល្លារ ឬរៀល ជ្រើសវិធីគណនាការប្រាក់ និងកាលវិភាគសង រួចរក្សាទុក។',
      step3Title: 'ប្រមូល និងតាមដាន',
      step3Desc: 'កត់ត្រាការទូទាត់សាច់ប្រាក់ ABA ឬ KHQR ផ្ញើបង្កាន់ដៃ និងតាមដានគ្រប់រៀល។',

      screenKicker: 'ទិដ្ឋភាពក្នុងកម្មវិធី',
      screenTitle: 'អេក្រង់ស្អាត ងាយយល់ សម្រាប់ប្រើប្រាស់ប្រចាំថ្ងៃ',
      tabDashboard: 'ផ្ទាំងសង្ខេប',
      tabSchedule: 'តារាងសង',
      tabReceipt: 'បង្កាន់ដៃ',
      tabProfile: 'អ្នកខ្ចី',

      scrDashTitle: 'ទិដ្ឋភាពផលប័ត្រជាដុល្លារ និងរៀល',
      scrDashDesc:
        'ដឹងច្បាស់ថាដើមទុនកំពុងចេញប៉ុន្មាន ការប្រាក់ចូលខែនេះប៉ុន្មាន និងអ្នកណាខ្លះត្រូវរំលឹកថ្ងៃនេះ។',
      scrDashP1: 'បង្ហាញសមតុល្យដុល្លារ និងរៀលដាច់ដោយឡែក',
      scrDashP2: 'តម្រងមើលអ្នកត្រូវសងថ្ងៃនេះ និងអ្នកយឺតពេល',
      scrDashP3: 'ដំណើរការរលូនទោះពេលគ្មានអ៊ីនធឺណិត',

      scrSchedTitle: 'តារាងបង់រំលស់ស្វ័យប្រវត្តិ',
      scrSchedDesc:
        'កម្ចីនីមួយៗបង្កើតកាលវិភាគច្បាស់លាស់ ដែលបង្ហាញប្រាក់ដើម ការប្រាក់ និងស្ថានភាពបង់ប្រាក់តាមកាលកំណត់។',
      scrSchedP1: 'គាំទ្រការប្រាក់ថេរ បន្ថយដើម និងបង់តែការប្រាក់',
      scrSchedP2: 'ជម្រើសប្រចាំថ្ងៃ សប្តាហ៍ ឬប្រចាំខែ',
      scrSchedP3: 'បង្ហាញច្បាស់ពីវគ្គដែលបានបង់ និងវគ្គបន្ទាប់',

      scrRecTitle: 'បង្កាន់ដៃសាច់ប្រាក់ ABA និង KHQR',
      scrRecDesc:
        'កត់ត្រាការទូទាត់ក្នុងរយៈពេលប៉ុន្មានវិនាទី និងរក្សាប្រវត្តិបង្កាន់ដៃដែលមានតម្លាភាពទាំងសងខាង។',
      scrRecP1: 'កត់ត្រាប្រភេទទូទាត់ (សាច់ប្រាក់ ABA KHQR)',
      scrRecP2: 'កាត់សមតុល្យនៅសល់ដោយស្វ័យប្រវត្តិ',
      scrRecP3: 'ងាយស្រួលផ្ញើតាម Telegram ឬរក្សាទុកជារូបភាព',

      scrProfTitle: 'ឯកសារអ្នកខ្ចី និងអ្នកធានាពេញលេញ',
      scrProfDesc:
        'ភ្ជាប់រូបថតអត្តសញ្ញាណប័ណ្ណ លេខទូរស័ព្ទ និងព័ត៌មានអ្នកធានាជាមួយប្រវត្តិកម្ចីរបស់អ្នកខ្ចីម្នាក់ៗ។',
      scrProfP1: 'រក្សាទុករូបថតអត្តសញ្ញាណប័ណ្ណមុខ និងក្រោយ',
      scrProfP2: 'ភ្ជាប់លេខទូរស័ព្ទ និងកំណត់ចំណាំអ្នកធានា',
      scrProfP3: 'មើលប្រវត្តិសងប្រាក់ទាំងអស់ក្នុងទំព័រតែមួយ',

      scrDashMockHead: 'សង្ខេបថ្ងៃនេះ',
      scrDashMockOut: 'កំពុងឱ្យខ្ចី (USD)',
      scrDashMockKhr: 'កំពុងឱ្យខ្ចី (KHR)',
      scrDashMockRow1: 'ប្រមូលបានខែនេះ',
      scrDashMockRow1Sub: 'បានកត់ត្រា ១៨ លើក',
      scrDashMockRow2: 'ត្រូវសងថ្ងៃនេះ',
      scrDashMockRow2Sub: 'អ្នកខ្ចី ២ នាក់',

      scrSchedMockHead: 'កម្ចី #KC-108 · ៦ ខែ',
      scrSchedMethod: 'បន្ថយប្រាក់ដើម',
      scrPaid: 'បានបង់',
      scrUpcoming: 'ដល់កំណត់បន្ទាប់',

      scrRecMockHead: 'បង្កាន់ដៃទទួលប្រាក់',
      scrRecMeta: 'បង់តាម ABA KHQR · ១៥ វិច្ឆិកា ២០២៦',
      scrRecBorrower: 'អ្នកខ្ចី',
      scrRecBalance: 'ប្រាក់នៅសល់',

      scrProfMockHead: 'ប្រវត្តិអ្នកខ្ចី',
      scrProfId: 'អត្តសញ្ញាណប័ណ្ណ',
      scrProfIdSub: 'រក្សាទុករូបមុខ និងក្រោយ',
      scrVerified: 'បានរក្សាទុក',
      scrProfGuar: 'អ្នកធានា',
      scrLinked: 'បានភ្ជាប់',

      roadKicker: 'ផែនទីអភិវឌ្ឍន៍',
      roadTitle: 'អភិវឌ្ឍជាជំហានៗ ជាមួយអ្នកឱ្យខ្ចីនៅកម្ពុជា',
      roadP1Meta: 'ដំណាក់កាលទី ១ · សាកល្បងដំបូង',
      roadP1Title: 'បញ្ជីកម្ចីស្នូល',
      roadP1Item1: 'ប្រវត្តិអ្នកខ្ចី រូបអត្តសញ្ញាណប័ណ្ណ និងអ្នកធានា',
      roadP1Item2: 'គណនាការប្រាក់ថេរ បន្ថយដើម និងបង់តែការប្រាក់',
      roadP1Item3: 'កត់ត្រាការបង់ (សាច់ប្រាក់ ABA KHQR) និងបង្កាន់ដៃ',
      roadP1Item4: 'ប្រើប្រាស់ពេលគ្មានអ៊ីនធឺណិត និងចាក់សោ PIN',
      roadP2Meta: 'ដំណាក់កាលទី ២ · កំណែបន្ទាប់',
      roadP2Title: 'របាយការណ៍ និងបម្រុងទុកលើ Cloud',
      roadP2Item1: 'របាយការណ៍ប្រាក់ចំណេញ ដើមទុន និងការយឺតពេលប្រចាំខែ',
      roadP2Item2: 'ទិដ្ឋភាពបញ្ជីរួមដុល្លារ និងរៀល',
      roadP2Item3: 'បម្រុងទុកអ៊ិនគ្រីបស្វ័យប្រវត្តិ និងស្តារទិន្នន័យ',
      roadP2Item4: 'នាំចេញជា CSV និង PDF សម្រាប់រក្សាទុក',
      roadP3Meta: 'ដំណាក់កាលទី ៣ · ពង្រីកមុខងារ',
      roadP3Title: 'កិច្ចសន្យា និងគណនីក្រុមការងារ',
      roadP3Item1: 'កិច្ចសន្យាខ្ចីប្រាក់ភាសាខ្មែរ និងអង់គ្លេសសម្រាប់បោះពុម្ព',
      roadP3Item2: 'គណនីបុគ្គលិកប្រមូលប្រាក់ដោយមានសិទ្ធិកំណត់',
      roadP3Item3: 'ជំនួយការ AI សម្រាប់ព្រាងសាររំលឹកការសងប្រាក់',

      priceKicker: 'តម្លៃច្បាស់លាស់',
      priceTitle: 'ចាប់ផ្តើមដោយឥតគិតថ្លៃ ដំឡើងកម្រិតពេលអាជីវកម្មរីកចម្រើន',
      priceLead: 'តម្លៃសាកល្បងបឋម។ សមាជិកចុះឈ្មោះមុនគេនឹងទទួលបានអត្រាពិសេស។',
      billMonthly: 'ប្រចាំខែ',
      billYearly: 'ប្រចាំឆ្នាំ · សន្សំ 20%',
      perMonth: '/ ខែ',
      planPopular: 'ពេញនិយមបំផុត',

      planFreeName: 'ឥតគិតថ្លៃ (Free)',
      planFreeDesc: 'សម្រាប់អ្នកឱ្យខ្ចីផ្ទាល់ខ្លួនដែលមានកម្ចីតិចតួច។',
      planFreeF1: 'កម្ចីសកម្មរហូតដល់ ១០',
      planFreeF2: 'ប្រវត្តិអ្នកខ្ចី អត្តសញ្ញាណ និងអ្នកធានា',
      planFreeF3: 'ប្រាក់ដុល្លារ/រៀល និងប្រើគ្មានអ៊ីនធឺណិត',
      planFreeF4: 'ការពារដោយលេខកូដ PIN',
      planFreeCta: 'ចូលរួមសាកល្បងឥតគិតថ្លៃ',

      planProName: 'Pro',
      planProDesc: 'សម្រាប់អ្នកឱ្យខ្ចីសកម្មដែលត្រូវតាមដានការប្រមូលប្រាក់ជាប្រចាំ។',
      planProF1: 'មិនកំណត់ចំនួនអ្នកខ្ចី និងកម្ចី',
      planProF2: 'បង្កាន់ដៃឌីជីថល និងដាស់តឿនយឺតពេល',
      planProF3: 'បម្រុងទុកលើ Cloud ដោយសុវត្ថិភាព',
      planProF4: 'របាយការណ៍ប្រាក់ចំណេញ និងការប្រមូលប្រចាំខែ',
      planProCta: 'កក់សិទ្ធិប្រើ Pro',

      planBizName: 'Business',
      planBizDesc: 'សម្រាប់ក្រុមគ្រួសារ ឬក្រុមការងារដែលមានអ្នកប្រមូលប្រាក់។',
      planBizF1: 'មុខងារទាំងអស់ក្នុងគម្រោង Pro',
      planBizF2: 'គណនីបុគ្គលិកប្រមូលប្រាក់រហូតដល់ ៥ នាក់',
      planBizF3: 'កិច្ចសន្យាខ្ចីប្រាក់ភាសាខ្មែរ/អង់គ្លេស',
      planBizF4: 'ជំនួយពិសេសតាម Telegram និងទូរស័ព្ទ',
      planBizCta: 'ស្នើសុំគម្រោង Business',

      faqKicker: 'សំណួរ និងចម្លើយ',
      faqTitle: 'សំណួរដែលសួរញឹកញាប់',
      faq1Q: 'តើ KamChi ឥតគិតថ្លៃឬទេ?',
      faq1A:
        'បាទ/ចាស។ KamChi មានគម្រោងឥតគិតថ្លៃសម្រាប់កម្ចីសកម្មរហូតដល់ ១០ ជាមួយប្រាក់ដុល្លារ និងរៀល ប្រើបានពេលគ្មានអ៊ីនធឺណិត និងចាក់សោ PIN។ គម្រោងបង់ប្រាក់បន្ថែមកម្ចីមិនកំណត់ និងការបម្រុងទុកលើ Cloud។',
      faq2Q: 'តើទិន្នន័យអ្នកខ្ចី និងកម្ចីរបស់ខ្ញុំមានសុវត្ថិភាពទេ?',
      faq2A:
        'ទិន្នន័យរបស់អ្នករក្សាទុកជាឯកជនលើទូរស័ព្ទដោយចាក់សោ PIN ៦ ខ្ទង់។ ពេលបើកការបម្រុងទុកលើ Cloud ទិន្នន័យត្រូវបានអ៊ិនគ្រីប មានតែគណនីរបស់អ្នកប៉ុណ្ណោះដែលអាចបើកមើលបាន។',
      faq3Q: 'តើវាប្រើបានពេលគ្មានអ៊ីនធឺណិតទេ?',
      faq3A:
        'ប្រើបាន។ អ្នកអាចបន្ថែមអ្នកខ្ចី បង្កើតកម្ចី និងកត់ត្រាការបង់ប្រាក់ដោយមិនចាំបាច់មានអ៊ីនធឺណិត។ ទិន្នន័យរក្សាទុកក្នុងទូរស័ព្ទជាមុន ហើយធ្វើសមកាលកម្មដោយស្វ័យប្រវត្តិពេលភ្ជាប់អ៊ីនធឺណិតវិញ។',
      faq4Q: 'តើខ្ញុំអាចប្រើកម្មវិធីនេះជាភាសាខ្មែរទាំងស្រុងបានទេ?',
      faq4A:
        'បាន។ រាល់អេក្រង់ បង្កាន់ដៃ និងរបាយការណ៍ទាំងអស់ដំណើរការជាភាសាខ្មែរច្បាស់លាស់ ឬអង់គ្លេស ហើយអ្នកអាចប្តូរភាសាបានគ្រប់ពេល។',
      faq5Q: 'តើបុគ្គលិក ឬអ្នកប្រមូលប្រាក់អាចប្រើជាមួយគ្នាបានទេ?',
      faq5A:
        'គណនីបុគ្គលិកច្រើននាក់ដែលមានការកំណត់សិទ្ធិមាននៅក្នុងគម្រោង Business នៃដំណាក់កាលទី ៣ ដែលអនុញ្ញាតឱ្យក្រុមការងារកត់ត្រាការប្រមូលប្រចាំថ្ងៃ ខណៈអ្នកគ្រប់គ្រងរក្សាសិទ្ធិពេញលេញ។',

      formKicker: 'ចុះឈ្មោះប្រើមុនគេ',
      formTitle: 'ទទួលការអញ្ជើញចូលរួមសាកល្បង KamChi',
      formLead:
        'ចូលរួមជាមួយអ្នកឱ្យខ្ចីប្រាក់នៅកម្ពុជាដែលកំពុងសាកល្បង KamChi មុនពេលដាក់ឱ្យប្រើជាផ្លូវការ។',
      formPerk1: 'ជួយរៀបចំការប្រើប្រាស់ផ្ទាល់តាម Telegram',
      formPerk2: 'រួមចំណែកផ្តល់យោបល់សម្រាប់ដំណាក់កាលទី ២ និងទី ៣',
      formPerk3: 'គ្មានសាររំខាន—ផ្ញើតែតំណអញ្ជើញប៉ុណ្ណោះ',

      fieldName: 'ឈ្មោះពេញ',
      phName: 'ឧ. សុខា វណ្ណ',
      fieldContact: 'លេខទូរស័ព្ទ ឬ Telegram',
      phContact: 'ឧ. 012 345 678 ឬ @sokhavann',
      fieldEmail: 'អ៊ីមែល',
      phEmail: 'you@example.com',
      fieldVolume: 'ទំហំកម្ចីប្រចាំខែ (ប៉ាន់ស្មាន)',
      volSelect: 'ជ្រើសរើសទំហំទឹកប្រាក់',
      vol1: 'ក្រោម $5,000',
      vol2: '$5,000 – $25,000',
      vol3: '$25,000 – $100,000',
      vol4: 'លើសពី $100,000',
      formSubmit: 'ស្នើសុំប្រើមុនគេ',

      errNameReq: 'សូមបញ្ចូលឈ្មោះរបស់អ្នក។',
      errContactReq: 'សូមបញ្ចូលលេខទូរស័ព្ទ ឬឈ្មោះ Telegram ឱ្យបានត្រឹមត្រូវ។',
      errEmailReq: 'សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលឱ្យបានត្រឹមត្រូវ។',
      errVolumeReq: 'សូមជ្រើសរើសទំហំកម្ចីប្រចាំខែ។',

      successTitle: 'អ្នកបានចូលក្នុងបញ្ជីប្រើមុនគេហើយ',
      successDesc: 'សូមអរគុណសម្រាប់ការចុះឈ្មោះ។ យើងនឹងផ្ញើសារអញ្ជើញសាកល្បង KamChi ជូនអ្នកក្នុងពេលឆាប់ៗ។',
      successAnother: 'ផ្ញើសំណើមួយទៀត',

      footerTagline: 'ឱ្យខ្ចីដោយទំនុកចិត្ត តាមដានគ្រប់រៀល។',
      footerCopy: '© 2026 KamChi. រក្សាសិទ្ធិគ្រប់យ៉ាង។',
      footerMadeIn: 'ផលិតនៅកម្ពុជា'
    }
  };

  /* =========================================================================
     2. STATE & HELPERS
     ========================================================================= */
  var currentLang = 'km';
  var currentScreen = 'dashboard';
  var currentBilling = 'monthly';

  function detectInitialLang() {
    try {
      var saved = localStorage.getItem('kamchi_lang');
      if (saved === 'en' || saved === 'km') return saved;
    } catch (e) {}
    return 'km';
  }

  /* =========================================================================
     3. LANGUAGE ENGINE
     ========================================================================= */
  function applyLanguage(lang) {
    currentLang = lang === 'km' ? 'km' : 'en';
    var dict = translations[currentLang];

    document.documentElement.setAttribute('lang', currentLang);
    if (dict.pageTitle) {
      document.title = dict.pageTitle;
    }

    try {
      localStorage.setItem('kamchi_lang', currentLang);
    } catch (e) {}

    // Swap all text elements with data-i18n
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    }

    // Swap input placeholders
    var phNodes = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < phNodes.length; j++) {
      var input = phNodes[j];
      var phKey = input.getAttribute('data-i18n-placeholder');
      if (dict[phKey]) {
        input.setAttribute('placeholder', dict[phKey]);
      }
    }

    // Update all language switcher buttons (header + footer)
    var langButtons = document.querySelectorAll('[data-lang-btn]');
    for (var k = 0; k < langButtons.length; k++) {
      var btn = langButtons[k];
      var isTarget = btn.getAttribute('data-lang-btn') === currentLang;
      btn.classList.toggle('is-active', isTarget);
      btn.setAttribute('aria-pressed', isTarget ? 'true' : 'false');
    }

    // Re-sync dynamic screenshot description text in the selected language
    updateScreenDetails(currentScreen);
  }

  function initLanguageToggle() {
    var langButtons = document.querySelectorAll('[data-lang-btn]');
    for (var i = 0; i < langButtons.length; i++) {
      langButtons[i].addEventListener('click', function () {
        var nextLang = this.getAttribute('data-lang-btn');
        applyLanguage(nextLang);
      });
    }
    applyLanguage(detectInitialLang());
  }

  /* =========================================================================
     4. THEME TOGGLE (LIGHT / DARK)
     ========================================================================= */
  function initThemeToggle() {
    var toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;

    function syncAria() {
      var isDark = document.documentElement.classList.contains('dark');
      toggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    }

    syncAria();

    toggleBtn.addEventListener('click', function () {
      var isDark = document.documentElement.classList.toggle('dark');
      try {
        localStorage.setItem('kamchi_theme', isDark ? 'dark' : 'light');
      } catch (e) {}
      syncAria();
    });
  }

  /* =========================================================================
     5. MOBILE MENU DRAWER
     ========================================================================= */
  function initMobileMenu() {
    var menuBtn = document.getElementById('mobileMenuBtn');
    var drawer = document.getElementById('mobileDrawer');
    if (!menuBtn || !drawer) return;

    function closeDrawer() {
      menuBtn.setAttribute('aria-expanded', 'false');
      drawer.hidden = true;
    }

    menuBtn.addEventListener('click', function () {
      var isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      drawer.hidden = isOpen;
    });

    var drawerLinks = drawer.querySelectorAll('a');
    for (var i = 0; i < drawerLinks.length; i++) {
      drawerLinks[i].addEventListener('click', closeDrawer);
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !drawer.hidden) {
        closeDrawer();
        menuBtn.focus();
      }
    });
  }

  /* =========================================================================
     6. SCREENSHOTS TABBED PREVIEW
     ========================================================================= */
  var screenKeyMap = {
    dashboard: { title: 'scrDashTitle', desc: 'scrDashDesc', points: ['scrDashP1', 'scrDashP2', 'scrDashP3'] },
    schedule: { title: 'scrSchedTitle', desc: 'scrSchedDesc', points: ['scrSchedP1', 'scrSchedP2', 'scrSchedP3'] },
    receipt: { title: 'scrRecTitle', desc: 'scrRecDesc', points: ['scrRecP1', 'scrRecP2', 'scrRecP3'] },
    profile: { title: 'scrProfTitle', desc: 'scrProfDesc', points: ['scrProfP1', 'scrProfP2', 'scrProfP3'] }
  };

  function updateScreenDetails(screenId) {
    currentScreen = screenKeyMap[screenId] ? screenId : 'dashboard';
    var dict = translations[currentLang];
    var keys = screenKeyMap[currentScreen];

    var titleEl = document.getElementById('screenDetailTitle');
    var descEl = document.getElementById('screenDetailDesc');
    var pointsEl = document.getElementById('screenDetailPoints');

    if (titleEl && dict[keys.title]) titleEl.textContent = dict[keys.title];
    if (descEl && dict[keys.desc]) descEl.textContent = dict[keys.desc];

    if (pointsEl) {
      var listItems = pointsEl.querySelectorAll('li');
      for (var i = 0; i < listItems.length; i++) {
        var ptKey = keys.points[i];
        if (ptKey && dict[ptKey]) {
          listItems[i].textContent = dict[ptKey];
        }
      }
    }
  }

  function initScreenshotTabs() {
    var tabs = document.querySelectorAll('[data-screen-tab]');
    var panels = document.querySelectorAll('[data-screen-panel]');
    if (!tabs.length) return;

    function activateTab(targetId) {
      for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i];
        var active = tab.getAttribute('data-screen-tab') === targetId;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
      }

      for (var j = 0; j < panels.length; j++) {
        var panel = panels[j];
        var show = panel.getAttribute('data-screen-panel') === targetId;
        panel.classList.toggle('is-active', show);
        panel.hidden = !show;
      }

      updateScreenDetails(targetId);
    }

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function () {
        activateTab(this.getAttribute('data-screen-tab'));
      });
    }
  }

  /* =========================================================================
     7. PRICING BILLING TOGGLE & PLAN PRE-FILL
     ========================================================================= */
  function initPricing() {
    var billingBtns = document.querySelectorAll('[data-billing]');
    var figures = document.querySelectorAll('.price-figure');

    function setBilling(mode) {
      currentBilling = mode === 'yearly' ? 'yearly' : 'monthly';
      for (var i = 0; i < billingBtns.length; i++) {
        var btn = billingBtns[i];
        var isMatch = btn.getAttribute('data-billing') === currentBilling;
        btn.classList.toggle('is-active', isMatch);
        btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
      }

      for (var j = 0; j < figures.length; j++) {
        var fig = figures[j];
        var attr = currentBilling === 'yearly' ? 'data-price-yearly' : 'data-price-monthly';
        var val = fig.getAttribute(attr);
        if (val) fig.textContent = val;
      }
    }

    for (var i = 0; i < billingBtns.length; i++) {
      billingBtns[i].addEventListener('click', function () {
        setBilling(this.getAttribute('data-billing'));
      });
    }

    // Pre-select loan volume in Early Access form when clicking a plan CTA
    var planButtons = document.querySelectorAll('[data-select-plan]');
    var volumeSelect = document.getElementById('leadVolume');
    for (var k = 0; k < planButtons.length; k++) {
      planButtons[k].addEventListener('click', function () {
        var preset = this.getAttribute('data-select-plan');
        if (volumeSelect && preset) {
          volumeSelect.value = preset;
        }
      });
    }
  }

  /* =========================================================================
     8. FAQ ACCORDION
     ========================================================================= */
  function initFaqAccordion() {
    var questions = document.querySelectorAll('.faq-question');
    for (var i = 0; i < questions.length; i++) {
      questions[i].addEventListener('click', function () {
        var expanded = this.getAttribute('aria-expanded') === 'true';
        var panelId = this.getAttribute('aria-controls');
        var panel = panelId ? document.getElementById(panelId) : null;

        this.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        if (panel) {
          panel.hidden = expanded;
        }
      });
    }
  }

  /* =========================================================================
     9. EARLY ACCESS FORM VALIDATION & STATIC SUBMISSION
     ========================================================================= */
  function initEarlyAccessForm() {
    var form = document.getElementById('earlyAccessForm');
    var successBox = document.getElementById('formSuccess');
    var resetBtn = document.getElementById('resetFormBtn');
    if (!form || !successBox) return;

    var nameInput = document.getElementById('leadName');
    var contactInput = document.getElementById('leadContact');
    var emailInput = document.getElementById('leadEmail');
    var volumeSelect = document.getElementById('leadVolume');

    var errName = document.getElementById('errName');
    var errContact = document.getElementById('errContact');
    var errEmail = document.getElementById('errEmail');
    var errVolume = document.getElementById('errVolume');

    function setError(inputEl, errEl, message) {
      if (!inputEl || !errEl) return;
      errEl.textContent = message;
      inputEl.setAttribute('aria-invalid', message ? 'true' : 'false');
    }

    function clearAllErrors() {
      setError(nameInput, errName, '');
      setError(contactInput, errContact, '');
      setError(emailInput, errEmail, '');
      setError(volumeSelect, errVolume, '');
    }

    function validateForm() {
      var dict = translations[currentLang];
      var valid = true;
      clearAllErrors();

      var nameVal = nameInput.value.trim();
      var contactVal = contactInput.value.trim();
      var emailVal = emailInput.value.trim();
      var volumeVal = volumeSelect.value;

      if (nameVal.length < 2) {
        setError(nameInput, errName, dict.errNameReq);
        valid = false;
      }

      // Accepts Cambodian phone numbers (e.g. 012 345 678, +855...) or Telegram handle (@user)
      var phoneOrTgPattern = /^(?:@[a-zA-Z0-9_]{3,}|[\d\s+\-()]{8,20})$/;
      if (!phoneOrTgPattern.test(contactVal)) {
        setError(contactInput, errContact, dict.errContactReq);
        valid = false;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailVal)) {
        setError(emailInput, errEmail, dict.errEmailReq);
        valid = false;
      }

      if (!volumeVal) {
        setError(volumeSelect, errVolume, dict.errVolumeReq);
        valid = false;
      }

      return valid;
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!validateForm()) return;

      /*
       * HOW TO CONNECT TO A REAL STATIC FORM SERVICE (GITHUB PAGES):
       *
       * Option 1 — Formspree:
       *   fetch('https://formspree.io/f/YOUR_FORM_ID', {
       *     method: 'POST',
       *     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
       *     body: JSON.stringify({
       *       name: nameInput.value.trim(),
       *       contact: contactInput.value.trim(),
       *       email: emailInput.value.trim(),
       *       volume: volumeSelect.value,
       *       language: currentLang
       *     })
       *   }).then(...)
       *
       * Option 2 — Google Forms:
       *   Create a Google Form, inspect the input names (entry.123456), and send
       *   a FormData POST with mode: 'no-cors' to:
       *   https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
       */

      form.hidden = true;
      successBox.hidden = false;
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        form.reset();
        clearAllErrors();
        successBox.hidden = true;
        form.hidden = false;
        nameInput.focus();
      });
    }
  }

  /* =========================================================================
     10. SCROLL REVEAL ANIMATION
     ========================================================================= */
  function initScrollReveal() {
    var revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      for (var i = 0; i < revealEls.length; i++) {
        revealEls[i].classList.add('is-visible');
      }
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            entries[i].target.classList.add('is-visible');
            observer.unobserve(entries[i].target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -24px 0px' }
    );

    for (var j = 0; j < revealEls.length; j++) {
      observer.observe(revealEls[j]);
    }
  }

  /* =========================================================================
     INIT ON DOM READY
     ========================================================================= */
  document.addEventListener('DOMContentLoaded', function () {
    initLanguageToggle();
    initThemeToggle();
    initMobileMenu();
    initScreenshotTabs();
    initPricing();
    initFaqAccordion();
    initEarlyAccessForm();
    initScrollReveal();
  });
})();
