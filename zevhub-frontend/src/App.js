import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import ResultsView from './Components/ResultsView';
import ProductPage from './Product/ProductPage';
import Footer from './Components/Footer';
import UploadProductPage from './Product/UploadProduct';
import Cart from './Components/Cart';

function App() {
  return (
    <div className='App'>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/products' element={<ResultsView />}></Route>
          <Route path='/products/:id' element={<ProductPage />}></Route>
          <Route path='/upload' element={<UploadProductPage />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
