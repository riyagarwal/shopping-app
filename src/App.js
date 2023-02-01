import './App.css';
import Navbar from './components/navbar/Navbar';
import CustomRoutes from './CustomRoutes';
import CartPage from './components/cartPage/CartPage';
import HomePage from './components/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CustomRoutes />
      <HomePage />
     
    </div>
  );
}

export default App;
