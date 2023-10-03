import React, { useState } from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ photos, updateToFavPhotoIds, favoritePhotos, openModal }) => {
  // console.log("inside Photolist", liked, switchLike);
  
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} updateToFavPhotoIds={updateToFavPhotoIds} favoritePhotos={favoritePhotos} openModal={openModal} />
      ))}
    </ul>
  );
};

export default PhotoList;
