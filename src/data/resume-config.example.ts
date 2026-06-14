import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Braiki Aymen',
    // Auto-detected: just drop your photo or profile image in public/images/ (any .jpg, .png, .webp)
    // You can also set a specific path here to override auto-detection:
    photo: '/images/photo.jpg',
    photoBackEmoji: '👩‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Fullstack Developer',
      fr: 'Développeuse Fullstack',
    },
    subtitle: {
      en: '1 years of experience',
      fr: '1 ans d\'expérience',
    },
    location: 'Tunis, Tunisie',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Braiki Aymen — Fullstack Developer',
    description: 'Interactive resume of Braiki Aymen, Fullstack Developer specializing in React and TypeScript.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'braiki89-aymen', href: 'https://github.com/braiki89-aymen' },
    { type: 'linkedin', label: 'Braiki Aymen', href: 'https://www.linkedin.com/in/aymen-braiki-033115245' },
    { type: 'email', label: 'braiki_aymen20@yahoo.fr' },
    { type: 'phone', label: '+216 96 445 085' },
    { type: 'location', label: 'Tunis, Tunisie' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'B2', fr: 'B2' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'B2', fr: 'B2' },  },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Angular' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Python' },
        { name: 'Java' },
        
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'AWS' },
        { name: 'GitHub Actions' },
      ],
    },
    {
      title: { en: 'Methodologies', fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { en: 'Agile/Scrum, TDD, Code Review, CI/CD', fr: 'Agile/Scrum, TDD, Code Review, CI/CD' } },
      ],
    },
  ],

  
// ===== EXPÉRIENCES PROFESSIONNELLES =====
experiences: [
  {
    id: 'talys-consulting',
    company: { en: 'Talys Consulting', fr: 'Talys Consulting' },
    role: { en: 'Fullstack Developer Intern', fr: 'Stagiaire Développeur Fullstack' },
    type: { en: 'Internship', fr: 'Stage' },
    period: { en: 'June 2025 – August 2025', fr: 'juin 2025 – août 2025' },
    description: {
      en: 'Design and development of a full-stack automated credit simulation application.',
      fr: 'Conception et développement d\'une application full-stack de simulation de crédit automatisée.',
    },
    techs: ['Spring Boot', 'Angular', 'TypeScript', 'Java'],
    isHighlighted: true,
    details: {
      context: {
        en: 'Development of a credit simulation application',
        fr: 'Développement d\'une application de simulation de crédit',
      },
      tasks: {
        en: [
          'Design and development of a full-stack automated credit simulation application',
          'Implementation of a dynamic 3-step workflow: product selection, data input, and repayment schedule visualization',
        ],
        fr: [
          'Conception et développement d\'une application full-stack de simulation de crédit automatisée',
          'Mise en place d\'un workflow dynamique en 3 étapes : sélection produit, saisie de données et visualisation d\'échéancier',
        ],
      },
      env: {
        en: 'Spring Boot / Angular / TypeScript / Java',
        fr: 'Spring Boot / Angular / TypeScript / Java',
      },
    },
  },
  {
    id: 'biware-consulting',
    company: { en: 'Biware Consulting', fr: 'Biware Consulting' },
    role: { en: 'Data & Reporting Intern', fr: 'Stagiaire Data & Reporting' },
    type: { en: 'Internship', fr: 'Stage' },
    period: { en: 'June 2024 – August 2024', fr: 'juin 2024 – août 2024' },
    description: {
      en: 'Development of a Data Quality and Reporting system using Python and Power BI.',
      fr: 'Développement d\'un système de Data Quality et Reporting via Python et Power BI.',
    },
    techs: ['Python', 'Power BI'],
    details: {
      context: {
        en: 'Development of a Data Quality and Reporting system',
        fr: 'Développement d\'un système de Data Quality et Reporting',
      },
      tasks: {
        en: [
          'Development of a Data Quality and Reporting system using Python and Power BI',
          'Creation of interactive dashboards and automation of data validation',
        ],
        fr: [
          'Développement d\'un système de Data Quality et Reporting via Python et Power BI',
          'Création de tableaux de bord interactifs et automatisation de la validation de données',
        ],
      },
      env: {
        en: 'Python / Power BI',
        fr: 'Python / Power BI',
      },
    },
  },
  {
    id: 'mytek',
    company: { en: 'Mytek', fr: 'Mytek' },
    role: { en: 'Digital Marketing Agent', fr: 'Agent Marketing' },
    type: { en: 'Contract', fr: 'CDD' },
    period: { en: 'September 2021 – October 2022', fr: 'septembre 2021 – octobre 2022' },
    description: {
      en: 'Digital communication management, online customer support and sales optimization.',
      fr: 'Gestion de la communication digitale, optimisation du support client et des ventes en ligne.',
    },
    techs: [],
    details: {
      context: {
        en: 'Digital communication and sales optimization',
        fr: 'Communication digitale et optimisation des ventes',
      },
      tasks: {
        en: ['Digital communication management, optimization of customer support and online sales'],
        fr: ['Gestion de la communication digitale, optimisation du support client et des ventes en ligne'],
      },
      env: {
        en: 'Digital Marketing Tools',
        fr: 'Outils de Marketing Digital',
      },
    },
  },
  {
    id: 'tunis-call-center',
    company: { en: 'Tunis Call Center', fr: 'Tunis Call Center' },
    role: { en: 'Sales Agent', fr: 'Agent Commercial' },
    type: { en: 'Contract', fr: 'CDD' },
    period: { en: 'November 2018 – January 2020', fr: 'novembre 2018 – janvier 2020' },
    description: {
      en: 'Management of inbound/outbound commercial negotiations and processing of sales offers.',
      fr: 'Gestion des négociations commerciales entrantes/sortantes et traitement des offres de vente.',
    },
    techs: [],
    details: {
      context: {
        en: 'Inbound/outbound commercial negotiations and sales processing',
        fr: 'Négociations commerciales entrantes/sortantes et traitement des ventes',
      },
      tasks: {
        en: ['Management of inbound/outbound commercial negotiations and processing of sales offers'],
        fr: ['Gestion des négociations commerciales entrantes/sortantes et traitement des offres de vente'],
      },
      env: {
        en: 'Commercial Tools',
        fr: 'Outils Commerciaux',
      },
    },
  },
  {
    id: 'orange-tunisie',
    company: { en: 'Orange Tunisie', fr: 'Orange Tunisie' },
    role: { en: 'Technical Sales Advisor', fr: 'Conseiller Technico-Commercial' },
    type: { en: 'Contract', fr: 'CDD' },
    period: { en: 'December 2015 – November 2016', fr: 'décembre 2015 – novembre 2016' },
    description: {
      en: 'Sale of technical products, after-sales support and inventory management.',
      fr: 'Vente de produits techniques, support après-vente et gestion des stocks.',
    },
    techs: [],
    details: {
      context: {
        en: 'Sale of technical products and inventory management',
        fr: 'Vente de produits techniques et gestion des stocks',
      },
      tasks: {
        en: ['Sale of technical products, after-sales support and inventory management'],
        fr: ['Vente de produits techniques, support après-vente et gestion des stocks'],
      },
      env: {
        en: 'Retail and Technical Sales Tools',
        fr: 'Outils de Vente et Support Technique',
      },
    },
  },
],

// ===== PROJETS ACADÉMIQUES =====
projects: [
  {
    id: 'skillup',
    title: { en: 'Skillup (Microservices)', fr: 'Skillup (Microservices)' },
    description: {
      en: 'Modular e-learning platform developed with Spring Boot and Angular. Implementation of RabbitMQ (async) and FeignClient (sync) for inter-service communication.',
      fr: 'Plateforme d\'e-learning modulaire développée avec Spring Boot et Angular. Implémentation de RabbitMQ (asynchrone) et FeignClient (synchrone) pour la communication entre services.',
    },
    techs: ['Spring Boot', 'Angular', 'RabbitMQ', 'FeignClient'],
  },
  {
    id: 'event-connect',
    title: { en: 'Event Connect', fr: 'Event Connect' },
    description: {
      en: 'Event management application built with Spring Boot and Angular. Integration of Stripe for payments and an AI model for success prediction.',
      fr: 'Application de gestion d\'événements réalisée avec Spring Boot et Angular. Intégration de Stripe pour les paiements et d\'un modèle d\'IA pour la prédiction de succès.',
    },
    techs: ['Spring Boot', 'Angular', 'Stripe', 'AI/ML'],
  },
  {
    id: 'rs-sport',
    title: { en: 'RS-SPORT', fr: 'RS-SPORT' },
    description: {
      en: 'Football club management system built with Spring Boot and Angular. Implementation of RBAC and real-time dashboards.',
      fr: 'Système de gestion de club de football conçu avec Spring Boot et Angular. Mise en place d\'un contrôle d\'accès sécurisé (RBAC) et de tableaux de bord en temps réel.',
    },
    techs: ['Spring Boot', 'Angular', 'RBAC'],
  },
  {
    id: 'bank-loan-simulator',
    title: { en: 'Bank Loan Simulator', fr: 'Bank Loan Simulator' },
    description: {
      en: 'Credit simulation tool developed with Spring Boot and Angular. Dynamic 3-step workflow with automatic repayment schedule calculation.',
      fr: 'Outil de simulation de crédit développé avec Spring Boot et Angular. Workflow dynamique en 3 étapes avec calcul automatique des échéanciers de remboursement.',
    },
    techs: ['Spring Boot', 'Angular'],
  },
],

// ===== FORMATION =====
education: [
  {
    school: { en: 'ESPRIT – École Supérieure Privée d\'Ingénierie et des Technologies', fr: 'ESPRIT – École Supérieure Privée d\'Ingénierie et des Technologies' },
    degree: { en: 'Engineering Degree in Software Engineering', fr: 'Diplôme d\'Ingénieur en Génie Logiciel' },
    specialty: { en: 'Software Engineering', fr: 'Génie Logiciel' },
    period: 'En cours',
  },
  {
    school: { en: 'École Supérieure de Commerce de Tunis', fr: 'École Supérieure de Commerce de Tunis' },
    degree: { en: 'Master in Marketing', fr: 'Mastère en Marketing' },
    period: '2013',
  },
  {
    school: { en: 'École Supérieure de Commerce de Tunis', fr: 'École Supérieure de Commerce de Tunis' },
    degree: { en: 'Bachelor in Management Information Systems', fr: 'Licence en Informatique de Gestion' },
    period: '2011',
  },
],
  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Photography', fr: 'Photographie' },
      details: [
        { en: 'Street photography', fr: 'Photo de rue' },
        { en: '5 years', fr: '5 ans' },
      ],
    },
    {
      title: { en: 'Hiking', fr: 'Randonnée' },
      details: [
        { en: 'Mountain trails', fr: 'Sentiers de montagne' },
      ],
    },
    {
      title: { en: 'Open Source', fr: 'Open Source' },
    },
    
  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  // pdf: {
  //   label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
  //   path: { en: '/cv/en/resume-en.pdf', fr: '/cv/fr/resume-fr.pdf' },
  // },

  // ===== THEME =====
  theme: {
    preset: 'warm', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
