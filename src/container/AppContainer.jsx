import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import AppLoader from "../components/AppLoader/AppLoader";
import App from "../components/App/App";
import AppError from "../components/AppError/AppError";
import FetchApp from "./FetchApp";

const AppContainer = () => (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">
      <Typography
        component="div"
        style={{ backgroundColor: "#fefefe", height: "100vh" }}
      >
        <ErrorBoundary>
          <FetchApp
            loader={() => <AppLoader />}
            render={data => (
              <App
                weatherData={data.weatherData}
                paginationData={data.paginationData}
                tempData={data.tempData}
              />
            )}
            error={() => <AppError />}
          />
        </ErrorBoundary>
      </Typography>
    </Container>
  </React.Fragment>
);

export default AppContainer;
