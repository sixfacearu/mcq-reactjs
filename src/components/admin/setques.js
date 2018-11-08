import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

var value;
var no_of_qs;
class Setques extends Component {
  constructor(props) {
    super(props)
    this.qusfun = this.qusfun.bind(this)
    this.opt1fun = this.opt1fun.bind(this)
    this.opt2fun = this.opt2fun.bind(this)
    this.opt3fun = this.opt3fun.bind(this)
    this.opt4fun = this.opt4fun.bind(this)
    this.ansfun = this.ansfun.bind(this)
    this.onsub = this.onsub.bind(this)

    this.myfun = this.myfun.bind(this)

    this.state = {


      qus: '',
      opt1: '',
      opt2: '',
      opt3: '',
      opt4: '',
      ans: ''
    }


  }

  myfun(val, noqs) {
    value = val;
    no_of_qs = noqs;
  }
  qusfun() {
    var a = document.getElementById("aa").value;
    this.setState({ qus: a })
  }
  opt1fun() {
    var a = document.getElementById("ba").value;
    this.setState({ opt1: a })
  }
  opt2fun() {
    var a = document.getElementById("ca").value;
    this.setState({ opt2: a })
  }
  opt3fun() {
    var a = document.getElementById("da").value;
    this.setState({ opt3: a })
  }
  opt4fun() {
    var a = document.getElementById("ea").value;
    this.setState({ opt4: a })
  }
  ansfun() {
    var a = document.getElementById("ans").value;
    this.setState({ ans: a })

  }

  onsub() {

    const detail = {
      Id: document.getElementById("ax").value,
      noofqs: no_of_qs,
      question: this.state.qus,
      option1: this.state.opt1,
      option2: this.state.opt2,
      option3: this.state.opt3,
      option4: this.state.opt4,
      key: this.state.ans,

    }

    axios.post('http://localhost:4000/addqus', detail).then(res => {
      console.log(res.data)
    })
    this.cm()
  }

  cm() {
    setTimeout(() => {
     
      document.getElementById("aa").value = " "
      document.getElementById("ba").value = " "
      document.getElementById("ca").value = " "
      document.getElementById("da").value = " "
      document.getElementById("ea").value = " "
      document.getElementById("ans").value = " "


    }, 2000);
  }

  render() {

    return (
      <div class="container">
        <label for="fname">Question ID</label>
        <input type="text" id="ax" name="firstname" placeholder="Your name.." onChange={this.catfun} value={value} />



        <label for="fname">Question</label>
        <input type="text" id="aa" name="firstname" placeholder="Your name.." onChange={this.qusfun} />

        <label for="lname">Option A</label>
        <input type="text" id="ba" name="lastname" placeholder="Your last name.." onChange={this.opt1fun} />
        <label for="lname">Option B</label>
        <input type="text" id="ca" name="lastname" placeholder="Your last name.." onChange={this.opt2fun} />
        <label for="lname">Option C</label>
        <input type="text" id="da" name="lastname" placeholder="Your last name.." onChange={this.opt3fun} />
        <label for="lname">Option D</label>
        <input type="text" id="ea" name="lastname" placeholder="Your last name.." onChange={this.opt4fun} />
        <label for="lname">answer</label>
        <input type="text" id="ans" name="lastname" placeholder="answer" onChange={this.ansfun} />


        <div class="clearfix">
          <button type="button" class="cancelbtn btn btn-primary" onClick={this.onsub}> Next</button>
          <button type="submit" class="signupbtn">Finish</button>
        </div>

      </div>

    );
  }
}

export default Setques