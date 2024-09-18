import { Link } from "react-router-dom";

const SignUpHeader = () => {
  return (
    <div>
      <label className="text-3xl font-bold text-[#987070] p-4 mt-8 my-custom-font ">
        Tận hưởng không gian thư giãn tại Spa
      </label>
      <div className="p-10 text-left">
        <h1 className="text-[#FF9FAB] text-4xl mb-4">Đăng ký</h1>
        <div className="text-gray-500 mb-6">
          <Link to="/sign-in" className="text-[#FF9FAB] hover:underline cursor-pointer">
            Đã có tài khoản?
          </Link>
          <span> Đăng nhập</span>
        </div>
      </div>
    </div>
  );
};

export default SignUpHeader;
