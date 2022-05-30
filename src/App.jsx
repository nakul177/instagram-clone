import { useEffect, useState } from "react";
import "./App.css";
import { Post } from "./Component/Post/Post";
import { db } from "./config/firebase";

function App() {
  const [posts, setPosts] = useState([
    {
      usesname: "Nakul",
      caption: "wow its works",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZK9wa3RWN5DzaFIn_CMkAur8vd1PV6BQYg&usqp=CAU",
    },
    {
      usesname: "bhushan",
      caption: "wow its works",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZK9wa3RWN5DzaFIn_CMkAur8vd1PV6BQYg&usqp=CAU",
    },
  ]);

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
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram"
          className="app__header_logo"
        />
      </div>
      <h1>Hii</h1>
      {posts.map((post) => (
        <Post
          usesname={post.usesname}
          caption={post.caption}
          imgUrl={post.imgUrl}
        />
      ))}
    </div>
  );
}

export default App;
