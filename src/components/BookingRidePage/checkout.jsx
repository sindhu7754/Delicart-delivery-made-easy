import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { invoice, paymentMethod } = location.state || {};

    const sendInvoiceToFirebase = async () => {
        if (!invoice) return;

        try {
            const response = await fetch('https://delicart-48582-default-rtdb.firebaseio.com/orders.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customerName: invoice.customerName,
                    phoneNumber: invoice.phoneNumber,
                    fromAddress: invoice.fromAddress,
                    toAddress: invoice.toAddress,
                    distance: invoice.distance,
                    weight: invoice.weight,
                    numItems: invoice.numItems,
                    deliveryCharge: invoice.deliveryCharge,
                    totalCost: invoice.totalCost,
                    paymentMethod: paymentMethod,
                }),
            });

            if (!response.ok) throw new Error('Failed to save the order to Firebase');

            const data = await response.json();
            console.log('Order saved successfully:', data);
        } catch (error) {
            console.error('Error saving order:', error);
        }
    };

    useEffect(() => {
        sendInvoiceToFirebase();
    }, [invoice]);

    return (
        <div className="container mx-auto mt-10 px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Order Confirmation</h2>
                {invoice && (
                    <table className="min-w-full border-collapse border border-gray-300 mb-6">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-gray-700 font-medium">Item</th>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-gray-700 font-medium">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Customer Name</td>
                                <td className="border border-gray-300 px-4 py-2">{invoice.customerName}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Phone Number</td>
                                <td className="border border-gray-300 px-4 py-2">{invoice.phoneNumber}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">From Address</td>
                                <td className="border border-gray-300 px-4 py-2">{invoice.fromAddress}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">To Address</td>
                                <td className="border border-gray-300 px-4 py-2">{invoice.toAddress}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Distance (km)</td>
                                <td className="border border-gray-300 px-4 py-2">{invoice.distance}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Weight (kg)</td>
                                <td className="border border-gray-300 px-4 py-2">{invoice.weight}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Number of Items</td>
                                <td className="border border-gray-300 px-4 py-2">{invoice.numItems}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Delivery Charge</td>
                                <td className="border border-gray-300 px-4 py-2">₹{invoice.deliveryCharge.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Total Cost</td>
                                <td className="border border-gray-300 px-4 py-2">₹{invoice.totalCost.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Payment Method</td>
                                <td className="border border-gray-300 px-4 py-2">{paymentMethod}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
                <p className="text-center text-gray-600">Thank you for your order!</p>
                <button
                    onClick={() => navigate('/history')}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Track Order
                </button>
            </div>
        </div>
    );
};

export default Checkout;
