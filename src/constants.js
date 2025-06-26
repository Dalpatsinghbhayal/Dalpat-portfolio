// Skills Section Logo's
// Skills Section Logos
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
// import figmaLogo from './assets/tech_logo/figma.png'; // Uncomment if file exists
// import figmaLogo from './assets/tech_logo/figma.png'; // Uncomment if file exists

// import vercelLogo from 'src/assets/tech_logo/vercel.png';
// import postgreLogo from 'src/assets/tech_logo/postgre.png';


// Experience Section Logo's
import celebal from './assets/company_logo/download (1).jpeg';
import wscube from './assets/company_logo/download (2).jpeg';
import upflair from './assets/company_logo/download.jpeg';
import GrasTech from './assets/company_logo/download.png'

// // Education Section Logo's
import JIET from './assets/education_logo/JIET.jpg';
import GSSS from './assets/education_logo/GSSS.jpeg';



// Project Section Logo's
import Jarvis from './assets/work_logo/Jarvis.jpeg';

import ImageClassification from './assets/work_logo/ImageClassification.jpeg';

import Houceprice from './assets/work_logo/Houceprice.jpeg';
import Movie from './assets/work_logo/Movie.jpeg';
import blinkit from './assets/work_logo/Blinkit.png';
import Restaurantrating from './assets/work_logo/Restaurantrating.png';
import Languagetranslator from './assets/work_logo/Languagetranslator.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     
     
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
      
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
     
      { name: 'Vercel', logo: vercelLogo },
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: celebal,
      role: "Data Science Intern",
      company: "Celebal",
      date: "20-May-2025  - 20-Aug-2025",
      desc: "Designed and deployed data-driven applications by integrating machine learning models with interactive visualizations. Built responsive user interfaces for real-time insights, developed RESTful APIs to serve model predictions, and optimized performance for large-scale data processing in an agile environment.",
      skills: [
        "Python",
        "Data Analysis",
        "Statistical Modeling",
        "Data Cleaning & Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Feature Engineering",
        "Machine Learning Algorithms (Supervised & Unsupervised)",
        "TensorFlow, Keras, PyTorch",
        " NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, Statsmodels",
        " Flask, FastAPI, Streamlit",
      ],
    },
    {
      id: 1,
      img: wscube,
      role: "Fullstack Engineer",
      company: "WsCube",
      date: "1-April-2024 - 1-April-2025",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: upflair,
      role: "Data Science Intern",
      company: "UpFlairs",
      date: "15-May-2024 - 30-July-2024",
      desc: "Applied data science techniques to extract meaningful insights from complex datasets and built machine learning models to solve real-world problems. Proficient in data preprocessing, exploratory analysis, feature selection, and implementing algorithms such as regression, classification, clustering, and ensemble methods. Experienced in evaluating model performance, deploying solutions using tools like Flask or Streamlit, and presenting results through clear, interactive visualizations. Adept at using Python libraries such as Pandas, Scikit-learn, and Matplotlib in collaborative, agile environments.",
      skills: [
        "Python",
        "(Pandas, NumPy, Scikit-learn, TensorFlow, Keras, Matplotlib, Seaborn",
        "Flask, Streamlit, FastAPI",
        "Git, GitHub",
        "FJupyter Notebook, VS Code, Google Colab",
        "SQL",
      ],
    },
    {
      id: 3,
      img: GrasTech,
      role: "Data Science Intern",
      company: "GrasTech",
      date: "15-May-2025 - 30-Aug-2025",
      desc: "The MERN Stack is a popular JavaScript-based technology stack used to build full-stack web applications. It includes MongoDB for the database, Express.js for the backend framework, React.js for the frontend, and Node.js as the runtime environment. MERN allows developers to write both client and server-side code in JavaScript, making development more efficient. It is widely used for building scalable, dynamic, and high-performance web applications. Common use cases include e-commerce sites, social media platforms, and real-time applications.",
      skills: [
        "MongoDB – NoSQL database for storing application data as documents",
        "Express.js – Lightweight backend framework built on Node.js",
        "React.js – JavaScript library for building dynamic user interfaces",
        "Node.js – Server-side runtime environment for executing JavaScript",
        "Git & GitHub – For version control and collaboration",
      ],
    },
  
    
  ];
  
      
  
  export const education = [
    {
      id: 0,
      img: JIET,
      Collage: "JIET,JODHPUR",
      date: "Sept 2022 - Present",
      grade: "7.9 CGPA",
      desc: "I am currently pursuing a B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning (AIML) from JIET Jodhpur. My coursework covers core subjects such as Data Structures, Algorithms, Object-Oriented Programming, DBMS, Web Development, and Software Engineering, along with specialized topics like machine learning, deep learning, and AI applications. I actively participate in technical workshops, hackathons, and hands-on projects to enhance my practical understanding and problem-solving skills. My academic experience at JIET Jodhpur is equipping me with a strong technical foundation and preparing me for a successful career in technology and AI-driven innovation.",
      degree: "Bachelor of Technology ",
    },
    {
      id: 1,
      img: GSSS,
      school: "GSSS,PALI",
      date: "JULY 2021 - JULY 2022",
      grade: "79.9%",
      desc: "I have completed my 12th grade under the RBSE (Rajasthan Board of Secondary Education) from Government Senior Secondary School (GSSS), Bagri Nagar, Pali, with a focus on the Science stream (Mathematics). My studies included core subjects such as Physics, Chemistry, Mathematics, and English, which helped me develop strong analytical thinking and problem-solving skills. This academic foundation played a key role in shaping my interest in technology and engineering.",
    },
    
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Jarvis-project",
      description:
        "arvis is a smart voice-command assistant built using React.js and modern browser speech recognition APIs. It listens to user commands and performs actions like opening websites, telling the time, searching the web, or speaking custom responses—all hands-free. With a sleek interface and real-time voice feedback, Jarvis offers a futuristic user experience, making it ideal for productivity, accessibility, and personal automation.",
      image: Jarvis,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Dalpatsinghbhayal/jarvis"
    },
    {
      id: 1,
      title: "ImageClassification-project",
      description:
        "This project is an image classification system built to accurately distinguish between images of dogs and cats. Using a convolutional neural network (CNN) trained on a labeled dataset, the model analyzes visual features and predicts the correct category. The application is capable of processing user-uploaded images and returns real-time classification results. It showcases the power of deep learning in computer vision and serves as a foundational step for more complex object recognition tasks.",
      image: ImageClassification,
      tags: ["Python", "Deep Learning", "TensorFlow / Keras", "Convolutional Neural Networks (CNNs)", "Image Preprocessing (Resizing, Normalization)", "Git & GitHub"],
      github: "https://github.com/Dalpatsinghbhayal/dog-cat-image-classify"
      // webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Houceprice project",
      description:
        "This project aims to predict house prices based on various features such as the number of bedrooms, bathrooms, square footage, and location (zip code). Using a regression model (e.g., Ridge or Linear Regression), the system is trained on real estate data to provide accurate price estimates. The application includes a user-friendly interface where users can input property details and receive instant predictions. It's an effective demonstration of how machine learning can be applied to solve real-world business problems in real estate.",
      image: Houceprice,
      tags: ["Python", "Machine Learning", "Scikit-learn", "Flask", "Ridge Regression", "Data Preprocessing", "Model Evaluation", "Git", "GitHub"],
      github: "https://github.com/Dalpatsinghbhayal/bhartintern/tree/main/HousePrice_Prediction"
      // webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Movie-recommendationSystem",
      description:
        "This project is designed to recommend movies to users based on their preferences using content-based filtering. The system analyzes movie features such as genres, keywords, and cast, then calculates similarity scores to suggest relevant titles. Built using Python and deployed via a Streamlit web interface, this tool offers a responsive and interactive user experience. It demonstrates the practical application of NLP and recommendation algorithms in entertainment platforms.",
      image: Movie,
      tags: ["Python", "Pandas", "Numpy", "Scikit-learn", "Content-Based Filtering", "Cosine Similarity", "Natural Language Processing (NLP)", "Streamlit", "HTML", "CSS", "Git", "GitHub"],
      github: "https://github.com/Dalpatsinghbhayal/bhartintern/tree/main/movies-recommendation%20system"
     
    },
    {
      id: 4,
      title: "blinkit-clone",
      description:
        "This project is a front-end clone of the Blinkit (formerly Grofers) grocery delivery platform, built using modern web development technologies. It replicates core features such as a product listing page, category filters, cart functionality, and a responsive user interface. Designed for a smooth and intuitive shopping experience, the clone showcases skills in building scalable and mobile-friendly e-commerce UIs using the MERN stack or frontend frameworks.",

      image: blinkit,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Dalpatsinghbhayal/web-dev/tree/main/blinkit"
     
    },
    {
      id: 5,
      title: "restaurant-rating",
      description:
        "This project predicts restaurant ratings based on various features like location, cuisine type, price range, and customer feedback. Using supervised learning algorithms, the system learns patterns from historical data to estimate ratings with improved accuracy. The model can help food platforms, restaurant owners, and users make informed decisions. A user-friendly interface allows inputs and displays predicted ratings in real time.",
      image: Restaurantrating,
      tags: ["Python", "Pandas", "Numpy", "Scikit-learn", "Machine Learning", "Data Cleaning", "Feature Engineering", "Regression / Classification Algorithms", "Flask / Streamlit"],
      github: "https://github.com/Dalpatsinghbhayal/cognifyz/tree/main/Restaurant-Rating-Prediction-Recommendation-and-Analysis-main"
    
    },
    {
      id: 6,
      title: "language translator",
      description:
        "This project is a multilingual language translator that converts text from one language to another using machine learning techniques. Trained on parallel corpora, the model uses sequence-to-sequence architecture (like LSTM or Transformer) to handle translations with high accuracy. It supports translation between languages such as English, French, Hindi, or Tamil, making it useful for educational, travel, or communication tools. The application includes a clean GUI for user interaction and real-time translation.",
      image: Languagetranslator,
      tags: ["Python", "TensorFlow / Keras", "Sequence-to-Sequence Models", "Natural Language Processing (NLP)", "LSTM / Transformer", "Data Preprocessing", "Tokenization", "Streamlit / Tkinter (GUI)", "Scikit-learn", "Git", "GitHub"],
      github: "https://github.com/Dalpatsinghbhayal/language_translation"
    },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  