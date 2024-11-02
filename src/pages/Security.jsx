import React, { Fragment } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Security = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="mt-24 ">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto max-w-[1600px]">
          <div className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold mb-8">Security</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">
                    Data Protection
                  </h2>
                  <p className="leading-7 text-base md:text-lg">
                    At Delicart, we take data protection very seriously.
                    We use state-of-the-art security measures to protect your
                    personal and financial information from unauthorized access,
                    disclosure, or misuse. All data transmissions between our
                    website and your browser are encrypted using SSL (Secure
                    Sockets Layer) technology.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">
                    Password Protection
                  </h2>
                  <p className="leading-7 text-base md:text-lg">
                    We require strong passwords and use password hashing to
                    protect your account from unauthorized access. We recommend
                    that you use unique and strong passwords for your GoFast
                    Delivery account and do not share them with anyone.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">
                    Payment Security
                  </h2>
                  <p className="leading-7 text-base md:text-lg">
                    We partner with reputable payment processors to ensure the
                    security of your payment information. All payment
                    transactions are processed through secure and encrypted
                    channels to prevent unauthorized access or interception.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">
                    Monitoring and Detection
                  </h2>
                  <p className="leading-7 text-base md:text-lg">
                    We continuously monitor our systems and networks for
                    potential security threats and promptly respond to any
                    suspicious activities. We also use various detection and
                    prevention technologies to ensure the security and integrity
                    of our website and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Security;
