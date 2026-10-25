import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const getStatusBadge = (status?: string) => {
  if (!status) return null;

  if (status.includes("Deployment") || status.includes("Progress")) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 px-3 py-1 text-[11px] font-semibold text-blue-300">
        <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
        {status}
      </span>
    );
  }

  if (status.includes("Planned")) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 px-3 py-1 text-[11px] font-semibold text-purple-300">
        <span className="h-2 w-2 rounded-full bg-purple-400" />
        {status}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-[11px] font-semibold text-amber-300">
      <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
      {status}
    </span>
  );
};

const ProjectCard: React.FC<
  {
    index: number;
    onOpenDetails: (project: TProject) => void;
  } & TProject
> = (project) => {
  const {
    index,
    name,
    tagline,
    description,
    tags,
    image,
    status,
    isFeatured,
    onOpenDetails,
  } = project;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.25, 0.75)}
      className="w-full flex"
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareColor="#915EFF"
        glareMaxOpacity={0.08}
        perspective={1000}
        className="w-full flex"
      >
        <div
          className={`bg-tertiary w-full rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-glow border flex flex-col justify-between ${
            isFeatured
              ? "border-[#915EFF]/40 shadow-card"
              : "border-white/10 hover:border-[#915EFF]/30"
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Card Top: Status & Flagship */}
          <div>
            <div
              className="flex items-center justify-between mb-3.5 flex-wrap gap-2"
              style={{ transform: "translateZ(15px)" }}
            >
              <div className="flex items-center gap-2 flex-wrap">
                {isFeatured && (
                  <span className="rounded-full bg-[#915EFF]/20 border border-[#915EFF]/40 px-2.5 py-0.5 text-[11px] font-bold text-[#c4a9ff]">
                    ⭐ Flagship
                  </span>
                )}
                {getStatusBadge(status)}
              </div>
            </div>

            {/* Image Preview */}
            <div
              className="relative h-[200px] w-full overflow-hidden rounded-xl bg-black-100 border border-white/5 cursor-pointer"
              onClick={() => onOpenDetails(project)}
              style={{ transform: "translateZ(20px)" }}
            >
              <img
                src={image}
                alt={`${name} preview`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-100/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-[12px] font-semibold text-white bg-[#915EFF]/80 px-3 py-1 rounded-full backdrop-blur-sm">
                  Click for architecture details ↗
                </span>
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="mt-4" style={{ transform: "translateZ(15px)" }}>
              <h3 className="text-[20px] font-bold text-white flex items-center justify-between">
                <span>{name}</span>
              </h3>
              {tagline && (
                <p className="text-[#c4a9ff] text-[13px] font-medium mt-1 leading-snug">
                  {tagline}
                </p>
              )}
              <p className="text-secondary mt-2.5 text-[13.5px] leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>
          </div>

          {/* Card Bottom: Tags & Action Buttons */}
          <div className="mt-5 pt-4 border-t border-white/10" style={{ transform: "translateZ(10px)" }}>
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-[12px] font-semibold px-2 py-0.5 rounded-md bg-black-100/60 border border-white/5 ${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* Buttons: Details & Status */}
            <div className="flex items-center justify-between gap-2 pt-1">
              <button
                type="button"
                onClick={() => onOpenDetails(project)}
                className="cursor-pointer text-[13px] font-bold text-[#c4a9ff] hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>View Details</span>
                <span className="text-[#915EFF]">→</span>
              </button>

              <span className="text-[11px] font-medium text-secondary bg-black-100/80 px-2.5 py-1 rounded-full border border-white/5">
                Repo Coming Soon
              </span>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [activeModalProject, setActiveModalProject] = useState<TProject | null>(
    null
  );

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[16px] sm:text-[17px] leading-[28px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      {/* Balanced 3-Project Responsive Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            {...project}
            onOpenDetails={(p) => setActiveModalProject(p)}
          />
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-tertiary border border-[#915EFF]/30 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 h-9 w-9 rounded-full bg-black-100 border border-white/10 flex items-center justify-center text-white hover:text-[#915EFF] transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Status & Name */}
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                {getStatusBadge(activeModalProject.status)}
                {activeModalProject.isFeatured && (
                  <span className="rounded-full bg-[#915EFF]/20 border border-[#915EFF]/40 px-2.5 py-0.5 text-[11px] font-bold text-[#c4a9ff]">
                    ⭐ Flagship Project
                  </span>
                )}
              </div>

              <h3 className="text-[24px] sm:text-[28px] font-black text-white">
                {activeModalProject.name}
              </h3>
              {activeModalProject.tagline && (
                <p className="text-[#915EFF] font-semibold text-[14px] sm:text-[15px] mt-1">
                  {activeModalProject.tagline}
                </p>
              )}

              {/* Graphic Banner */}
              <div className="my-5 rounded-xl overflow-hidden border border-white/10 bg-black-100 max-h-[220px]">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overview */}
              <div className="space-y-4 text-white-100 text-[14px] sm:text-[15px] leading-relaxed">
                <div>
                  <h4 className="font-bold text-white text-[16px] mb-1">
                    Overview
                  </h4>
                  <p className="text-secondary leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Key Features */}
                {activeModalProject.features && (
                  <div>
                    <h4 className="font-bold text-white text-[16px] mb-2">
                      Key Technical Features
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-secondary text-[13.5px]">
                      {activeModalProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* What Makes It Different */}
                {activeModalProject.distinction && (
                  <div className="p-3.5 rounded-xl bg-black-100/60 border border-[#915EFF]/20">
                    <h4 className="font-bold text-[#c4a9ff] text-[14px] mb-1">
                      💡 Architectural Distinction
                    </h4>
                    <p className="text-secondary text-[13px] leading-relaxed">
                      {activeModalProject.distinction}
                    </p>
                  </div>
                )}

                {/* Tech Stack Breakdown */}
                {activeModalProject.techStackDetails && (
                  <div>
                    <h4 className="font-bold text-white text-[16px] mb-2">
                      Technology Stack
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12.5px]">
                      {Object.entries(activeModalProject.techStackDetails).map(
                        ([key, val]) => (
                          <div
                            key={key}
                            className="bg-black-100/40 p-2.5 rounded-lg border border-white/5"
                          >
                            <span className="text-[#915EFF] font-bold uppercase tracking-wider block text-[11px]">
                              {key}
                            </span>
                            <span className="text-secondary">{val}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Route indicator for Study Planner */}
                {activeModalProject.dedicatedRoute && (
                  <div className="pt-2 text-[12.5px] text-secondary flex items-center justify-between border-t border-white/10">
                    <span>Planned dedicated showcase route:</span>
                    <code className="text-[#915EFF] font-mono bg-[#915EFF]/10 px-2 py-0.5 rounded border border-[#915EFF]/20">
                      {activeModalProject.dedicatedRoute}
                    </code>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
                <span className="text-[12px] text-secondary">
                  Status:{" "}
                  <strong className="text-white">
                    {activeModalProject.status}
                  </strong>
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="bg-[#915EFF] px-6 py-2 rounded-xl text-white font-bold text-[13px] hover:bg-[#7a4de0] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "projects");
