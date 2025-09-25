import React from "react";
import { useTranslation } from "react-i18next";
import ImpactStoryCard from "./ImpactStoryCard";
import protogenImage from "../../assets/protogen.png";
import sysreviewImage from "../../assets/sysreview.jpeg";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue dark:text-white mb-4">
            {t("projects.title")}
          </h2>
          <div className="w-24 h-1 bg-golden dark:bg-dark-golden mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-silver max-w-2xl mx-auto mt-8">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <ImpactStoryCard
            storyKey="protogen"
            image={protogenImage}
            requestInfoEmail="your-email@example.com"
            requestNDAEmail="your-email@example.com"
          />
          <ImpactStoryCard
            storyKey="sysreview"
            image={sysreviewImage}
            requestInfoEmail="your-email@example.com"
            requestNDAEmail="your-email@example.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
