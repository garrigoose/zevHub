import './App.css';
import './bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import ResultsView from './Components/ResultsView';
import ProductPage from './Product/ProductPage';
import Footer from './Components/Footer';
import Cart from './Cart/Cart';
import ProfilePage from './User/ProfilePage';
import Shipping from './Cart/Shipping';
import PaymentScreen from './Cart/Payment';
import PlaceOrder from './Cart/PlaceOrder';
import PlacedOrders from './Orders/PlacedOrders';
import UsersList from './Admin/UsersList';
import UserEdit from './Admin/UserEdit';
import ProductList from './Admin/ProductList';
import ProductEdit from './Admin/ProductEdit';
import OrderList from './Admin/OrderList';
import Order from './Orders/Order';
import SearchResults from './Components/SearchResults';
import CategoryResults from './Components/CategoryResults';

function App() {
  return (
    <>
      <Header />
      <main className='App w-100'>
        <Container fluid className='w-100 p-0'>
          <Routes>
            <Route path='/categories/:category' element={<CategoryResults />} />
            <Route path='/search/:keyword' element={<SearchResults />} />
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/profile' element={<ProfilePage />}></Route>
            <Route path='/products' element={<ResultsView />}></Route>
            <Route path='/product/:productId' element={<ProductPage />}></Route>
            <Route path='/shipping/' element={<Shipping />}></Route>
            <Route path='/payment/' element={<PaymentScreen />}></Route>
            <Route path='/placeorder/' element={<PlaceOrder />}></Route>
            <Route path='/order/:orderId' element={<Order />}></Route>
            <Route path='/cart/' element={<Cart />}></Route>
            <Route path='/cart/:productId' element={<Cart />}></Route>
            <Route path='/admin/userList' element={<UsersList />}></Route>
            <Route
              path='/admin/user/:userId/edit'
              element={<UserEdit />}
            ></Route>
            <Route path='/admin/orderlist' element={<OrderList />}></Route>
            <Route path='/admin/productlist' element={<ProductList />}></Route>
            <Route
              path='/admin/product/:productId/edit'
              element={<ProductEdit />}
            ></Route>
          </Routes>
          <ToastContainer />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
