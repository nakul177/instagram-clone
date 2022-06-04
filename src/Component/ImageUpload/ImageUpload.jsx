import React, { useState } from "react";
import { Button } from "@mui/material";
import { db, storage } from "../../config/firebase";
import firebase  from "firebase"

export const ImageUpload = ({username}) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handlechange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes)*100
      )
      setProgress(progress)
    },
    (err) =>{
      console.log(err)
      alert(err.message)
    },
   () =>{
     storage
     .ref("image")
     .child(image.name)
     .getDownloadURL()
     .then(url =>{
       db.collection("posts").add({
         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         caption:caption,
         imageUrl:url,
         username:username
       });
       setProgress(0);
       setCaption("")
       setImage(null)
     })
   } 
    );
  };

  return (
    <div>
      <progress  value={progress} max="100"/>
      <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <input type="file" onChange={handlechange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};
