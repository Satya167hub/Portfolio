type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    phone: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
    phoneLink: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks?: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Satyajeet — Portfolio",
    fullName: "Satyajeet",
    email: "satyajeetcse17@gmail.com",
    phone: "+91 8595309345",
  },
  hero: {
    name: "Satyajeet",
    p: [
      "Aspiring Full Stack Developer",
      "Building robust web systems with Java, Spring Boot, MySQL & modern frontends.",
    ],
  },
  social: {
    github: "https://github.com/Satya167hub",
    linkedin: "https://linkedin.com/in/satyajeet17",
    email: "mailto:satyajeetcse17@gmail.com",
    phone: "+91 8595309345",
    phoneLink: "tel:+918595309345",
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What would you like to discuss?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am an Aspiring Full Stack Developer focused on software engineering fundamentals and modern web architecture. My core stack centers on Java, Spring Boot, and MySQL for developing organized REST APIs, database schemas, and business logic, paired with React, TypeScript, and Tailwind CSS for responsive and accessible user interfaces. I value writing clean, maintainable code and solving real-world challenges through hands-on project building. Currently, I am actively developing the AI Smart Study Planner to help students organize study schedules and track learning milestones.`,
    },
    experience: {
      p: "Milestones & Progress",
      h2: "Learning & Journey.",
    },
    works: {
      p: "My Work",
      h2: "Projects.",
      content: `A showcase of my full-stack web applications, featuring clean architecture, relational database management, and role-based workflows. Explore my flagship projects currently in active development.`,
    },
  },
};
