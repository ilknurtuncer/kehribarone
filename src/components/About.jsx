import React from 'react';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-orange-400">{t('about.title')}</h1>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">{t('about.sections.whatIsAmber.title')}</h2>
        <p className="mt-4 text-lg text-gray-700">
          {t('about.sections.whatIsAmber.content')}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">{t('about.sections.history.title')}</h2>
        <p className="mt-4 text-lg text-gray-700">
          {t('about.sections.history.content')}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">{t('about.sections.features.title')}</h2>
        <ul className="mt-4 list-inside list-disc text-lg text-gray-700">
          <li>{t('about.sections.features.content.0')}</li>
          <li>{t('about.sections.features.content.1')}</li>
          <li>{t('about.sections.features.content.2')}</li>
          <li>{t('about.sections.features.content.3')}</li>
          <li>{t('about.sections.features.content.4')}</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">{t('about.sections.uses.title')}</h2>
        <p className="mt-4 text-lg text-gray-700">
          {t('about.sections.uses.content')}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">{t('about.sections.benefits.title')}</h2>
        <p className="mt-4 text-lg text-gray-700">
          {t('about.sections.benefits.content')}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">{t('about.sections.aboutUs.title')}</h2>
        <p className="mt-4 text-lg text-gray-700">
          {t('about.sections.aboutUs.content')}
        </p>
      </section>
    </div>
  );
};

export default About;
