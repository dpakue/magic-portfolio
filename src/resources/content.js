import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Deladem-Pascal",
  lastName: "Akue",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer",
  avatar: "/images/pascals-avatar.png",
  email: "dpakue@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dpakue",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/deladem-pascal-a-34051372/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/projects/project-01/next-js-portfolio-screenshot.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Developing integrated wesites with modern UI/UX</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Theta Phi Alpha National Membership Site</strong></>,
    href: "/work/Rebuilding-Theta-Phi-Alpha-an-SSO-Solution",
  },
  subline: (
    <>
      I'm Pascal, a web developer at <a href={"https://thetaphialpha.org/"} style={{ display: "inline-flex", top: "0.25em", marginLeft: "0" }}> Theta Phi Alpha</a>. I specialize in
      <br /> front end development and hone my skills by freelancing for small businesses and Non-Profits.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/deladem-pascal-akue-2pb4pk/30min?overlayCalendar=true",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hello! I go by Pascal. I am a seasoned Web Designer, Developer, CRM and Integrations Specialist with in-house, remote, and agency experience.
I have full-stack experience designing and developing responsive and accessible websites and landing pages
complimented by a background in web hosting and database management.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Recent Work Experience",
    experiences: [
      {
        company: "Theta Phi Alpha",
        timeframe: "2023 - Present",
        role: "Web Developer, Technology Coordinator",
        achievements: [
          <>
            Redesigned the UI/UX of the national fraternity website and rebuilt it on WordPress, 
            resulting in 73% faster load times, increased member utilization and staff productivity.
          </>,
          <>
            Implemented single sign on (SSO) to 4 client applications using OAuth / OpenID Connect (OIDC) 
            and JSON Web Tokens (JWT).
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/theta-phi.jpg",
            alt: "Theta Phi Alpha Fraternity Staff",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "URBANE Strategies",
        timeframe: "2017 - Present",
        role: "Freelance Web Designer/Developer",
        achievements: [
          <>
            Developement work on over 2 dozen websites in fields including Real Estate, Promotional Products, 
            Printing services, Music, Education, Accounting, Non-Profits / NGO’s, and Automotive sales and repair. 
          </>,
          <>
            Led project management for multiple development projects, coordinating 3rd party vendors and contractors.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/bimmer-motors-demos.jpg",
            alt: "Urbane Strategies client, Bimmer Motors",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Stony Brook University",
        description: <>Bachelors Degree - Health Science.</>,
      },
      {
        name: "W3Schools",
        description: <>Studied HTML, PHP, MySQL, Javascript, jQuery, JSON, AJAX, CSS, SCSS.</>,
      },
      {
        name: "Udemy",
        description: <>Studied React.js, Git, SEO </>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "FAQ's and Professional Views...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
