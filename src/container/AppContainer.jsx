import React, { Component } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import WeatherCard from "../components/Card/Card";
import TemperatureControl from "../components/TemperatureControl/TemperatureControl";
import PaginationControls from "../components/PaginationControls/PaginationControls";

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      cardsPerPage: 3
    };
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Typography
            component="div"
            style={{ backgroundColor: "#fefefe", height: "100vh" }}
          >
            <ErrorBoundary>
              <TemperatureControl key="tempSelector" />
              <PaginationControls key="pageControls" />
              <WeatherCard key="cards" cardsPerPage={this.state.cardsPerPage} />
            </ErrorBoundary>
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}
export default AppContainer;

const wrapper = document.getElementById("weather-app");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
