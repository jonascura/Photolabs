import React, { useState } from "react";

import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";
import "../styles/PhotoList.scss";


const PhotoList = ({ likedPhotos, toggleLike }) => {
  // console.log("inside Photolist", liked, switchLike);

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} likedPhotos={likedPhotos} toggleLike={toggleLike} />
      ))}
    </ul>
  );
};

export default PhotoList;
