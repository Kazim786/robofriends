import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Hello from './Hello.js';
import Card from './Card.js'
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import 'tachyons' //similar to bootstrap


// ReactDOM.render(
//   // <React.StrictMode>
    
//   // </React.StrictMode>
//   // <h1>Hello World</h1>
//   // <div><Hello />,
//   // <Hello haq= 'Ya Ali (as)'/>
//   // </div>
//   <Card />
//   ,
//   document.getElementById('root')
// );

ReactDOM.render(
  <div> 
      <Card />
      <Card />
      <Card />
  </div>
  
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
