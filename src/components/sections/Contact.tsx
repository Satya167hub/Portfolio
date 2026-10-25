import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN || "",
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "info";
    text: string;
  } | null>(null);

  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  const isEmailJsConfigured = Boolean(
    emailjsConfig.serviceId &&
      emailjsConfig.templateId &&
      emailjsConfig.accessToken
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    // If EmailJS credentials are not yet configured in .env, fall back gracefully to mailto
    if (!isEmailJsConfigured) {
      setLoading(false);
      const subject = encodeURIComponent(
        `Portfolio Inquiry from ${form.name || "Visitor"}`
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${config.html.email}?subject=${subject}&body=${body}`;
      setStatusMessage({
        type: "info",
        text: `Opened your email client to message ${config.html.email}. (To enable direct in-browser dispatch, configure EmailJS credentials in .env).`,
      });
      return;
    }

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          reply_to: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage({
            type: "success",
            text: "Thank you! Your message has been sent successfully.",
          });
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          setStatusMessage({
            type: "error",
            text: `Could not send message automatically. Please write directly to ${config.html.email}.`,
          });
        }
      );
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8 border border-white/5"
      >
        <Header useMotion={false} {...config.contact} />

        {/* Direct Contact & Resume Actions */}
        <div className="mt-5 p-4 rounded-xl bg-tertiary/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 text-[14px]">
            <div className="flex items-center gap-2">
              <span className="text-secondary">Email:</span>
              <a
                href={config.social.email}
                className="text-[#915EFF] font-semibold hover:underline"
              >
                {config.html.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary">Phone:</span>
              <a
                href={config.social.phoneLink}
                className="text-white font-medium hover:text-[#915EFF] transition-colors"
              >
                {config.html.phone}
              </a>
            </div>
          </div>

          <a
            href={resumeUrl}
            download="Satyajeet-Resume.pdf"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-[#915EFF]/40 bg-[#915EFF]/15 px-4 py-2 text-[13px] font-bold text-white hover:bg-[#915EFF]/25 transition-all shadow-md"
            title="Download Satyajeet's Resume PDF"
          >
            <svg
              className="h-4 w-4 fill-current text-[#915EFF]"
              viewBox="0 0 24 24"
            >
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
            </svg>
            <span>Resume PDF ↓</span>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-7 flex flex-col gap-5"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-2 font-medium text-white text-[14px]">
                  {span}
                </span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  required
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border border-white/5 px-5 py-3.5 font-medium text-white outline-none focus:border-[#915EFF] transition-colors"
                  {...(input === "message" && { rows: 5 })}
                />
              </label>
            );
          })}

          {statusMessage && (
            <div
              className={`rounded-lg p-3 text-[13px] font-medium ${
                statusMessage.type === "success"
                  ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  : statusMessage.type === "info"
                  ? "bg-[#915EFF]/10 text-[#d8b4fe] border border-[#915EFF]/20"
                  : "bg-red-500/10 text-red-300 border border-red-500/20"
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#915EFF] shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none transition-all duration-300 hover:bg-[#7a4de0] hover:shadow-glow disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
