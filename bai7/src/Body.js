import React,{ Component} from 'react'; 
import './Body.css';
import BodyLeft from './components/BodyLeft';
import BodyRight from './components/BodyRight';
import Header from './components/Header';
import Footer from './components/footer';
class Body extends Component{
    render(){
        return(
            <body className="login-layout">
                <Header/>
                <div className="container container-login">
                    <BodyLeft/>
                    <BodyRight />  
                </div>
                <Footer/>
            </body>
        )
    }
}   
export default Body
