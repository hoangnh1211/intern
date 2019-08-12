import React, { Component } from 'react';
import {
    Route, NavLink, Link
} from "react-router-dom";

const MenuLink = ({ onVideoSelect, offVideoSelect,offVideoSelect1, label, icon, to, classF, classT }) => {
    return (
        <Route path={to} children={({ match }) => {
            var active = match ? classT : classF;
           
            if (active === classT) onVideoSelect();
            if (active=== classF) offVideoSelect();
            // offVideoSelect1();
            return (
                <li class={active}   >
                    <NavLink to={to} title={label} onClick={offVideoSelect} >
                        <i class="material-icons item-icons">{icon}</i>
                        <span class="item-text">{label}</span>
                    </NavLink>
                </li>
            )
        }
        } />
    )
} 
const d={
    de:0}
class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'menu-items has-sub',
            dem: 0
        }
    }

    change = () => {
        if (this.state.text != "menu-items has-sub show active") {
            this.setState({
                text: "menu-items has-sub show active",
            });
        }
        d.de=d.de+1;
    }
    change2 = () => {
        d.de=d.de-1;
    }
    // change3 = () => {
    //     if (d.de%10=0){
    //         if (this.state.text === "menu-items has-sub show active") {
    //             this.setState({
    //                 text: "menu-items has-sub show"
    //             });
    //         }
    //         if (this.state.text === "menu-items has-sub active") {
    //             this.setState({
    //                 text: "menu-items has-sub"
    //             });
    //         }
    //     }    
    // }
    addMore = () => {
        if (this.state.text === "menu-items has-sub show active") {
            this.setState({
                text: "menu-items has-sub active"
            });
        }
        if (this.state.text === "menu-items has-sub active") {
            this.setState({
                text: "menu-items has-sub show active"
            });
        }
        if (this.state.text === "menu-items has-sub") {
            this.setState({
                text: "menu-items has-sub show"
            });
        }
        if (this.state.text === "menu-items has-sub show") {
            this.setState({
                text: "menu-items has-sub"
            });
        }
    }
    render() {
        return (
            <Route path={this.props.to} children={({ match }) => {
                // if (active2 === "false") {
                //     var active1;
                //     if (this.state.text==="menu-items has-sub show active") active1="menu-items has-sub show";
                //     if (this.state.text==="menu-items has-sub active") active1="menu-items has-sub";
                //     if (this.state.text==="menu-items has-sub") active1="menu-items has-sub";
                //     return (
                //         <li className={active1}  >
                //             <Link to={this.props.to} title="this" onClick={this.addMore} >
                //                 <i class="material-icons item-icons">{this.props.icon}</i>
                //                 <span class="item-text">{this.props.label}</span>
                //                 <div class="arrow drop-arrow"></div>
                //             </Link>
                //             <ul className="submenu">
                //                 {this.Show(this.props.menu)}
                //             </ul>
                //         </li>
                //     )
                // }
                console.log(this.state.text)
                // if (match != null) 
                {
                    return (
                        <li className={this.state.text  }  >
                            
                            <Link to={this.props.to} title="this" onClick={this.addMore} >
                                <i class="material-icons item-icons">{this.props.icon}</i>
                                <span class="item-text">{this.props.label}</span>
                                <div class="arrow drop-arrow"></div>
                            </Link>
                            <ul className="submenu">
                                {this.Show(this.props.menu)}
                            </ul>
                        </li>
                    )
                }
            }} />
        )
    }
    Show = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        onVideoSelect={this.change}
                        offVideoSelect={this.change2}
                        offVideoSelect1={this.change3}
                        key={index}
                        label={menu.name}
                        icon={menu.icon}
                        to={menu.to}
                        classT={menu.classT}
                        classF={menu.classF} />
                )

            })
        }
        return result;
    }
}

export default Tab;