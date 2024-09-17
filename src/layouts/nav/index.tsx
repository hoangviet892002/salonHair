import {
  authActions,
  selectIsLoggedIn,
} from "@/useRedux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/useRedux/stores/hook";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { UserIcon } from '@heroicons/react/24/outline'; // Import biểu tượng hình người từ Heroicons

const Navbar = () => {
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isLogin = useAppSelector(selectIsLoggedIn);

  const Menu = [
    {
      name: "Sign In",
      url: "/sign-in",
    },
    {
      name: "Sign Up",
      url: "/sign-up",
    },
  ];

  return (
    <div>
      <div className="max-w-8xl bg-[#86664B] mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 mx-4 lg:mx-0">
          <div className="relative flex items-center text-[#E3D9C7]">
            <Link
              className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
              to={"/"}
            >
              <img
                src={logo}
                alt="Shampoo Viet"
                className="w-auto h-8 md:h-20"
              />
            </Link>

            <div className="relative hidden lg:flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold">
                <ul className="flex space-x-8">
                  {isLogin ? (
                    <>
                      <li>
                        <Link
                          to="/admin"
                          className="hover:text-sky-300"
                        >
                          Admin
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shopkeeper"
                          className="hover:text-sky-300"
                        >
                          Shopkeeper
                        </Link>
                      </li>
                      <li>
                        <div className="relative">
                          <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center text-[#E3D9C7] hover:text-sky-300"
                          >
                            <UserIcon className="w-5 h-5 mr-2" /> {/* Thêm biểu tượng hình người */}
                          </button>
                          {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-[#86664B] text-[#E3D9C7] rounded-lg shadow-lg">
                              <ul className="py-2 text-sm font-semibold">
                                <li>
                                  <Link
                                    to="/history"
                                    className="block px-4 py-2 hover:bg-[#6b4a38] rounded"
                                  >
                                    Lịch sử Booking
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/profile"
                                    className="block px-4 py-2 hover:bg-[#6b4a38] rounded"
                                  >
                                    Profile
                                  </Link>
                                </li>
                                <li>
                                  <button
                                    onClick={() => dispatch(authActions.logout())}
                                    className="block w-full text-left px-4 py-2 hover:bg-[#6b4a38] rounded"
                                  >
                                    Logout
                                  </button>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                    </>
                  ) : (
                    <>
                      {Menu.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.url}
                            className="hover:text-sky-300"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </nav>
            </div>
            <button
              type="button"
              className="ml-auto text-[#E3D9C7] w-8 h-8 -my-1 flex items-center justify-center hover:text-sky-300 lg:hidden"
            ></button>
            <div className="ml-2 -my-1 lg:hidden">
              <button
                onClick={() => setToggle(!toggle)}
                type="button"
                className="text-[#E3D9C7] w-8 h-8 flex items-center justify-center hover:text-sky-300"
              >
                <span className="sr-only">Navigation</span>
                <svg width="24" height="24" fill="none" aria-hidden="true">
                  <path
                    d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              {toggle && (
                <div
                  className="fixed top-4 right-4 w-full max-w-xs bg-[#86664B] rounded-lg shadow-lg p-6 text-base font-semibold"
                >
                  <button
                    type="button"
                    onClick={() => setToggle(!toggle)}
                    className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-[#E3D9C7] hover:text-sky-300"
                  >
                    <span className="sr-only">Close navigation</span>
                    <svg
                      viewBox="0 0 10 10"
                      className="w-2.5 h-2.5 overflow-visible"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 0L10 10M10 0L0 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>
                  <ul className="space-y-6 text-[#E3D9C7]">
                    {isLogin ? (
                      <>
                        <li>
                          <Link
                            to="/books"
                            className="hover:text-sky-300"
                          >
                            Books
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/profile"
                            className="hover:text-sky-300"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => dispatch(authActions.logout())}
                            className="hover:text-sky-300"
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        {Menu.map((item, index) => (
                          <li key={index}>
                            <Link
                              to={item.url}
                              className="hover:text-sky-300"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
