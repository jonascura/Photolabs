import React, { useState } from 'react';

import './styles/HomeRoute.scss';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { photos, selectedPhoto, favoritePhotos, topics, modal} = state;

  return (
    <div className="App">
      <div className="home-route" >
        <HomeRoute photos={photos} topics={topics} openModal={onPhotoSelect} updateToFavPhotoIds={updateToFavPhotoIds} favoritePhotos={favoritePhotos}/>
        {modal && <PhotoDetailsModal photos={photos} photo={selectedPhoto} favoritePhotos={favoritePhotos} updateToFavPhotoIds={updateToFavPhotoIds} openModal={onPhotoSelect} closeModal={onClosePhotoDetailsModal}/>}
      </div>
    </div>
  );
  
};

export default App;
