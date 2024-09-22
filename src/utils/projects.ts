// src/data/projects.js

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects, skills, and experiences. Built with React and Tailwind CSS for a modern and responsive design.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
    githubLink: "https://github.com/yourusername/portfolio-website",
    demoLink: "https://yourportfolio.com",
    images: [
      "/images/portfolio1.png",
      "/images/portfolio2.png",
      "/images/portfolio3.png",
    ],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product listings, shopping cart, and payment integration using Stripe.",
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "Stripe"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    demoLink: "https://ecommerce-demo.com",
    images: [
      "/images/ecommerce1.png",
      "/images/ecommerce2.png",
      "/images/ecommerce3.png",
    ],
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "A real-time chat application supporting multiple rooms, direct messaging, and online/offline status indicators using Socket.io.",
    techStack: ["React", "Express.js", "Socket.io", "MongoDB"],
    githubLink: "https://github.com/yourusername/chat-application",
    demoLink: "https://chatapp-demo.com",
    images: ["/images/chat1.png", "/images/chat2.png", "/images/chat3.png"],
  },
  // Add more projects as needed
];

export default projects;
