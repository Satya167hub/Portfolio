import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { config } from "../../constants/config";
import { logo, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 transition-all duration-300 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white tracking-wide">
            Satya<span className="text-[#915EFF] ml-0.5">jeet</span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row items-center gap-6 lg:gap-8 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } cursor-pointer text-[15px] lg:text-[17px] font-medium transition-colors duration-300 hover:text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href={resumeUrl}
              download="Satyajeet-Resume.pdf"
              className="cursor-pointer rounded-full border border-[#915EFF] px-3.5 py-1.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#915EFF]/15"
              title="Download Satyajeet's Resume"
            >
              Resume ↓
            </a>
          </li>
          <li>
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full border border-white/20 px-3.5 py-1.5 text-[13px] font-semibold text-white transition-all duration-300 hover:border-[#915EFF] hover:bg-[#915EFF]/10"
            >
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full bg-[#915EFF] px-4 py-1.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#7a4de0] hover:shadow-lg hover:shadow-[#915EFF]/20"
            >
              GitHub ↗
            </a>
          </li>
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[170px] rounded-xl p-6 shadow-2xl border border-white/10`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-3.5">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[15px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10 w-full">
                <a
                  href={resumeUrl}
                  download="Satyajeet-Resume.pdf"
                  className="font-poppins cursor-pointer text-[14px] font-semibold text-[#c4a9ff] block"
                >
                  Resume PDF ↓
                </a>
              </li>
              <li>
                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins cursor-pointer text-[14px] font-medium text-white block"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins cursor-pointer text-[14px] font-medium text-[#915EFF] block"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
