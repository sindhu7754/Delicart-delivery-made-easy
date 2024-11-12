import React, { useEffect, useState } from 'react';

const History = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchOrdersFromFirebase = async () => {
        try {
            const response = await fetch('https://delicart-48582-default-rtdb.firebaseio.com/orders.json');
            if (!response.ok) throw new Error('Failed to fetch orders from Firebase');

            const data = await response.json();
            const fetchedOrders = Object.keys(data).map(key => ({ id: key, ...data[key] }));
            setOrders(fetchedOrders);
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const fetchOrders = async () => {
            await fetchOrdersFromFirebase();

            // Set up a listener for updates if your Firebase supports it
            const dbRef = 'https://delicart-48582-default-rtdb.firebaseio.com/orders.json'; // Use the correct reference
            const eventSource = new EventSource(dbRef); // This is a placeholder, as Firebase typically uses a different method

            eventSource.onmessage = (event) => {
                const newOrders = JSON.parse(event.data);
                const updatedOrders = Object.keys(newOrders).map(key => ({ id: key, ...newOrders[key] }));
                setOrders(updatedOrders);
            };

            return () => {
                eventSource.close(); // Clean up the listener on component unmount
            };
        };

        fetchOrders();
    }, []);

    return (
        <div className="container mx-auto mt-10 px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Order History</h2>
                {isLoading ? (
                    <p className="text-center">Loading orders...</p>
                ) : orders.length > 0 ? (
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-gray-700 font-medium">Customer Name</th>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-gray-700 font-medium">To Address</th>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-gray-700 font-medium">Total Cost</th>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-gray-700 font-medium">Payment Method</th>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-100 text-gray-700 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td className="border border-gray-300 px-4 py-2">{order.customerName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{order.toAddress}</td>
                                    <td className="border border-gray-300 px-4 py-2">₹{order.totalCost.toFixed(2)}</td>
                                    <td className="border border-gray-300 px-4 py-2">{order.paymentMethod}</td>
                                    <td className="border border-gray-300 px-4 py-2">{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-600">No orders found.</p>
                )}
            </div>
        </div>
    );
};

export default History;
