// src/data/projects.js

const projects = [
  {
    id: 1,
    title: "Brick Detective",
    description:
      "A personal portfolio website to showcase my projects, skills, and experiences. Built with React and Tailwind CSS for a modern and responsive design.",
    techStack: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
      "Node.js",
      "MongoDB",
    ],
    githubLink: "https://github.com/yourusername/portfolio-website",
    demoLink: "https://yourportfolio.com",
    images: [
      "/images/brickdetective-one.png",
      "/images/brickdetective-two.png",
      "/images/brickdetective-three.png",
    ],
  },
  {
    id: 2,
    title: "Forze Football",
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
