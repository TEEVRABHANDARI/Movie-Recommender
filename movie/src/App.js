import { BrowserRouter , Route,Routes} from 'react-router-dom';
import './App.css';
import Login from './components/LoginSignup/Login';
import Footer from './components/Footer/Footer';
import Shop from './components/Pages/Shop';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
          <Route path='/' element={<Shop />}/>  
          <Route path='/home' element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
    </Routes>

    <Footer />
  </BrowserRouter>
  );
}

export default App;
