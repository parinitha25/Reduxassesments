import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Logincomponent  from './Components/Logincomponent';
import Registercomponent from './Components/Registercomponent';
import User from './Components/User';

function App() {
  return (
    <div>
  <Router>
      <Switch>     
      <Route exact path='/pract1' component={Logincomponent}></Route> 
      <Route exact path='/pract2' component={Registercomponent}></Route> 
      <Route exact path='/pract3' component={User}></Route> 
      </Switch>
      </Router>
    </div>
  );
}

export default App;
