import RestoSource from '../../data/dicoding-resto-source';
import { createRestoTemplate } from '../templates/template-creator';

import '../component/resto-list';

const Discover = {
  async render() {
    return `
      <resto-list></resto-list>
    `;
  },

  async afterRender() {
    const restaurants = await RestoSource.getResto();
    const restaurantsContainer = document.querySelector('#resto-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoTemplate(restaurant);
    });
  },
};

export default Discover;
