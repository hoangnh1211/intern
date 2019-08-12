import React from 'react';

import ReactDOM from 'react-dom';
import './Body.css';

import Body from './Body'
import {
    BrowserRouter as Router,
    Route,Switch
  } from "react-router-dom";
import BodyLogin from './Bodylogin';
class App1 extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Body} />
                    <Route path="/login" component={BodyLogin} />        
                </Switch>
            </Router>
        )
    }
} 

ReactDOM.render(<App1 />, document.getElementById('root'));

