import { useRoutes } from "react-router-dom";
import { Layout } from "@/layouts";
import { ErrorPage, Home, SignIn, SignUp, SalonDetail } from "@/pages";
import PrivateRouterNotLogin from "./privateRouterNotLogin"; // Corrected import

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
  ]);
  return <div>{elements}</div>;
};

export default Routers;
