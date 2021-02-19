import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NavBar from "../components/NavBar";
import ErrorCard from "../error/ErrorCard.js";

import ErrorBoundary from "@atlas-ui/errorboundary";

// #TODO: USE mui icons instead...
// pull in font awesome icons and register them.
// import registerFaIcons from "../assets/RegisterFaIcons.js";
// registerFaIcons();

const App = (props) => {
  const { t } = useTranslation();

  useEffect(() => {
    console.log(
      `${t("logging_enabled")} ${
        process.env.REACT_APP_LOGGING_ENABLED ? t("true") : t("false")
      }`
    );

    if (process.env.REACT_APP_LOGGING_ENABLED) {
      console.log(t("environment") + ": " + process.env.NODE_ENV);
    }
  }, [t]);

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item container>
          <Grid item xs={12}>
            <ErrorBoundary errorComponent={<ErrorCard />}>
              <div className="App">
                <div>{props.children}</div>
              </div>
            </ErrorBoundary>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(App);
