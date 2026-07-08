import larat from "../assets/projects/larat.png";
import card4games from "../assets/projects/card4games.png";
import tahkem from "../assets/projects/tahkem.png";
import educavo from "../assets/projects/educavo.png";
import Bookto from "../assets/projects/Bookto.png";
import enjaz from "../assets/projects/enjaz.png";
import alrahal from "../assets/projects/alrahal.png";

export const HERO_CONTENT = `I'm a Front-End Developer with 5+ years of experience building responsive, scalable, and high-performance web applications. I specialize in Angular, React.js, TypeScript, and RESTful API integration, with hands-on experience delivering booking platforms, interactive dashboards, and business-focused digital products.`;

export const ABOUT_TEXT = `I am a Front-End Developer focused on building modern, user-centered web experiences that are fast, scalable, and maintainable. Over the past 5+ years, I’ve worked across travel booking systems, IoT dashboards, e-commerce platforms, and freelance client projects, turning UI/UX designs into production-ready applications using Angular, React.js, TypeScript, Tailwind CSS, and Bootstrap. I enjoy building reusable architectures, seamless booking flows, and API-driven interfaces that solve real business problems and deliver a smooth user experience.`;

export const EXPERIENCES = [
  {
    year: "July 2025 - Present",
    role: "Senior Front-End Engineer",
    company: "Techeffic - Full-time (Remote)",
    description: `• Developed front-end features across Flight, Hotel, Transfer, and Travel Insurance modules, enabling users to search, compare, and book services seamlessly.
• Owned end-to-end development of the Transfer and Travel Insurance modules, integrating RESTful APIs for real-time pricing, availability, and provider data.
• Built responsive, multi-step booking flows with form validation to guide users through complex transfer and insurance purchase journeys.`,
    technologies: [ "Angular", "Tailwind CSS", "RESTful APIs", "Form Validation" ],
  },
  {
    year: "April 2025 - May 2026",
    role: "Senior Front-End Engineer",
    company: "Etmam - Part Time - KSA (Remote)",
    description: `• Integrated Google Maps API for device location tracking and status display.
• Transformed sensor data into clear, user-friendly visualizations for faster decision-making.
• Collaborated with backend teams to ensure seamless data flow via RESTful APIs.`,
    technologies: [ "Tailwind CSS", "Google Analytics", "Angular", "Google Maps" ],
  },
  {
    year: "July 2021 - Present",
    role: "Front-End Developer",
    company: "Upwork (upwork.com/freelancers/fady.e)",
    description: `• Delivered high-quality freelance projects for global clients, maintaining a 90%+ Job Success Score. Specialized in transforming complex client requirements into scalable web solutions and seamless user experiences.`,
    technologies: [ "JavaScript", "React.js", "WordPress", "Angular" ],
  },
  {
    year: "April 2023 - December 2024",
    role: "Mid-Level Front-End Developer",
    company: "EgyCard – Egypt (www.card4games.com/)",
    description: `• Integrated RESTful APIs, payment gateways, and third-party services with backend teams.
• Directed Git workflow standards for branching and pull requests.`,
    technologies: [ "HTML", "CSS", "Angular", "NgRx" ],
  },
  {
    year: "March 2021 - June 2023",
    role: "Front-End Developer",
    company: "Roomz Arabia – KSA",
    description: `• Converted UI/UX designs (e.g., from Figma, Sketch, or Adobe XD) into functional code and ensure the designs are consistent with the brand’s guidelines.
• Tested websites on multiple browsers to ensure compatibility and consistent user experience across platforms.
• Wrote clean, well-documented, and maintainable code that follows coding standards and version control practices using Git.
• Implemented mobile-first, responsive web designs using CSS media queries to ensure web applications are functional on different devices.`,
    technologies: [ "PrimeNG", "SCSS", "Angular", "Google Analytics" ],
  },
  {
    year: "2023 (6 months)",
    role: "Angular Developer",
    company: "Larat Platform – Saudi Arabia (www.larat.online/en-US)",
    description: `• Built reusable components and implemented state management using RxJS for smooth data flow.
• Collaborated closely with UI/UX designers and backend developers to align functionality with design specs and business logic.
• Implemented role-based access control using Angular Guards to ensure dashboard security.
• Improved performance by applying best practices in lazy loading and on-demand module rendering.`,
    technologies: [ "PrimeNG", "Angular", "SCSS" ],
  },
  {
    year: "December 2021 - August 2022",
    role: "UI Developer",
    company: "Hype Experiences - San Francisco",
    description: `• Developed and optimized responsive, user-friendly web interfaces using HTML5, CSS3, and JavaScript.`,
    technologies: [ "HTML", "CSS", "Bootstrap", "jQuery" ],
  },
];

export const PROJECTS = [
  {
    title: "Travel Booking Platforms",
    image: Bookto,
    description: 'Travel booking platform that helps users discover destinations and book handpicked trips with a smooth, user-friendly experience.',
    technologies: [ "HTML", "SCSS", "Angular", "Firebase", "Bootstrap", 'PrimeNg' ],
    
  },
  {
    title: "Card4Games",
    image: card4games,
    description: 'Card4Games is a responsive e-commerce platform for selling digital gaming cards, featuring multi-vendor support, secure payments, and real-time product availability.',
    technologies: [ "HTML", "SCSS", "Angular", "Firebase", "Bootstrap", 'NG-ZORRO' ],
    link: "https://card4games.com/en"
  },
  {
    title: "Larat Real Estate Platform",
    image: larat,
    description:
      "Larat is a Saudi digital real estate platform licensed by the General Authority for Real Estate. Larat provides a reliable environment that brings together advertisers, brokers, owners, and property seekers in one place, with advanced technical solutions.",
    technologies: [ "HTML", "CSS", "Angular", "PrimeNG", "NgRx" ],
    link: "https://www.larat.online/en-US"
  },
  {
    title: "Tahkem",
    image: tahkem,
    description:
      "Tahkem is a legal and arbitration platform that streamlines case management, document handling, and user workflows for clients and arbitrators in Saudi Arabia.",
    technologies: [ "HTML", "CSS", "Angular", "Bootstrap" ],
    link: "https://tahkem.sa/"
  },
  {
    title: "Enjaz Moving",
    image: enjaz, 
    description:
      "Enjaz Moving is a reliable and professional furniture moving company in Saudi Arabia, providing comprehensive services including dismantling, packing, moving, and installation for residential and commercial clients.",
    technologies: [ "HTML", "CSS", "JavaScript", "WordPress" ],
    link: "https://enjazmoving.site"
  },
  {
    title: "Al-Rahal Moving",
    image: alrahal, 
    description:
      "Al-Rahal Moving is a top choice for safe furniture transportation from Taif to cities across Saudi Arabia. Offering high-quality moving services with specialized teams and modern equipment.",
    technologies: [ "HTML", "CSS", "JavaScript", "WordPress" ],
    link: "https://alrahar.com/"
  },
  {
    title: "Educavo Website",
    image: educavo,
    description:
      "Educavo is an educational website template showcasing online courses, instructor profiles, and blog sections. Built with a responsive design and modern UI components for a clean learning experience.",
    technologies: [ "HTML", "CSS", "JavaScript", "jQuery", "Animation" ],
    link: "https://fady-elshahat-educavo-website.netlify.app/"

  },
 
];



export const TESTIMONIALS = [
  {
    name: "Mikolaj",
    country: "Poland",
    title: "Front End Development for HelpDocs page",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    message:
      "Good work. Fady provided good work in good time. It was our 2nd time working with him.",
    link: "https://www.upwork.com/freelancers/~01bce05da1f628d350",
  },
  {
    name: "Yannick B",
    country: "Germany",
    title: "Quick help needed: Copy Javascript Code from a page",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    message:
      "Fady is great! He is a super nice guy who thinks outside the box and goes above and beyond to make his clients happy. Thanks Fady! Will be gladly working with you again soon.",
    link: "https://www.upwork.com/freelancers/~01bce05da1f628d350",
  },
  {
    name: "Omar Alhaj",
    country: "Saudi Arabia",
    title: "Angular Frontend developer to apply Figma designs on exist template",
    image: "https://i.pravatar.cc/100?img=14",
    message: "He is doing his best always.",
    link: "https://www.upwork.com/freelancers/~01bce05da1f628d350",
  },
  {
    name: "Ben Smith",
    country: "United States",
    title: "Front End Dev needed to translate Adobe XD file into Typescript",
    image: "https://i.pravatar.cc/100?img=12",
    message:
      "Fady worked hard to get me what I needed. When the project was more difficult than anticipated, he made sure to get me a good result. Thanks Fady!",
    link: "https://www.upwork.com/freelancers/~01bce05da1f628d350",
  },
  {
    name: "Murilo M",
    country: "Switzerland",
    title: "Binding Angular to an API",
    image: "https://i.pravatar.cc/100?img=6",
    message:
      "Fady was transparent and friendly from the beginning, and he completed the requirements within schedule with success and satisfaction. Surely our organization would be pleased to recommend and hire him again.",
    link: "https://www.upwork.com/freelancers/~01bce05da1f628d350",
  },
  {
    name: "Ahmed Abdelaziz",
    country: "Egypt",
    title: "Frontend developer needed to create landing pages",
    image: "https://i.pravatar.cc/100?img=18",
    message:
      "I highly recommended Fady to anyone looking for a frontend developer as he is very professional in his career.",
    link: "https://www.upwork.com/freelancers/~01bce05da1f628d350",
  },
];

export const CONTACT = {
  phoneNo: "201272115242",
  email: "fady.elshahat@gmail.com",
  address: "Alexandria, Egypt",
  linkedIn: "https://www.linkedin.com/in/fady-elshahat-88052420b/",
  github: "https://github.com/fady-elshahat",
  upwork: "https://www.upwork.com/freelancers/~01bce05da1f628d350",
};
