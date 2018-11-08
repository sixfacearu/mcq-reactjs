import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import Setques from './setques';
import Setcat from './setcate';
import { BrowserRouter as Router, Route} from 'react-router-dom';
class Adminhome extends Component{
    componentWillMount() {
        this.checkAuth();
      }
    
      checkAuth() {
        if (!sessionStorage.getItem('jwt')) {
         
            this.props.history.push('/')
            window.location.reload(); 
        }
      }
    fun=()=>{
           sessionStorage.removeItem('jwt');
            this.props.history.push('/')
            window.location.reload();
           
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
                <ul class="nav navbar-nav">
                <li onClick={this.fun}><a href="#" id="li"><b>LOGOUT</b></a></li>
                
              
            </ul>
            </nav>
            
        </div>
       
        <div id="snav"class="card">
        <div class="card-title" id="ct"><b>ADMIN DASHBOARD</b></div>
        <div class="card-body" id="cd">
        <Link to="/adminhome/setcat">     <h5><img src={'../assets/images/test2.jpeg'} alt="img1" class="img1"/>&nbsp;&nbsp;&nbsp;&nbsp; <b>SET CATAGOREIS</b></h5></Link><br /><br />
        <Link to="/adminhome/setques">      <h5><img src={'../assets/images/details.jpeg'} alt="img1"class="img1"/>&nbsp;&nbsp;&nbsp;&nbsp;<b>SET QUESTIONS</b></h5></Link><inkbr /><br />
       <h5><img src={'../assets/images/friend2.jpeg'} alt="img1"class="img1"/>&nbsp;&nbsp;&nbsp;&nbsp;<b>REMOVE QUESTIONS</b></h5><br /><br />
        <h5><img src={'../assets/images/profile.png'} alt="img1"class="img1"/>&nbsp;&nbsp;&nbsp;&nbsp;<b>VIEW PEOPLE</b></h5><br /><br />
      <h5 onClick={this.fun}><img src={'../assets/images/logout.jpeg'} alt="img1"class="img1"/>&nbsp;&nbsp;&nbsp;&nbsp;<b>LOGOUT</b></h5><br /><br />
        </div>
        </div>
        
        <div id="con" class="card">
        <Route exact path="/adminhome/setcat" component={Setcat} />
        <Route exact path="/adminhome/setques" component={Setques} />
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

export default Adminhome;