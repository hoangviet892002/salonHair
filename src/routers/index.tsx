import { useRoutes } from "react-router-dom";

import { LayoutShop, Layout } from "@/layouts";
import {
  ErrorPage,
  Home,
  SignIn,
  SignUp,
  SalonDetail,
  Profile,
  Shopkeeper,
  Book,
} from "@/pages";
import ShopkeeperSalonDetail from "@/pages/shopkeeperSalonDetail";
import BookingList from "@/pages/Bookings";
import PrivateRouterNotLogin from "./privateRouterNotLogin"; // Corrected import
import PrivateRouterUser from "./privateRouterUser";
import LayoutAdmin from "@/layouts/layoutsAdmin";
import Permission from "@/pages/permission";
import Admin from "@/pages/adminPage";

const Routers = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Layout Page={Home} />,
    },
    {
      path: "/sign-in",
      element: <PrivateRouterNotLogin Page={() => <Layout Page={SignIn} />} />, // Corrected component name
    },
    {
      path: "/sign-up",
      element: <PrivateRouterNotLogin Page={() => <Layout Page={SignUp} />} />,
    },
    {
      path: "*",
      element: <Layout Page={ErrorPage} />,
    },
    {
      path: "/salon/:id",
      element: <Layout Page={SalonDetail} />,
    },
    {
      path: "/profile",
      element: <PrivateRouterUser Page={() => <Layout Page={Profile} />} />, // Corrected component name
    },
    {
      path: "/books",
      element: <PrivateRouterUser Page={() => <Layout Page={Book} />} />, // Corrected component name
    },
    {
      path: "/shopkeeper",
      element: <LayoutShop Page={Shopkeeper} />,
    },
    {
      path: "/shopkeeper/salon/:id",
      element: <LayoutShop Page={ShopkeeperSalonDetail} />,
    },
    {
      path: "/bill",
      element: <LayoutShop Page={BookingList} />,
    },
    {
      path: "/permission",
      element: <LayoutAdmin Page={Permission} />,
    },
    {
      path: "/admin",
      element: <LayoutAdmin Page={Admin} />,
    }
  ]);
  return <div>{elements}</div>;
};

export default Routers;
