import '../Body.css';
import Couse from './Couse'
import React,{ Component} from 'react';

class Hv extends Component{
    render(){
        return(
            <div className="tab-pane fade in active tabcontent" style={divStyle} >
                
                    <div className="title-login text-center e_ajax_submit">Đăng nhập</div>
                    <div className="text-center">
                        <Couse class1='email-group' class2="header-input" class3="far fa-envelope icon-input" class4="username" name="username"  type="text" pl="Username" ></Couse>
                        <Couse class1='password-group' class2="header-input-pwd" class3="fas fa-lock icon-input" class4="password" name="password" type="password"  pl="Password" ></Couse>
                        <div className="remember-checkbox-wrapper">
                            <input type="checkbox" className="checkbox remember_me cha" name="remember"></input> 
                            <label className="cha1" >Ghi nhớ</label>
                        </div>
                        <button class="login-btn login cursor-pointer" name="login">
                            <a ClassName="text-center text-btn-login" href="/login" > ĐĂNG NHẬP </a>
                        </button>
                        <a class="login-w-gg" id="google" href="http://academy.ows.vn/site/google_api/index/student">
                        <div>
                            <span>
                                <img class="logo-gg" src="http://academy.ows.vn/assets/images/site/google.svg?v=1528442859" alt=""></img>
                            </span>
                            <span class="text-login-gg">Đăng nhập bằng Google</span>
                        </div>
                        </a>   
                    </div> 
                    <div class="text-center forget-pass">
                        <a id="forgot" href="http://academy.ows.vn/site/login/forgot_password/student" title="Click để yêu cầu lấy lại mật khẩu">
                            <p>Bạn gặp vấn đề khi đăng nhập?</p>
                        </a>
                    </div>
            </div> 
        )
    }
}

const divStyle = {
    border: "1px solid #f1f1f1"
  }
export default Hv;