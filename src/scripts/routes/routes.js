import Mobile from '../views/pages/mobile-page';
import Desktop from '../views/pages/desktop-page';
import Admin from '../views/pages/admin-page';
import InfoPosyandu from '../views/pages/info-posyandu';
import InfoAplikasi from '../views/pages/info-aplikasi';

const routes = {
  '/': Mobile,
  '/desktop': Desktop,
  '/admin': Admin,
  '/info+posyandu': InfoPosyandu,
  '/info+aplikasi': InfoAplikasi,
};

export default routes;
