import React, { Fragment, useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
const ForgotPassword = () => {
  const emailRef = useRef();
  const { loading, setLoading, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  //   Reset Password Function
  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    try {
      if (emailInput === "") {
        toast.error("Please Enter An Email Address");
      } else {
        await resetPassword(emailInput);
        setLoading(false);
        toast.success("Check Your Email for Password Reset Link");
        navigate("/login");
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
              <p className="text-3xl sm:text-4xl font-bold text-black mt-4">
                Forgot
              </p>
              <p className="my-1 text-4xl sm:text-5xl">Your Password?</p>
              <p className="my-4">
                No worries. Enter your email address and we'll email you a link
                to reset it.
              </p>
            </div>
            <form action="" onSubmit={resetPasswordHandler}>
              <div className="my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                  ref={emailRef}
                />
              </div>

              <button
  type="submit"
  className="bg-blue-500 px-4 py-2 text-center rounded-md my-4 text-white w-full"
>
  {loading ? (
    <div className="relative left-[50%]">
      <Oval
        height={20}
        width={20}
        color="#fff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#fff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  ) : (
    <p>Reset Password</p>
  )}
</button>

            </form>
            <div className="flex space-x-2">
              <p>Already have an account ?</p>
              <Link to="/login" className="font-bold text-black">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] bg-[url(./images/login.jpg)] bg-cover bg-center bg-no-repeat hidden h-screen xl:block pl-3rem"></div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
