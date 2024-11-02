import React, { Fragment } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const PrivacyNotice = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="mt-24 ">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto max-w-[1600px]">
          {" "}
          <h1 className="my-4 font-semibold text-3xl">Privacy Notice</h1>
          <p className="leading-[1.7] text-base md:text-lg my-4">
            At Delicart, we take your privacy seriously. This Privacy
            Notice describes how we collect, use, and disclose your personal
            information in connection with our website and services.
          </p>
          <ol className="list-decimal list-inside mb-5 text-base md:text-lg space-y-4">
            <li>
              <strong>Information We Collect:</strong> We collect information
              that you provide to us when you create an account, place an order,
              or contact us for support. This information may include your name,
              email address, phone number, address, and payment information.
            </li>
            <li>
              <strong>Use of Information:</strong> We use your personal
              information to provide our services, process your orders, and
              communicate with you. We may also use your information to improve
              our website and services, conduct research and analysis, and
              comply with legal obligations.
            </li>
            <li>
              <strong>Sharing of Information:</strong> We may share your
              personal information with third-party service providers that help
              us provide our services, such as payment processors and delivery
              providers. We may also share your information with our affiliates
              and business partners for marketing purposes, but only with your
              consent.
            </li>
            <li>
              <strong>Security of Information:</strong> We take reasonable
              measures to protect your personal information from unauthorized
              access, disclosure, or use. However, no security system is
              perfect, and we cannot guarantee the security of your information.
            </li>
            <li>
              <strong>Retention of Information:</strong> We retain your personal
              information for as long as necessary to provide our services and
              comply with legal obligations. We may also retain your information
              for research and analysis purposes.
            </li>
            <li>
              <strong>Your Rights:</strong> You have the right to access,
              correct, or delete your personal information that we hold. You may
              also have the right to object to or restrict certain types of
              processing, and to data portability.
            </li>
            <li>
              <strong>Marketing Communications:</strong> We may send you
              marketing communications about our services or products, but only
              with your consent. You may opt-out of receiving these
              communications at any time.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies and similar technologies
              to improve your experience on our website and personalize your
              interactions with us. You may disable cookies in your browser
              settings, but this may limit your ability to use our website.
            </li>
            <li>
              <strong>Children's Privacy:</strong> Our services are not intended
              for children under the age of 18, and we do not knowingly collect
              personal information from children under the age of 18.
            </li>
            <li>
              <strong>Changes to this Notice:</strong> We may update this
              Privacy Notice from time to time. We will notify you of any
              material changes by posting the new Privacy Notice on our website.
            </li>
          </ol>
          <p className="text-base md:text-lg">
            If you have any questions or concerns about our Privacy Notice or
            our handling of your personal information, please contact us at
            [insert contact information].
          </p>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default PrivacyNotice;
