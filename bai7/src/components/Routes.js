import React,{ Component} from 'react';
import {
    Route,
    Switch
  } from "react-router-dom";
import Hv from './Hv';
import Gv from './Gv';

const routers=[
    {
        path : '/',
        main : ()=><Hv/>
    },
    {
        path : '/student',
        main : ()=><Hv/>
    },
    {
        path : '/teacher',
        main : ()=><Gv/>
    }
]
class Routes extends Component{
    render(){
        return(
            <Switch>
                {this.ShowMenu(routers)}
            </Switch>
            
        )
    }
    ShowMenu=(routers)=>{
        var result=null;
        if (routers.length>0){
            result=routers.map((routers,index) =>{
                return(
                    <Route 
                        key={index}
                        path={routers.path}
                        exact
                        component={routers.main}
                    />
                )
            })
        } return result;
    }
}
export default Routes;