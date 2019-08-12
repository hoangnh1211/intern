import React,{ Component} from 'react';
import '../Body.css';

class Lesson extends Component{
    render(){
        return(
            <li>
                <svg width="50" height="50" className="desc-item-img">
                    <circle cx="25" cy="25" r="20" fill="#ccc"></circle>
                </svg>
                <i className="material-icons">{this.props.icon}</i>  
                <span className="desc-item-wrapper">
                    <span className="li-title size-18"><b>{this.props.name1}</b></span>
                    <span className="li-subtitle size-14">{this.props.name2}</span>
                </span>
            </li>
        )
    }
}
export default Lesson;