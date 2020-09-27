import React,{Component} from "react";
import "./hotel.css";
import axios from "axios";
export default class airadd extends Component{
    constructor(){
        super();
    this.state={
        
    }
    }
    async informations(){
        let departadd=document.querySelector(".departadds");
        let destinative=document.querySelector(".destinatives");
        let rounds=document.querySelector(".roundss");
        let ddates=document.querySelector(".ddatess");
        let adates=document.querySelector(".adatess");
        let childs=document.querySelector(".childss");
        let prices=document.querySelector(".pricess");
        let res=await axios.get('http://127.0.0.1:9999/hoteladd',{
            params:{
                a:departadd.value,
                b:destinative.value,
                c:rounds.value,
                d:ddates.value,
                e:adates.value,
                f:childs.value,
                g:prices.value,
            }
        })
        departadd.value='';
        destinative.value='';
        rounds.value='';
        ddates.value='';
        adates.value='';
        childs.value='';
        prices.value='';
    }
    resertss(){
        let departadd=document.querySelector(".departadds");
        let destinative=document.querySelector(".destinatives");
        let rounds=document.querySelector(".roundss");
        let ddates=document.querySelector(".ddatess");
        let adates=document.querySelector(".adatess");
        let childs=document.querySelector(".childss");
        let prices=document.querySelector(".pricess");
        departadd.value='';
        destinative.value='';
        rounds.value='';
        ddates.value='';
        adates.value='';
        childs.value='';
        prices.value='';
    }
    render(){
        return(
            <div>
            <div className="airaddones">
                目的地：<input type="text" className="departadds" />
                酒店名：<input type="text" className="destinatives" />
                酒店价格：<input type="text" className="roundss" />
                酒店位置：<input type="text" className="ddatess" />
                性价比：<input type="text" className="adatess" />
                空房间：<input type="text" className="childss" />
                图片链接：<input type="text" className="pricess" />
            </div>
                <button type="button" className="submitts" onClick={this.resertss.bind(this)}>重置</button>
                <button type="button" className="submitt22" onClick={this.informations.bind(this)}>提交</button>
            </div>
        )
    }
}