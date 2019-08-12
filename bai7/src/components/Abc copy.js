import React, { Component } from 'react';
class Abc1 extends Component {
    render() {
        var {match}=this.props;
        var name=match.path;
        return (
            <div className={this.props.style} >
                <div className="wrapper-content-layout height-max">
                    <h2> đây là trang :{name}  </h2>
                </div>
            </div>
        )
    }
}
export default Abc1;