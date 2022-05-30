import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";

export const Post = ({ usesname, caption, imgUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avtar"
          alt={usesname}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{usesname}</h3>
      </div>

      <img className="post__img" src={imgUrl} alt="" />

      <h4 className="post__text">
        <strong>{usesname} :</strong> {caption}
      </h4>
    </div>
  );
};
