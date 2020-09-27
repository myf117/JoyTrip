import React,{Component} from "react";
import "./App.css";
import Login from "./login/login.js";
import { Link } from "react-router-dom"; 
export default class logins extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
            <Login history={this.props.history}/>
        </div> 
        )
          
    }
}