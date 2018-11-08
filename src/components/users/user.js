import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {  Link } from 'react-router-dom';
import Categories from './list_que';
import '../App.css';
import PreviousTest from './previoustest';
import Invitefrnd from './invitefrend';
import Profile from './profile';
import Ques from './ques'

class Users extends Component {
   fun=()=>{
    this.props.history.push('/')
    window.location.reload();
    sessionStorage.removeItem('Jwt');
   }
   componentWillMount() {
    this.checkAuth();
  }

  checkAuth() {
    if (!sessionStorage.getItem('jwt')) {
     
        this.props.history.push('/')
        window.location.reload(); 
    }
  }
    render() {
      
        return (
            <body>
                <Router>
            <div id="body">
            <div>
                <nav id="nav" class="navbar navbar-expand-sm">
                    <img src={'../assets/images/logo.jpg'} class="avatar" alt="img" />
                    <h3 id="nb" class="navbar-brand">&nbsp;<b>Multicple Choice Questions</b><br /><small>&nbsp;Keep Learning</small></h3>
                    <ul class="nav navbar-nav">
                     <li onClick={this.fun}><a href="#" id="li"><b>HOME</b></a></li>
                    <Link to="/profile">     <li><a href="#" id="li1"><b>GET STARTED</b></a></li></Link>
                  <Link to="/categories"><li><a href="#" id="li2"><b>CATEGORIES</b></a></li></Link>
                  <Link to="/Profile">    <li><a href="#" id="li2"><b>PROFILE</b></a></li></Link>
                  
                   <img src={'../assets/images/index.jpeg'} class="img" alt="img" />
                </ul>
                </nav>
                
            </div>
           
            <div id="snav"class="card">
            <div class="card-title" id="ct"><b>USER DASHBOARD</b></div>
            <div class="card-body" id="cd">
            <Link to="/user/categories">   <h5><img src={'../assets/images/test2.jpeg'} alt="img1" class="img1"/>&nbsp;&nbsp;&nbsp;&nbsp; <b>START TEST</b></h5></Link><br /><br />
            <Link to="/user/PreviousTest">  <h5><img src={'../assets/images/details.jpeg'} alt="img1"class="img1"/>&nbsp;&nbsp;&nbsp;&nbsp;<b>PREVIOUS TEST DETAILS</b></h5></Link><br /><br />
            <Link to="/user/Invitefrnd">  <h5><img src={'../assets/images/friend2.jpeg'} alt="img1"class="img1"/>&nbsp;&nbsp;&nbsp;&nbsp;<b>INVITE FRIENDS</b></h5></Link><br /><br />
           <Link to="/user/Profile">  <h5><img src={'../assets/images/profile.png'} alt="img1"class="img1"/>&nbsp;&nbsp;&nbsp;&nbsp;<b>PROFILE</b></h5></Link><br /><br />
          <h5 onClick={this.fun}><img src={'../assets/images/logout.jpeg'} alt="img1"class="img1"/>&nbsp;&nbsp;&nbsp;&nbsp;<b>LOGOUT</b></h5><br /><br />
            </div>
            </div>
            
            <div id="con" class="card">
            
            <Route exact path="/user/categories" component={Categories} />
            <Route exact path="/user/PreviousTest" component={PreviousTest} />
            <Route exact path="/user/Profile" component={Profile} />
            <Route exact path="/user/Invitefrnd" component={Invitefrnd} />
            <Route exact path="/user/ques" component={Ques} />
        
            
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
            </body>
        )
    }
}
export default Users;