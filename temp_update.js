const fs = require('fs');
const path = 'src/components/Project/Project.tsx';
let content = fs.readFileSync(path, 'utf8');

const replacements = [
  {
    find: /This website sells home decor products and helps people decorate their homes\. It is easy to find what you need, whether it's furniture or decorations\. The site is useful for people who want to make their homes look nice and need some help\./g,
    replace: 'Developed a complete e-commerce platform for home decor using WordPress and WooCommerce. Created a user-friendly and responsive shopping experience to help customers easily browse and purchase furniture.'
  },
  {
    find: /This website sells medical books online and is popular with medical students\. Medical students use it to buy books and acquire knowledge\. The site has all kinds of medical books in one place\./g,
    replace: 'Built a specialized WooCommerce storefront tailored for medical professionals and students. Implemented advanced product filtering and secure payments to manage a large inventory of medical literature.'
  },
  {
    find: /This website allows people to easily book appointments with you online\. It takes just a minute to schedule a meeting\. This kind of site is helpful for booking appointments and not missing any potential clients\. You should try this website to see how convenient and efficient it is\./g,
    replace: 'Engineered a professional healthcare portal utilizing WordPress. Integrated a seamless, real-time appointment scheduling system to streamline patient bookings and improve clinic efficiency.'
  },
  {
    find: /This agency website promotes post production, virtual production, and video marketing services\. It shows previous client work and reviews to get more business\. If you need help with production, this website can give you information and connect you with the right people\./g,
    replace: 'Developed a dynamic portfolio website for a film production agency. Utilized custom post types and smooth animations to showcase high-quality video content and attract potential clients.'
  },
  {
    find: /MosChip has shipped millions of products for connectivity applications as well as SoCs,\s*that are used in defense and aerospace applications\.\s*MosChip provides custom silicon solutions using in-house IPs and third-party IPs\.\s*Our expertise in silicon-proven platform solutions create a strong foundation for\s*custom semiconductor solutions in the areas of data converters, SoCs for STB, smart metering,\s*handheld devices, and various IoT Applications\./g,
    replace: 'Built a corporate website for a leading semiconductor company. Structured complex B2B information clearly and optimized the site for global enterprise clients.'
  },
  {
    find: /We are a warehousing and logistics services firm based in the UK\.We have in-depth expertise and experience in world-class storage and distribution services\./g,
    replace: 'Created a responsive corporate portal for a UK-based logistics firm. Implemented a tailored content management system to effectively highlight global supply chain and warehousing services.'
  },
  {
    find: /Explore Top Dental Clinics in Mexico\. Uncover the Best Dentists, Affordable Packages, and Embrace Dental Tourism in Mexico/g,
    replace: 'Designed and developed a medical tourism platform targeting international patients. Focused on mobile-first design and SEO to help patients easily find and book dental packages.'
  },
  {
    find: /Pathfinder extends a very warm welcome to the school-going students\s*of Eastern India from Class VII to Class XII\. Pathfinder, the leading\s*institute in Eastern India guides students for competitive exams like JEE and allied competitive exams\./g,
    replace: 'Built an educational platform for a premier coaching institute. Structured a user-friendly interface to provide students with easy access to course materials and competitive exam resources.'
  },
  {
    find: /EXIMCHAINS SPORTS GIVE ACTUAL NEWS\s*Its Sport News Website related to footbal local & international & Olampic\./g,
    replace: 'Developed a dynamic sports news portal using WordPress. Implemented automated content categorization and optimized the site to handle high traffic during major tournaments.'
  },
  {
    find: /Hackathons that bring highly-skilled tech teams together, to innovate, create and collaborate - all while having fun\./g,
    replace: 'Built an engaging event platform for tech hackathons. Integrated registration workflows and interactive schedules to foster collaboration among developers and innovators.'
  },
  {
    find: /Discover the world's largest gold market in Dubai\. Explore authentic gold jewelry, bullion, and precious items from renowned merchants in the iconic Gold Souk\./g,
    replace: 'Created a premium digital experience using Drupal. Showcased high-end jewelry collections with a focus on immersive visuals and a luxurious, fast-loading user interface.'
  },
  {
    find: /Experience the charm of traditional markets at Dubai's waterfront\. Shop for fresh produce, seafood, spices, and local crafts in a picturesque setting\./g,
    replace: 'Developed a feature-rich Drupal platform for a major Dubai destination. Integrated dynamic event listings and interactive maps to enhance the overall visitor experience.'
  },
  {
    find: /Dubai's premier water park featuring thrilling slides, wave pools, and family-friendly attractions\. Perfect for a fun-filled day of water-based adventures\./g,
    replace: 'Built an interactive theme park website leveraging Drupal. Focused on providing a seamless mobile experience and an easy-to-use online ticket purchasing system.'
  },
  {
    find: /Experience Dubai's tallest observation wheel offering breathtaking panoramic views of the city skyline, Palm Jumeirah, and the Arabian Gulf\./g,
    replace: 'Developed a scalable enterprise website for a major tourist attraction. Utilized Drupal to handle high volumes of international traffic while providing breathtaking panoramic visuals.'
  },
  {
    find: /Premier destination for entertainment, dining, and cultural experiences in Dubai, offering world-class events and attractions for visitors and locals\./g,
    replace: 'Created a robust digital presence for a leading entertainment network. Implemented modular content structures to support high-traffic news and entertainment delivery.'
  },
  {
    find: /Dubai's premier entertainment venue hosting world-class concerts, sporting events, and performances by international and local artists\./g,
    replace: 'Built a dynamic event and ticketing platform using Drupal. Integrated concert schedules and secure booking workflows for Dubai\'s premier entertainment venue.'
  },
  {
    find: /Explore multiple theme parks and resorts offering diverse entertainment for families\. Features thrilling rides, attractions, and world-class hospitality\./g,
    replace: 'Developed a comprehensive multisite platform for a massive entertainment resort. Implemented scalable architecture to manage multiple theme parks and unified booking funnels.'
  },
  {
    find: /Cultural destination showcasing pavilions from 70\+ countries with traditional crafts, cuisine, entertainment, and shopping experiences\./g,
    replace: 'Engineered an interactive cultural portal highlighting global pavilions. Focused on real-time event updates and an engaging mobile-first experience for visitors.'
  },
  {
    find: /Premium cinema experience with state-of-the-art technology and comfortable seating\. Enjoy the latest movies and blockbuster releases\./g,
    replace: 'Built a premium cinema ticketing platform using Drupal. Optimized the seat selection interface and streamlined the checkout process for moviegoers.'
  }
];

let updatedContent = content;
replacements.forEach(r => {
  updatedContent = updatedContent.replace(r.find, r.replace);
});

// Remove Krism Hospital Duplicate
const krismRegex = /<ScrollAnimation animateIn="flipInX">[\s\S]*?<h3>Krism Hospital<\/h3>[\s\S]*?<\/ScrollAnimation>/;
updatedContent = updatedContent.replace(krismRegex, '');

fs.writeFileSync(path, updatedContent);
console.log("Update complete");
