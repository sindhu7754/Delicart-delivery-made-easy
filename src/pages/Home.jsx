import React, { Fragment } from "react";
import Emergency from "../components/LandingPage/Emergency";
import Delivery from "../components/LandingPage/Delivery";
import Parcel from "../components/LandingPage/Parcel";
import Safety from "../components/LandingPage/Safety";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Emergency />
      <Delivery />
      <Parcel />
      <Safety />
      <Footer />
    </Fragment>
  );
};

export default Home;
