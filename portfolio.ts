import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Aashna Shroff',
  title: "Hi, I am Aashna Shroff",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
};

export const openSource = {
  githubUserName: 'aashnashroff1',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://1hanzla100.github.io/',
  linkedin: 'https://www.linkedin.com/in/aashna-shroff1/',
  github: 'https://github.com/aashnashroff1',
  twitter: 'https://twitter.com/AashnaShroff5',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Syracuse University',
    subHeader: 'Master of Science in Computer Science',
    duration: 'January 2022- December 2023',
    desc:'',
    grade: 'Grade: 3.7/4',
    descBullets: ['CIS 655- Computer Architecture', 'CIS 675- Design and Analysis of Algorithms','CIS 581- Database Management Systems','CIS 628 - Introduction to Cryptography','CIS 657 - Principles of Operating Systems','CIS 600 - Introduction to Machine Learning', 'CIS 600 - Social Media & Data Mining', 'CIS 735 - Machine Learning for Security', 'CIS 623 - Structured Prog. & Formal Methods'],
  },
  {
    schoolName: 'University of Mumbai',
    subHeader: 'Bachelor of Engineering in Computer Science',
    duration: 'June 2017 - June 2021',
    desc:'',
    grade: 'Grade: 8.95/10',
    descBullets: ['CS 305- Data Structures','CS 405- Operating Systems','CS 601- Software Engineering','CS 603- Data Warehousing & Mining','CS 501- Advance Algorithm','CS 602- Machine Learning','CS 703- Big Data & Analytics','CS 801- Natural Language Processing', 'CS 701- Artificial Intelligence & Soft Computing'],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Full Stack Developer (Internship)',
    company: 'Edhola Edusolutions Pvt. Ltd',
    companyLogo: '/img/icons/common/Edhola.png',
    date: '   ',
    desc: 'Developed multiple customized websites using HTML, CSS, JavaScript, and React for the front-end, Node.js and Express.js for the back-end, & MongoDB for efficient data management resulting in improved client satisfaction. Increased website traffic by 30 % and achieved a 20 % boost in customer conversion rates through maintenance and updates, leading to higher purchasing engagement.',
  },
  {
    role: 'Data Scientist (Internship)',
    company: 'Tech Mahindra Ltd.',
    companyLogo: '/img/icons/common/techm.png',
    date: '    ',
    desc: 'Developed a client-specific project using Scikit-learn, Spark, MongoDB, AWS, Kafka, and Flask. Designed a data processing pipeline in Spark and a user-friendly Flask web application to visualize model predictions. Deployed the model in production, integrating Kafka and Flask for real-time predictions. Continuously improved the model based on evolving client needs.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Explore A&N (VR App)',
    desc: 'Embark on an exclusive Virtual Reality journey to uncover the hidden treasures of Andaman & Nicobar Islands, India. Experience the untouched wonders through immersive technology, revealing unseen marvels.',
    github: 'https://github.com/aashnashroff1/Explore-A-N-VR-app',
    link: 'https://youtu.be/uTxm9yeTcYc',
  },
  {
    name: 'Flight Delay Forecasting',
    desc: 'Developed a project predicting United Airlines flight delays to Syracuse. Employed data preprocessing, feature engineering, and dimensionality reduction techniques, utilizing various ML models for accurate delay prediction.',
    github: 'https://github.com/aashnashroff1/Flight-Delay-Prediction',
  },
  {
    name: 'Continuous Authentication',
    desc: 'Implemented continuous user authentication in mobile banking using Google Glass time series data. Captured unique movement patterns for biometric identification, ensuring secure account access and enhancing user authentication.',
    github: 'https://github.com/aashnashroff1/Biometric-Based-Continuous-User-Authentication-using-Time-Series-Data',
  },
  {
    name: 'DBMS Project',
    desc: 'The "HR Recruitment System Database" simplifies recruitment with organized applicant info, process management, and data storage. It includes user-defined functions, views, triggers, and transactions for enhanced functionality and data management.',
    github: 'https://github.com/aashnashroff1/HR-Recruitment-System-Database-project',
  },
  {
    name: 'Heart Disease Prediction',
    desc: 'We developed a real-time Cardiovascular Disease Prediction prediction model using Naive Bayes, Logistic Regression, Decision Tree, and Random Forest. Deployed via Flask, where users input data on the webapp for predictions.',
    github: 'https://github.com/aashnashroff1/Cardiovascular-Disease-Prediction-Model',
  },
  {
    name: 'SMDM Project',
    desc: 'Analyzing WeRateDogs Twitter data, we extracted insights into dog ratings, user engagement, and preferences. Uncovering top rated breeds and sentiment-engagement correlations, we provide businesses key insights for social media engagement and understanding user behavior.',
    github: 'https://github.com/aashnashroff1/SMDM-Project',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Aashna Shroff',
  description:
    'Software Developer | Data Driven Development Enthusiast | MS in CS at Syracuse University.',
  author: 'Aashna Shroff',
  keywords: [
    'Aashna',
    'Aashna Shroff',
    '@aashnashroff1',
    'aashnashroff1',
    'Portfolio',
    'Aashna Portfolio',
    'Aashna Shroff Portfolio',
  ],
};
