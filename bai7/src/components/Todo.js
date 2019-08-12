import React, { Component } from 'react';
import Job from './Jobs';
class Todo extends Component {
    render() {
        return (
            <div className={this.props.style} >
                <div className="wrapper-content-layout height-max">
                    <div className="manage-header">
                        <div className="header-content">
                            <span class="manage-title">Quản lý học viên</span>
                        </div>
                    </div>
                    <Job/>
                </div>
            </div>
        )
    }
}
export default Todo;