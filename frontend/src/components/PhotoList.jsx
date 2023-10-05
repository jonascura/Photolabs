import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ photos, updateToFavPhotoIds, favoritePhotos, openModal, realPhotos }) => {
  console.log("inside Photolist", photos);

  // handle photos passed in from modal
  if (!realPhotos) {
    realPhotos = photos;
  }
  
  return (
    <ul className="photo-list">
      {realPhotos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} updateToFavPhotoIds={updateToFavPhotoIds} favoritePhotos={favoritePhotos} openModal={openModal} />
      ))}
    </ul>
  );
};

export default PhotoList;
