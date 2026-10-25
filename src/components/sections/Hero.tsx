import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[110px] sm:top-[120px] z-10 mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="pointer-events-auto">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            <span className="text-secondary text-[15px] sm:text-[18px] font-normal block mt-1">
              {config.hero.p[1]}
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="hero-cta-btn rounded-full bg-[#915EFF] px-7 py-3 text-[14px] sm:text-[15px] font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#7a4de0] hover:shadow-[#915EFF]/30 cursor-pointer"
            >
              Explore Projects
            </a>
            <a
              href={resumeUrl}
              download="Satyajeet-Resume.pdf"
              className="flex items-center gap-2 rounded-full border-2 border-[#915EFF] px-7 py-3 text-[14px] sm:text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#915EFF]/15 cursor-pointer"
              title="Download Satyajeet's Resume PDF"
            >
              <svg
                className="h-4 w-4 fill-current text-[#915EFF]"
                viewBox="0 0 24 24"
              >
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
              </svg>
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-[14px] sm:text-[15px] font-semibold text-white/90 transition-all duration-300 hover:border-white/40 hover:bg-white/5 cursor-pointer"
            >
              Get In Touch
            </a>
          </div>

          {/* Direct Contact Links */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#915EFF]/30 bg-tertiary/50 backdrop-blur-sm transition-all duration-300 hover:border-[#915EFF] hover:bg-[#915EFF]/20"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#915EFF]/30 bg-tertiary/50 backdrop-blur-sm transition-all duration-300 hover:border-[#915EFF] hover:bg-[#915EFF]/20"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:${config.html.email}`}
              className="social-icon-link flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#915EFF]/30 bg-tertiary/50 backdrop-blur-sm transition-all duration-300 hover:border-[#915EFF] hover:bg-[#915EFF]/20"
              aria-label={`Email ${config.html.email}`}
              title={`Email ${config.html.email}`}
            >
              <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href={config.social.phoneLink}
              className="social-icon-link flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#915EFF]/30 bg-tertiary/50 backdrop-blur-sm transition-all duration-300 hover:border-[#915EFF] hover:bg-[#915EFF]/20"
              aria-label={`Call ${config.html.phone}`}
              title={`Call ${config.html.phone}`}
            >
              <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="xs:bottom-10 absolute bottom-32 z-10 flex w-full items-center justify-center">
        <a href="#about" aria-label="Scroll to About section">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
