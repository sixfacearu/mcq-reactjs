import React,{Component} from 'react';
import {  Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
class Signup extends Component{
    constructor(props){
        super(props)
        this.onuname=this.onuname.bind(this);
        this.onuemail=this.onuemail.bind(this);
        this.onupass=this.onupass.bind(this);
        this.onsubmit=this.onsubmit.bind(this);
        this.state={
            uname:'',
            email:'',
            password:''
        }
    }
    onuname(){
        var a=document.getElementById("uname").value;
        this.setState({uname:a})
    }
    onuemail(){
        var a=document.getElementById("email").value;
        this.setState({email:a})
    }
    onupass(){
        var a=document.getElementById("pswx").value;
        this.setState({password:a})
    }
    onsubmit(){
        const detail={
            name:this.state.uname,
            password:this.state.password,
            email:this.state.email
        }
       
        axios.post('http://localhost:4000/Usersignup' ,detail).then((res)=>{
            console.log(res.data)
            if(res.data.success=="new user add"){
                this.props.history.push('/userlogin');
            }else{
                alert("information not valid try again");
            }
        })
        // this.getdetail();
    }
    // getdetail(){
    //     axios.get('http://localhost:4000/getuserdetail').then(res=>{
    //         console.log(res.data);
    //     })
    // }
    render(){
        return(

<div class="login">
<h1 class="login-title">Signup</h1>
<input type="text" class="login-input" placeholder="Username" id="uname" onChange={this.onuname} required />
<input type="text" class="login-input" placeholder="Email Adress" id="email"onChange={this.onuemail} required />
<input type="password" class="login-input" placeholder="Password" id="pswx" onChange={this.onupass} required />
<input type="submit" value="Signup" class="login-button" onClick={this.onsubmit} />
<p class="login-lost"><Link to="userlogin"><a href="">Already Users</a></Link></p>

</div>
 )
    }
}

export default Signup;