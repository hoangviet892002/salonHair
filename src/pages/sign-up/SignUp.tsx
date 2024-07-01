import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { Formik } from "formik";
import { useState } from "react";
import { SignUpPayload } from "@/types/user.type";
import { authActions, selectLoading } from "@/useRedux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/useRedux/stores/hook";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const initialValues: SignUpPayload = {
    email: "",
    username: "",
    password: "",
    gender: "MALE",
  };
  let loading = useAppSelector(selectLoading);

  return (
    <div className="flex flex-row w-full h-full bg-base-200">
      <div className="hidden lg:flex items-center justify-center bg-[#FFE5EC] w-1/2 rounded-r-3xl lg:rounded-tr-none lg:rounded-br-none">
        <motion.img
          initial="hidden"
          animate="show"
          variants={fadeIn("left", 0.1)}
          className="h-[600px] w-[400px] object-cover rounded-t-full"
          src="https://serapool.fra1.cdn.digitaloceanspaces.com/media/4749/what-is-spa-serapool.jpg"
        />
      </div>
      <div className="lg:w-1/2 md:w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-l-3xl lg:rounded-tl-none lg:rounded-bl-none">
        <label className="text-3xl font-bold text-[#987070] p-4 mt-8 my-custom-font ">
          Tận hưởng không gian thư giãn tại Spa
        </label>
        <div className="p-10 text-left">
          <h1 className="text-[#FF9FAB] text-4xl mb-4">Đăng ký</h1>
          <div className="text-gray-500 mb-6">
            <Link
              to="/sign-in"
              className="text-[#FF9FAB] hover:underline cursor-pointer"
            >
              Đã có tài khoản?
            </Link>
            <span> Đăng nhập</span>
          </div>
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors: any = {};
              if (!values.email) {
                errors.email = "Bắt buộc";
              }
              if (!values.username) {
                errors.username = "Bắt buộc";
              }
              if (!values.password) {
                errors.password = "Bắt buộc";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                dispatch(
                  authActions.register({
                    email: values.email,
                    gender: values.gender,
                    password: values.password,
                    username: values.username,
                  })
                );
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-col space-y-4">
                  <label className="text-[#987070]">Email</label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="input input-bordered w-full mt-1 bg-[#F6F5F2] text-[#FF9FAB] min-w-[450px] "
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </div>
                  )}
                  <label className="text-[#987070]">Tên đăng nhập</label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    className="input input-bordered w-full mt-1 bg-[#F6F5F2] text-[#FF9FAB]"
                  />
                  {errors.username && touched.username && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.username}
                    </div>
                  )}
                  <label className="text-[#987070]">Mật khẩu</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="input input-bordered w-full mt-1 bg-[#F6F5F2] text-[#FF9FAB]"
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </div>
                  )}

                  <label className="text-[#987070]">Giới tính</label>
                  <select
                    name="gender"
                    onChange={handleChange}
                    value={values.gender}
                    className="input input-bordered w-full mt-1 bg-[#F6F5F2] text-[#FF9FAB]"
                  >
                    <option value="MALE">Nam</option>
                    <option value="FEMALE">Nữ</option>
                  </select>
                  {loading ? (
                    <p>Đang xử lý...</p>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 mt-4 rounded-lg text-white bg-[#987070] hover:bg-opacity-90"
                    >
                      Đăng ký
                    </button>
                  )}
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;