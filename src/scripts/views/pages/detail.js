import { createRestoDetailTemplate, createRestoReviewTemplate } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/dicoding-resto-source';
import FavoriteRestaurantDB from '../../data/favorite-resto-idb';
import FavoriteButtonInitiator from '../../utils/fav-button-initiator';

import '../component/resto-detail';
import '../component/resto-review';

const Detail = {
  async render() {
    return `
      <resto-detail></resto-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestoSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    restoContainer.innerHTML += `
      <resto-review></resto-review>
    `;

    const restoReview = document.querySelector('#resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantDB,
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};

export default Detail;
