import logo from './logo.svg';
import './App.css';
import About from './components/About';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import Services from './components/Services';



function App() {
  return (
    <div>
       



      <Switch>

      <Link exact path="/">
        <div>
        <Home />
        </div>
      </Link>


      <Link exact path="/about">
        <About/>
      </Link>

      <Link exact path="/services">
        <div  className="home-image">

        <Services />
        </div>
      </Link>
        </Switch>

    </div>
  );
}

export default App;
