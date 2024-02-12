import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from './Routes/Navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
