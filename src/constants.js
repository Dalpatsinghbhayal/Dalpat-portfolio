// ==========================================
// SKILLS SECTION LOGOS
// ==========================================

import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// ==========================================
// EXPERIENCE SECTION LOGOS
// ==========================================

import celebal from './assets/company_logo/download (1).jpeg';
import wscube from './assets/company_logo/download (2).jpeg';
import upflair from './assets/company_logo/download.jpeg';
import GrasTech from './assets/company_logo/download.png';


// ==========================================
// EDUCATION SECTION LOGOS
// ==========================================

import JIET from './assets/education_logo/JIET.jpg';
import GSSS from './assets/education_logo/GSSS.jpeg';


// ==========================================
// SKILLS
// ==========================================

export const SkillsInfo = [
  {
    title: 'Frontend',

    skills: [
      {
        name: 'HTML',
        logo: htmlLogo
      },
      {
        name: 'CSS',
        logo: cssLogo
      },
      {
        name: 'JavaScript',
        logo: javascriptLogo
      },
      {
        name: 'React JS',
        logo: reactjsLogo
      },
      {
        name: 'Tailwind CSS',
        logo: tailwindcssLogo
      },
      {
        name: 'Bootstrap',
        logo: bootstrapLogo
      }
    ]
  },

  {
    title: 'Backend',

    skills: [
      {
        name: 'Node JS',
        logo: nodejsLogo
      },
      {
        name: 'Express JS',
        logo: expressjsLogo
      },
      {
        name: 'MySQL',
        logo: mysqlLogo
      },
      {
        name: 'MongoDB',
        logo: mongodbLogo
      },
      {
        name: 'Firebase',
        logo: firebaseLogo
      }
    ]
  },

  {
    title: 'Languages',

    skills: [
      {
        name: 'C',
        logo: cLogo
      },
      {
        name: 'Java',
        logo: javaLogo
      },
      {
        name: 'Python',
        logo: pythonLogo
      },
      {
        name: 'JavaScript',
        logo: javascriptLogo
      }
    ]
  },

  {
    title: 'Tools',

    skills: [
      {
        name: 'Git',
        logo: gitLogo
      },
      {
        name: 'GitHub',
        logo: githubLogo
      },
      {
        name: 'VS Code',
        logo: vscodeLogo
      },
      {
        name: 'Postman',
        logo: postmanLogo
      },
      {
        name: 'Vercel',
        logo: vercelLogo
      }
    ]
  }
];

// ==========================================
// EXPERIENCE
// ==========================================

export const experiences = [
  {
    id: 0,

    img: celebal,

    role: "Data Science Intern",

    company: "Celebal",

    date: "20-May-2025 - 20-Aug-2025",

    desc:
      "Designed and deployed data-driven applications by integrating machine learning models with interactive visualizations. Built responsive user interfaces for real-time insights, developed RESTful APIs to serve model predictions, and optimized performance for large-scale data processing in an agile environment.",

    skills: [
      "Python",
      "Data Analysis",
      "Statistical Modeling",
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Feature Engineering",
      "Machine Learning Algorithms (Supervised & Unsupervised)",
      "TensorFlow, Keras, PyTorch",
      "NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, Statsmodels",
      "Flask, FastAPI, Streamlit"
    ]
  },


  {
    id: 1,

    img: wscube,

    role: "Fullstack Engineer",

    company: "WsCube",

    date: "1-April-2024 - 1-April-2025",

    desc:
      "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",

    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL"
    ]
  },


  {
    id: 2,

    img: upflair,

    role: "Data Science Intern",

    company: "UpFlairs",

    date: "15-May-2024 - 30-July-2024",

    desc:
      "Applied data science techniques to extract meaningful insights from complex datasets and built machine learning models to solve real-world problems. Proficient in data preprocessing, exploratory analysis, feature selection, and implementing algorithms such as regression, classification, clustering, and ensemble methods. Experienced in evaluating model performance, deploying solutions using tools like Flask or Streamlit, and presenting results through clear, interactive visualizations.",

    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Matplotlib",
      "Seaborn",
      "Flask",
      "Streamlit",
      "FastAPI",
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
      "Google Colab",
      "SQL"
    ]
  },


  {
    id: 3,

    img: GrasTech,

    role: "Data Science Intern",

    company: "GrasTech",

    date: "15-May-2025 - 30-Aug-2025",

    desc:
      "Worked on full-stack web development using the MERN stack. The technology stack included MongoDB for database management, Express.js for backend development, React.js for frontend development, and Node.js as the runtime environment. Worked on responsive and dynamic web applications while using Git and GitHub for version control and collaboration.",

    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Git",
      "GitHub"
    ]
  }
];


// ==========================================
// EDUCATION
// ==========================================

export const education = [
  {
    id: 0,

    img: JIET,

    Collage: "JIET,JODHPUR",

    date: "Sept 2022 - Present",

    grade: "7.9 CGPA",

    desc:
      "I am currently pursuing a B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning (AIML) from JIET Jodhpur. My coursework covers core subjects such as Data Structures, Algorithms, Object-Oriented Programming, DBMS, Web Development, and Software Engineering, along with specialized topics like machine learning, deep learning, and AI applications. I actively participate in technical workshops, hackathons, and hands-on projects to enhance my practical understanding and problem-solving skills.",

    degree: "Bachelor of Technology"
  },


  {
    id: 1,

    img: GSSS,

    school: "GSSS,PALI",

    date: "JULY 2021 - JULY 2022",

    grade: "79.9%",

    desc:
      "I have completed my 12th grade under the RBSE (Rajasthan Board of Secondary Education) from Government Senior Secondary School (GSSS), Bagri Nagar, Pali, with a focus on the Science stream (Mathematics). My studies included core subjects such as Physics, Chemistry, Mathematics, and English, which helped me develop strong analytical thinking and problem-solving skills."
  }
];

// ==========================================
// PROJECTS
// ==========================================
export const projects = [
  {
    id: 0,

    title: "E-Website",

    description:
      "A modern e-commerce website built with a responsive user interface for browsing products and managing an online shopping experience. The project focuses on clean UI design, reusable components, product presentation, and a smooth user experience.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS"
    ],

    github:
      "https://github.com/Dalpatsinghbhayal/E-website",

    webapp:
      "https://e-website-flax.vercel.app/"
  },

  {
    id: 1,

    title: "Techblr Gharpayy Assignment",

    description:
      "A frontend development assignment created for Techblr Gharpayy, demonstrating responsive UI development, component-based design, user interactions, and modern frontend development practices.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS"
    ],

    github:
      "https://github.com/Dalpatsinghbhayal/techblr-gharpayy-assignment",

    webapp:
      ""
  },

  {
    id: 2,

    title: "Hibernate Note Taker",

    description:
      "A Java-based Note Taker application developed using Hibernate ORM and JPA. The project demonstrates database connectivity, entity mapping, CRUD operations, and ORM concepts for managing notes efficiently.",

    tags: [
      "Java",
      "Hibernate",
      "JPA",
      "MySQL",
      "ORM",
      "CRUD"
    ],

    github:
      "https://github.com/Dalpatsinghbhayal/Hibernate-Note-Taker",

    webapp:
      ""
  },

  {
    id: 3,

    title: "Currency Converter",

    description:
      "A responsive currency converter web application that allows users to convert between different currencies using live exchange rates. It includes dynamic currency selection, country flags, currency swapping, API integration, and a modern responsive user interface.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
      "Fetch API",
      "Async/Await"
    ],

    github:
      "https://github.com/Dalpatsinghbhayal/currencyConverte",

    webapp:
      "https://currency-converte-tawny.vercel.app/"
  },

  {
    id: 4,

    title: "Language Translator",

    description:
      "This project is a multilingual language translator that converts text from one language to another using machine learning techniques. The application includes a clean GUI for user interaction and real-time translation.",

    tags: [
      "Python",
      "TensorFlow / Keras",
      "Sequence-to-Sequence Models",
      "Natural Language Processing",
      "LSTM / Transformer",
      "Data Preprocessing",
      "Tokenization",
      "Streamlit / Tkinter",
      "Scikit-learn"
    ],

    github:
      "https://github.com/Dalpatsinghbhayal/language_translation",

    webapp:
      ""
  },

  {
    id: 5,

    title: "Personal Portfolio",

    description:
      "A responsive personal portfolio website built to showcase my technical skills, projects, education, experience, and professional profile. The portfolio features a modern user interface, responsive design, interactive sections, project links, and a clean presentation of my development journey.",

    tags: [
      "React JS",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Vercel"
    ],

    github:
      "https://github.com/Dalpatsinghbhayal",

    webapp:
      "https://portfolio-js8d.vercel.app/"
  }
];