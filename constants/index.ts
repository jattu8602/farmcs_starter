// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/dashboard', key: 'dashboard', label: 'Dashboard' },
  { href: '/cropdata', key: 'crop_data', label: 'Crop Data' }, // Fixed href
  { href: '/learnmore', key: 'learn_more', label: 'Learn More' }, // Fixed key and href
  { href: '/contact', key: 'contact', label: 'Contact Us' }, // Corrected the href
  { key: 'signup', label: 'SignUp', href: '/signup' }, // Already correct
]


// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
]

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Smart Controlled Irrigation',
    icon: '/water.svg',
    variant: 'green',
    description:
      'Ensure efficient water use by customizing irrigation based on the specific needs of your crops. Our system helps save water and optimize crop growth.',
  },
  {
    title: 'Smart Fertilization for Crop Health',
    icon: '/fertilizer.svg',
    variant: 'green',
    description:
      'Automate liquid fertilizer application with our sprinklers, saving time and protecting farmers from harmful chemicals. Maximize crop health with minimal effort.',
  },
  {
    title: 'Bird Deterrence and Crop Protection',
    icon: '/shield.svg',
    variant: 'green',
    description:
      'Protect your crops with our eco-friendly sound deterrent system. It keeps birds and animals away without causing harm, safeguarding your fields naturally.',
  },
  {
    title: 'Energy-Efficient and Remote Monitoring',
    icon: '/solar.svg',
    variant: 'orange',
    description:
      'Control irrigation, monitor water levels, and detect fires remotely using solar-powered systems. Manage your farm efficiently from anywhere via our app.',
  },
]

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About FarmCS',
      'Team',
      'Environment',
      'Learn ',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
]

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'farmcs@gmail.com' },
  ],
}

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/linkedin.svg',
  ],
}
