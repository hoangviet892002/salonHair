import { selectIsLoggedIn } from "@/useRedux/features/auth/authSlice";
import { useAppSelector } from "@/useRedux/stores/hook";
import React, { ComponentType } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouterUserProps {
  Page: ComponentType; // Accepts any React component
}
const privateRouterNotLogin: React.FC<PrivateRouterUserProps> = ({ Page }) => {
  const isLogin = useAppSelector(selectIsLoggedIn);
  if (isLogin) {
    return <Navigate to="/" />;
  }
  return <Page />;
};

export default privateRouterNotLogin;
