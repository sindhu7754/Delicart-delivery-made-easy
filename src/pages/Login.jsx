import React, { Fragment, useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logInUser, googleSignUpUser, loading, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState();
  const [togglePassword, setTogglePassword] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;

    try {
      if (emailInput.trim() === "" || passwordInput.trim() === "") {
        toast.error("Please Enter All Required Field");
      } else if (isAdmin) {
        // Admin login check
        if (emailInput === "admin@example.com" && passwordInput === "adminPass") {
          // Redirect to admin panel
          navigate("/admin-panel");
        } else {
          toast.error("Invalid admin credentials");
        }
      } else {
        // Regular user login
        const response = await logInUser(emailInput, passwordInput);
        if (response.user) {
          setLoading(false);
          navigate("/ride");
        } else {
          setLoading(false);
          toast.error("Login Was Not Successful");
          return;
        }
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const googleSign = async () => {
    try {
      const response = await googleSignUpUser();
      if (response.user) {
        setLoading(false);
        navigate("/ride");
      } else {
        setLoading(false);
        toast.error("Login Was Not Successful");
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row w-full text-lightGrey text-base sm:text-xl relative">
        <div className="w-[100%] md:w-[80%] mx-auto xl:w-[60%] p-4">
          <div className="md:w-[80%] xl:w-[70%] mx-auto pt-4 mt-12">
            <div className="my-4">
              <p className="text-3xl sm:text-4xl font-bold text-black mt-4 mb-2">
                Sign in to your
              </p>
              <p className="my-1 text-4xl sm:text-5xl">Delicart Account</p>
              <p className="my-4">
                We Manage your goods efficiently - No matter the goods or the
                locations.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4 flex flex-col text-base md:text-lg">
                <div className="my-3">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                    ref={emailRef}
                  />
                </div>

                <label htmlFor="Password" className="mt-3">
                  Password
                </label>
                <div className="borderCols w-full p-2 rounded-md flex justify-between items-center">
                  {" "}
                  <input
                    type={togglePassword ? "text" : "password"}
                    value={showPassword}
                    placeholder="Enter Your Password"
                    className="bg-transparent outline-none w-full"
                    onChange={(e) => {
                      setShowPassword(e.target.value);
                    }}
                    ref={passwordRef}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setTogglePassword(!togglePassword);
                    }}
                  >
                    {togglePassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                </div>

                <label className="mt-3">
                  <input
                    type="checkbox"
                    checked={isAdmin}
                    onChange={() => setIsAdmin(!isAdmin)}
                  />
                  <span className="ml-2">Admin Login</span>
                </label>

                <Link
                  to="/reset-password"
                  className="text-center my-2 text-blue-700 w-full"
                >
                  Forgot Password?
                </Link>
                <button
                  type="submit"
                  className="bg-blue-500 px-4 py-2 text-center rounded-md my-4 text-white"
                >
                  {loading ? (
                    <div className="relative left-[50%]">
                      <Oval
                        height={20}
                        width={20}
                        color="#fff"
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#fff"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                    </div>
                  ) : (
                    <p>Login</p>
                  )}
                </button>
              </div>
            </form>
            <div className="grid">
              <button
                onClick={googleSign}
                className="flex items-center w-full text-center justify-center my-2 space-x-4 py-2 rounded-md"
              >
                <FcGoogle /> <span>Continue with Google</span>
              </button>
            </div>
            <div className="flex justify-center space-x-2">
              <p>Don't have an account?</p>
              <Link to="/signup" className="underline text-blue-700">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] bg-[url(./images/login.png)] bg-cover bg-center bg-no-repeat hidden h-screen xl:block pl-3rem"></div>
      </div>
    </Fragment>
  );
};

export default Login;
