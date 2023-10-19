import React from "react";
import Header from "../Header";
import Patch from "./Patch";
import PatchNumber from "./PatchNumber";
import { Grid } from "@mui/material";
export default function PatchAll() {
  return (
    <>
      <Grid container>
        <Grid xs={12} display="flex" justifyContent="center">
          <Patch />
        </Grid>
        <Grid xs={12} display="flex" justifyContent="center">
          <PatchNumber />
        </Grid>
      </Grid>
    </>
  );
}
