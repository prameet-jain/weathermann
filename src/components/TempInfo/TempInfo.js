import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  title: {
    fontWeight: "bold",

    [theme.breakpoints.up("xs")]: {
      fontSize: "0.9rem"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem"
    }
  },
  subTitle: {
    marginBottom: 12,

    [theme.breakpoints.up("xs")]: {
      fontSize: "0.8rem"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.9rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem"
    }
  }
});

function TempInfo(props) {
  const { classes, tempText } = props;

  return (
    <React.Fragment>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Temp:
      </Typography>
      <Typography className={classes.subTitle} color="textSecondary">
        {tempText}
      </Typography>
    </React.Fragment>
  );
}

TempInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  tempText: PropTypes.string.isRequired
};

export default React.memo(withStyles(styles)(TempInfo));
