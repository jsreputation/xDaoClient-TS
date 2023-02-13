// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../../routes/paths';
// config
import { PATH_AFTER_LOGIN } from '../../../config-global';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'TRADE',
    icon: <Iconify icon="eva:home-fill" />,
    path: PATH_PAGE.trade,
  },
  {
    title: 'AGENCY',
    icon: <Iconify icon="eva:home-fill" />,
    path: PATH_PAGE.agency,
  },
  {
    title: 'NFTS',
    icon: <Iconify icon="eva:home-fill" />,
    path: PATH_PAGE.nfts,
  },
  {
    title: 'CHARTS',
    icon: <Iconify icon="eva:home-fill" />,
    path: PATH_PAGE.charts,
  },
  {
    title: 'LEARN',
    icon: <Iconify icon="eva:home-fill" />,
    path: PATH_PAGE.learn,
  },
  {
    title: 'DISCORD',
    icon: <Iconify icon="ic:round-grain" />,
    path: PATH_PAGE.components,
  },
];

export default navConfig;
