import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Typography, Grid } from "@material-ui/core";

const HomePage = (props) => {
  const { t } = useTranslation();
  return (
    <Grid container data-testid="landing">
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Typography variant="h2" gutterBottom>
          {t("title_default")}
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Typography variant="h3">{t("home_title")}</Typography>
        <Typography variant="body1">{t("home_description")} </Typography>
      </Grid>
      <Grid item xs={1}></Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Grid
          item
          container
          spacing={4}
          justifyContent="space-around"
          alignItems="Center"
        >
          <Grid item sm={4}>
            <Button variant="outlined" href="/data">
              Demo Data Table
            </Button>
          </Grid>
          <Grid item sm={4}>
            <Button variant="outlined" disableElevation>
              {t("location_title")}
            </Button>
          </Grid>
          <Grid item sm={4}>
            <Button variant="outlined" disableElevation>
              {t("location_link")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default HomePage;
