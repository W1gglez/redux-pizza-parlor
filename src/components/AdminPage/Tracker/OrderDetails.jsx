// src/components/AdminPage/Tracker/OrderDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TrackingBar from './TrackingBar';

const OrderDetails = () => {
	const { id } = useParams();
	
	const ordersState = useSelector((store) => store.orders);
	const { data: orders } = ordersState;

	const order = orders.find((order) => order.id === Number(id));

	if (!order) {
		return <div>Order not found</div>;
	}
	return (
		<div>
			<h1>Order Details</h1>
			<p>
				<strong>Customer Name:</strong> {order.customer_name}
			</p>
			<p>
				<strong>Time:</strong> {order.time}
			</p>
			<p>
				<strong>Order Total:</strong> ${order.total}
			</p>
			<p>
				<strong>Order Items:</strong>
			</p>
			<ul>
				<li>One Sad Date Pizza</li>
			</ul>
			<TrackingBar  />
		</div>
	);
};

export default OrderDetails;
