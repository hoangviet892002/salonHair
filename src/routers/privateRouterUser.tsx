import {
  selectCurrentUser,
  selectIsLoggedIn,
} from "@/useRedux/features/auth/authSlice";
import { useAppSelector } from "@/useRedux/stores/hook";
import React, { ReactElement, ComponentType } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouterUserProps {
  Page: ComponentType; // Accepts any React component
}

const PrivateRouterUser: React.FC<PrivateRouterUserProps> = ({ Page }) => {
  const isLogin = useAppSelector(selectIsLoggedIn);
  const user = useAppSelector(selectCurrentUser);
  const role = user?.role;
  const isUser = role === "USER";
  if (!isLogin) {
    return <Navigate to="/sign-in" />;
  }
  if (!isUser) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div>
      <Page /> {/* Render the passed React component */}
    </div>
  );
};

export default PrivateRouterUser;
