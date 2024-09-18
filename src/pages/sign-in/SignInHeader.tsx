import { Link } from "react-router-dom";

const SignInHeader = () => {
  return (
    <>
      <label className="text-3xl font-bold text-[#987070] p-4 my-custom-font">
        Tận hưởng không gian thư giãn tại Spa
      </label>
      <div className="p-10 text-left">
        <h1 className="text-[#86664B] text-4xl mb-4">Đăng nhập</h1>
        <div className="text-gray-500 mb-6">
          <Link
            to="/sign-up"
            className="text-[#86664B] hover:underline cursor-pointer"
          >
            Chưa có tài khoản?
          </Link>
          <span> Đăng ký ngay</span>
        </div>
      </div>
    </>
  );
};

export default SignInHeader;
