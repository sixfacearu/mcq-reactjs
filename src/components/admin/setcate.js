import React,{Component} from 'react';
import Setques from './setques';
import '../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

var a="cool"
class Setcat extends Component{
    constructor(props){
        super(props)
        this.oncatchange=this.oncatchange.bind(this);
        this.onquschange=this.onquschange.bind(this);
        this.oncatid=this.oncatid.bind(this);
        this.onsub=this.onsub.bind(this);
        this.state={
            id:'',
            cat:'',
            qus:'',
        }
    }
    fun(){
        var obj=new Setques();
        
        obj.myfun(this.state.id,this.state.qus);
       
    }
    oncatid(){
        var id=document.getElementById("id").value;
        this.setState({id:id})
    }
    oncatchange(){
        var cn=document.getElementById("a").value;
        this.setState({cat:cn});
        
    }
    onquschange(){
        var qs=document.getElementById("b").value;
        this.setState({qus:qs});
    }
  
   onsub(){
       const val={
        Id:this.state.id,
        category:this.state.cat,
        tot_qus:this.state.qus,
       }
       axios.post('http://localhost:4000/addcat',val).then(res=>{
           console.log(res.data)
       })
       this.fun();
      
   }
    render(){
        
        return(
            <div class="container">
    <label for="fname">category Id</label>
    <input type="text" id="id" name="catid" placeholder="Enter category id" onChange={this.oncatid}/>
    <label for="fname">Question</label>
    <input type="text" id="a" name="firstname" placeholder="Category name" onChange={this.oncatchange}/>
    <label for="lname">No of Question</label>
    <input type="text" id="b" name="lastname" placeholder="Number of Question" onChange={this.onquschange}/>

   <div class="clearfix">
 
   <Link to="/setques"><button type="submit" class="signupbtn" onClick={this.onsub}>Finish</button></Link>
    </div>
    
</div>

     );
   
    }
}

export default Setcat