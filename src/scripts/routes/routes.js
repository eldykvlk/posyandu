import Mobile from '../views/pages/mobile-page';
import Desktop from '../views/pages/desktop-page';
import Admin from '../views/pages/admin-page';
import InfoPosyandu from '../views/pages/info-posyandu';
import InfoAplikasi from '../views/pages/info-aplikasi';
import AdminInfoAplikasi from '../views/pages/admin-info-apk';
import PanduanUser from '../views/pages/panduan-user';
import PanduanAdmin from '../views/pages/panduan-admin';
import Hubungi from '../views/pages/hubungi';

const routes = {
  '/': Mobile,
  '/desktop': Desktop,
  '/admin': Admin,
  '/info+posyandu': InfoPosyandu,
  '/info+aplikasi': InfoAplikasi,
  '/admin+info+aplikasi': AdminInfoAplikasi,
  '/panduan+user': PanduanUser,
  '/panduan+admin': PanduanAdmin,
  '/hubungi': Hubungi,
};

export default routes;
