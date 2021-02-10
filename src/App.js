import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact';
import Menu from './Menu';
function App() {
  return (
    <BrowserRouter>
        <Hello/>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/menu" component={Menu}></Route>
      </Switch>
    </BrowserRouter>
    );
}

export default App;
