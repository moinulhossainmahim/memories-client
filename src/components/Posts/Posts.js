import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { Loading } from "../../Loading/Loading";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!isLoading && !posts.length) return "No Posts";

  return (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {isLoading ? (
        <Loading />
      ) : (
        posts.map((post) => (
          <Grid item xs={12} sm={12} md={6} lg={3} key={post._id}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Posts;
