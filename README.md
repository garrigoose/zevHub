# [zevHub](https://zevhub-frontend.herokuapp.com/)

## Electric Vehicle Marketplace

### [frontend](https://github.com/garrigoose/zevHub-FrontEnd)

### [backend](https://github.com/garrigoose/zevHub-BackEnd)

![alt text](./src/Images/Screen%20Shot%202022-04-02%20at%208.16.26%20AM.png)

### What it is:

> A place for electric vehicle enthusiasts to buy, sell, and trade their vehicle, parts, and accessories.

## Approach

> For the backend api I took an approach of keeping components seperate and legible. This means seperate files for the controllers and routes, which was accomplished by a functional approach to routing and passing the semantically-named functions to the routing file.

> For the frontend a similar architecture was used folling the React methodology of encapsulting components and UI elements into folders. In order to manage state Redux was implemented with a pattern of seperate actions, reducers, constants and a centrallized store.

> The UI is a simple user-focused interface similar to most eCommerce applications. Currently, the admin is the only user type with their own custom dashboard in which they can manage users, products and orders. Styling is done minimally with Bootstrap for React in order to keep the interface unencumbered.

### Technologies

**Front-End**

- JS
- CSS
- HTML
- React
  - Framework used to organize and render UI
- Redux
  - State management tool. Fundamental in maneuvering data between elements.
- Bootstrap - react-bootstrap node package.

**Back-End**

- Node.js
  - JavaScript runtime for server and APIs
- Express
  - Framework for Node.js
- MongoDB - document database
- Mongoose
  - Object Data Modeling library for MongoDB

**Tools**

- Compass
  - Graphical User Interface for manipulating database
- Postman
  - GUI for interacting with back-end APIs
- VS Code - IDE
- Chrome
  - React devtools
  - Redux devtools

**Models**

- User

  - name
  - email
  - password
  - favorites
  - products for sale
  - purchases
  - messages
  - admin

- Product

  - user
  - title
  - description
  - price
  - category
  - brand
  - image
  - views
  - stock
  - rating
  - reviews
    - user
    - rating
    - comment
    - timestamp
  - number of reviews
  - timestamp

- Order
  - user
  - order items
    - title
    - qty
    - image
    - price
    - seller
    - product
    - shipping address
      - address
      - city
      - postalcode
      - country
    - payment method
    - payment results
    - tax price
    - shipping price
    - is paid
    - is delivered
    - delivery date
    - timestamp

### Unsolved Problems / Next Steps

- Allowing the user to list and mange their own products
- Messaging system to communicate amongst and alert users Favorites
- User profiles for individualized shops similar to etsy/eBay
- Location and product tracking management system

### Major Hurdles

- Redux. Learning Redux for state management. Learning and following the same pattern for each type fo data in global state was a challenge.
- Styling. Might need to take some lessons on modern styling. Though implementing a loading spinner in CSS was very informative.
- Deployment - file structure is very important for a smooth deployment.

### Routes

| ACTION | METHOD | PATH                  | DESCRIPTION                      |
| ------ | ------ | --------------------- | -------------------------------- |
| index  | GET    | /products/            | fetch all products in db         |
| show   | GET    | /products/:id         | fetch 1 product by id            |
| create | POST   | /products/            | create a new product entry in db |
| update | PUT    | products/:id          | update a product in db           |
| delete | DELETE | products/:id          | delete a product in db           |
| create | POST   | /products/:id/reviews | add a review to a product        |
| ------ | ------ | ----                  | -----------                      |
| index  | GET    | /users/               | fetch all users                  |
| show   | GET    | /users/:id            | fetch 1 user                     |
| create | POST   | /users/               | register a new user              |
| update | POST   | /users/login          | login a user                     |
| update | PUT    | /users/:id            | edit 1 user by admin             |
| delete | DELETE | /users/:id            | delete 1 user                    |
| update | PUT    | /users/profile        | edit 1 user by user              |
| ------ | ------ | ----                  | -----------                      |
| index  | GET    | /orders/              | fetch all orders by admin        |
| create | POST   | /orders/              | create an order                  |
| show   | GET    | /orders/:id           | fetch 1 order                    |
| index  | GET    | /orders/myorders      | fetch all orders for 1 user      |
| update | PUT    | /orders/:id/pay       | update pay info for 1 order      |
| update | PUT    | /orders/id/deliver    | update delivery info for 1 order |

### Resources

- [MDN](https://developer.mozilla.org/en-US/)
- [W3Schools](https://www.w3schools.com/)
- [GeeksforGeeks](https://www.geeksforgeeks.org/d)
- [Traversy Media](https://www.traversymedia.com/)
- [React Docs](https://reactjs.org/docs/getting-started.html)
- [Bootstrap Docs](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
- [Redux Docs](https://redux.js.org/)
- [Billie & Matt & Paresh](https://git.generalassemb.ly/Flex-928)
