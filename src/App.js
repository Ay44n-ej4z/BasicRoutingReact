
import './App.css';
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
    <Switch>
    
    <Route exact path = "/" component =  {Home} />
    <Route path = "/signUp" component =  {SignUp}/>
    <Route path = "/products" component  = {Products} />
    
    </Switch>
    </Router>
    </div>
  );
}

export default App;
