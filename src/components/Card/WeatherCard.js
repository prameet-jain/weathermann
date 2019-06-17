import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import TempInfo from "../TempInfo/TempInfo";
import DateInfo from "../DateInfo/DateInfo";
import { CARDS_PER_PAGE } from "../../config/appConfig";

const styles = {
  card: {
    width: `${100 / CARDS_PER_PAGE - 2}%`,
    margin: "1%"
  },
  cardActionsRoot: {
    padding: "0 0 8px 8px"
  }
};

function WeatherCard(props) {
  const { classes, tempText, dateText } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <TempInfo tempText={tempText} />
        <DateInfo dateText={dateText} />
      </CardContent>
      <CardActions className={classes.cardActionsRoot}>
        <IconButton aria-label="more">
          <MoreHoriz />
        </IconButton>
      </CardActions>
    </Card>
  );
}

WeatherCard.propTypes = {
  classes: PropTypes.object.isRequired,
  tempText: PropTypes.string.isRequired,
  dateText: PropTypes.string.isRequired
};

export default React.memo(withStyles(styles)(WeatherCard));
