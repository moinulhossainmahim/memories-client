import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item xs={12} sm={6} key={post._id}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
