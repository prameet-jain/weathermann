import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ForwardIcon from "@material-ui/icons/Forward";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32
  },
  reverseIcon: {
    transform: "rotate(180deg)"
  },
  alignRight: {
    textAlign: "right"
  }
});

function PaginationControls(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <IconButton aria-label="Left" color="primary">
          <ForwardIcon
            className={[classes.icon, classes.reverseIcon].join(" ")}
          />
        </IconButton>
      </Grid>
      <Grid item xs={6} className={classes.alignRight}>
        <IconButton aria-label="Right" color="primary">
          <ForwardIcon className={classes.icon} />
        </IconButton>
      </Grid>
    </Grid>
  );
}

PaginationControls.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaginationControls);
