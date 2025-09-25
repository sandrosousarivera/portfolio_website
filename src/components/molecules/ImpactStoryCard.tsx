import React from "react";
import { useTranslation } from "react-i18next";

interface ImpactStoryCardProps {
  storyKey: string;
  image: string;
  requestInfoEmail: string;
  requestNDAEmail: string;
}

const ImpactStoryCard: React.FC<ImpactStoryCardProps> = ({
  storyKey,
  image,
  requestInfoEmail,
  requestNDAEmail,
}) => {
  const { t } = useTranslation();
  const story = t(`projects.stories.${storyKey}`, {
    returnObjects: true,
  }) as any;
  return (
    <article className="max-w-3xl mx-auto bg-white dark:bg-dark-blue rounded-xl shadow-md overflow-hidden">
      <img
        src={image}
        alt={story.imageAlt}
        className="w-full h-44 object-cover object-top"
      />

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-blue dark:text-white">
            {story.title}
          </h3>
          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
            {t("projects.labels.private")}
          </span>
        </div>

        <p className="mt-3 text-sm text-gray-600 dark:text-silver">
          {t("projects.labels.role")}: {story.role} · {story.year}
        </p>

        <div className="mt-4 text-sm text-gray-700 dark:text-silver space-y-2">
          <p>
            <strong>{t("projects.labels.problem")}:</strong> {story.problem}
          </p>
          <p>
            <strong>{t("projects.labels.contribution")}:</strong>{" "}
            {story.contribution}
          </p>
          <p>
            <strong>{t("projects.labels.outcome")}:</strong> {story.outcome}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {story.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded ${
                index < 2
                  ? index === 0
                    ? "bg-golden text-white"
                    : "bg-carmin text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={`mailto:${requestInfoEmail}?subject=Interest in ${story.title}`}
            className="inline-block px-4 py-2 bg-blue text-white rounded hover:opacity-90"
          >
            {t("projects.labels.requestInfo")}
          </a>

          <a
            href={`mailto:${requestNDAEmail}?subject=Request NDA - ${story.title}`}
            className="px-4 py-2 border border-golden text-golden rounded hover:bg-golden/10 dark:border-dark-golden dark:text-dark-golden"
          >
            {t("projects.labels.requestNDA")}
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          {story.note}
        </p>
      </div>
    </article>
  );
};

export default ImpactStoryCard;
