import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import Basket from './components/basket';
import Login from './components/Authentication/login';
import Home from './components/Home';

function App() {
  return (
  <Router>
    <Routes>
    <Route path="/" element={<Product/>}/>
    <Route path='/basket'element={<Basket/>}/>
    <Route path='/Home'element={<Home/>}/>
    <Route path='/login'element={<Login/>}/>


    </Routes>
  </Router>
  // <h1>Hello</h1>
  );
}

export default App;
