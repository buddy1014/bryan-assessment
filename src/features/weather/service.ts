import { AxiosResponse } from "axios";

import { API } from "../../services/api";
import { IForecastRequestParams, IForecastResponse } from "./model";

export const fetchForecast = (
  params: IForecastRequestParams
): Promise<AxiosResponse<IForecastResponse>> => {
  return API.get(`/weather/forecast`, { params });
};
