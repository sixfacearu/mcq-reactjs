import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';

class Admin extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    fun=()=>{
        
        var b=document.getElementById("pw").value;
        if(b==12345){
            this.props.history.push('/adminhome')
            window.location.reload();
        }else{
            alert("you are not a admin")
        }
    }
 render(){
        return(
<div class="container">
    <h1>Welcome to Admin Page</h1>
    <hr />
   
    <label for="psw" id="psw"><b>Enter Your Password</b></label>
    <input type="password" placeholder="Password" id="pw" name="psw" required />
    <div class="clearfix">
    
<button type="submit" class="signupbtn" onClick={this.fun}>Login</button>
    </div>
  </div>
 )
    }
}

export default Admin;