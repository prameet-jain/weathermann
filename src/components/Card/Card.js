import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: props => ({
    maxWidth: 100 / props.cardsPerPage + "%"
  }),
  title: {
    fontSize: 16
  },
  subTitle: {
    fontSize: 14,
    marginBottom: 12
  },
  cardActionsRoot: {
    padding: 0
  },
  icon: {
    fontSize: 32
  }
});

function WeatherCard(props) {
  const classes = useStyles(props);
  console.log(props);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Temp:
        </Typography>
        <Typography className={classes.subTitle} color="textSecondary">
          14C
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Date:
        </Typography>
        <Typography className={classes.subTitle} color="textSecondary">
          20 May 19
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActionsRoot}>
        <IconButton aria-label="more">
          <MoreHoriz className={classes.icon} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default WeatherCard;
