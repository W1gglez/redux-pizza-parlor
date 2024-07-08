# Redux Pizza Parlor

Welcome to the Redux Pizza Parlor! This project is a React-based web application designed to manage pizza orders for a fictional pizza parlor. It utilizes Redux for state management and Express for the server-side logic.

## Getting Started

Before diving into the project, make sure to read through all the requirements and plan your work accordingly. It's recommended to assign tasks among team members and use branches for parallel development.

### Prerequisites

- Node.js
- PostgreSQL

### Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory and install the dependencies:

```sh
npm install
```

3. Create a `pizza_parlor` database and import the provided SQL data from `database.sql`.

### Running the Application

Start the server:

```sh
server
```

The server will start on `http://localhost:5001`. Now, open a new terminal tab to start the client application.

Start the client:

```sh
client
```

The client will start and be available at `http://localhost:3000` by default.

### API Documentation

After starting the server, the following routes will be available:

**GET PIZZA**
`/api/pizza`

Returns an array of pizza objects with `id`, `name`, `description`, `price`, and `image_path`.

**POST ORDER**
`/api/order`

Accepts an object containing user information (`customer_name`, `street_address`, `city`, `zip`, `type`, `total`) and an array of pizza IDs.

Example JSON Post Data:
```json
{
  "customer_name": "John Doe",
  "street_address": "123 Main St",
  "city": "Anytown",
  "zip": "12345",
  "type": "Delivery",
  "total": "27.50",
  "pizzas": [{"id": 1}, {"id": 2}]
}
```

### Stretch Goals

- Improve styling using Material-UI.
- Implement navigation to previous pages until checkout is completed.
- Display a list of pizzas for each order on the orders page.
- Add pizza images to the `public/images` folder and update the database accordingly.
- Add delivery status tracking for orders.
- Enable admins to view detailed information for each order.

For more details on the project structure and additional features, refer to the provided wireframes and project documentation.

Happy coding!