import React, { Component } from 'react';
import '../Body.css';
class HeaderLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "icon drop-down-arrow"
        }
    }
    addMore = () => {
        this.setState({
            class: "icon drop-down-arrow "
        });
    }
    addMore1= () => {
        this.setState({
            class: "icon drop-up-arrow "
        });
    }
    render() {
        return (
            <header className="main-header">
                <div class="logo">
                    <a href="http://academy.ows.vn/site/dashboard_manager">
                        <img class="img img_full" src="http://academy.ows.vn/upload/logo/fd4fc2dd95735045987b522a134bafca.png?v=1542696445" alt=" "></img>
                        <img class="img_mini" src="http://academy.ows.vn/assets/images/site/logo_mini.png" alt=""></img>
                    </a>
                </div>
                <div className="header-right">
                    <div className='notify'>
                        <a href="#" class="sp_notify">
                            <i class="material-icons icon-notify">notifications_none</i>
                        </a>
                    </div>
                    <div className="information-menu has-sub" onMouseOver={this.addMore1} onMouseOut={this.addMore}>
                        <a href="#">
                            <span className="avatar">
                                <i className="iconuser fas fa-user-circle"></i>
                            </span>
                            <span class="user-name"> UserName
                            </span>
                            <div class={this.state.class}></div>
                        </a>

                        <ul class="sub-menu">
                            <li class="sub-menu-items ">
                                <a href="#">
                                    <i class="material-icons">person</i>
                                    <span class="sub-item-text">Tài khoản của tôi</span>
                                </a>
                            </li>
                            <li class="sub-menu-items">
                                <a href="#">
                                    <i class="material-icons">power_settings_new</i>
                                    <span class="sub-item-text">Đăng xuất</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderLogin