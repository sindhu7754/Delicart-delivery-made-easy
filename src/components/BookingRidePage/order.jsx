import React, { useState } from 'react';
import QRCode from "react-qr-code";

const Order = () => {
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fromAddress, setFromAddress] = useState('');
    const [toAddress, setToAddress] = useState('');
    const [distance, setDistance] = useState('');
    const [weight, setWeight] = useState('');
    const [numItems, setNumItems] = useState('');
    const [invoice, setInvoice] = useState(null);
    const [showQRCode, setShowQRCode] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');

    const calculateDeliveryCharge = (distance, weight) => {
        let deliveryCharge = 0;
        if (distance > 4) {
            deliveryCharge += (distance - 4) * 10;
        }
        deliveryCharge += weight * 25;
        return deliveryCharge;
    };

    const handlePayment = () => {
        setPaymentMethod('QR Payment');
        setShowQRCode(true);
    };

    const handleCash = () => {
        setPaymentMethod('Cash on Delivery (COD)');
        alert("Thank you for choosing Cash on Delivery");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (parseInt(numItems, 10) > 10) {
            alert("Number of items cannot exceed 10.");
            return;
        }

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
        setShowQRCode(false);
        setPaymentMethod('');
    };

    const generatePhonePeLink = () => {
        const merchantVPA = "sumasree2004@ybl"; // UPI ID
        const merchantName = "Sumasree";        // Merchant name
        const amount = invoice.totalCost.toFixed(2); // Amount formatted to two decimal places

        if (!merchantVPA || !merchantName || isNaN(amount) || amount <= 0) {
            console.error("Invalid payment details.");
            return null;
        }

        return `phonepe://pay?pa=${encodeURIComponent(merchantVPA)}&pn=${encodeURIComponent(merchantName)}&am=${encodeURIComponent(amount)}&cu=INR`;
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

                {invoice && (
                    <div className="mt-6 border-t pt-4">
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
                            <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={handleCash}>
                                Cash on Delivery (COD)
                            </button>
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={handlePayment}>
                                Pay via QR Code
                            </button>
                        </div>
                        {paymentMethod && (
                            <p className="mt-2">Payment Method: {paymentMethod}</p>
                        )}
                    </div>
                )}

                {showQRCode && invoice && (
                    <div className="mt-6">
                        <h4 className="text-lg font-bold">Scan the QR Code to Pay</h4>
                        <QRCode
                            size={200}
                            bgColor="white"
                            fgColor="black"
                            value={generatePhonePeLink()}
                        />
                        <p className="mt-2 text-center">
                            Amount to Pay: ₹{invoice.totalCost.toFixed(2)}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Order;
