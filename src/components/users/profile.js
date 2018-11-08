import React,{Component} from 'react';
import '../App.css';

class Profile extends Component{
    
    render(){
        return(
            <div class="card" id="pca">
            <button class="btn" id="pbt">Edit Profile</button>
            <div class="card-title"> <img src={'../assets/images/index.jpeg'} class="pimg" alt="img" /></div>
            <div class="card-body">
            <h4 id="un"><b>Jack Johnson</b><br /><small id="cts">Software Developer</small><br /><small id="cts">Johnson03@gmail.com</small></h4>
            <span><b>Followers 35</b></span>
            <span id="c"><b>Following 210</b></span>
            <span id="c"><b>Star 4</b></span><br />
            <button id="ci"class="btn btn-primary">Logout</button><br /><br />
           
            </div>
            </div>
        )
    }
}
export default Profile;