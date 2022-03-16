import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Searchbar from './Components/Searchbar';
import HomePageCards from './Components/HomePageCards';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Searchbar /> */}
      <HomePageCards />
    </div>
  );
}

export default App;
