import { useForm, Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { IForecastRequestParams } from "./model";

interface ILocationFormProps {
  submit: (params: IForecastRequestParams) => void;
}

export default function LocationForm({ submit }: ILocationFormProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      latitude: 0,
      longitude: 0,
    },
  });

  const onSubmit = (data: IForecastRequestParams) => {
    submit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Controller
        name="latitude"
        control={control}
        render={({ field }) => (
          <TextField
            id="latitude"
            type="number"
            label="Latitude"
            variant="outlined"
            {...field}
          />
        )}
      />
      <Controller
        name="longitude"
        control={control}
        render={({ field }) => (
          <TextField
            id="longitude"
            type="number"
            label="Longitude"
            variant="outlined"
            {...field}
          />
        )}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}
