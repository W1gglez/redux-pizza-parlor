// src/components/AdminPage/AdminPage.js
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AdminPage({ fetchOrder }) {
  const ordersState = useSelector((store) => store.orders);
  const { data: orders, isLoading } = ordersState;

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  if (isLoading) {
    return <div>Loading orders...</div>;
  }

  if (!orders || orders.length === 0) {
    return <div>No orders available</div>;
  }

  return (
    <>
      <h1>Admin Page</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Order Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <Link to={`/order/${order.id}`}>{order.customer_name}</Link>
              </td>
              <td>{order.time}</td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
