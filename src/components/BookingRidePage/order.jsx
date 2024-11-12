import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Order = () => {
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fromAddress, setFromAddress] = useState('');
    const [toAddress, setToAddress] = useState('');
    const [distance, setDistance] = useState('');
    const [weight, setWeight] = useState('');
    const [numItems, setNumItems] = useState('');
    const [invoice, setInvoice] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const calculateDeliveryCharge = (distance, weight) => {
        let deliveryCharge = 0;
        if (distance > 4) {
            deliveryCharge += (distance - 4) * 10;
        }
        deliveryCharge += weight * 25;
        return deliveryCharge;
    };

    const handlePayment = (method) => {
        const deliveryCharge = calculateDeliveryCharge(parseFloat(distance), parseFloat(weight));
        const totalCost = deliveryCharge * 1.05;

        const invoiceDetails = {
            customerName,
            phoneNumber,
            fromAddress,
            toAddress,
            distance: parseFloat(distance),
            weight: parseFloat(weight),
            numItems: parseInt(numItems, 10),
            deliveryCharge,
            totalCost,
        };

        setInvoice(invoiceDetails);
        setIsModalOpen(false);
        navigate('/payment', { state: { invoice: invoiceDetails, paymentMethod: method } });
    };
   
    const handleCodPayment = (method) => {
        const deliveryCharge = calculateDeliveryCharge(parseFloat(distance), parseFloat(weight));
        const totalCost = deliveryCharge * 1.05;

        const invoiceDetails = {
            customerName,
            phoneNumber,
            fromAddress,
            toAddress,
            distance: parseFloat(distance),
            weight: parseFloat(weight),
            numItems: parseInt(numItems, 10),
            deliveryCharge,
            totalCost,
        };

        setInvoice(invoiceDetails);
        setIsModalOpen(false);
        navigate('/checkout', { state: { invoice: invoiceDetails, paymentMethod: method } });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate fields
        if (!/^\d{10}$/.test(phoneNumber)) {
            alert("Phone number must be 10 digits.");
            return;
        }
        if (parseFloat(distance) <= 0 || parseFloat(weight) <= 0) {
            alert("Distance and Weight must be positive numbers.");
            return;
        }
        if (parseInt(numItems, 10) > 10) {
            alert("Number of items cannot exceed 10.");
            return;
        }

        // Open the modal to display the invoice
        const deliveryCharge = calculateDeliveryCharge(parseFloat(distance), parseFloat(weight));
        const totalCost = deliveryCharge * 1.05;

        const invoiceDetails = {
            customerName,
            phoneNumber,
            fromAddress,
            toAddress,
            distance: parseFloat(distance),
            weight: parseFloat(weight),
            numItems: parseInt(numItems, 10),
            deliveryCharge,
            totalCost,
        };

        setInvoice(invoiceDetails);
        setIsModalOpen(true);
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Place Your Order</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Customer Name</label>
                        <input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">From Address</label>
                        <input
                            type="text"
                            value={fromAddress}
                            onChange={(e) => setFromAddress(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">To Address</label>
                        <input
                            type="text"
                            value={toAddress}
                            onChange={(e) => setToAddress(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Distance (km)</label>
                        <input
                            type="number"
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Weight (kg)</label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Number of Items</label>
                        <input
                            type="number"
                            value={numItems}
                            onChange={(e) => setNumItems(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Submit Order
                    </button>
                </form>

                {isModalOpen && invoice && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
                            <h3 className="text-xl font-bold">Invoice</h3>
                            <p>Customer Name: {invoice.customerName}</p>
                            <p>Phone Number: {invoice.phoneNumber}</p>
                            <p>From Address: {invoice.fromAddress}</p>
                            <p>To Address: {invoice.toAddress}</p>
                            <p>Distance: {invoice.distance} km</p>
                            <p>Weight: {invoice.weight} kg</p>
                            <p>Number of Items: {invoice.numItems}</p>
                            <p>Delivery Charge: ₹{invoice.deliveryCharge.toFixed(2)}</p>
                            <p>Total Cost: ₹{invoice.totalCost.toFixed(2)}</p>
                            <div className="mt-4">
                                <h4 className="font-semibold">Payment Options:</h4>
                                <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleCodPayment('Cash on Delivery (COD)')}>
                                    Cash on Delivery
                                </button>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => handlePayment('QR Payment')}>
                                    QR Payment
                                </button>
                            </div>
                            <button
                                className="mt-4 text-red-500"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Order;
