import { useReducer } from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const initialState = {
  photos,
  selectedPhoto: null,
  favoritePhotos: [],
  topics,
  modal:false
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
    default:
      return state;
  }
};


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
