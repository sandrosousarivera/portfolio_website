import React from "react";
import { useTranslation } from "react-i18next";
import { Target, Zap, Palette, Wrench } from "lucide-react";
import Chip from "../atoms/Chip";

const About: React.FC = () => {
  const { t } = useTranslation();

  const technologies = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Git",
    "WordPress",
    "SEO",
    "Blockchain",
    "Cloud",
    "AI",
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue dark:text-white mb-4">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1 bg-golden dark:bg-dark-golden mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-silver max-w-4xl mx-auto mt-8 whitespace-pre-line">
            {t("about.content")}
          </p>
        </div>

        {/* Key Strengths and Focus Areas Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Key Strengths */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-blue dark:text-white mb-6">
                {t("about.keyStrengths.title")}
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-silver w-full max-w-md">
                {(
                  t("about.keyStrengths.items", {
                    returnObjects: true,
                  }) as string[]
                ).map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-golden dark:bg-dark-golden rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus Areas */}
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-blue dark:text-white mb-6">
                {t("about.focusAreas.title")}
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-silver w-full max-w-xs">
                {(
                  t("about.focusAreas.items", {
                    returnObjects: true,
                  }) as string[]
                ).map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-carmin dark:bg-dark-carmin rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-12 justify-center">
            {technologies.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
        </div>

        {/* Skills Cards - Full Width */}
        <div className="w-full">
          <div className="bg-gradient-to-br from-golden to-carmin dark:from-dark-golden dark:to-dark-carmin p-1 rounded-xl">
            <div className="bg-white dark:bg-dark-blue rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className="w-16 h-16 bg-golden dark:bg-dark-golden rounded-xl flex items-center justify-center"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <Target className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue dark:text-white mb-2">
                      {t("about.skillCards.collaboration.title")}
                    </h3>
                    <p className="text-gray-600 dark:text-silver">
                      {t("about.skillCards.collaboration.description")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className="w-16 h-16 bg-carmin dark:bg-dark-carmin rounded-xl flex items-center justify-center"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <Zap className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue dark:text-white mb-2">
                      {t("about.skillCards.projectManagement.title")}
                    </h3>
                    <p className="text-gray-600 dark:text-silver">
                      {t("about.skillCards.projectManagement.description")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className="w-16 h-16 bg-bottle dark:bg-dark-bottle rounded-xl flex items-center justify-center"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <Palette className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue dark:text-white mb-2">
                      {t("about.skillCards.design.title")}
                    </h3>
                    <p className="text-gray-600 dark:text-silver">
                      {t("about.skillCards.design.description")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className="w-16 h-16 bg-silver dark:bg-dark-silver rounded-xl flex items-center justify-center"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <Wrench className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue dark:text-white mb-2">
                      {t("about.skillCards.maintenance.title")}
                    </h3>
                    <p className="text-gray-600 dark:text-silver">
                      {t("about.skillCards.maintenance.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
