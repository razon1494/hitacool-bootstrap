import './App.css';
import Executive from './components/Executive/Executive';
import Header from './components/Header/Header';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <Slider />
      <Executive/>

    </div>
  );
}

export default App;
