import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home/home.component';
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
  
  
  



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/" component = {Home}/>
      </Switch>
    </div>
  );
}

export default App;
