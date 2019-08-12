import React, { Component } from 'react';
const d = 0;
class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            dem:0,
        };
    }
    count1 = () => {
        var d=this.state.dem+1;
        this.setState({
            dem: d
        });
    }
    componentDidMount() {
          fetch("https://jsonplaceholder.typicode.com/todos" )
            .then(response => response.json())
            .then(data => this.setState({ hits: data }));
            console.log(this.state.hits);
    }   
    render() {
        //  this.componentDidMount();
        const { hits } = this.state;
        console.log(hits);
        return (
            <div className="manage-content">
                <div className="manage-filter">
                    <div className="filter-row row-1">
                        <span className="sub-part "> Tổng số:200</span>
                    </div>
                </div>
                <div className="manage-table">
                    <span className="ajax-data-table">
                        <span className="content-table">
                            {this.Show(hits)}
                        </span>
                    </span>
                    
                </div>
            </div>

        )
    }
    Show = (menus) => {
        var result = null;
        var ad= null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                if (menu.completed === true) {
                    ad="completed";
                    // {this.count1}                    
                } else {
                    ad="uncompleted";
                }
                return (
                    <span className="content-row" >
                        <span className="content-col col-id" >{menu.id}</span>
                        <span className="content-col col-info-user">{menu.title}</span>
                        <span className="content-col program-info">{ad}</span>
                    </span>
                )

            })
        }
        return result;
    }
}
export default Job;