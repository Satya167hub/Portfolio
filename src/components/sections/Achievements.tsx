import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

const stats = [
  {
    value: "Java & Spring",
    label: "Backend Architecture",
    icon: "☕",
    link: config.social.github,
  },
  {
    value: "MySQL",
    label: "Relational Modeling",
    icon: "🗄️",
    link: config.social.github,
  },
  {
    value: "React & TS",
    label: "Modern Web UIs",
    icon: "⚛️",
    link: config.social.github,
  },
  {
    value: "Active",
    label: "AI Study Planner",
    icon: "🚀",
    link: "#projects",
  },
];

const highlights = [
  {
    title: "Full-Stack Web Architecture",
    description:
      "Developing end-to-end web applications with modular Spring Boot REST controllers, service layers, and React frontends.",
    icon: "🏛️",
    link: config.social.github,
  },
  {
    title: "Relational Database Design & JPA",
    description:
      "Structuring normalized MySQL schemas, configuring entity relationships, and leveraging Spring Data JPA for robust data persistence.",
    icon: "🗃️",
    link: config.social.github,
  },
  {
    title: "AI Smart Study Planner (In Progress)",
    description:
      "Actively developing an intelligent scheduling application designed to help learners track subject progress and generate structured study plans.",
    icon: "📚",
    link: "#projects",
  },
  {
    title: "Clean Code & Software Principles",
    description:
      "Applying Object-Oriented design principles (OOP), separation of concerns, and clean, readable code conventions across all projects.",
    icon: "💡",
    link: config.social.github,
  },
  {
    title: "Modern UI Engineering with Tailwind",
    description:
      "Building responsive, accessible interfaces using TypeScript, modern React patterns, and utility-first Tailwind CSS.",
    icon: "🎨",
    link: config.social.github,
  },
  {
    title: "Disciplined Version Control",
    description:
      "Maintaining clean Git repositories, meaningful commits, and structured documentation on GitHub.",
    icon: "🛠️",
    link: config.social.github,
  },
];

const Achievements = () => {
  return (
    <div className="relative">
      <div className="css-particles css-particles-violet" />
      <div className="relative z-10">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Competencies & Focus Areas</p>
          <h2 className={styles.sectionHeadText}>Highlights.</h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat, index) => (
            <a
              key={stat.label}
              href={stat.link}
              target={stat.link.startsWith("http") ? "_blank" : undefined}
              rel={stat.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable
                glareColor="#915EFF"
                glareMaxOpacity={0.1}
                perspective={800}
              >
                <motion.div
                  variants={fadeIn("up", "spring", index * 0.15, 0.75)}
                  className="stat-card cursor-pointer rounded-2xl p-6 text-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <p
                    className="text-[36px]"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {stat.icon}
                  </p>
                  <h3
                    className="mt-2 text-[22px] font-black text-white"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {stat.value}
                  </h3>
                  <p
                    className="text-secondary mt-1 text-[13px]"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              </Tilt>
            </a>
          ))}
        </div>

        {/* Highlight Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable
                glareColor="#915EFF"
                glareMaxOpacity={0.08}
                perspective={1000}
              >
                <motion.div
                  variants={fadeIn("up", "spring", index * 0.15, 0.75)}
                  className="achievement-badge flex items-start gap-4 rounded-2xl p-6 cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span
                    className="text-[32px]"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    {item.icon}
                  </span>
                  <div
                    className="flex-1"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-[17px] font-bold text-white">
                        {item.title}
                      </h4>
                      <span className="text-[#915EFF] text-[12px] ml-2 shrink-0">
                        ↗
                      </span>
                    </div>
                    <p className="text-secondary mt-1 text-[14px] leading-[22px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Tilt>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "highlights");
