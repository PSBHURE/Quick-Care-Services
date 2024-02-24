import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
/*
const routing = (
<Router>
  <div>

     <NavLink to="/" exact activityStyle={{color:'red'}}>Home</NavLink> &nbsp;&nbsp;
     <NavLink to="/about" exact activeStyle={{color:'green'}}>About</NavLink> &nbsp;&nbsp;
     <NavLink to="/contact" exact activeStyle={{color:'magenta'}}>Contact</NavLink> 

     <Switch>
       <Route exact path="/" component={App}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/Register" component={Register}/>
       <Route exact path="/Login" component={Login1}/>
     </Switch>

  </div>
</Router>
)

ReactDOM.render (routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals*/
