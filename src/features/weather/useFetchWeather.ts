import { useCallback, useState } from "react";

import { fetchForecast } from "./service";
import { IForecastRequestParams, IHourlyWeather } from "./model";

export default function useFetchWeather() {
  const [weathers, setWeathers] = useState<IHourlyWeather[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchWeather = useCallback(
    async (params: IForecastRequestParams): Promise<void> => {
      setIsLoading(true);
      try {
        const { data: response } = await fetchForecast(params);
        if (response.success) {
          const [location] = response.locations;
          setWeathers(location.hourly);
        }
      } catch (error) {
        console.log("error: ", error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { weathers, isLoading, fetchWeather };
}
