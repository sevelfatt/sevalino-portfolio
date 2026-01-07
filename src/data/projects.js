import { desc } from 'motion/react-client';
import project1Image from '../assets/projects/project-1.png';
import project2Image from '../assets/projects/project-2.png';
import project3Image from '../assets/projects/project-3.png';
import project4Image from '../assets/projects/project-4.jpg';
import project5Image from '../assets/projects/project-5.png';

export const projectsData = [
    {
        id: 1,
        title: "Sumify: PDF AI-Powered Summarizer",
        description: "Sumify is an AI-powered web app that helps you quickly and accurately summarize and understand PDF documents",
        image: project1Image,
        link: "https://github.com/ELfatt09/sumify"
    },
    {
        id: 2,
        title: "Twiahh: Thread based simple Social Media Platform",
        description: "An simple social media platform that allows users to create and share threads, follow other users, and engage with content through likes and comments.",
        image: project2Image,
        link: "https://github.com/ELfatt09/twiahh-final-project"
    }, 
    {
        id: 3,
        title: "Database Testing and Standar for Renewable Energy Website",
        description: "a website dedicated to providing information and resources about testing and standards for renewable energy",
        image: project3Image,
        link: "https://website-testing-and-standard.netlify.app/",
    },
    {
        id: 4,
        title: "Simple News App",
        description: "A simple news mobile application that provides users with the latest news articles from various sources, allowing them to stay informed on current events.",
        image: project4Image,
        link: "https://github.com/ELfatt09/idn-newsapp/"
    },
    {
        id: 5,
        title: "CLI AI Code Assistant",
        description: "A CLI tool built using Python that uses Gemini AI API to generate abnd fix code based on user input.",
        image: project5Image,
        link: "https://github.com/ELfatt09/cli-ai-coder-agent-python"
    }
]