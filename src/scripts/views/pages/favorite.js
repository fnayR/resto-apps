import FavoriteRestaurantDB from '../../data/favorite-resto-idb';
import FavoriteSearchView from './favorited/favorite-search-view';
import FavoriteContentPresenter from './favorited/favorite-content-presenter';
import FavoriteSearchPresenter from './favorited/favorite-search-presenter';

const view = new FavoriteSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteContentPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
    new FavoriteSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
  },
};

export default Favorite;
