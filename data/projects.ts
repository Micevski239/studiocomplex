import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'gogevgelija',
    title: 'GoGevgelija',
    shortDescription:
      'A local ecosystem and tourist guide platform that connects people with businesses, events, and services in Gevgelija.',
    fullDescription:
      'GoGevgelija is a mobile-first local ecosystem platform designed to support both residents and tourists in the city of Gevgelija. The platform aggregates local businesses, promotions, events, and useful city information into a single, easy-to-use application. It provides real value to local brands through visibility and digital presence, while offering users a practical way to explore the city. The system is built with scalability in mind, featuring a dynamic admin panel for content management, bilingual support (MK/EN), and a modular architecture that allows continuous expansion of features and categories.',
    coverImage: '/projects/gogevgelija/cover.png',
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
    slug: 'sparklemk',
    title: 'Sparkle.mk',
    shortDescription:
      'A fully dynamic e-commerce website for a fashion brand with a powerful admin panel that controls 90% of the content without any technical intervention.',
    fullDescription:
      'Sparkle.mk is a modern e-commerce platform built for a fashion brand. The website is fully dynamic - around 90% of the content is manageable through a custom admin panel, allowing the client to update images, text, colors, links, products, and entire sections at any time without developer involvement. The platform features a bilingual interface (Macedonian/English), a dynamic hero grid, category showcases with brand-consistent colors, customer testimonials, featured products, and a products page with search and filtering capabilities.',
    coverImage: '/projects/sparkle-mk/cover.webp',
    gallery: [
      { src: '/projects/sparkle-mk/1.webp', alt: 'Sparkle.mk screenshot 1' },
      { src: '/projects/sparkle-mk/2.webp', alt: 'Sparkle.mk screenshot 2' },
      { src: '/projects/sparkle-mk/3.webp', alt: 'Sparkle.mk screenshot 3' },
      { src: '/projects/sparkle-mk/4.webp', alt: 'Sparkle.mk screenshot 4' },
    ],
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    features: [
      'Custom admin panel controlling ~90% of site content',
      'Bilingual support (Macedonian / English)',
      'Dynamic hero section with 1+2 image grid layout',
      'Category showcase with brand-color customization',
      'Customer testimonials section',
      'Featured products section (4 or 8 products)',
      'Products page with search and category filtering',
    ],
    liveUrl: 'https://sparklemk.com',
    category: 'fullstack',
    featured: true,
    translations: {
      mk: {
        shortDescription:
          'Целосно динамична е-commerce веб-страница за моден бренд со моќен админ панел кој контролира 90% од содржината без техничка интервенција.',
        fullDescription:
          'Sparkle.mk е модерна е-commerce платформа изградена за моден бренд. Веб-страницата е целосно динамична - околу 90% од содржината се управува преку сопствен админ панел, што му овозможува на клиентот да ги ажурира сликите, текстот, боите, линковите, производите и цели секции во било кое време без вклученост на програмер. Платформата нуди двојазичен интерфејс (македонски/англиски), динамичен hero grid, приказ на категории со бои на брендот, мислења од клиенти, истакнати производи и страница за производи со пребарување и филтрација.',
        features: [
          'Сопствен админ панел кој контролира ~90% од содржината',
          'Двојазична поддршка (Македонски / Англиски)',
          'Динамична hero секција со 1+2 grid распоред на слики',
          'Приказ на категории со прилагодување на боите на брендот',
          'Секција со мислења од клиенти',
          'Секција со истакнати производи (4 или 8 производи)',
          'Страница за производи со пребарување и филтрација по категории',
        ],
      },
    },
  },
  {
    slug: 'dysnomia',
    title: 'Dysnomia Art Gallery',
    shortDescription:
      'Art print e-commerce platform with room preview, collection management, user profiles, and a full admin panel.',
    fullDescription:
      'Dysnomia Art Gallery is a bilingual (English/Macedonian) e-commerce platform for selling art prints. Customers can browse artworks, preview them in a room mockup, choose from three print types (canvas, rolled canvas, framed), select frame color and size, and place orders with full checkout flow. The platform supports dual currency (EUR/MKD), user accounts with order history and wishlists, a blog, and automated email notifications. Around 90% of the content is managed through a custom admin panel covering products, collections, orders, reviews, featured sections, and announcements.',
    coverImage: '/projects/dysnomia/cover.webp',
    gallery: [
      { src: '/projects/dysnomia/1.webp', alt: 'Dysnomia screenshot 1' },
      { src: '/projects/dysnomia/2.webp', alt: 'Dysnomia screenshot 2' },
      { src: '/projects/dysnomia/3.webp', alt: 'Dysnomia screenshot 3' },
      { src: '/projects/dysnomia/4.webp', alt: 'Dysnomia screenshot 4' },
    ],
    technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    features: [
      'Bilingual interface (English / Macedonian)',
      'Dual currency display (EUR / MKD)',
      'Room preview showing artwork on a wall',
      'Three print types with size & frame color selection',
      'Shopping cart, checkout, and order confirmation emails',
      'User profiles with order history and wishlist',
      'Collections, new arrivals, best sellers, and kids pages',
      'Blog with bilingual content',
      'Admin panel managing products, orders, reviews, and announcements',
      'Review approval workflow',
    ], 
    liveUrl: 'https://dysnomiagallery.com',
    category: 'fullstack',
    featured: true,
    translations: {
      mk: {
        shortDescription:
          'Е-commerce платформа за уметнички принтови со приказ во соба, управување со колекции, кориснички профили и целосен админ панел.',
        fullDescription:
          'Dysnomia Art Gallery е двојазична (англиски/македонски) е-commerce платформа за продажба на уметнички принтови. Клиентите можат да разгледуваат уметнички дела, да ги прегледуваат во приказ на соба, да избираат меѓу три типа на принт (принт на платно, платно во ролна, со рамка), боја на рамка и големина, и да нарачуваат. Платформата поддржува две валути (EUR/MKD), кориснички профили со историја на нарачки и листа на желби, блог и автоматски е-пошта известувања. Околу 90% од содржината се управува преку сопствен админ панел.',
        features: [
          'Двојазичен интерфејс (Англиски / Македонски)',
          'Приказ во две валути (EUR / MKD)',
          'Приказ на уметничко дело на ѕид во соба',
          'Три типа на принт со избор на големина и боја на рамка',
          'Кошничка, наплата и автоматски е-пошта за потврда',
          'Кориснички профили со историја на нарачки и листа на желби',
          'Колекции, нови производи, најпродавани и детски слики',
          'Блог со двојазична содржина',
          'Админ панел за производи, нарачки, рецензии и известувања',
          'Работен тек за одобрување на рецензии',
        ],
      },
    },
  },
  {
    slug: 'rent-gevgelija',
    title: 'Rent Gevgelija',
    shortDescription:
      'A modern rental website featuring apartment and car rental listings, customer reviews, blog, and WhatsApp integration.',
    fullDescription:
      'A modern, fully functional rental website. It features a responsive design with service offerings such as long-term apartment rentals and car rentals. The site includes detailed property listings, customer testimonials with ratings, an integrated blog section, and WhatsApp contact integration for inquiries. The platform demonstrates clean UI/UX design, effective property presentation, and customer-focused features.',
    coverImage: '/projects/rent-gevgelija/cover.png',
    gallery: [
      { src: '/projects/rent-gevgelija/1.webp', alt: 'Home page', caption: 'Home page with featured listings' },
      { src: '/projects/rent-gevgelija/2.webp', alt: 'Property listing', caption: 'Detailed property listing' },
      { src: '/projects/rent-gevgelija/3.webp', alt: 'Blog section', caption: 'Integrated blog section' },
      { src: '/projects/rent-gevgelija/4.webp', alt: 'Blog section', caption: 'Integrated blog section' },
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
