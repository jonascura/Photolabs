import { useReducer, useEffect } from 'react';
// import photos from 'mocks/photos';
// import topics from 'mocks/topics';

const initialState = {
  selectedPhoto: null,
  favoritePhotos: [],
  modal:false,
  photos: [],
  topics: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_PHOTO':
      return {
        ...state,
        selectedPhoto: action.payload,
        modal: true
      };
    case 'TOGGLE_FAVORITE':
      const isPhotoInFavorites = state.favoritePhotos.includes(action.payload);
      return {
        ...state,
        favoritePhotos: isPhotoInFavorites
          ? state.favoritePhotos.filter(id => id !== action.payload)
          : [...state.favoritePhotos, action.payload]
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        selectedPhoto: null,
        modal: false
      };
    case 'SET_PHOTOS':
      return {
        ...state,
        photos: action.payload
      };
    case 'SET_TOPICS':
      return {
        ...state,
        topics: action.payload
      };
    default:
      return state;
  }
};


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetch photos data
    fetch('http://localhost:8001/api/photos')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_PHOTOS', payload: data }))
      .catch(error => console.error('Error fetching photos:', error));

    // Fetch topics data
    fetch('http://localhost:8001/api/topics')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_TOPICS', payload: data }))
      .catch(error => console.error('Error fetching topics:', error));
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  const onPhotoSelect = (photo) => {
    dispatch({ type: 'SELECT_PHOTO', payload: photo });
  };

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photoId });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;
