import React, { Fragment } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Terms = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="my-12 mt-24 ">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto max-w-[1600px]">
          <div>
            <h1 className="my-4 font-semibold text-3xl">User Terms</h1>
            <p className="leading-[1.7] text-base md:text-lg my-4">
              Welcome to  Delicart, an online delivery service that helps
              you get your orders delivered quickly and efficiently. Before you
              start using our website and services, please read our terms of use
              carefully. By using our website, you agree to the following terms:
            </p>
            <ol className="list-decimal list-inside mb-5 text-base md:text-lg space-y-4">
              <li>
                <strong>Acceptance of Terms:</strong> By using our website, you
                agree to these terms and any additional terms posted on the
                website. If you do not agree to these terms, do not use our
                website.
              </li>
              <li>
                <strong>Eligibility:</strong> To use our website, you must be 18
                years or older and able to enter into a binding contract. If you
                are under 18, you may use our website only with the involvement
                of a parent or guardian.
              </li>
              <li>
                <strong>Use of Service:</strong> Our website is for personal and
                non-commercial use only. You may not use our website for any
                illegal or unauthorized purpose. You agree to comply with all
                local, state, and federal laws when using our website.
              </li>
              <li>
                <strong> Account Information:</strong> You must provide accurate
                and complete information when creating an account on our
                website. You are responsible for maintaining the confidentiality
                of your account and password and for restricting access to your
                computer. You agree to accept responsibility for all activities
                that occur under your account or password.
              </li>
              <li>
                <strong> Fees and Payments:</strong> We may charge fees for
                using our website and services. You agree to pay all fees and
                charges incurred on your account. All fees are non-refundable.
              </li>
              <li>
                <strong> Intellectual Property:</strong> All content and
                materials on our website are protected by copyright, trademark,
                and other intellectual property laws. You may not use any
                content or materials on our website without our prior written
                permission.
              </li>
              <li>
                <strong> Disclaimers and Limitation of Liability:</strong> Our
                website and services are provided on an "as is" and "as
                available" basis. We make no representations or warranties of
                any kind, express or implied, including but not limited to
                warranties of merchantability, fitness for a particular purpose,
                non-infringement, or course of performance. We do not warrant
                that our website will be uninterrupted or error-free. We shall
                not be liable for any direct, indirect, incidental, special, or
                consequential damages arising out of or in connection with the
                use or inability to use our website and services.
              </li>
              <li>
                <strong>Indemnification:</strong> You agree to indemnify and
                hold us and our affiliates, officers, agents, and employees
                harmless from any claim or demand, including reasonable
                attorneys' fees, made by any third party due to or arising out
                of your breach of these terms or your violation of any law or
                the rights of a third party.
              </li>
              <li>
                <strong> Governing Law:</strong> These terms of use shall be
                governed by and construed in accordance with the laws of the
                state in which we are located, without giving effect to any
                principles of conflicts of law.
              </li>
              <li>
                <strong> Changes to Terms:</strong> We reserve the right to
                modify these terms of use at any time without prior notice. Your
                continued use of our website after any modification of these
                terms constitutes your acceptance of the modified terms.
              </li>
            </ol>
            <p className="text-base md:text-lg">
              Thank you for using GoFast Delivery!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Terms;
