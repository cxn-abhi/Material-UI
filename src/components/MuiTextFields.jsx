import { Stack, TextField } from "@mui/material";
export const MuiTextField = () => {
  return (
    <Stack spacing="{4}">
      <Stack direction="row" spacing="{2}">
        <TextField label="Name" size="small" />
        <TextField label="Name" variant="filled" color="success" />
        <TextField label="Name" variant="standard" color="success" />
      </Stack>
      <Stack direction={"row"}>
        <TextField
          label="Name"
          color="success"
          variant="filled"
          required
          helperText="Don't share the pw"
        />
      </Stack>
    </Stack>
  );
};
