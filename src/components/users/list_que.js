import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Ques from './ques';
import {Link} from 'react-router-dom';


class Categories extends Component {
    
    constructor(props){
       
        super(props)
        this.state={
            datas:[]
        }
    }
    fun=(index)=>{
        var a=document.getElementsByClassName('ids')[index].innerHTML;
       
        var obj=new Ques();
        obj.input(a)
      
      
    }
    componentDidMount(){
      
        axios.get('https://mcqbackendaru.herokuapp.com/getcat').then(res=>{
            this.setState({datas:res.data})
           
        })
    }
    render() {

        const list=this.state.datas.map((list,i)=>{
            return(
                <div class="card" id="qcd">
                <div class="card-body" onClick={()=>this.fun(i)}>
            <Link to="/user/ques"> <b class="ids">{list.Id}</b><b id="nc">{list.category}</b><b id="qn">{list.tot_qus}</b></Link>
                </div>
                </div>
            )
        })
            return(
                <div id="con" class="card">
                <div class="card-body">
                <span id="ns"><b>S.No</b></span><span id="nc"><b>Categories</b></span><span id="nq"><b>No Of Questions</b></span>
                {list}
                </div>
                </div>
            );
        }
    }
export default Categories;
