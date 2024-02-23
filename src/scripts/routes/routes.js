import Mobile from '../views/pages/mobile-page';
import Desktop from '../views/pages/desktop-page';
import Admin from '../views/pages/admin-page';
import InfoPosyandu from '../views/pages/info-posyandu';

const routes = {
  '/': Mobile,
  '/desktop': Desktop,
  '/admin': Admin,
  '/info+posyandu': InfoPosyandu,
};

export default routes;
