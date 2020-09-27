import React,{Component} from "react";
import "./airadd.css";
import axios from "axios";
export default class airadd extends Component{
    constructor(){
        super();
    this.state={
        
    }
    }
    async information(){
        let departadd=document.querySelector(".departadd");
        let destinative=document.querySelector(".destinative");
        let rounds=document.querySelector(".rounds");
        let ddates=document.querySelector(".ddates");
        let adates=document.querySelector(".adates");
        let childs=document.querySelector(".childs");
        let prices=document.querySelector(".prices");
        let yuprices=document.querySelector(".yuprices");
        let airplans=document.querySelector(".airplans");
        let res=await axios.get('http://127.0.0.1:9999/tijiaos',{
            params:{
                a:departadd.value,
                b:destinative.value,
                c:rounds.value,
                d:ddates.value,
                e:adates.value,
                f:childs.value,
                g:prices.value,
                h:yuprices.value,
                is:airplans.value
            }
        })
        departadd.value='';
        destinative.value='';
        rounds.value='';
        ddates.value='';
        adates.value='';
        childs.value='';
        prices.value='';
        yuprices.value='';
        airplans.value='';
    }
    resertss(){
        let departadd=document.querySelector(".departadd");
        let destinative=document.querySelector(".destinative");
        let rounds=document.querySelector(".rounds");
        let ddates=document.querySelector(".ddates");
        let adates=document.querySelector(".adates");
        let childs=document.querySelector(".childs");
        let prices=document.querySelector(".prices");
        let yuprices=document.querySelector(".yuprices");
        let airplans=document.querySelector(".airplans");
        departadd.value='';
        destinative.value='';
        rounds.value='';
        ddates.value='';
        adates.value='';
        childs.value='';
        prices.value='';
        yuprices.value='';
        airplans.value='';
    }
    render(){
        return(
            <div>
            <div className="airaddones">
                出发地：<input type="text" className="departadd" />
                目的地：<input type="text" className="destinative" />
                是否往返：<input type="text" className="rounds" />
                出发日期：<input type="text" className="ddates" />
                到达日期：<input type="text" className="adates" />
                是否携带儿童：<input type="text" className="childs" />
                票价：<input type="text" className="prices" />
                余票：<input type="text" className="yuprices" />
                机票：<input type="text" className="airplans" />
            </div>
                <button type="button" className="submitts" onClick={this.resertss.bind(this)}>重置</button>
                <button type="button" className="submitt2" onClick={this.information.bind(this)}>提交</button>
            </div>
        )
    }
}