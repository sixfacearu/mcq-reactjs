import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Users from './components/users/user';

import Home from './components/users/home';
import Adminhome from './components/admin/adminhome';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
      
       <Route path="/user" component={Users} />
       <Route path="/adminhome" component={Adminhome} />
       <Route exact path="/" component={Home} /> 
        
        </Switch>
      </Router>
     
    
    ); 
  }
}

export default App;
