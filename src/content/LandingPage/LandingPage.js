import React from "react";

import { useTranslation } from "react-i18next";
import { gaEvent_ExternalLink } from "../../analytics/Analytics";

const LandingPage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div>
      <p>
        <a href="/">{t("link_getting_started")}</a>
      </p>

      <h1 className="landing-page__heading">Atlas Platform</h1>

      <p className="landing-page__p">{t("home_description")}</p>
      <ul>
        <li>{t("news_link")}</li>
        <li>{t("location_title")}</li>
        <li>{t("Able")}</li>
        <li>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              gaEvent_ExternalLink({
                name: t("example_external_link"),
              })
            }
          >
            {t("example_external_link")}
          </a>
        </li>
      </ul>

      <img
        className="landing-page__illo"
        src={`${process.env.PUBLIC_URL}/images/atlas.png`}
        alt="Atlas illustration"
      />

      <p>{t("intro_develop")}</p>
      <h3 className="landing-page__subheading">{t("i18n_title")}</h3>

      <select
        labelText="Select Language"
        name="language"
        id="language"
        value={i18n.language}
        onChange={changeLanguage}
      >
        <option value="en-US">English</option>
        <option value="es-US">Español</option>
      </select>

      <img
        className="landing-page__illo"
        src={`${process.env.PUBLIC_URL}/images/i18n.jpg`}
        alt="Localization"
      />

      <h3 className="landing-page__label">{t("footer_title")}</h3>

      <p>{t("footer_1")}</p>
      <p>{t("footer_2")}</p>
    </div>
  );
};

export default LandingPage;
