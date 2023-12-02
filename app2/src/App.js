import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MyNav from './component/General/Navbar';
import Footer from './component/General/Footer';
import Home from './component/Home/Home';
import ProductOne from './component/products.js/productOne';
import Resturant from './component/resturant/returant';
import NotFound from './component/General/NotFound';
import ShowDetails from './component/resturant/showDetails';


function App() {
  return (
    <div className="App">
        <MyNav></MyNav>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/products' element={<ProductOne></ProductOne>}></Route>
              <Route path='/resturan' element={<Resturant></Resturant>}></Route>
              <Route path='/ShowDetails' element={<ShowDetails></ShowDetails>}></Route>
              <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        <Footer></Footer>
    </div>  
  );
}

export default App;
