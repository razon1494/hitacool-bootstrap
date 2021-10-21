import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom/cjs/react-router-dom.min';
import Address from './Address/Address';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Management from './Management/Management';
import ProductDetails from './ProductDetails/ProductDetails'
import Products from './Products/Products';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <NavigationBar />
        <Switch>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route path='/home'>
              <Home></Home>
          </Route>
          <Route path='/office'>
              <Address></Address>
          </Route>
          <Route path='/products/:id'>
            <ProductDetails></ProductDetails>

          </Route>
          <Route path='/products'>
            <Products></Products>
          </Route>
          <Route path='/management'>
            <Management></Management>
          </Route>


        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
