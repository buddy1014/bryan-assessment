import { useCallback } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { LocationForm, useFetchWeather, WeathersTable } from "./features";
import { IForecastRequestParams } from "./features/weather/model";

import "./App.css";

function App() {
  const { weathers, isLoading, fetchWeather } = useFetchWeather();

  const onFetchWeather = useCallback(
    (params: IForecastRequestParams): void => {
      fetchWeather(params);
    },
    [fetchWeather]
  );

  return (
    <Container sx={{ paddingTop: "2em" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LocationForm submit={onFetchWeather} />
        </Grid>
        <Grid item xs={12}>
          <WeathersTable {...{ weathers, isLoading }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
