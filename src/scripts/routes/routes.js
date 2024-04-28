import Discover from '../views/pages/discover';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Discover, // default page
  '/discover': Discover,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
