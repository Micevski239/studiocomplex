import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'gogevgelija',
    title: 'GoGevgelija',
    shortDescription:
      'A local ecosystem and tourist guide platform that connects people with businesses, events, and services in Gevgelija.',
    fullDescription:
      'GoGevgelija is a mobile-first local ecosystem platform designed to support both residents and tourists in the city of Gevgelija. The platform aggregates local businesses, promotions, events, and useful city information into a single, easy-to-use application. It provides real value to local brands through visibility and digital presence, while offering users a practical way to explore the city. The system is built with scalability in mind, featuring a dynamic admin panel for content management, bilingual support (MK/EN), and a modular architecture that allows continuous expansion of features and categories.',
    coverImage: '/projects/gogevgelija.png',
    gallery: [],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Django', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Local business listings with categories',
      'Promotions and event management',
      'Bilingual content (Macedonian / English)',
      'Mobile-first user experience',
      'Admin dashboard for content control',
      'Dynamic home sections and featured content',
      'Tourist-oriented city discovery',
    ],
    liveUrl: 'https://gogevgelija.com',
    category: 'fullstack',
    featured: true,
    translations: {
      mk: {
        shortDescription:
          'Локална екосистем платформа и туристички водич што ги поврзува луѓето со бизниси, настани и услуги во Гевгелија.',
        fullDescription:
          'GoGevgelija е мобилна платформа дизајнирана да ги поддржи жителите и туристите во градот Гевгелија. Платформата ги обединува локалните бизниси, промоции, настани и корисни информации за градот во една лесна за користење апликација. Им дава реална вредност на локалните брендови преку видливост и дигитално присуство, додека на корисниците им нуди практичен начин да го истражат градот. Системот е изграден со скалабилност, со динамичен админ панел за управување со содржина, двојазична поддршка (МК/EN) и модуларна архитектура за постојано проширување на функциите.',
        features: [
          'Листинг на локални бизниси по категории',
          'Управување со промоции и настани',
          'Двојазична содржина (Македонски / Англиски)',
          'Мобилно искуство',
          'Админ панел за контрола на содржина',
          'Динамични секции и истакната содржина',
          'Туристичко откривање на градот',
        ],
      },
    },
  },
  {
    slug: 'e-commerce-mobile-app',
    title: 'E-Commerce Mobile App',
    shortDescription:
      'Full-featured shopping app with cart management, payment integration, and order tracking. Built for iOS and Android platforms.',
    fullDescription:
      'A comprehensive mobile e-commerce solution designed to provide seamless shopping experiences across iOS and Android platforms. The app features an intuitive product browsing interface, advanced search and filtering, real-time inventory updates, and a streamlined checkout process with multiple payment options.',
    coverImage: '/projects/ecommerce.png',
    gallery: [
      { src: '/projects/ecommerce-1.png', alt: 'Home screen', caption: 'Home screen with featured products' },
      { src: '/projects/ecommerce-2.png', alt: 'Product details', caption: 'Detailed product view' },
      { src: '/projects/ecommerce-3.png', alt: 'Cart', caption: 'Shopping cart with checkout' },
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
    features: [
      'Cross-platform iOS and Android support',
      'Real-time inventory synchronization',
      'Secure payment processing with Stripe',
      'Push notifications for order updates',
      'User authentication and profiles',
      'Wishlist and favorites functionality',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'mobile',
    featured: true,
    metrics: '2x conversion rate increase',
    clientName: 'RetailTech Solutions',
    testimonial: 'The app transformed our mobile sales. Checkout completions increased by 85% in the first month.',
  },
  {
    slug: 'rent-gevgelija',
    title: 'Rent Gevgelija',
    shortDescription:
      'A modern rental website featuring apartment and car rental listings, customer reviews, blog, and WhatsApp integration.',
    fullDescription:
      'A modern, fully functional rental website. It features a responsive design with service offerings such as long-term apartment rentals and car rentals. The site includes detailed property listings, customer testimonials with ratings, an integrated blog section, and WhatsApp contact integration for inquiries. The platform demonstrates clean UI/UX design, effective property presentation, and customer-focused features.',
    coverImage: '/projects/rent-gevgelija.png',
    gallery: [
      { src: '/projects/rent-gevgelija-1.png', alt: 'Home page', caption: 'Home page with featured listings' },
      { src: '/projects/rent-gevgelija-2.png', alt: 'Property listing', caption: 'Detailed property listing' },
      { src: '/projects/rent-gevgelija-3.png', alt: 'Blog section', caption: 'Integrated blog section' },
    ],
    technologies: ['Django', 'Bootstrap', 'Python', 'JavaScript', 'Tidio AI'],
    features: [
      'Responsive design across all devices',
      'Detailed property listings with photos',
      'Car rental service integration',
      'Customer testimonials with ratings',
      'Integrated blog section',
      'WhatsApp contact integration',
      'AI chat assistant via Tidio',
    ],
    liveUrl: 'https://rentgevgelija.com/',
    category: 'web',
    featured: true,
    translations: {
      mk: {
        shortDescription:
          'Модерна веб страна за изнајмување со станови и автомобили, рецензии од клиенти, блог и WhatsApp интеграција.',
        fullDescription:
          'Модерна, целосно функционална веб страна за изнајмување. Има респонзивен дизајн со понуда на услуги како долгорочно изнајмување станови и автомобили. Страната вклучува детални огласи за имоти, препораки од клиенти со оценки, интегриран блог дел и WhatsApp интеграција за контакт. Платформата демонстрира чист UI/UX дизајн, ефективна презентација на имоти и функции фокусирани на клиентите.',
        features: [
          'Респонзивен дизајн за сите уреди',
          'Детални огласи за имоти со фотографии',
          'Интеграција за изнајмување автомобили',
          'Препораки од клиенти со оценки',
          'Интегриран блог дел',
          'WhatsApp интеграција за контакт',
          'AI чат асистент преку Tidio',
        ],
      },
    },
  },
  {
    slug: 'restaurant-booking-app',
    title: 'Restaurant Booking App',
    shortDescription:
      'Table reservation system with real-time availability, push notifications, and integrated payment processing.',
    fullDescription:
      'A modern restaurant reservation platform that connects diners with their favorite restaurants. Features real-time table availability, smart waitlist management, and integrated payment processing for deposits and prepaid dining experiences.',
    coverImage: '/projects/restaurant.png',
    gallery: [
      { src: '/projects/restaurant-1.png', alt: 'Restaurant list', caption: 'Browse nearby restaurants' },
      { src: '/projects/restaurant-2.png', alt: 'Booking flow', caption: 'Easy booking process' },
      { src: '/projects/restaurant-3.png', alt: 'Confirmation', caption: 'Reservation confirmation' },
    ],
    technologies: ['React Native', 'Firebase', 'Express', 'Stripe'],
    features: [
      'Real-time table availability',
      'Smart waitlist management',
      'Push notification reminders',
      'Payment processing for deposits',
      'Restaurant reviews and ratings',
      'Favorite restaurants list',
    ],
    githubUrl: 'https://github.com',
    category: 'mobile',
    featured: true,
    metrics: '50% reduction in no-shows',
    clientName: 'DineEasy Group',
    testimonial: 'No-shows dropped dramatically. The reminder system and deposit feature changed everything for our restaurants.',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    shortDescription:
      'Modern portfolio website with content management system, contact forms, and optimized performance.',
    fullDescription:
      'A sleek, high-performance portfolio website designed to showcase creative work and professional achievements. Built with modern web technologies for optimal loading speeds, SEO, and user experience across all devices.',
    coverImage: '/projects/portfolio.png',
    gallery: [
      { src: '/projects/portfolio-1.png', alt: 'Hero section', caption: 'Engaging hero section' },
      { src: '/projects/portfolio-2.png', alt: 'Projects grid', caption: 'Project showcase grid' },
      { src: '/projects/portfolio-3.png', alt: 'Contact form', caption: 'Interactive contact form' },
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    features: [
      'Responsive design for all devices',
      'Smooth animations and transitions',
      'SEO optimized structure',
      'Fast loading with image optimization',
      'Contact form integration',
      'Easy content management',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'web',
    featured: false,
    metrics: '95+ Lighthouse score',
    clientName: 'Creative Agency',
  },
  {
    slug: 'task-management-app',
    title: 'Task Management App',
    shortDescription:
      'Collaborative task management platform with real-time updates, team workspaces, and productivity analytics.',
    fullDescription:
      'A feature-rich task management application designed for teams to collaborate efficiently. Includes real-time synchronization, kanban boards, sprint planning tools, and detailed productivity analytics to help teams stay on track.',
    coverImage: '/projects/tasks.png',
    gallery: [
      { src: '/projects/tasks-1.png', alt: 'Kanban board', caption: 'Drag-and-drop kanban board' },
      { src: '/projects/tasks-2.png', alt: 'Task details', caption: 'Detailed task view' },
      { src: '/projects/tasks-3.png', alt: 'Analytics', caption: 'Team productivity analytics' },
    ],
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    features: [
      'Real-time collaboration',
      'Kanban and list views',
      'Sprint planning tools',
      'Time tracking integration',
      'Team productivity analytics',
      'File attachments and comments',
    ],
    liveUrl: 'https://example.com',
    category: 'fullstack',
    featured: true,
    metrics: '30% productivity boost',
    clientName: 'AgileTeam Co.',
    testimonial: 'Our sprint velocity improved by 30% within two months of adoption. Best investment we made this year.',
  },
  {
    slug: 'fitness-tracking-app',
    title: 'Fitness Tracking App',
    shortDescription:
      'Health and fitness tracking application with workout plans, progress charts, and social features.',
    fullDescription:
      'A comprehensive fitness companion app that helps users achieve their health goals. Features personalized workout plans, nutrition tracking, progress visualization, and social features to connect with friends and stay motivated.',
    coverImage: '/projects/fitness.png',
    gallery: [
      { src: '/projects/fitness-1.png', alt: 'Dashboard', caption: 'Personal fitness dashboard' },
      { src: '/projects/fitness-2.png', alt: 'Workouts', caption: 'Workout library and plans' },
      { src: '/projects/fitness-3.png', alt: 'Progress', caption: 'Progress tracking charts' },
    ],
    technologies: ['React Native', 'Python', 'FastAPI', 'MongoDB'],
    features: [
      'Personalized workout plans',
      'Nutrition and calorie tracking',
      'Progress charts and statistics',
      'Social features and challenges',
      'Integration with health apps',
      'Workout video tutorials',
    ],
    githubUrl: 'https://github.com',
    category: 'mobile',
    featured: false,
    metrics: '4.8 App Store rating',
    clientName: 'FitLife Wellness',
  },
]

function localizeProject(project: Project, locale: string): Project {
  if (locale === 'mk' && project.translations?.mk) {
    const mk = project.translations.mk
    return {
      ...project,
      ...(mk.title && { title: mk.title }),
      ...(mk.shortDescription && { shortDescription: mk.shortDescription }),
      ...(mk.fullDescription && { fullDescription: mk.fullDescription }),
      ...(mk.features && { features: mk.features }),
    }
  }
  return project
}

export function getProjectBySlug(slug: string, locale?: string): Project | undefined {
  const project = projects.find((p) => p.slug === slug)
  if (!project) return undefined
  return locale ? localizeProject(project, locale) : project
}

export function getFeaturedProjects(locale?: string): Project[] {
  const featured = projects.filter((p) => p.featured)
  return locale ? featured.map((p) => localizeProject(p, locale)) : featured
}

export function getAllProjects(locale?: string): Project[] {
  return locale ? projects.map((p) => localizeProject(p, locale)) : projects
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}
