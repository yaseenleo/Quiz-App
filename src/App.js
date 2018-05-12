import React, { Component } from 'react';
import Quiz from './components/quiz.js';
import './App.css';
import {app,Fbprovider} from "./components/firebase.js";

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      username : "",
      dp: "",
      loggedin : false
    }
    this.authwithfb = this.authwithfb.bind(this)
  }
  
  authwithfb(){
    console.log("auth with fb");
    app.auth().signInWithPopup(Fbprovider)
    .then((result,err)=>{
      this.setState({
        username : result.user.displayName,
        dp:result.user.photoURL,
        loggedin:true
      });
      console.log(result);
      console.log(result.user.displayName);
     
    
    
    })
  }
 
//   componentDidMount() {
//     app.auth().onAuthStateChanged((user) => {
//       if (user) {
//         console.log(user);
//       this.setState({
//         username : user.displayName,
//         dp:user.photoURL,
//         loggedin:true
//       })
      
//       } 
//     })
      
// }

  render() {
   const loggedin = this.state.loggedin
    return (



      <div>
        <div>
        <h2>Quiz App</h2>
        { loggedin ? 
        (
          <div>
            <h3> {this.state.username} </h3>
      <img src={this.state.dp} />
      
        <Quiz/>
        </div>) : (
          <div>
      
    
    <button onClick={this.authwithfb}>
    login with fb
      </button>
      </div>
         )}
         </div>
      </div>
    );
  }
  
}

export default App;
