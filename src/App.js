import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProductDetails from './ProductDetails/ProductDetails';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
             <Header/>
        <Switch>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route path='/home'>
              <Home></Home>
          </Route>
          <Route path='/products/:id'>
              <ProductDetails></ProductDetails>
          </Route>
          <Route path='/products'>
              <ProductDetails></ProductDetails>
          </Route>


        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
