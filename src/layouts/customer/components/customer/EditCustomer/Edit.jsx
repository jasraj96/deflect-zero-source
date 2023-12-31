import React from "react";
import Patch from "./EditEmail/EditEmail";
import PatchNumber from "./EditNumber/EditNumber";
import { Grid, Paper } from "@mui/material";
export default function PatchAll() {
  return (
    <>
      <Grid container display="flex" justifyContent="center">
        <div style={{ padding: "50px", display: "flex", justifyContent: "center" }}>
          <Grid>
            <Patch />
          </Grid>
        </div>
        <div style={{ padding: "50px", display: "flex", justifyContent: "center" }}>
          <Grid>
            <PatchNumber />
          </Grid>
        </div>
      </Grid>
    </>
  );
}
