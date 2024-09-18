import { Formik } from "formik";
import { authActions } from "@/useRedux/features/auth/authSlice";
import { Link } from "react-router-dom";

interface SignInFormProps {
  dispatch: any;
  loading: boolean;
}

const SignInForm = ({ dispatch, loading }: SignInFormProps) => {
  return (
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
              <label className="text-[#86664B]">Tên đăng nhập</label>
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
              <label className="text-[#86664B]">Mật khẩu</label>
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
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-[#86664B] hover:underline cursor-pointer"
              >
                Quên mật khẩu?
              </Link>
            </div>
            {loading && (
              <div className="text-red-500 text-sm mt-1">Đang xử lý...</div>
            )}
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
  );
};

export default SignInForm;
