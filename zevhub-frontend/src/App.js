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
import UploadProductPage from './Product/UploadProduct';
import Cart from './Cart/Cart';
import ProfilePage from './User/ProfilePage';
import Shipping from './Components/Shipping';

function App() {
  return (
    <>
      <Header />
      <main className='App'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/profile' element={<ProfilePage />}></Route>
            <Route path='/products' element={<ResultsView />}></Route>
            <Route
              path='/products/:productId'
              element={<ProductPage />}
            ></Route>
            <Route path='/upload' element={<UploadProductPage />}></Route>
            <Route path='/shipping/' element={<Shipping />}></Route>
            <Route path='/cart/' element={<Cart />}></Route>
            <Route path='/cart/:productId' element={<Cart />}></Route>
          </Routes>
          <ToastContainer />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
