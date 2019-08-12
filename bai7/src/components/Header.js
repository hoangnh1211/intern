import React,{ Component} from 'react';
import '../Body.css';
class Header extends Component{
    render(){
        return(
          <header>   
            <div className="header width-80 ">
                <a className="header-logo" href="http://academy.ows.vn/">
                <img className="logo" src="http://academy.ows.vn/upload/logo/fd4fc2dd95735045987b522a134bafca.png?v=1542696445" alt="logo"></img>
                </a>
                <div className="header-support">
                    <span>Hotline: <span className="hotline"><b>1900 636 018</b></span></span>
                </div>
            </div>
          </header>
    )
    }
}
export default Header