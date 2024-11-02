import Logo from "./images/favicon.png";
import OpenMenu from "./images/icon-menu.svg";
import Close from "./images/icon-close.svg";
import { useState, useEffect, Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Serivice from "./components/LandingPage/Serivice";
import { toast } from "react-toastify";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const [navShadow, setNavShadow] = useState("");
  const { user, signOutUser } = useContext(AuthContext);
  const [toggleService, setToggleService] = useState(false);

  // Change Nav Background OnScroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      setNavbarBackground("rgba(255, 248, 248, 0.9)");
      setNavShadow(
        "0px -2px 2px rgba(30, 30, 30, 0.07),0px 2px 2px rgba(30, 30, 30, 0.1)"
      );
    } else {
      setNavbarBackground("transparent");
      setNavShadow("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Logout User
  const logoutHandler = () => {
    setOpen(false);
    signOutUser();
    toast.success("Logged Out Successful");
  };

  return (
    <Fragment>
      <nav
        className="fixed top-0 w-full z-[40]"
        style={{ backgroundColor: navbarBackground, boxShadow: navShadow }}
      >
        <div className="flex justify-between items-center w-[95%] md:w-[90%] mx-auto h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/">
            <img src={Logo} alt="Logo" style={{ width: '220px', height: '70px' }} />
            </Link>
          </div>

          <img
            src={open ? Close : OpenMenu}
            className="lg:hidden z-[42]"
            onClick={() => setOpen(!open)}
          />

          <div
            className={`flex flex-col text-base md:text-lg lg:justify-between lg:w-[70%] xl:w-[60%] items-start lg:items-center  lg:flex-row lg:space-x-8 bg-white lg:bg-transparent space-y-5 lg:space-y-0 lg:static fixed top-0 z-[32] lg:h-auto h-screen w-screen duration-500 ease-linear px-11 py-12 lg:py-0 lg:px-0 ${
              !open ? "right-[-100%]" : "right-0"
            }`}
          >
            <div className="">
              <ul className="flex flex-col lg:flex-row text-base md:text-lg justify-between lg:items-center space-y-8 lg:space-y-0  lg:space-x-12 absolute top-20 left-4 lg:relative lg:top-0">
                <Link
                  to="/"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Home
                </Link>
                <div className="relative">
                  <p
                    onClick={() => {
                      setToggleService(!toggleService);
                    }}
                    className="cursor-pointer"
                  >
                    Services
                  </p>
                  {toggleService && (
                    <Serivice
                      setOpen={setOpen}
                      setToggleService={setToggleService}
                    />
                  )}
                </div>
                <div
                  className={`${
                    toggleService && "relative top-20 lg:top-0"
                  } flex flex-col lg:flex-row space-y-8 lg:space-y-0  lg:space-x-12`}
                >
                  <Link
                    to="/faq"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    FAQS
                  </Link>
          
                </div>
              </ul>
            </div>
            <div
              className={`flex flex-col lg:flex-row justify-between lg:items-center space-y-8 lg:space-y-0  lg:space-x-8 absolute top-[19rem] left-4 lg:relative lg:top-0 ${
                toggleService && "absolute top-[23rem] lg:relative lg:top-0"
              }`}
            >
              {!user && (
                <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-8 lg:space-y-0  lg:space-x-8">
                  {" "}
                  <Link
                    to="/login"
                    className="text-start"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 rounded-md"
                    style={{ border: "1px solid #177bb6" }}
                    onClick={() => setOpen(false)}
                  >
                    SignUp
                  </Link>
                </div>
              )}
              {user && (
                <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-8 lg:space-y-0  lg:space-x-8">
                  <Link to="/" className="text-start" onClick={logoutHandler}>
                    Logout
                  </Link>
                  <div>{user && user.displayName}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
