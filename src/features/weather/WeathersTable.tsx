import { useMemo } from "react";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import moment from "moment";

import Spinner from "../ui/Spinner";
import { IHourlyWeather } from "./model";

const columns: GridColDef[] = [
  {
    field: "wind_gust",
    headerName: "Wind Gust",
    width: 110,
  },
  {
    field: "wind_speed",
    headerName: "Wind Speed",
    width: 110,
  },
  {
    field: "visibility",
    headerName: "Visibility",
    width: 110,
  },
  {
    field: "total_precipitation",
    headerName: "Total Precipitation",
    width: 110,
  },
  {
    field: "temperature",
    headerName: "Temperature",
    width: 110,
  },
  {
    field: "snowfall_rate",
    headerName: "Snowfall Rate",
    width: 110,
  },
  {
    field: "snow_accumulation",
    headerName: "Snow Accumulation",
    width: 110,
  },
  {
    field: "relative_humidity",
    headerName: "Relative Humidity",
    width: 110,
  },
  {
    field: "time_iso",
    headerName: "Time",
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      moment(params.row.time_iso).format("YYYY-MM-DD hh:mm:ss a"),
  },
];

interface IWeatherTableProps {
  weathers: IHourlyWeather[];
  isLoading: boolean;
}

export default function WeathersTable({
  isLoading,
  weathers,
}: IWeatherTableProps) {
  const rows = useMemo(
    () => weathers.map((weather, index) => ({ ...weather, id: index })),
    [weathers]
  );

  return (
    <div style={{ height: 600, width: "100%", position: "relative" }}>
      {isLoading ? (
        <Spinner />
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 15]}
        />
      )}
    </div>
  );
}
