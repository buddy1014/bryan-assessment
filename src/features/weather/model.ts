export interface IForecastRequestParams {
  latitude: number;
  longitude: number;
}

export interface IForecastResponse {
  success: boolean;
  locations: ILocation[];
}

export interface ILocation {
  latitude: number;
  longitude: number;
  daily: IDailyWeather[];
  hourly: IHourlyWeather[];
}

export interface IDailyWeather {
  average_wind_speed: number;
  hours_with_freezing_rain: number;
  hours_with_rain: number;
  hours_with_sleet: number;
  hours_with_snow: number;
  local_time_iso: string;
  max_heat_index: number;
  max_relative_humidity: number;
  max_wind_gust: number;
  temperature_high: number;
  temperature_low: number;
  time: number;
  time_iso: string;
  total_precipitation: number;
  total_rain_precipitation: number;
  total_snow_precipitation: number;
}

export interface IHourlyWeather {
  freezing_rain_accumulation: number;
  freezing_rain_flag: boolean;
  heat_index: number;
  liquid_snowfall_rate: number;
  local_time_iso: string;
  radar_reflectivity: number;
  rain_accumulation: number;
  rain_flag: boolean;
  rainfall_rate: number;
  relative_humidity: number;
  sleet_flag: boolean;
  snow_accumulation: number;
  snow_flag: boolean;
  snowfall_rate: number;
  temperature: number;
  time: number;
  time_iso: string;
  total_precipitation: number;
  visibility: number;
  wind_gust: number;
  wind_speed: number;
}
