import { useSelector } from "react-redux";

export default function AdminPage() {
  
  const items = useSelector((store) => store.items);
  console.log(items);

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
      </table>
      {items.map((item) => (
        
        <ul key={item.id}>
          <li>
            {item.customer_name}
            {item.time} $ {item.total}
          </li>
          <li>{item.name}</li>
        </ul>
      ))}
      
    </>
  );
}
