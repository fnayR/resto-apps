import FavoriteRestaurantDB from '../src/scripts/data/favorite-resto-idb';
import FavoriteSearchView from '../src/scripts/views/pages/favorited/favorite-search-view';
import FavoriteContentPresenter from '../src/scripts/views/pages/favorited/favorite-content-presenter';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been favorited', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB);

      new FavoriteContentPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been favorited', (done) => {
      document.getElementById('resto-list').addEventListener('resto-list:updated', () => {
        expect(document.querySelectorAll('#resto-item__not__found').length)
          .toEqual(1);

        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteContentPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('resto-list').addEventListener('resto-list:updated', () => {
        expect(document.querySelectorAll('#resto').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantDB);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11, name: 'A', rating_average: 3, description: 'This is resto A',
        },
        {
          id: 22, name: 'B', rating_average: 4, description: 'This is resto B',
        },
      ]);

      new FavoriteContentPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});