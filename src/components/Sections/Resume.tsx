import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaJava, FaReact, FaPython } from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiSpringboot,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiTensorflow,
  SiTableau,
  SiTypescript,
  SiApacheairflow,
  SiApachespark,
  SiDocker,
  SiKubernetes,
  SiSnowflake,
  SiDbeaver,
} from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import ExperienceCard from "../UI/ExperienceCard";

// === Skills ===
const skillIcons: { [key: string]: IconType } = {
  // Languages
  Python: FaPython,
  Java: FaJava,
  "C++": SiCplusplus,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,

  // Frontend & UI
  "React.js": FaReact,
  TailwindCSS: SiTailwindcss,

  // Backend
  "Spring Boot": SiSpringboot,
  NestJS: SiNestjs,

  // Databases
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Snowflake: SiSnowflake,

  // Big Data / Orchestration
  "Apache Spark": SiApachespark,
  "Apache Airflow": SiApacheairflow,
  "Apache Kafka": SiApachekafka,
  dbt: SiDbeaver, // placeholder since dbt has no official icon

  // DevOps / Cloud
  Docker: SiDocker,
  Kubernetes: SiKubernetes,

  // Data Science & BI
  "Machine Learning": SiTensorflow,
  "Deep Learning": SiTensorflow,
  "Data Analysis": SiTableau,
  "Power BI": SiTableau,
};

// ✅ Tabs
type TabType =
  | "profile"
  | "experience"
  | "education"
  | "skills"
  | "certifications"
  | "languages";

const tabs: TabType[] = [
  "profile",
  "experience",
  "education",
  "skills",
  "certifications",
  "languages",
];

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const experience = [
    {
      period: "2024–2025",
      title: "IoT Data Pipeline with Kafka-Spark and AWS S3",
      company: "Academic Project",
      isActive: true,
    },
    {
      period: "2024",
      title: "ETL Pipeline with Orchestration (Airflow/PostgreSQL)",
      company: "Academic Project",
      isActive: false,
    },
    {
      period: "2024",
      title: "Weather ETL using Airflow TaskFlow API",
      company: "Academic Project",
      isActive: false,
    },
    {
      period: "2023–2024",
      title: "Machine Learning Projects (Classification & Regression)",
      company: "Academic & DataCamp",
      isActive: false,
    },
  ];

  const education = [
    {
      period: "2024–2025",
      title: "Master’s Degree in Computer Science (MISA)",
      company: "University of Antananarivo",
      isActive: true,
    },
    {
      period: "2023–2024",
      title: "Bachelor’s Degree in Computer Science (MISA)",
      company: "University of Antananarivo",
      isActive: false,
    },
    {
      period: "2024",
      title: "Cloud & Data Flow Training (Certified)",
      company: "Etech",
      isActive: false,
    },
    {
      period: "2021",
      title: "Office Suite (Word, Excel, PowerPoint)",
      company: "CFPM (Certified)",
      isActive: false,
    },
  ];

  const certifications = [
    { title: "Data Engineer Associate", img: "../../../public/certificate/data_engineer_associate.png" },
    { title: "Data Analyst Associate", img: "../../../public/certificate/data_analyst_associate.png" },
    { title: "Python Data Associate", img: "../../../public/certificate/python_data_associate.png" },
    { title: "SQL Associate", img: "../../../public/certificate/sql_associate.png" },
    { title: "AWS Cloud Practitioner (CLF-C02)", img: "../../../public/certificate/aws_cloud_practitioner.png" },
    { title: "Data Engineer Career Track", img: "../../../public/certificate/data_engineer_track.png" },
    { title: "Data Analyst in Python", img: "../../../public/certificate/data_analyst_in_python.png" },
    { title: "Data Analyst in Power BI", img: "../../../public/certificate/data_analyst_power_bi.png" },
    { title: "Professional Data Engineer in Python", img: "../../../public/certificate/professional_data_engeener.png" },
    { title: "Data Engineer in Python", img: "../../../public/certificate/Data_engeener_in_python.png" },
    { title: "Power BI Fundamentals (Skill Track)", img: "../../../public/certificate/power_bi_fondamental.png" },
    { title: "Snowflake Data Engineer Associate", img: "../../../public/certificate/data_engeener_in_snowflake.png" },
  ];

  const languages = [
    { name: "Malagasy", level: "Native" },
    { name: "French", level: "Fluent" },
    { name: "English", level: "Professional" },
  ];

  const skills = Object.keys(skillIcons);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Sidebar */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold">
                My <span className="text-neon">Resume</span>
              </h2>
              <div className="space-y-3">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`w-full rounded-md px-4 py-3 text-left transition-all ${
                      activeTab === tab
                        ? "bg-neon text-black"
                        : "bg-darkcard text-white hover:bg-darkcard/80"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-2xl font-bold">
              {activeTab === "profile" && "Profile"}
              {activeTab === "experience" && "Projects & Experience"}
              {activeTab === "education" && "Education"}
              {activeTab === "skills" && "Skills"}
              {activeTab === "certifications" && "Certifications"}
              {activeTab === "languages" && "Languages"}
            </h3>

            {/* Profile */}
            {activeTab === "profile" && (
              <div className="rounded-lg bg-darkcard p-6 text-white/70">
                Master’s student in Computer Science (MISA) passionate about Data
                Engineering, Data Analysis, and Business Intelligence.  
                Expertise: 77+ DataCamp courses (230h+), several Career Tracks &
                Certifications (Data Engineer, Data Analyst, Python, SQL, Power
                BI, Snowflake, AWS).  
                Goal: apply my skills in data pipelines, Big Data (PySpark, Kafka),
                ETL/ELT (Airflow, dbt), Data Warehousing, and Cloud Computing.
              </div>
            )}

            {/* Experience */}
            {activeTab === "experience" && (
              <div className="space-y-4">
                {experience.map((item, index) => (
                  <ExperienceCard
                    key={index}
                    period={item.period}
                    title={item.title}
                    company={item.company}
                    isActive={item.isActive}
                    index={index}
                  />
                ))}
              </div>
            )}

            {/* Education */}
            {activeTab === "education" && (
              <div className="space-y-4">
                {education.map((item, index) => (
                  <ExperienceCard
                    key={index}
                    period={item.period}
                    title={item.title}
                    company={item.company}
                    isActive={item.isActive}
                    index={index}
                  />
                ))}
              </div>
            )}

            {/* Skills */}
            {activeTab === "skills" && (
              <div className="flex flex-wrap gap-4 relative">
                {skills.map((skill, index) => {
                  const Icon = skillIcons[skill];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="relative flex flex-col items-center"
                    >
                      <div className="p-4 rounded-full bg-darkcard hover:bg-neon/20 transition-all">
                        <Icon className="text-3xl text-white/80 hover:text-neon" />
                      </div>
                      {hoveredSkill === skill && (
                        <motion.span
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute bottom-12 bg-darkcard text-white/80 px-3 py-1 rounded-md text-sm"
                        >
                          {skill}
                        </motion.span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Certifications */}
            {activeTab === "certifications" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden bg-darkcard p-4"
                  >
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full rounded-lg"
                    />
                    <p className="mt-2 text-center text-white/80">
                      {cert.title}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Languages */}
            {activeTab === "languages" && (
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                {languages.map((lang, i) => (
                  <li key={i}>
                    {lang.name}: {lang.level}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
