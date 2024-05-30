import { useSelector } from "react-redux"

export default function AdminPage () {

    const orders = useSelector(store => store.orders);
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
        {orders.map(order => (
          <tr key={order.id} >
            <td>{order.customer_name}</td>
            <td>{order.time}</td>
            <td> ${order.total}</td>
          </tr>
        ))}
        </tbody>
</table>
</>    

    )
}