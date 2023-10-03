import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = ({ photos, topics, openModal, updateToFavPhotoIds, favoritePhotos }) => {

  // console.log("from home", likedPhotos)

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar topics={topics} updateToFavPhotoIds={updateToFavPhotoIds} favoritePhotos={favoritePhotos}/>
      <PhotoList photos={photos} updateToFavPhotoIds={updateToFavPhotoIds} favoritePhotos={favoritePhotos} openModal={openModal}/>
    </div>
  );
};

export default HomeRoute;
