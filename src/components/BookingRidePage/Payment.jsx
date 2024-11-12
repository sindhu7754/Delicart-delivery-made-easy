import React, { Fragment, useContext, useState } from "react";
import PaystackPop from "@paystack/inline-js"; // Importing Paystack
import AuthContext from "../../context/AuthContext"; // Importing AuthContext
import { toast } from "react-toastify"; // Importing toast for notifications
import { useLocation, useNavigate } from "react-router-dom"; // Importing useLocation and useNavigate

const Payment = () => {
    const { user } = useContext(AuthContext); // Accessing user context
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const location = useLocation(); // Get location object
    const navigate = useNavigate(); // Hook to navigate to different routes
    const { invoice } = location.state || {}; // Get invoice from state

    const handleCardPayment = (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading

        if (!invoice) {
            toast.error("Invoice not found. Please return to the order page.");
            setIsLoading(false);
            return;
        }

        try {
            const paystack = new PaystackPop(); // Initialize Paystack
            paystack.newTransaction({
                key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY, // Public key from environment variables
                amount: invoice.totalCost * 100, // Amount to be charged in kobo (multiply totalCost by 100)
                email: user?.email || "test@example.com", // User's email
                firstname: user?.displayName || "User", // User's first name
                lastname: "", // User's last name (empty in this case)
                onSuccess(transaction) {
                    // Callback for successful transaction
                    toast.success(
                        `Dear ${user?.displayName}, your payment was successful! Reference: ${transaction.reference}. Receipt has been sent to your email.`
                    );
                    setIsLoading(false); // End loading on success

                    // Navigate to the Checkout page after payment success
                    navigate('/checkout', { state: { invoice, paymentMethod: 'QR Payment' } });
                },
                onCancel() {
                    // Callback for canceled transaction
                    toast.error("Payment was not successful. Please try again later.");
                    setIsLoading(false); // End loading on cancel
                },
            });
        } catch (error) {
            // Handle any errors during payment initialization
            console.error("Error initializing Paystack", error);
            toast.error("Payment initialization failed. Please try again.");
            setIsLoading(false); // End loading on error
        }
    };

    return (
        <Fragment>
            <div className="container mx-auto mt-10">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Payment</h2>
                    {invoice && (
                        <div className="mb-4">
                            <h3 className="font-semibold">Invoice Details:</h3>
                            <p>Customer Name: {invoice.customerName}</p>
                            <p>Total Cost: ₹{invoice.totalCost.toFixed(2)}</p>
                        </div>
                    )}
                    <button
                        onClick={handleCardPayment}
                        className={`bg-blue-500 text-white px-4 py-2 rounded ${
                            isLoading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={isLoading} // Disable button when loading
                    >
                        {isLoading ? "Processing..." : "Pay Now"}
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Payment;
