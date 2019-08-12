import React,{ Component} from 'react'; 
import './Body.css';
import HeaderLogin from './components/HeaderLongin';
import NavBar from './components/NavBar';
class BodyLogin extends Component{
    render(){
        return(
            <body className='login-layout'>
                <HeaderLogin/>
                <NavBar/>
            </body>

        )
    }
}   
export default BodyLogin
