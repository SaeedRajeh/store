import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';
// const HatsPage = () =>(
//   <div>
//       <h1>Hats Page</h1>
//   </div>
// );
// // details page
// const Details = ({match,history}) =>{
//   const {id} = match.params;
//   console.log(id);
//   return (
//   <div>
//     <h1>Details of ID:{id}</h1>
//     <button onClick = {()=> history.push('/')}>back to home</button>
//   </div>
//   );
// }
  
  
  



class App extends React.Component {
  // constructor
  constructor(){
    super();
    // state
    this.state = {
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;
  // componentDidMount
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
    })
  }
  // unmount 
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  // render
  render(){
   
    return (
      <div className="App">
        <Header  currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/shop" component = {Shop}/>
          <Route exact path = "/signin" component = {SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
