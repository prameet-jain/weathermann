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
  function prevPage() {
    setPageNumber(paginationData.currentPageNo - 1);
  }

  function nextPage() {
    setPageNumber(paginationData.currentPageNo + 1);
  }

  const { classes, paginationData, setPageNumber } = props;

  const LeftArrow = () => {
    return paginationData.currentPageNo > 1 ? (
      <IconButton aria-label="Left" color="primary" onClick={prevPage}>
        <ForwardIcon
          className={[classes.icon, classes.reverseIcon].join(" ")}
        />
      </IconButton>
    ) : null;
  };

  const RightArrow = () => {
    return paginationData.currentPageNo < paginationData.totalPages ? (
      <IconButton aria-label="Right" color="primary" onClick={nextPage}>
        <ForwardIcon className={classes.icon} />
      </IconButton>
    ) : null;
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        {<LeftArrow />}
      </Grid>
      <Grid item xs={6} className={classes.alignRight}>
        {<RightArrow />}
      </Grid>
    </Grid>
  );
}

PaginationControls.propTypes = {
  classes: PropTypes.object.isRequired,
  paginationData: PropTypes.object.isRequired,
  setPageNumber: PropTypes.func.isRequired
};

export default React.memo(withStyles(styles)(PaginationControls));
