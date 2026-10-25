import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { profilePhoto } from "../../assets";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    glareColor="#915EFF"
    glareMaxOpacity={0.15}
    perspective={800}
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.35, 0.75)}
        className="gradient-border shadow-card w-full rounded-[20px]"
      >
        <div
          className="bg-tertiary flex min-h-[260px] flex-col items-center justify-evenly rounded-[20px] px-8 py-5"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={icon}
            alt={title}
            className="h-16 w-16 object-contain"
            style={{ transform: "translateZ(30px)" }}
          />

          <h3
            className="text-center text-[18px] font-bold text-white"
            style={{ transform: "translateZ(20px)" }}
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      {/* Recruiter-friendly Profile & Bio Container */}
      <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        {/* Profile Photo Card */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="shrink-0 w-full sm:w-auto flex justify-center"
        >
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable
            glareColor="#915EFF"
            glareMaxOpacity={0.12}
            perspective={1000}
          >
            <div className="gradient-border p-1 rounded-2xl bg-gradient-to-br from-[#915EFF]/40 via-transparent to-[#915EFF]/20 shadow-glow">
              <div className="bg-tertiary/90 p-4 rounded-2xl flex flex-col items-center text-center max-w-[260px]">
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-xl overflow-hidden border-2 border-[#915EFF]/30 bg-black-100/60 shadow-inner">
                  <img
                    src={profilePhoto}
                    alt="Satyajeet profile photo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center gap-1.5 bg-black-100/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-emerald-500/30">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10.5px] font-semibold text-emerald-300">
                      Open to Opportunities
                    </span>
                  </div>
                </div>

                <h3 className="text-white font-bold text-[18px] mt-3">
                  {config.html.fullName}
                </h3>
                <p className="text-[#915EFF] text-[13px] font-medium">
                  {config.hero.p[0]}
                </p>

                {/* Direct quick contact pills */}
                <div className="mt-3 pt-3 border-t border-white/10 w-full flex flex-col gap-1.5 text-[12px]">
                  <a
                    href={config.social.phoneLink}
                    className="text-secondary hover:text-white transition-colors flex items-center justify-center gap-1.5"
                    title="Direct Phone"
                  >
                    <span>📞</span>
                    <span>{config.html.phone}</span>
                  </a>
                  <a
                    href={config.social.email}
                    className="text-secondary hover:text-[#915EFF] transition-colors truncate max-w-full"
                    title="Direct Email"
                  >
                    {config.html.email}
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Narrative & Focus */}
        <div className="flex-1">
          <motion.p
            variants={fadeIn("left", "tween", 0.2, 0.75)}
            className="text-secondary text-[16px] sm:text-[17px] leading-[30px]"
          >
            {config.sections.about.content}
          </motion.p>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 0.75)}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px]"
          >
            <div className="bg-tertiary/60 p-3.5 rounded-xl border border-white/5">
              <span className="text-[#915EFF] font-bold block mb-1">
                ☕ Backend Core
              </span>
              <p className="text-secondary text-[13px]">
                Java 17, Spring Boot, Spring Data JPA, Hibernate, REST API
                Architecture.
              </p>
            </div>
            <div className="bg-tertiary/60 p-3.5 rounded-xl border border-white/5">
              <span className="text-[#915EFF] font-bold block mb-1">
                🗄️ Database &amp; Persistence
              </span>
              <p className="text-secondary text-[13px]">
                MySQL Relational Schema Design, Normalization, Query
                Optimization, TiDB Cloud.
              </p>
            </div>
            <div className="bg-tertiary/60 p-3.5 rounded-xl border border-white/5">
              <span className="text-[#915EFF] font-bold block mb-1">
                ⚛️ Frontend Engineering
              </span>
              <p className="text-secondary text-[13px]">
                React, TypeScript, Modern JavaScript, Tailwind CSS, Responsive
                UI integration.
              </p>
            </div>
            <div className="bg-tertiary/60 p-3.5 rounded-xl border border-white/5">
              <span className="text-[#915EFF] font-bold block mb-1">
                🛠️ Engineering Habits
              </span>
              <p className="text-secondary text-[13px]">
                Clean code principles, OOP modularity, Git version control, and
                agile learning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-16 flex flex-wrap gap-7 justify-center sm:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
