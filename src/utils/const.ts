import { Technology } from "@/utils/enums.ts";
import {
  type ICardData,
  type INameData,
  type ITechnologyData,
  type ITimelineData,
} from "@/utils/interfaces.ts";

export const experienceEvents: ITimelineData[] = [
  {
    title: "Systems and Solutions Engineer",
    subtitle: "Full-time",
    institution: "Intel Corporation, Bengaluru",
    institution_logo:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg",
    start_date: "May, 2025",
    end_date: "Present",
    description:
      "Joined and currently working as a Systems and Solutions Engineer at Intel Corporation in Bengaluru, India after a successful 11 months internship. Involved in developing tools and automation to manage Intel's lab infrastructure. Also working with cutting-edge technologies like Agentic AI to develop AI powered tools.",
  },
  {
    title: "Graduate Intern Technical",
    subtitle: "Internship",
    institution: "Intel Corporation, Bengaluru",
    institution_logo:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg",
    start_date: "June, 2024",
    end_date: "May, 2025",
    description:
      "Completed internship at Intel Corporation in Bengaluru, India. Worked on developing a cloud-native application for monitoring and managing Intel's lab infrastructure. Gained experience in cloud technologies, microservices, and DevOps practices.",
  },
];

export const educationEvents: ITimelineData[] = [
  {
    title: "Post Graduation Degree",
    subtitle: "Masters of Technology in Computer Science and Engineering",
    institution: "Dr. B R Ambedkar National Institute of Technology, Jalandhar",
    institution_logo:
      "https://upload.wikimedia.org/wikipedia/en/9/96/Logo_of_NIT_Jalandhar.png",
    start_date: "June, 2025",
    description:
      "Completed M.Tech in Computer Science from NIT Jalandhar. Gained experience in new technologies, research projects, and DevOps practices including CI/CD and cloud infrastructure management.",
  },
  {
    title: "Graduation Degree",
    subtitle: "Bachelor of Engineering in Computer Engineering",
    institution: "Government Engineering College, Rajkot",
    institution_logo:
      "https://gecrajkot.ac.in/wp-content/uploads/2017/01/cropped-GECR-Logo.png",
    start_date: "June, 2023",
    description:
      "Graduated in Computer Science from Government Engineering College, Rajkot. Enhanced my software development skills, participated in coding competitions, and collaborated on projects.",
  },
  {
    title: "Secondary Education",
    subtitle: "High School",
    institution: "Kendriya Vidyalaya No. 3, Vadodara",
    institution_logo:
      "https://static.toiimg.com/thumb/msid-85027624,width-400,resizemode-4/85027624.jpg",
    start_date: "April, 2019",
    description:
      "Completed high school from Kendriya Vidyalaya No. 3, Vadodara. Served as house captain in 11th standard and participated in various writing competitions. Gained valuable experiences and learned numerous skills.",
  },
];

export const technologies: ITechnologyData[] = [
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

export const projects: ICardData[] = [
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

export const names: INameData[] = [
  {
    language: "English",
    name: "Himansu",
  },
  {
    language: "Hindi",
    name: "हिमांशु",
  },
  {
    language: "Russian",
    name: "Химансу",
  },
  {
    language: "Chinese",
    name: "希曼苏",
  },
  {
    language: "Japanese",
    name: "ヒマンス",
  },
  {
    language: "Korean",
    name: "히만수",
  },
];
