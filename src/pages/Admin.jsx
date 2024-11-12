import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paymentFilter, setPaymentFilter] = useState('All'); // State for filtering by payment status

  useEffect(() => {
    // Fetch orders from Firebase
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://delicart-48582-default-rtdb.firebaseio.com/orders.json');
        if (!response.ok) throw new Error('Failed to fetch orders');
        const data = await response.json();

        // Convert fetched data to an array of orders
        const loadedOrders = [];
        for (const key in data) {
          loadedOrders.push({
            id: key, // Firebase unique ID for each order
            ...data[key],
          });
        }
        setOrders(loadedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Function to filter orders based on payment status
  const filteredOrders = orders.filter((order) => {
    if (paymentFilter === 'All') return true;
    return paymentFilter === 'Paid' ? order.paymentMethod === 'QR Payment' : order.paymentMethod === 'Cash on Delivery (COD)';
  });

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Admin - Order List</h2>
      {isLoading ? (
        <p>Loading orders...</p>
      ) : (
        <>
          {filteredOrders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Customer Name</th>
                  <th className="px-4 py-2">Phone Number</th>
                  <th className="px-4 py-2">From Address</th>
                  <th className="px-4 py-2">To Address</th>
                  <th className="px-4 py-2">Distance (km)</th>
                  <th className="px-4 py-2">Weight (kg)</th>
                  <th className="px-4 py-2">Num Items</th>
                  <th className="px-4 py-2">Delivery Charge</th>
                  <th className="px-4 py-2">Total Cost</th>
                  <th className="px-4 py-2">Payment Method</th> {/* New column for Payment Method */}
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="border px-4 py-2">{order.customerName}</td>
                    <td className="border px-4 py-2">{order.phoneNumber}</td>
                    <td className="border px-4 py-2">{order.fromAddress}</td>
                    <td className="border px-4 py-2">{order.toAddress}</td>
                    <td className="border px-4 py-2">{order.distance}</td>
                    <td className="border px-4 py-2">{order.weight}</td>
                    <td className="border px-4 py-2">{order.numItems}</td>
                    <td className="border px-4 py-2">₹{order.deliveryCharge.toFixed(2)}</td>
                    <td className="border px-4 py-2">₹{order.totalCost.toFixed(2)}</td>
                    <td className="border px-4 py-2">{order.paymentMethod}</td> {/* Show Payment Method */}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default Admin;
