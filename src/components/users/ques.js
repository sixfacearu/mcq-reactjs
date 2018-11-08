import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
var i = 0;
var id;
var array = [];
var array1 = [];
let mark = 0;
var length;
export default class Ques extends Component {

    constructor(props) {

        super(props)
        this.fun = this.fun.bind(this);
        this.fun1 = this.fun1.bind(this);
        this.state = {
            data: [],
            count: i
        }

    }
    componentDidMount() {

      
      
        axios.get('http://localhost:4000/getqus/' + id).then(res => {
            console.log(res.data.length);
            this.setState({ data: res.data })
           length=res.data.length;
            for (var i = 0; i < res.data.length; i++) {
               
                array.push(res.data[i].key)

            }






        })




    }
    input(ar) {
        id = ar;
    }

    input1(va){
        length=va;
    }


    fun() {


     
            i++;
            this.setState({ count: i });
            if (document.querySelector('input[name = gender]:checked')) {
                console.log("no")
                var gender = document.querySelector('input[name = gender]:checked').value;
            }
           
                array1[i-1]=gender;
         
            
               if(i==length){
                   this.fun3();
                 alert("wait few second to display your mark")
               }
            
        
         
        
       

    }

    fun1() {
        if (i != 0) {
            i--;
            this.setState({ count: i });
            if (document.querySelector('input[name = gender]:checked')) {
                console.log("yes")
                var gender = document.querySelector('input[name = gender]:checked').value;
                array1[i] = gender;
            }

        }

    }
    fun3() {
       
     
    
        for (let i = 0; i < array.length; i++) {
           
                
               
            if(array[i].trim()==array1[i]) {
               
                mark++;
            }
          
        }
        setTimeout(() => {
         alert("your mark is:" +mark +"out of" +length);
        }, 5000);

    }
    render() {

        const list = this.state.data.map((list, ii) => {

           
            if (ii == i)
                return (
                    <div>

                        <div class="card">
                            <h4 id="qust"><b>{i + 1}</b>&nbsp;&nbsp;{this.state.data[i].question}</h4>
                        </div>
                        <div class="card">
                            <form name="myform">
                                <input type="radio" name="gender" value="1" id="ib" />{this.state.data[i].option1}<br /><br />
                                <input type="radio" name="gender" value="2" id="ib" /> {this.state.data[i].option2}<br /><br />
                                <input type="radio" name="gender" value="3" id="ib" />{this.state.data[i].option3}<br /><br />
                                <input type="radio" name="gender" value="4" id="ib" /> {this.state.data[i].option4}<br /><br />
                            </form>
                        </div>
                        <div class="card">
                            <button class="btn btn-primary" id="btsn" onClick={this.fun}>Next</button>
                            <button class="btn btn-primary" id="btsn" onClick={this.fun1}>Previous</button>
                            <button class="btn btn-primary" id="btsn" onClick={this.fun3}>Submit Test</button>
                        </div>
                    </div>
                )
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}