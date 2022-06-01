import { useEffect, useState } from "react";
import "./App.css";
import { Post } from "./Component/Post/Post";
import {db} from './config/firebase.js';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc =>({
        id: doc.id ,
         post:doc.data()
        })));
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
      {posts.map(({id ,post}) => (
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
