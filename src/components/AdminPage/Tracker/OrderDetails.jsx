// src/components/AdminPage/Tracker/OrderDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TrackingBar from './TrackingBar';
import moment from 'moment';
import { Link } from '@mui/joy';
import { NavLink } from 'react-router-dom/';

const OrderDetails = () => {
	const { id } = useParams();
	const ordersState = useSelector((store) => store.orders);
	const { data: orders } = ordersState;

	const order = orders.find((order) => order.id === Number(id));

	if (!order) {
		return <div>Order not found</div>;
	}
	const formattedTime = moment(order.time).format('LLL');
	return (
		<div>
			<h1>Order Details</h1>
			<p>
				<strong>Customer Name:</strong> {order.customer_name}
			</p>
			<p>
				<strong>Time:</strong> {formattedTime}
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
			<p>
				<TrackingBar />
			</p>
			<section>
				<NavLink to='/admin'>Return to Order List</NavLink>
			</section>
		</div>
	);
};

export default OrderDetails;
