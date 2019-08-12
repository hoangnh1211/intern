import '../Body.css';

import React,{ Component} from 'react';
import {
    BrowserRouter as Router,
    NavLink,Route
  } from "react-router-dom";
import Hv from './Hv';
import Gv from './Gv';
class BodyRight extends Component{
    render(){
        return(
            <div className="sub-container col-form" >
                <div className="sub-col-form">
                    <Router>
                        <ul className="tabs">
                            <li className='tab-left' >
                                <NavLink activeClassName="tablinks active cursor-pointer" exact className="" to="/" > Học Viên </NavLink>
                            </li>
                            <li className='tab-right'>
                                <NavLink  activeClassName="tablinks active cursor-pointer" to="/teacher"   > Giáo Viên </NavLink>    
                            </li>                           
                        </ul>
                        {/* <Routes/> */}
                         <Route path='/' exact component={Hv} />
                         <Route path='/teacher' exact component={Gv} />
                    </Router> 
                </div>
                <a class="login_manager" href="http://academy.ows.vn/manager">Bạn là quản lý đào tạo?</a>
            </div>
        )    
    }
}
export default BodyRight