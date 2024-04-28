import FavoriteButtonInitiator from '../../src/scripts/utils/fav-button-initiator';
import FavoriteRestaurantDB from '../../src/scripts/data/favorite-resto-idb';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantDB,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
