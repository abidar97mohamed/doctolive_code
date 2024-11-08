import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import {MdMenu} from 'react-icons/md'

// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";

import styles from "assets/jss/components/headerStyle.js";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();

  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          {
               props.routes.map(prop => {
                 if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
                  return <Link key={prop.path} to={prop.layout + prop.path} className={classes.title}>
                            {props.rtlActive ? prop.rtlName : prop.name}
                          </Link>
                 }
                 return null;
               })
          }
        </div>
        <Hidden smDown implementation="css">
           <AdminNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <MdMenu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};
