import React,{Component} from 'react';
import '../App.css';
import axios from 'axios';

class Userlogin extends Component{
   constructor(props){
       super(props)
       this.onuemail=this.onuemail.bind(this);
       this.password=this.password.bind(this);
       this.fun=this.fun.bind(this);
       this.state={
           email:'',
           password:''
       }
      
   }
   onuemail(){
    var a=document.getElementById("un").value;
    this.setState({email:a})
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
    console.log(detail);
    axios.post('https://localhost:4000/signin' ,detail).then((res)=>{
      
        var a=res.data;
        console.log(a.token);
        sessionStorage.setItem('jwt', a.token);
        if(a.token== sessionStorage.getItem('jwt')){
        this.props.history.push('/user')
        window.location.reload();  
        }else{
            this.props.history.push('/')
            window.location.reload(); 
        }
       
    })
}
    render(){
     
        return(


<div class="login">
<h1 class="login-title">Simple Login</h1>
<input type="text" class="login-input" placeholder="Email Adress" id="un" onChange={this.onuemail} required autofocus />
<input type="password" class="login-input" placeholder="Password"  id="pw" onChange={this.password} required/>
<input type="submit" value="Lets Go" class="login-button"onClick={this.fun}  />
{/* <p class="login-lost"><a href="">Forgot Password?</a></p> */}
</div>



 )
}
}

export default Userlogin;
