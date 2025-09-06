export const portfolioData = {
  personal: {
    name: "Emiliano Sánchez",
    title: "Full Stack Developer & Data Engineer",
    email: "E.saqno@gmail.com",
    phone: "+52 961 321 8473",
    location: "Monterrey, México",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  },
  
  skills: {
    languages: ["Python", "C++", "R", "C#", "JavaScript"],
    frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    backend: ["Node.js", ".NET", "Django", "Express"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"],
    tools: ["Git", "Docker", "Power BI", "Unity", "AWS"]
  },
  
  experience: [
    {
      id: 1,
      position: "Program Manager Intern",
      company: "Vertiv",
      location: "Monterrey",
      period: "June 2025 – Present",
      current: true,
      description: [
        "Developed real-time manufacturing dashboard integrating Oracle and Excel data sources",
        "Automated Compass catalog population, reducing manual entry by 80%",
        "Tracked critical metrics: ship dates, production assignments, delivery performance"
      ],
      technologies: ["Python", "Django", "JavaScript", "Excel", "Oracle"]
    },
    {
      id: 2,
      position: "Intern Software Engineer",
      company: "MDM Consulting",
      location: "CDMX (Remote)",
      period: "Sept 2024 – Dec 2024",
      description: [
        "Delivered 6 enhancement requests to DLL libraries improving system performance",
        "Managed database operations and optimization for internal applications",
        "Provided technical support for .NET-based enterprise solutions"
      ],
      technologies: [".NET", "SQL Server", "C#"]
    }
  ],
  
  projects: [
    {
      id: 1,
      title: "AI-Powered Chatbot",
      subtitle: "NEORIS Partnership",
      description: "Developed conversational AI assistant with natural language processing capabilities",
      image: "/api/placeholder/400/300",
      achievements: [
        "Reduced task completion time by 40%",
        "95%+ test coverage with Jest",
        "Seamless OpenAI API integration"
      ],
      technologies: ["React", "Next.js", "OpenAI API", "TypeScript"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Forest VR Experience",
      subtitle: "Immersive Environmental Simulation",
      description: "Created VR experience with dynamic forest environments and intelligent audio systems",
      image: "/api/placeholder/400/300",
      achievements: [
        "Modular audio architecture",
        "3D spatial sound design",
        "Optimized for Meta Quest"
      ],
      technologies: ["Unity", "C#", "VR/AR", "FMOD"],
      liveLink: "#",
      githubLink: "#"
    }
  ],
  
  education: [
    {
      degree: "BS in Computer Science",
      institution: "Tecnológico de Monterrey",
      period: "Feb 2021 – Present",
      description: "Focus on Software Engineering, AI, and Data Structures"
    },
    {
      degree: "IBM Data Engineering",
      institution: "Professional Certificate",
      period: "Jan 2025 – Present",
      description: "Specialization in Data Science and Power BI"
    }
  ]
};
