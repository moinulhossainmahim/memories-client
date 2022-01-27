import React from "react";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8];

export const Loading = () => {
  return skeletonCount.map((item) => (
    <Grid item xs={12} sm={12} md={6} lg={3} key={item}>
      <Skeleton variant='rect' height={250} />
      <Skeleton />
      <Skeleton width='70%' />
    </Grid>
  ));
};
