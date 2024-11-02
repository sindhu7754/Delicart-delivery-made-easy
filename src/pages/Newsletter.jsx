import React, { Fragment } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Newsletter = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="mt-24 ">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto max-w-[1600px]">
          <h3 className="text-3xl font-bold mb-4">Dear valued customer,</h3>
          <p className="text-base md:text-lg mb-8">
            We hope this newsletter finds you well. We at Gofast would like to
            update you on some of the latest delivery news and tips to ensure
            you have a smooth and hassle-free delivery experience.
          </p>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Delivery Updates</h3>
            <p className="text-base md:text-lg mb-4">
              We understand the importance of timely deliveries, and we are
              continuously working to improve our delivery services. Here are
              some updates on our delivery services:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="text-base md:text-lg mb-2">
                We have extended our delivery hours to include weekends and
                evenings, to accommodate our customers' busy schedules.
              </li>
              <li className="text-base md:text-lg mb-2">
                We have added more delivery drivers to our team to ensure faster
                and more efficient deliveries.
              </li>
              <li className="text-base md:text-lg mb-2">
                We have improved our tracking system, allowing you to track your
                package in real-time and receive notifications on its status.
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Delivery tips:</h3>
            <p className="text-base md:text-lg mb-4">
              We believe that a good delivery experience is not just about the
              delivery service, but also about how you prepare for it. Here are
              some tips to help you have a smooth delivery experience:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li className="text-base md:text-lg mb-2">
                <strong> Double-check your delivery address: </strong>Ensure
                that your delivery address is accurate and up-to-date, to avoid
                any delays or misdeliveries.
              </li>
              <li className="text-base md:text-lg mb-2">
                <strong> Be available for the delivery: </strong> Make sure that
                you or someone you trust is available to receive your package
                during the estimated delivery time.
              </li>
              <li className="text-base md:text-lg mb-2">
                <strong>Provide clear delivery instructions:</strong> If your
                address is difficult to find or has special instructions,
                provide clear and concise instructions to help the delivery
                driver locate your address easily.
              </li>
              <li className="text-base md:text-lg mb-2">
                <strong>Inspect the delivery:</strong> Before accepting the
                delivery, inspect the package for any damages or missing items.
                If there are any issues, inform the delivery driver immediately.
              </li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold mb-4">We value your feedback:</h2>
          <p className="text-base md:text-lg mb-8">
            We are always striving to improve our delivery services, and your
            feedback is essential to us. If you have any suggestions or
            comments, please feel free to reach out to us via email or social
            media.
          </p>
          <p className="text-base md:text-lg">
            Thank you for choosing Gofast for your delivery needs. We look
            forward to serving you.
          </p>
          <p className="text-base md:text-lg mt-2">
            Best regards, Gofast delivery team.
          </p>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Newsletter;
