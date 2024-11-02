import React, { Fragment } from "react";
import Order from "../components/BookingRidePage/order";

const RequestRide = () => {
  return (
    <Fragment>
      <section className="w-[100vw] h-[100vh] relative flex flex-col bg-transparent">
        <div>
         <Order/> 
        </div>
      </section>
    </Fragment>
  );
};

export default RequestRide;
