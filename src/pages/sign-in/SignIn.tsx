import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { Formik } from "formik";
import { useAppDispatch, useAppSelector } from "@/useRedux/stores/hook";
import { authActions, selectLoading } from "@/useRedux/features/auth/authSlice";
import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignInLeftImage from "./SignInLeftImage";
import SignInHeader from "./SignInHeader";

const SignIn = () => {
  const dispatch = useAppDispatch();
  let loading = useAppSelector(selectLoading);

  return (
    <div className="flex flex-row w-full h-screen bg-[#E3D9C7]">
      <SignInLeftImage />
      <div className="lg:w-1/2 md:w-full flex flex-col items-center justify-center bg-[#E3D9C7] shadow-lg rounded-l-3xl lg:rounded-tl-none lg:rounded-bl-none">
        <SignInHeader />
        <SignInForm dispatch={dispatch} loading={loading} />
      </div>
    </div>
  );
};

export default SignIn;
