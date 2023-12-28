import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
export const MuiBreadCrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumb" separator="-">
        <Link underline="hover" href="#"></Link>
        <Link underline="hover" href="#"></Link>
        <Link underline="hover" href="#"></Link>
      </Breadcrumbs>
    </Box>
  );
};
