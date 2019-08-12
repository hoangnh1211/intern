import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, NavLink, Switch
} from "react-router-dom";
import Abc1 from './Abc copy';
import Tab from './Tab';
import Todo from './Todo';
const MenuLink = ({ label, icon, to, activateOnlyWhenexact, classF, classT }) => {
    return (
        <Route path={to} exact={activateOnlyWhenexact} children={({ match }) => {
            var active = match ? classT : classF;
            return (
                <li class={active}>
                    <NavLink to={to} title={label}>
                        <i class="material-icons item-icons">{icon}</i>
                        <span class="item-text">{label}</span>
                    </NavLink>
                </li>
            )
        }} />
    )
}

const menusKH = [
    {
        name: 'Quản lý lớp',
        to: '/login/qlL',
        icon: 'eassignment_ind',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    },
    {
        name: 'Quản lý khóa học',
        to: '/login/qlKH',
        icon: 'local_library',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    }
]
const menuLH = [
    {
        name: 'Quản lý lớp trực tuyến',
        to: '/login/qlTT',
        icon: 'event_available',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    },
    {
        name: 'Lịch dạy trực tuyến',
        to: '/login/ldTT',
        icon: 'computer',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    }
]
const menuHL = [
    {
        name: 'Quản lý danh mục',
        to: '/login/qlDM',
        icon: 'loyalty',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    },
    {
        name: 'Danh sách môn học',
        to: '/login/dsMH',
        icon: 'library_books',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    }
]
const menuTK = [
    {
        name: 'Báo cáo cá nhân',
        to: '/login/bcCN',
        icon: 'pie_chart',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    },
    {
        name: 'Báo cáo chức danh',
        to: '/login/bcCD',
        icon: 'pie_chart',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    }
]
const menuTT = [
    {
        name: 'Báo cáo buổi học trực tuyến',
        to: '/login/bcBHTT',
        icon: 'insert_chart',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    },
    {
        name: 'HV vào muộn',
        to: '/login/hvM',
        icon: 'person',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    }
]
const menuQLCC = [
    {
        name: 'Phôi chứng chỉ',
        to: '/login/PCC',
        icon: 'brightness_low',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    },
    {
        name: 'Chứng chỉ chương trình',
        to: '/login/CCCT',
        icon: 'chrome_reader_mode',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    }
]
const menuCDHT = [
    {
        name: 'Cấu hình mẫu Email',
        to: '/login/CHME',
        icon: 'settings',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    },
    {
        name: 'Cài đặt thông báo hệ thống',
        to: '/login/TBHT',
        icon: 'settings_applications',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    }
]
const menuND = [
    {
        name: 'Quản lý học viên',
        to: '/login/HV',
        icon: 'person',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    },
    {
        name: 'Quản lý giáo viên',
        to: '/login/GV',
        icon: 'account_circle',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    }
]
const menuXD = [
    {
        name: 'Yêu cầu đăng ký khóa học',
        to: '/login/dkKH',
        icon: 'playlist_add',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    },
    {
        name: 'Lịch sử nghỉ',
        to: '/login/LNH',
        icon: 'videocam_off',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    }
]
const menuBTCH = [
    {
        name: 'Danh sách câu hỏi',
        to: '/login/dsCH',
        icon: 'live_help',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    },
    {
        name: 'Danh sách đề thi',
        to: '/login/dsDT',
        icon: 'spellcheck',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    }
]
const menuQLKS = [
    {
        name: 'Quản lý mẫu khảo sát',
        to: '/login/qlMKS',
        icon: 'assignment_turned_in',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    },
    {
        name: 'Khảo sát chương trình',
        to: '/login/ksCT',
        icon: 'assignment_turned_in',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    }
]
const menuTTSK = [
    {
        name: 'Tin tức',
        to: '/login/TT',
        icon: 'fiber_new',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    },
    {
        name: 'Sự kiện',
        to: '/login/SK',
        icon: 'date_range',
        classF: "sub-menu-items",
        classT: "sub-menu-items active",
    }
]
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "nav nav-list menu_fixed close ",
            name:"side-menu ",
            class:"content-layout",
            text1:"menu-items has-sub",
            dem:0
        }
    }
    addMore = () => {
        if (this.state.name === "side-menu ") {
            this.setState({
                text: "nav nav-list menu_fixed",
                name:"side-menu close",
                class:"content-layout1 "
            });
        } else {
            this.setState({
                text: "nav nav-list menu_fixed ",
                name:"side-menu ",
                class:"content-layout"
            });
        }
    }
    change2 = () => {
        if (this.state.dem<1){
            var d=this.setState.dem+1;
            if (this.state.text==="menu-items has-sub show active"){
                this.setState({
                    text1: "menu-items has-sub show ",
                });
            }
            if (this.state.text==="menu-items has-sub active"){
                this.setState({
                    text1: "menu-items has-sub",
                });
            }
            this.setState({
                dem:d
            });
        }
          
    }
    render() {
        return (
            <Router>
                {this.change2}
                <div className="container " key="site-container">
                    <nav className={this.state.name}>
                        <ul className="nav nav-list site-enscroll" >
                            <MenuLink label="Dashboard" icon="equalizer" to="/login" activateOnlyWhenexact={true} classT="menu-items active" classF="menu-items" />
                            <MenuLink label="Danh sách chương trình" icon="elibrary_books" to="/login/ds" activateOnlyWhenexact={false} classT="menu-items active" classF="menu-items" />
                            <Tab label="quản lý khóa học" class={this.state.text1} add={this.change2} icon="local_library" menu={menusKH} />
                            <Tab label="Lớp học" class={this.state.text1} add={this.addMore1}  icon="voice_chat" menu={menuLH} />
                            <Tab label="Quản lý học liệu"class={this.state.text1} add={this.addMore1}  icon="assignment" menu={menuHL} />
                            <Tab label="Báo cáo thống kê" class={this.state.text1} add={this.addMore1} icon="insert_chart" menu={menuTK} />
                            <Tab label="Báo cáo trực tuyến" icon="insert_chart" menu={menuTT} class={this.state.text1} add={this.addMore1} />
                            <Tab label="Quản lý người dùng" icon="group" menu={menuND} class={this.state.text1} add={this.addMore1} />
                            <Tab label="Thông tin xét duyệt" icon="playlist_add" menu={menuXD} class={this.state.text1} add={this.addMore1} />
                            <Tab label="Quản lý bài thi, câu hỏi" icon="content_paste" menu={menuBTCH} class={this.state.text1} add={this.addMore1}  />
                            <Tab label="Quản lý khảo sát" icon="assignment_turned_in" menu={menuQLKS} class={this.state.text1} add={this.addMore1} />
                            <Tab label="Thông tin sự kiện" icon="forum" menu={menuTTSK}class={this.state.text1} add={this.addMore1}  />
                            <MenuLink label="Lộ trình công danh" icon="timeline" to="/login/lt" activateOnlyWhenexact={false} classT="menu-items active" classF="menu-items"   />
                            <Tab label="Quản lý chứng chỉ" icon="chrome_reader_mode" menu={menuQLCC} class={this.state.text1} add={this.addMore1} />
                            <Tab label="Cài đặt hệ thống" icon="settings" menu={menuCDHT} class={this.state.text1} add={this.addMore1} />
                        </ul>
                        <ul className={this.state.text}  >
                            <li className="menu-items hide-menu" id="menu" onClick={this.addMore} >
                                <NavLink href="#" title="Đóng/mở menu" onClick={this.addMore}>
                                    <i className="material-icons item-icons">fast_rewind</i>
                                    <span className="item-text">Thu gọn menu</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/login" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/ds" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/lt" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/qlL" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/qlKH" exact  render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/qlTT" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/ldTT" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/qlDM" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/dsMH" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/bcCN" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/bcCD" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/bcBHTT" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/hvM" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/PCC" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/CCCt" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/CHME" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/TBHT" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/HV" exact render={props => <Todo {...props} style={this.state.class}  />} />
                        <Route path="/login/GV" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/dkKH" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/LNH" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/dsCH" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/dsDT" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/qlMKS" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/ksCT" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/TT" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                        <Route path="/login/SK" exact render={props => <Abc1 {...props} style={this.state.class}  />} />
                    </Switch>
                </div>

            </Router>
        )
    }
}
export default NavBar;