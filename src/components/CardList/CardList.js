import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import WeatherCard from "../Card/WeatherCard";

function CardList(props) {
  const { weatherData, paginationData, tempUnit } = props;

  const startIndex =
    (paginationData.currentPageNo - 1) * paginationData.cardsPerPage;

  let endIndex = paginationData.currentPageNo * paginationData.cardsPerPage;
  if (endIndex > weatherData.length) endIndex = weatherData.length;

  const cards = [];

  for (let index = startIndex; index < endIndex; index++) {
    const tempText = `${
      weatherData[index]["temp_" + tempUnit]
    } ${tempUnit.toUpperCase()}`;

    cards.push(
      <WeatherCard
        key={index}
        dateText={weatherData[index].fmt_dt_txt}
        tempText={tempText}
      />
    );
  }

  return <Grid container>{cards}</Grid>;
}

CardList.propTypes = {
  weatherData: PropTypes.array.isRequired,
  paginationData: PropTypes.object.isRequired,
  tempUnit: PropTypes.string.isRequired
};

export default React.memo(CardList);
