
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/">
              <Header></Header>
              <Home></Home>
              <Product></Product>
              <Footer></Footer>
            </Route>
            <Route path="/food/:foodKey">
            <Header ></Header>
            <ProductDetails ></ProductDetails>
            <Footer></Footer>
          </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
