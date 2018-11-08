import React,{Component} from 'react';
import Userlogin from './userlogin';
import Login from '../admin/login';

import Signup from './signup';
import '../App.css';
import Admin from '../admin/admin';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {  Link } from 'react-router-dom';
var today;
var time;
class Home extends Component{

    constructor(props){
        super(props)
        today = new Date().toLocaleString();;
        //  time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    }
   
    render(){
        return(
            <body>
            <Router>
        <div id="body">
        <div>
            <nav id="nav" class="navbar navbar-expand-sm">
                <img src={'../assets/images/logo.jpg'} class="avatar" alt="img" />
                <h3 id="nb" class="navbar-brand">&nbsp;<b>Multicple Choice Questions</b><br /><small>&nbsp;Keep Learning</small></h3>
            </nav>
            
        </div>
       
        <div id="snav"class="card">
        <div class="card-title" id="ct"><b>WELCOME TO MCQ</b></div>
        <h3><b id="rs">Select Option</b></h3>
      <Link to="signup"><button class="btn btn-primary" id="urb">YOU ARE A USER</button></Link>
    <Link to="/login"><button class="btn btn-primary" id="urb">YOU ARE A ADMIN</button></Link>
  
        </div>
        
     <div id="con" class="card">
     
     <h1 id="cs">{today}</h1> 
   
    <Route exact path="/signup" component={Signup} />
     <Route exact path="/login" component={Login} /> 
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/userlogin" component={Userlogin} />
    </div>

        
        <div id="foo" class="card">
        <div class="card-title" id="rr"><b>CONTACT OUR MCQ COMPANY</b><span id="sp"><b>HELP</b></span><span id="sp"><b>1800-430-2086</b></span><span id="sp"><b>CopyRights(C)2018</b><br />
    
        </span>
        <p id="r">Home <span id="spp">Suggestion</span> <span id="ss">sixface0324@gmail.com</span>&nbsp;&nbsp;&nbsp;<span id="ss">sixface0324@gmail.com</span></p>
        <p id="r">Take an exam<span id="sppp">Faqs</span><span><img src={'../assets/images/gmailicon.png'} alt="img1" class="img3" />&nbsp;&nbsp;
        <img src={'../assets/images/twittericon.png'} alt="img1"  class="img4"/>&nbsp;&nbsp;
        <img src={'../assets/images/youtube.png'} alt="img1" class="img4" />&nbsp;&nbsp;
        
        </span></p>
        <p id="r">Challenge a friend  <span id="spppp">Query</span></p>
        <p id="r">logout  </p>
        
        </div>
      
   
        </div>
        </div>
        </Router>
        </body>        );
    }
}

export default Home;