import { Formik } from "formik";
import { SignUpPayload } from "@/types/user.type";
import { authActions, selectLoading } from "@/useRedux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/useRedux/stores/hook";

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const initialValues: SignUpPayload = {
    email: "",
    username: "",
    password: "",
    gender: "MALE",
  };
  const loading = useAppSelector(selectLoading);

  return (
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
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
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
  );
};

export default SignUpForm;
