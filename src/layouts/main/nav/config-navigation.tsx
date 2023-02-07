// routes
// import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from "../../../routes/paths";
// config
import { PATH_AFTER_LOGIN } from "../../../config-global";
// components
import Iconify from "../../../components/iconify";

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: "TRADE",
    icon: <Iconify icon="eva:home-fill" />,
    path: "/trade",
  },
  {
    title: "AGENCY",
    icon: <Iconify icon="ic:round-grain" />,
    path: "/agency",
    children: ["/jobs", "/verification", "howtoverify", "profile"],
  },
  {
    title: "NFTS",
    path: "/nfts",
    icon: <Iconify icon="eva:file-fill" />,
  },
  {
    title: "CHARTS",
    icon: <Iconify icon="eva:book-open-fill" />,
    path: "/charts",
  },
  {
    title: "DISCORD",
    icon: <Iconify icon="eva:book-open-fill" />,
    path: "/discord",
  },
];

export default navConfig;
