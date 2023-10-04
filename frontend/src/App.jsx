import React, { useEffect, useState } from 'react';

import './styles/HomeRoute.scss';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Fetch photos data
    fetch('http://localhost:8001/api/photos')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error fetching photos:', error));

    // Fetch topics data
    fetch('http://localhost:8001/api/topics')
      .then(response => response.json())
      .then(data => setTopics(data))
      .catch(error => console.error('Error fetching topics:', error));
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { selectedPhoto, favoritePhotos, modal } = state;
  // console.log("photos in app", photos)

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
