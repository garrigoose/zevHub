# zevHub

## Electric Vehicle Marketplace

![alt text](./src/Images/Screen%20Shot%202022-04-02%20at%208.16.26%20AM.png'')

### What it is:

> A place for electric vehicle enthusiasts to buy, sell, and trade their vehicle, parts, and accessories.

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

### Features

- Listings
- Messages - stretch
- Favorites
- Location API - stretch

### MVP

- List products with pictures
- Browse, organise and search products
- Purchase a product and decrement it's inventory
