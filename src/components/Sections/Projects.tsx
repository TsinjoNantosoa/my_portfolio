import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "../UI/ProjectCard";

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // === Projets depuis ton CV ===
  const projects = [
  {
    number: "01",
    title: "Pipeline IoT Kafka-Spark avec AWS S3",
    description:
      "Simulation de flux IoT → Traitement temps réel avec Spark Structured Streaming → Stockage S3 (Parquet). Déploiement conteneurisé.",
    technologies: ["Kafka", "Spark", "AWS S3", "Docker"],
    imageUrl: "/portfolio-uploads/iot-pipeline.png",
    githubLink: "https://github.com/TsinjoNantosoa/real-time-data-pipeline-kafka-spark",
    demoLink: "https://demo.iot-pipeline.com",
    isHighlighted: true,
  },
  {
    number: "02",
    title: "Pipeline ETL Orchestré (Airflow/PostgreSQL)",
    description:
      "Extraction API → Producteur Kafka Python → Orchestration Airflow → PostgreSQL. Déploiement Docker Compose.",
    technologies: ["Airflow", "PostgreSQL", "Kafka", "Docker"],
    imageUrl: "/portfolio-uploads/etl-pipeline.png",
    githubLink: "https://github.com/TsinjoNantosoa/real-time-data-pipeline-kafka-spark",
    demoLink: "https://demo.etl-airflow.com",
  },
  {
    number: "03",
    title: "ETL Météo avec Airflow TaskFlow API",
    description:
      "Extraction API (Open Notify) → TaskFlow API (Airflow 2.0) pour une automatisation évolutive.",
    technologies: ["Airflow", "Python", "API", "TaskFlow"],
    imageUrl: "/portfolio-uploads/weather-etl.png",
    githubLink: "https://github.com/TsinjoNantosoa/weather_etl",
    demoLink: "https://demo.weather-etl.com",
  },
  {
    number: "04",
    title: "Projets Machine Learning",
    description:
      "Classification & régression avec Scikit-learn : prétraitement, tuning, évaluation de modèles.",
    technologies: ["Scikit-learn", "Python", "ML"],
    imageUrl: "/portfolio-uploads/ml-projects.png",
    githubLink: "https://github.com/TsinjoNantosoa/sales-prediction-app",
    demoLink: "https://demo.ml-projects.com",
  },
  {
    number: "05",
    title: "Projets DataCamp",
    description:
      "Exemples : Retail Data Pipeline, Cleaning an Orders Dataset with PySpark, Motorcycle Sales Analysis.",
    technologies: ["PySpark", "SQL", "DataCamp"],
    imageUrl: "/portfolio-uploads/datacamp-projects.png",
    githubLink: "https://www.datacamp.com/portfolio/sandaniainatsinjonantosoa",
    demoLink: "https://demo.datacamp-projects.com",
  },
];


  // === 1. Afficher 2 projets par slide
  const projectsPerSlide = 2;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            My <span className="text-neon">Projects</span>
          </h2>
          <p className="text-white/70">
            Academic and personal projects that showcase my skills in{" "}
            <span className="text-neon">Data Engineering</span>,{" "}
            <span className="text-neon">Machine Learning</span> and{" "}
            <span className="text-neon">Cloud</span>.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const start = slideIndex * projectsPerSlide;
              const end = start + projectsPerSlide;
              const slideProjects = projects.slice(start, end);

              return (
                <div
                  key={slideIndex}
                  className="grid w-full flex-shrink-0 grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-2"
                >
                  {slideProjects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      number={project.number}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      imageUrl={project.imageUrl}
                      githubLink={project.githubLink}
                      isHighlighted={project.isHighlighted}
                      index={index}
                    />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Controls */}
          {projects.length > projectsPerSlide && (
            <div className="mt-6 flex justify-center gap-2">
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neon transition-all hover:bg-neon/80"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5 text-black" />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neon transition-all hover:bg-neon/80"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5 text-black" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
