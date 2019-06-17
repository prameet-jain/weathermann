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

function DateInfo(props) {
  const { classes, dateText } = props;

  return (
    <React.Fragment>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        Date:
      </Typography>
      <Typography className={classes.subTitle} color="textSecondary">
        {dateText}
      </Typography>
    </React.Fragment>
  );
}

DateInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  dateText: PropTypes.string.isRequired
};

export default React.memo(withStyles(styles)(DateInfo));
