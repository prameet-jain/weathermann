import React from "react";
import TemperatureControl from "../TemperatureControl/TemperatureControl";
import PaginationControls from "../PaginationControls/PaginationControls";
import CardList from "../CardList/CardList";

const App = props => {
  const { tempData, paginationData, weatherData } = props;
  return (
    <React.Fragment>
      <TemperatureControl
        tempUnit={tempData.tempUnit}
        changeTempUnit={tempData.changeTempUnit}
      />
      <PaginationControls
        paginationData={paginationData}
        setPageNumber={paginationData.setPageNumber}
      />
      <CardList
        weatherData={weatherData}
        tempUnit={tempData.tempUnit}
        paginationData={paginationData}
      />
    </React.Fragment>
  );
};

export default App;
