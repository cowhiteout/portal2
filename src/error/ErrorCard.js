import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Error = (props) => {
  const { t } = useTranslation();

  const { errorMessage = t("default_error_message") } = props;
  return (
    <div data-testid="error">
      <h1 className="landing-page__heading">Atlas Platform</h1>
      <h2>
        {/* <FontAwesomeIcon icon="exclamation-triangle" />  */}
        {t("error_title")}
      </h2>
      <p>{errorMessage}</p>
      <Link to="/">
        <button>{t("error_link")}</button>
      </Link>
    </div>
  );
};

export default Error;
