import { Fragment } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Faq from "./pages/Faq";
import { AuthProvider } from "./context/AuthContext";
import Newsletter from "./pages/Newsletter";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import PrivacyNotice from "./pages/PrivacyNotice";
import RequestRide from "./pages/RequestRide";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./pages/ForgotPassword";


function App() {
  return (
    <Fragment>
      <div className="min-h-screen absolute bg-[#fff8f8] top-0 w-full overflow-x-hidden">
        <AuthProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ForgotPassword />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/terms&categories" element={<Terms />} />
            <Route path="/security" element={<Security />} />
            <Route path="/privacynotice" element={<PrivacyNotice />} />
            <Route path="/ride" element={<RequestRide />} />

           
          </Routes>
        </AuthProvider>
      </div>
    </Fragment>
  );
}

export default App;
