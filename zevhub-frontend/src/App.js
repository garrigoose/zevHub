import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className='App'>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
