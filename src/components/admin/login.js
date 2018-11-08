import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';
class Login extends Component{
   
  constructor(props){
    super(props)
    this.onuemail=this.onuemail.bind(this);
    this.password=this.password.bind(this);
    this.fun=this.fun.bind(this);
    this.state={
        uname:'',
        password:''
    }
   
}
onuemail(){
 var a=document.getElementById("un").value;
 this.setState({uname:a})
}
password(){
  var a=document.getElementById("pw").value;
  this.setState({password:a})
}

fun(){
 const detail={
     password:this.state.password,
     email:this.state.email
 }

 if(detail.password=="admin"){
  
    sessionStorage.setItem('jwt',detail.password);
    this.props.history.push('/adminhome');
    window.location.reload();
 }
//  console.log(detail);
//  axios.post('http://localhost:4000/adminsignin' ,detail).then((res)=>{
   
//      var a=res.data;
//      console.log(a.token);
//      sessionStorage.setItem('Jwt', a.token);
//      if(a.token== sessionStorage.getItem('Jwt')){
//      this.props.history.push('/adminhome')
//      window.location.reload();  
//      }else{
//          this.props.history.push('/')
//          window.location.reload(); 
//      }
    
//  })

}

    render(){
     
        return(

<div class="login">
<h1 class="login-title">Adimin Login</h1>
<input type="text" class="login-input" placeholder="Uname" id="un" onChange={this.onuemail} required autofocus />
<input type="password" class="login-input" placeholder="Password"  id="pw" onChange={this.password} required/>
<input type="submit" value="Lets Go" class="login-button"onClick={this.fun}  />
</div>
 )
    }
}

export default Login;