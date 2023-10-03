import React, { useState } from "react";

import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";
import "../styles/PhotoList.scss";


const PhotoList = ({ likedPhotos, toggleLike, openModal }) => {
  // console.log("inside Photolist", liked, switchLike);
  
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} likedPhotos={likedPhotos} toggleLike={toggleLike} openModal={openModal}/>
      ))}
    </ul>
  );
};

export default PhotoList;
