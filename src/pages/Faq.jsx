import React, { Fragment } from "react";
import Accordion from "../components/Accordion";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Faq = () => {
  const questions = [
    {
      id: 1,
      ques: "How do I place an order?",
      ans: "Placing an order with GoFast Delivery is easy! Simply create an account, select the item(s) you want to order from the website, and  complete the checkout process. You can also call our customer support team to place an order over the phone.",
    },
    {
      id: 2,
      ques: "What is the delivery time?",
      ans: "   The delivery time depends on the distance between the pickup location and the delivery location. Typically, we aim to deliver within 2-3 hours within the same city. For longer distances, it may take longer. You can track your delivery in real-time through your account.",
    },
    {
      id: 3,
      ques: "What if I need to cancel or change my order?",
      ans: "You can cancel or modify your order up to 1 hour before the scheduled pickup time. After that, it may not be possible to cancel or modify  your order. Please contact our customer support team if you need to cancel or modify your order.",
    },
    {
      id: 4,
      ques: "What payment methods do you accept?",
      ans: "We accept all major credit cards and PayStack.",
    },
    {
      id: 5,
      ques: "What if my order is damaged or lost during delivery?",
      ans: "  If your order is damaged or lost during delivery, please contact our customer support team immediately. We will do our best to resolve the issue and ensure that you are satisfied with the outcome.",
    },
    {
      id: 6,
      ques: "Do you offer same-day delivery?",
      ans: "   Yes, we offer same-day delivery for orders placed before 2 PM local time. Please note that same-day delivery may not be available in all areas.",
    },
    {
      id: 7,
      ques: "What areas do you deliver to?",
      ans: "We deliver to most areas within Nigeria. Please enter your zip code on the website to check if we deliver to your area.",
    },
    {
      id: 8,
      ques: "How do I track my delivery?",
      ans: "You can track your delivery in real-time through your account. You will also receive a notification when your order is out for delivery and when it has been delivered.",
    },
    {
      id: 9,
      ques: "What is your return policy?",
      ans: "We do not accept returns, but if there is an issue with your order, please contact our customer support team and we will do our best to resolve the issue.",
    },
    {
      id: 10,
      ques: "Do you offer discounts for bulk orders?",
      ans: "Yes, we offer discounts for bulk orders. Please contact our customer support team for more information.",
    },
  ];

  return (
    <Fragment>
      <Navbar />{" "}
      <section className="mt-24 ">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto max-w-[1600px]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center my-[4rem]">
            Frequently Asked Questions
          </h1>
          <div className="">
            {questions.map(({ ques, ans, id }) => (
              <Accordion index={id} title={ques} content={ans} key={id} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Faq;
