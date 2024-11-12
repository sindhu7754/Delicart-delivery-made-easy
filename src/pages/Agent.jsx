import React, { useEffect, useState } from 'react';

const Agent = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOrders, setSelectedOrders] = useState({}); // Track selected orders

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://delicart-48582-default-rtdb.firebaseio.com/orders.json');
        if (!response.ok) throw new Error('Failed to fetch orders');
        const data = await response.json();

        const loadedOrders = [];
        for (const key in data) {
          loadedOrders.push({
            id: key,
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

  const handleOrderUpdate = async (orderId, status) => {
    try {
      await fetch(`https://delicart-48582-default-rtdb.firebaseio.com/orders/${orderId}.json`, {
        method: 'PATCH',
        body: JSON.stringify({ status }), // Update 'status' field in Firebase
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSelectedOrders((prev) => ({ ...prev, [orderId]: status }));
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Agent - Order List</h2>
      {isLoading ? (
        <p>Loading orders...</p>
      ) : (
        <>
          {orders.length === 0 ? (
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
                  <th className="px-4 py-2">Payment Method</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
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
                    <td className="border px-4 py-2">{order.paymentMethod}</td>
                    <td className="border px-4 py-2">
                      <select
                        value={selectedOrders[order.id] || 'Select Status'}
                        onChange={(e) => handleOrderUpdate(order.id, e.target.value)}
                        className="border rounded px-2 py-1"
                      >
                        <option value="Select Status" disabled>Select Status</option>
                        <option value="accepted">Accept</option>
                        <option value="pick_parcel">Pick Parcel</option>
                        <option value="out_for_delivery">Out for Delivery</option>
                        <option value="done">Done</option>
                        <option value="rejected">Reject</option>
                      </select>
                    </td>
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

export default Agent;
