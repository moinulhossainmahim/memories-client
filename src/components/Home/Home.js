import React, { useState, useEffect } from "react";
import {
  Grow,
  Grid,
  Paper,
  Container,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import useStyles from "./styles";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import Pagination from "../Pagination/Pagination";
import ChipInput from "material-ui-chip-input";

const useQuerry = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = () => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const query = useQuerry();
  const navigate = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const dispatch = useDispatch();

  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
    } else {
      navigate("/");
    }
  };

  const handleKeypress = (e) => {
    if (e.keycode === 13) {
      searchPost();
    }
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container maxWidth='xl'>
        <Grid
          className={classes.gridContainer}
          container
          justifyContent='space-between'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position='static'
              color='inherit'
            >
              <TextField
                name='search'
                variant='outlined'
                label='Search Memories'
                fullWidth
                onKeyPress={(e) => handleKeypress(e)}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                label='Search Tags'
                variant='outlined'
                onAdd={handleAdd}
                onDelete={handleDelete}
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                color='primary'
                variant='contained'
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
