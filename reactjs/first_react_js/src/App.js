import Button from 'react-bootstrap/esm/Button';
import './App.css';
import AboutUs from './admin_transaction/AboutUs';
import Gallery from './admin_transaction/Gallery';
import Home from './admin_transaction/Home';


let x = 1;

function App() {
  return (
      <div>
        {x === 1 ? 'Hello' : 'Bye'}
        <h1>My First React App</h1>
        <p>Testing Testing Testing</p>
        <div>
          <Button>Submit</Button>
          <h2>Second H2</h2>
        </div>
        <Home/>
        <AboutUs/> 
        <Gallery/>
      </div>
  );
}

export default App;
