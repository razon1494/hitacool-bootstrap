import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom/cjs/react-router-dom.min';
import Address from './Address/Address';
import './App.css';
import About from './components/About/About';
import Admin from './components/AdminPanel/Admin/Admin';
import AnimatedText from './components/AnimatedText/AnimatedText';
import BlockAddress from './components/BlockAddress/BlockAddress';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NotFound from './components/Notfound/NotFound';
import Ac2Details from './components/Self-contained/Ac2Details.js/Ac2Details';
import MainShop from './components/Shop/MainShop';
import Management from './Management/Management';
import ModalForm from './ProductDetails/ModalForm';
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
          <Route path='/selfac/:id'>
            <Ac2Details></Ac2Details>

          </Route>
          <Route path='/products'>
            <MainShop></MainShop>
          </Route>
          <Route exact path='/a'>
            <ModalForm></ModalForm>
          </Route>
          <Route path='/management'>
            <Management></Management>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
