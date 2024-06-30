import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { Formik } from "formik";
import { useState } from "react";
import { SignUpPayload } from "@/types/user.type";

import { authActions, selectLoading } from "@/useRedux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/useRedux/stores/hook";
import { toast } from "react-toastify";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const initialValues: SignUpPayload = {
    email: "",
    username: "",
    password: "",
    address: "",
    dateOfBirth: "",
    gender: "MALE",
  };
  let loading = useAppSelector(selectLoading);
  return (
    <div className="flex flex-row w-full h-full">
      <div className="hidden lg:flex items-center justify-center bg-pink-400 w-1/2 rounded-r-3xl">
        <motion.img
          initial="hidden"
          animate="show"
          variants={fadeIn("left", 0.1)}
          className="h-[600px] w-[400px] object-cover rounded-t-full"
          src="https://serapool.fra1.cdn.digitaloceanspaces.com/media/4749/what-is-spa-serapool.jpg"
        />
      </div>
      <div className="lg:w-1/2 md:w-full flex flex-col items-center justify-center ">
        <label className="text-2xl font-bold text-pink-400 dark:text-white p-4">
          Tận hưởng không gian thư giãn tại Spa
        </label>
        <div className="p-10 text-left">
          <h1 className="text-pink-400 text-3xl"> Đăng kí</h1>
          <a className="text-gray-400"> Đã có tài khoản?</a>
          <span className="text-gray-400"> Đăng nhập</span>
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
            if (!values.address) {
              errors.address = "Bắt buộc";
            }
            if (!values.dateOfBirth) {
              errors.dateOfBirth = "Bắt buộc";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              dispatch(
                authActions.register({
                  address: values.address,
                  dateOfBirth: values.dateOfBirth,
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
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4">
                <label className="text-gray-400">Email</label>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="p-2 border-b-2 border-gray-400"
                />
                {errors.email && touched.email && errors.email}
                <label className="text-gray-400">Tên đăng nhập</label>
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  className="p-2 border-b-2 border-gray-400"
                />
                {errors.username && touched.username && errors.username}
                <label className="text-gray-400">Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="p-2 border-b-2 border-gray-400"
                />
                {errors.password && touched.password && errors.password}
                <label className="text-gray-400">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  className="p-2 border-b-2 border-gray-400"
                />
                {errors.address && touched.address && errors.address}
                <label className="text-gray-400">Ngày sinh</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dateOfBirth}
                  className="p-2 border-b-2 border-gray-400"
                />
                {errors.dateOfBirth &&
                  touched.dateOfBirth &&
                  errors.dateOfBirth}
                <label className="text-gray-400">Giới tính</label>
                <select
                  name="gender"
                  onChange={handleChange}
                  value={values.gender}
                  className="p-2 border-b-2 border-gray-400"
                >
                  <option value="MALE">Nam</option>
                  <option value="FELAME">Nữ</option>
                </select>
                {loading ? (
                  <p>Đang xử lý...</p>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-pink-400 text-white p-2 rounded-lg"
                  >
                    Đăng kí
                  </button>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
