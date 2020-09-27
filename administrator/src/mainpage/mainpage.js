import React,{Component} from "react";
import "./mainpage.css";
import Adminer from "../adminer/adminer.js";


export default class mainpage extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){

        return(
            <div className="maginpage">
                <Adminer/>
               
            </div>
        )
    }
}