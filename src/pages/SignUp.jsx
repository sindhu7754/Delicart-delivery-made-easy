import { Fragment, useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Signup = () => {
  const emailRef = useRef();
  const userRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const { signUpUser, googleSignUpUser, loading, setLoading } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const [confirmshowPassword, setConfirmShowPassword] = useState("");
  const [confirmtogglePassword, setConfirmTogglePassword] = useState(false);

  // Handle Signup submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = userRef.current.value;
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;
    const confirmPasswordInput = confirmPasswordRef.current.value;

    try {
      if (
        userInput.trim() === "" ||
        emailInput.trim() === "" ||
        passwordInput.trim() === "" ||
        confirmPasswordInput.trim() === ""
      ) {
        toast.error("Please Enter All Required Fields");
      } else if (passwordInput.length < 8) {
        toast.error("Password must contain at least 8 characters");
      } else if (passwordInput !== confirmPasswordInput) {
        toast.error("Passwords do not match");
      } else {
        // Firebase Signup User Authentication
        setLoading(true);
        const response = await signUpUser(emailInput, passwordInput)
          .then(async (credential) => {
            try {
              await updateProfile(auth.currentUser, {
                displayName: userInput,
              });
              console.log("User profile updated successfully");
              setLoading(false);
              if (credential.user) {
                navigate("/ride");
              } else {
                toast.error("SignUp was not successful");
              }
            } catch (error) {
              console.log("Error updating user profile:", error);
              throw error;
            }
          })
          .catch((error) => {
            console.log("Error creating user account:", error);
            throw error;
          });
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  // Firebase User Google Auth
  const googleSign = async () => {
    setLoading(true);
    try {
      const response = await googleSignUpUser();
      if (response.user) {
        navigate("/ride");
      } else {
        toast.error("Login was not successful");
      }
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        toast.error("Sign-in popup closed. Please try again.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.log("Google Sign-In Error:", error);
    } finally {
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
                Get Started with Delicart
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4 flex flex-col text-base md:text-lg">
                <div className="my-3">
                  <label htmlFor="Username">Username</label>
                  <input
                    type="text"
                    placeholder="Enter Your Username"
                    className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                    ref={userRef}
                  />
                </div>

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
                  <input
                    type={togglePassword ? "text" : "password"}
                    value={showPassword}
                    placeholder="Enter Your Password"
                    className="bg-transparent outline-none w-full"
                    onChange={(e) => setShowPassword(e.target.value)}
                    ref={passwordRef}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => setTogglePassword(!togglePassword)}
                  >
                    {togglePassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                </div>

                <label htmlFor="ConfirmPassword" className="mt-6">
                  Confirm Password
                </label>
                <div className="borderCols w-full p-2 rounded-md flex justify-between items-center mb-6">
                  <input
                    type={confirmtogglePassword ? "text" : "password"}
                    value={confirmshowPassword}
                    placeholder="Enter Your Password"
                    className="bg-transparent outline-none w-full"
                    onChange={(e) => setConfirmShowPassword(e.target.value)}
                    ref={confirmPasswordRef}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      setConfirmTogglePassword(!confirmtogglePassword)
                    }
                  >
                    {confirmtogglePassword ? (
                      <AiFillEye />
                    ) : (
                      <AiFillEyeInvisible />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-md my-3 bg-blue-500 text-white"
                >
                  {loading ? (
                    <div className="relative left-[50%]">
                      <Oval
                        height={20}
                        width={20}
                        color="#fff"
                        visible={true}
                        ariaLabel="oval-loading"
                      />
                    </div>
                  ) : (
                    <p>SignUp</p>
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
              <p>Already have an account?</p>
              <Link to="/login" className="underline text-blue-700">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] bg-[url(./images/signup.jpg)] bg-cover bg-center bg-no-repeat hidden h-screen xl:block"></div>
      </div>
    </Fragment>
  );
};

export default Signup;
