import React,{ Component} from 'react';
import '../Body.css'
class Couse extends Component{
    render(){
    //    return  React.createElement('div',{className:this.props.class1},
    //             React.createElement('div',{className:this.props.class2},React.createElement('i',{className:this.props.class3},'')) ,
    //              React.createElement('input',{className:this.props.class4,name:this.props.name,type:this.props.type,placeholder:this.props.pl }) 
    //     )
       return(
                <div className={this.props.class1} >
                    <div className={this.props.class2} >
                        <i  className={this.props.class3}></i>
                    </div>
                    <input className={this.props.class4} name={this.props.name} type={this.props.type} placeholder={this.props.pl } >
                    </input>
                </div>
        )
        
    }
}
export default Couse;