import { Technology } from "./enums.ts";
import { CardData, CloudData, TimelineData } from "./interfaces.ts";

export const experienceEvents: TimelineData[] = [
  {
    title: "Graduate Technical Intern",
    subtitle: "Intern at Intel Corporation",
    date: "June, 2024",
    description:
      "Currently interning at Intel Corporation in Bangalore, India. Working on developing a cloud-native application for monitoring and managing Intel's lab infrastructure. Gaining experience in cloud technologies, microservices, and DevOps practices.",
  },
];

export const educationEvents: TimelineData[] = [
  {
    title: "Post Graduation Degree",
    subtitle: "Persuing M.Tech in Computer Science and Engineering",
    date: "Present",
    description:
      "Pursuing M.Tech in Computer Science at NIT Jalandhar. Gaining experience in new technologies, research projects, and DevOps practices including CI/CD and cloud infrastructure management.",
  },
  {
    title: "Graduation Degree",
    subtitle: "Completed B.E. in Computer Engineering",
    date: "June, 2023",
    description:
      "Graduated in Computer Science from Government Engineering College, Rajkot. Enhanced my software development skills, participated in coding competitions, and collaborated on projects.",
  },
  {
    title: "Secondary Education",
    subtitle: "Completed High School",
    date: "April, 2019",
    description:
      "Completed high school from Kendriya Vidyalaya No. 3, Vadodara. Served as house captain in 11th standard and participated in various writing competitions. Gained valuable experiences and learned numerous skills.",
  },
];

export const technologies: CloudData[] = [
  {
    src: "https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg",
    alt: "C++",
  },
  {
    src: "https://icon.icepanel.io/Technology/svg/Python.svg",
    alt: "Python",
  },
  {
    src: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    alt: "JavaScript",
  },
  {
    src: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
    alt: "TypeScript",
  },
  {
    src: "https://icon.icepanel.io/Technology/svg/Go.svg",
    alt: "GoLang",
  },
  {
    src: "https://icon.icepanel.io/Technology/svg/React.svg",
    alt: "React",
  },
  {
    src: "https://icon.icepanel.io/Technology/svg/Angular.svg",
    alt: "Angular",
  },
  {
    src: "https://icon.icepanel.io/Technology/svg/FastAPI.svg",
    alt: "FastAPI",
  },
  {
    src: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
    alt: "MongoDB",
  },
  {
    src: "https://icon.icepanel.io/Technology/svg/Docker.svg",
    alt: "Docker",
  },
  {
    src: "https://icon.icepanel.io/Technology/svg/Kubernetes.svg",
    alt: "Kubernetes",
  },
  {
    src: "https://icon.icepanel.io/Technology/png-shadow-512/Bash.png",
    alt: "Bash",
  },
];

export const projects: CardData[] = [
  {
    title: "Project Music",
    description:
      "Developed a music streaming app using React for the frontend and Node.js for the backend. Integrated a MongoDB database for storing user data and music metadata. Utilized Docker and Kubernetes for containerization and orchestration.",
    technologies: [
      Technology.React,
      Technology.Go,
      Technology.GinGonic,
      Technology.MongoDB,
      Technology.Redis,
      Technology.Docker,
      Technology.Kubernetes,
    ],
    startDate: "Oct, 2024",
    endDate: "Present",
  },
  {
    title: "NewsHarbour",
    description:
      "Engineered a cutting-edge mobile app using Jetpack Compose and Kotlin, a web application powered by Angular, and a Python-Flask backend with web scraping capabilities. Utilized Docker for seamless development.",
    technologies: [
      Technology.JetpackCompose,
      Technology.Kotlin,
      Technology.Angular,
      Technology.Python,
      Technology.Flask,
      Technology.Docker,
    ],
    startDate: "Nov, 2023",
    endDate: "Jun, 2024",
  },
  {
    title: "Peripheral Plus",
    description:
      "Developed a user-friendly eCommerce platform with React for the frontend and Express.js for the backend. Implemented user registration, login, and efficient cart management. Used PostgreSQL for the database.",
    technologies: [
      Technology.JavaScript,
      Technology.React,
      Technology.NodeJS,
      Technology.ExpressJS,
      Technology.PostgreSQL,
    ],
    startDate: "Mar, 2023",
    endDate: "May, 2023",
  },
  {
    title: "Jan Seva Kendra",
    description:
      "A hackathon project providing an online appointment booking system for obtaining government documents. Built with React and Firebase.",
    technologies: [Technology.React, Technology.Firebase],
    startDate: "Oct, 2022",
    endDate: "Oct, 2022",
  },
  {
    title: "Twitter Sentiment Analysis",
    description:
      "Trained a sentiment classifier with 80% accuracy using Logistic Regression on Kaggle’s Sentiment140 dataset. Implemented a FastAPI endpoint for real-time sentiment analysis and designed a user-friendly web app frontend.",
    technologies: [Technology.Python, Technology.FastAPI],
    startDate: "May, 2022",
    endDate: "June, 2022",
  },
  {
    title: "Sweeat",
    description:
      "Developed a Flutter and Firebase-based app showcasing nearby sweets and chocolate shops, featuring prices and menus.",
    technologies: [Technology.Flutter, Technology.Firebase],
    startDate: "Sept, 2021",
    endDate: "May, 2022",
  },
];
