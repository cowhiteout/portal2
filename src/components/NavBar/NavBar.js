import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Link,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  controlSelect: {
    color: "#ffffff",
  },
  selectColor: {
    color: "#ffffff",
    "&:before": {
      borderBottom: "1px solid white",
    },
    "&:after": {
      borderBottom: "1px solid white",
    },
  },
  icon: {
    fill: "white",
    color: "white",
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} component="div">
            <Link href="/" color="inherit">
              {t("title_default")}
            </Link>
          </Typography>
          <Link href="/data" color="inherit" className={classes.menuButton}>
            {t("nav_link_2")}
          </Link>
          <FormControl size="small">
            <Select
              id="language"
              value={i18n.language}
              onChange={changeLanguage}
              className={classes.selectColor}
              size="small"
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
            >
              <MenuItem value="en-US">English</MenuItem>
              <MenuItem value="es-US">Español</MenuItem>
            </Select>
          </FormControl>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
