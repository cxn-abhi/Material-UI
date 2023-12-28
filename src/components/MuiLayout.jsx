import { Box, Stack, Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
  return (
    <Paper
      sx={{
        padding: "32px",
      }}
    >
      <Stack
        p={3}
        spacing={3}
        direction={"row  "}
        sx={{ border: "1px solid red" }}
      >
        <Box
          p={"100px"}
          display={"flex"}
          height={"100px"}
          bgcolor={"success.light"}
        >
          Gudu
        </Box>

        <Box
          sx={{
            backgroundColor: "red",
            color: "white",
            height: "250px",
            padding: "10px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Abhipsa
        </Box>
      </Stack>

      <Grid container my={4} rowSpacing={2} columnSpacing={3}>
        <Grid item xs={6} sm={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
