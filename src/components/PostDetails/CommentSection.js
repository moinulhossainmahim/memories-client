import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const [comments, setComments] = useState([1, 2, 3, 4]);
  const [comment, setComment] = useState("");

  const handleClick = () => {};

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant='h6'>
            Comments
          </Typography>
          {comments.map((comment, i) => (
            <Typography key={i} gutterBottom variant='subtitle1'>
              Comment {i}
            </Typography>
          ))}
        </div>
        <div style={{ width: "70%" }}>
          <Typography gutterBottom variant='h6'>
            Write a comment
          </Typography>
          <TextField
            fullWidth
            variant='outlined'
            label='Comment'
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ marginTop: "10px" }}
            fullWidth
            disabled={!comment}
            variant='contained'
            onClick={handleClick}
            color='primary'
          >
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
