import { useEffect, useState } from "react";
import "./App.css";
import { Post } from "./Component/Post/Post";
import { db } from "./config/firebase.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="App">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>HI i am modal</h1>
        </Box>
      </Modal>

      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
          className="app__header_logo"
        />
      </div>

      <Button onClick={() => setOpen(true)}>Sign up</Button>

      <h1>Hii</h1>

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          usesname={post.username}
          caption={post.caption}
          imgUrl={post.imgUrl}
        />
      ))}
    </div>
  );
}

export default App;
