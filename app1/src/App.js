import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import Products from './component/Products';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App bg-body-tertiary">
        <Header></Header>
        <Products></Products>
        <Footer></Footer>
    </div>
  );
}

export default App;
