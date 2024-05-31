// src/components/AdminPage/Tracker/OrderDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TrackingBar from './TrackingBar';

const OrderDetails = ( ) => {
  const { id } = useParams();
  const statuses = ['Order Received', 'Processing', 'Shipped', 'Delivered'];
  const durations = [5000, 5000, 5000, 5000]; 
  console.log('Order ID:', id); // Log the order ID to verify it's being parsed correctly

  const ordersState = useSelector((store) => store.orders);
  const { data: orders, isLoading } = ordersState;

  if (isLoading) {
    return <div>Loading order details...</div>;
  }

  console.log('All Orders:', orders); // Log all orders to verify their structure

  const order = orders.find((order) => order.id === parseInt(id));

  if (!order) {
    return <div>Order not found</div>;
  }

  console.log('Found Order:', order); // Log the found order to verify it's correct

  return (
    <div>
      <h1>Order Details</h1>
      <p><strong>Customer Name:</strong> {order.customer_name}</p>
      <p><strong>Time:</strong> {order.time}</p>
      <p><strong>Order Total:</strong> ${order.total}</p>
      <p><strong>Order Items:</strong></p>
      <ul>
        {order.items && order.items.length > 0 ? (
          order.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>One Sad Date Pizza</li>
        )}
      </ul>
      <TrackingBar statuses={statuses} durations={durations} />
    </div>
  );
};

export default OrderDetails;
