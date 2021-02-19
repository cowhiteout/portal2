import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import QueryString from "query-string";
import App from "./app/App.js";
// import LandingPage from "./content/LandingPage";
import HomePage from "./home/HomePage";
import DataTable from "./content/DataTable";
import ErrorCard from "./error/ErrorCard.js";
import { gaPageView } from "@atlas-ui/ga";

export const RouteWithTitle = ({ title, component, ...rest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slt, ...params } = QueryString.parse(rest.location.search);

  if (slt === undefined) {
    gaPageView({ page_title: title });
    const Component = component;
    return (
      <Route
        {...rest}
        component={(props) => (
          <>
            {component && <Component {...props} />}
            {title && (
              <Helmet>
                <title>{title}</title>
              </Helmet>
            )}
          </>
        )}
      />
    );
  } else {
    return (
      <Route
        {...rest}
        component={({ location }) => (
          <Redirect
            to={{
              pathname: location.pathname,
              ...(Object.entries(params).length > 0 && {
                search: QueryString.stringify(params),
              }),
            }}
          />
        )}
      />
    );
  }
};

const Routes = () => {
  const { t } = useTranslation();
  const DEFAULT_TITLE = t("title_default");
  const NOT_FOUND = t("not_found");
  // const NAV_LINK_1 = t("nav_link_1");
  const NAV_LINK_2 = t("nav_link_2");

  return (
    <App>
      <Helmet
        titleTemplate={`%s - ${DEFAULT_TITLE}`}
        defaultTitle={DEFAULT_TITLE}
      />
      <Switch>
        <RouteWithTitle
          exact
          path="/data"
          component={DataTable}
          title={NAV_LINK_2}
        />
        <RouteWithTitle
          exact
          path="/"
          component={HomePage}
          title={DEFAULT_TITLE}
        />
        <RouteWithTitle
          component={(props) => (
            <ErrorCard errorMessage={NOT_FOUND} {...props} />
          )}
          title={DEFAULT_TITLE}
        />
      </Switch>
    </App>
  );
};

export default Routes;
