import {
  authActions,
  selectIsLoggedIn,
} from "@/useRedux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/useRedux/stores/hook";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const dispatch = useAppDispatch();
  let [darkMode, setDarkMode] = useState(false);
  let [toggle, setToggle] = useState(false);
  let isLogin = useAppSelector(selectIsLoggedIn);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
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
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
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
              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                  {isLogin ? (
                    <>
                      <li>
                        <Link
                          to="/admin"
                          className="hover:text-sky-500 dark:hover:text-sky-400"
                        >
                          Admin
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shopkeeper"
                          className="hover:text-sky-500 dark:hover:text-sky-400"
                        >
                          Shopkeeper
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/profile"
                          className="hover:text-sky-500 dark:hover:text-sky-400"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => dispatch(authActions.logout())}
                          className="hover:text-sky-500 dark:hover:text-sky-400"
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
                            className="hover:text-sky-500 dark:hover:text-sky-400"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <label
                  className="sr-only"
                  htmlFor="headlessui-listbox-button-:R2lkcr6:"
                  id="headlessui-label-:R1lkcr6:"
                  data-headlessui-state=""
                >
                  Theme
                </label>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  type="button"
                  id="headlessui-listbox-button-:R2lkcr6:"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  data-headlessui-state=""
                  aria-labelledby="headlessui-label-:R1lkcr6: headlessui-listbox-button-:R2lkcr6:"
                >
                  <span className="dark:hidden">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <path
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        className="fill-sky-400/20 stroke-sky-500"
                      ></path>
                      <path
                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                        className="stroke-sky-500"
                      ></path>
                    </svg>
                  </span>
                  <span className="hidden dark:inline">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                        className="fill-sky-400/20"
                      ></path>
                      <path
                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                        className="fill-sky-500"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                        className="fill-sky-500"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <button
              type="button"
              className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
            ></button>
            <div className="ml-2 -my-1 lg:hidden">
              <button
                onClick={() => setToggle(!toggle)}
                type="button"
                className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
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
                  className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5"
                  id="headlessui-dialog-panel-:rv:"
                  data-headlessui-state="open"
                  data-open=""
                >
                  <button
                    type="button"
                    onClick={() => setToggle(!toggle)}
                    className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
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
                  <ul className="space-y-6">
                    {isLogin ? (
                      <>
                        <li>
                          <Link
                            to="/books"
                            className="hover:text-sky-500 dark:hover:text-sky-400"
                          >
                            Books
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/profile"
                            className="hover:text-sky-500 dark:hover:text-sky-400"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => dispatch(authActions.logout())}
                            className="hover:text-sky-500 dark:hover:text-sky-400"
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
                              className="hover:text-sky-500 dark:hover:text-sky-400"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="theme"
                        className="text-slate-700 font-normal dark:text-slate-400"
                      >
                        Switch theme
                      </label>
                      <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="relative flex items-center ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6 mr-2 dark:hidden"
                        >
                          <path
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            className="stroke-slate-400 dark:stroke-slate-500"
                          ></path>
                          <path
                            d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                            className="stroke-slate-400 dark:stroke-slate-500"
                          ></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-6 h-6 mr-2 hidden dark:block"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                            className="fill-transparent"
                          ></path>
                          <path
                            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                            className="fill-slate-400"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                            className="fill-slate-400"
                          ></path>
                        </svg>
                        {!darkMode ? "Light" : "Dark"}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div
                style={{
                  position: "fixed",
                  top: "1px",
                  left: "1px",
                  width: "1px",
                  height: "0",
                  padding: "0",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  borderWidth: "0",
                  display: "none",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
