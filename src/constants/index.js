import { meta, shopify, starbucks, tesla, goldenspoon, goldcoast, amazon } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Store Manager",
        company_name: "Golden Spoon",
        icon: goldenspoon,
        iconBg: "#da040d",
        date: "March 2017 - April 2018",
        points: [
            "Managing store operations at Golden Spoon, Las Vegas, NV, ensuring optimal readiness and organization of essential assets.",
            "Streamlining inventory processes to maintain efficient stock levels for store functionality.",
            "Upholding high standards of customer service, fostering an environment of customer satisfaction and loyalty at Golden Spoon.",
            ,],
    },
    {
        title: "Valet Attendant",
        company_name: "Gold Coast",
        icon: goldcoast,
        iconBg: "#e93a43",
        date: "Mar 2018 - Nov 2020",
        points: [
            "Managed vehicle logistics at Gold Coast, Las Vegas, NV, ensuring efficient organization and accessibility of guest vehicles.",
            "Streamlined parking processes to optimize space utilization and reduce guest wait times, reflecting efficient resource management.",
            "Upheld high standards of guest service, fostering a welcoming and professional environment, parallel to customer satisfaction goals in software development.",
            "Coordinated effectively with team members to handle peak hour rushes, mirroring agile collaboration and teamwork essential in software projects.",
        ],
    },
    {
        title: "Delivery Station Liason",
        company_name: "Amazon",
        icon: amazon,
        iconBg: "#040404",
        date: "Mar 2022 - Present",
        points: [
            "Led Amazon team to a #1 national ranking by pioneering strategies that enhanced handling times and package delivery success rates, reflecting skills in process optimization and user satisfaction akin to software development.",
            "Enhanced package delivery success by 31% through innovative problem-solving and consistent delivery partner coordination.",
            "Streamlined resolution of delivery challenges, reducing problem-solving time from 15 to 9 minutes, demonstrating efficiency improvement comparable to optimizing code and reducing runtime in software applications.",
            "Utilized critical thinking for daily resolution of diverse, complex issues, akin to software problem-solving.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/davidterrel',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/davidterrel',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Stranger Things',
        description: 'Developed a React-based web application featuring user authentication, post management, and messaging, demonstrating advanced web development skills.',
        link: 'https://stranger-things-davidterrel.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'React To Do List',
        description: 'Developed a user-centric To-Do List application in React, featuring a clean design for efficient task management, showcasing proficiency in modern web development and software engineering practices."',
        link: 'https://react-to-do-list-david-terrel.netlify.app/'
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Davids Shop',
        description: 'Crafted a user-focused e-commerce platform in React, offering a seamless shopping experience with modular components and CSS styling, demonstrating modern web development and design proficiency.',
        link: 'https://davidterrel-capstone-final-project.netlify.app/'
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];