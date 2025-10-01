
import React from "react";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  period: string;
  title: string;
  company: string;
  isActive?: boolean;
  index?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  period,
  title,
  company,
  isActive = false,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-lg bg-darkcard ${
        isActive ? "border border-neon/30" : ""
      } p-6 transition-all duration-300 hover:border-neon/50 hover:shadow-[0_0_15px_rgba(13,255,163,0.2)]`}
    >
      <div className="mb-2 font-mono text-sm text-neon">{period}</div>
      <h3 className="mb-1 text-xl font-bold text-white">{title}</h3>
      <div className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-neon"></span>
        <p className="text-white/70">{company}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
