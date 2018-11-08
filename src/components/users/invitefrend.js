import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


class Invitefrnd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listfrnd: []
        }
    }
    componentDidMount(){
        axios.get('https://mcqbackendaru.herokuapp.com/getuserdetail').then(res=>{
          this.setState({listfrnd:res.data})
        })
    }
    render() {
     const list= this.state.listfrnd.map((list,index)=>{
          return(
            
              <tbody>
                <tr>
                  <td>{list.name}</td>
                  <td>{list.email}</td>
                  <td><button class="btn btn-primary" id="fb">Invite</button></td>
                </tr>
                
              </tbody>
          
                
              
          )
      })
        return (
            <div class="container">         
            <table class="table">
           
              <tbody>
              <tr>
                 {list}
                </tr>
              </tbody>
            </table>
          </div>



        )
    }
}
export default Invitefrnd;
