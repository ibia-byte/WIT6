import React from 'react';
import StateFullComponent from './components/StateFullComponent'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App(props) {
  return (
   <div>
      <div>
        THIS IS OUR FIRST PROJECT
        </div> 
      <StateFullComponent/>
      <button class="btn btn-success">Submit</button>
   </div> 
   
  );
}

export default App;
