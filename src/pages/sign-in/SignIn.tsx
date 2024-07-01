import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { Formik } from "formik";
import { useAppDispatch, useAppSelector } from "@/useRedux/stores/hook";
import { authActions, selectLoading } from "@/useRedux/features/auth/authSlice";
import { Link } from "react-router-dom";

const SignIn = () => {
  const dispatch = useAppDispatch();
  let loading = useAppSelector(selectLoading);
  return (
    <div className="flex flex-row w-full h-screen bg-base-200">
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
        <label className="text-3xl font-bold text-[#987070] p-4 my-custom-font">
          Tận hưởng không gian thư giãn tại Spa
        </label>
        <div className="p-10 text-left">
          <h1 className="text-[#FF9FAB] text-4xl mb-4">Đăng nhập</h1>
          <div className="text-gray-500 mb-6">
            <Link
              to="/sign-up"
              className="text-[#FF9FAB] hover:underline cursor-pointer"
            >
              Chưa có tài khoản?
            </Link>
            <span> Đăng ký ngay</span>
          </div>
          <Formik
            initialValues={{ username: "", password: "" }}
            validate={(values) => {
              const errors: any = {};
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
                dispatch(authActions.login(values));
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
                <div className="flex flex-col space-y-6">
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 mt-4 rounded-lg text-white bg-[#987070] hover:bg-opacity-90"
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
