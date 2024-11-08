import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/components/parallaxStyle.js";

const useStyles = makeStyles(styles);

export default function Parallax(props) {

  const [transform, setTransform] = React.useState(
    "translate3d(0," + 0 + "px,0)"
  );

  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      document.querySelector('.makeStyles-mainPanel-2').addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        document.querySelector('.makeStyles-mainPanel-2').removeEventListener("scroll", resetTransform);
      }
    };
  });
  const resetTransform = (e) => {
    var windowScrollTop = e.currentTarget.scrollTop / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined
  });

  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
        transform: transform
      }}
    >
      {children}
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool
};
