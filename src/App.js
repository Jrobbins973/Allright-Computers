import logo from './logo.svg';
import './App.css';
import About from './components/About';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';




function App() {
  return (
    <div className="container mx-auto p-0 flex flex-col md:flex-col items-center">
       



      <Switch>

      <Link exact path="/">
        <Home />
      </Link>


      <Link exact path="/about">
        <About/>
      </Link>

        </Switch>

    </div>
  );
}

export default App;
