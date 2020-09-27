import React,{Component} from "react";
import { Pagination } from 'antd';
import "./selectairplan.css";
import axios from "axios";
export default class airplansorder extends Component{
    constructor(){
        super();
        this.state={
            array:[],
            current: 1,
            arr:0            
        }
    }
    objectList=[];
      //需要改变名称
    componentDidMount() {
        this.getDataairadd();
  }
   async getDataairadd(){
    let res=await axios.get('http://127.0.0.1:9999/airplanselect',{params:{
        current:this.state.current
    }});
    // console.log(res.data.lists.length);
    this.setState({
        array:res.data.list,
        arr:res.data.len
    })
    // console.log(this.state.array);
  }
   
  onChange = (page,pageSize) => {
    // console.log(page);
    console.log(pageSize);
    this.setState({
      current: page,
    });
    this.getDataairadd();
  };
  getchange(e){
       console.log(e.target);
       e.target.contenteditable = true;
    //    let changs=document.createElement("input");

  }
  //修改
  getups(e){
        let Elements=e.target.parentElement.parentElement;
        let Elementschild= Elements.firstChild;
        let Elementbother=Elementschild.nextSibling.nextSibling;
        let Elementbothertwo=Elementbother.nextSibling;
        let price=Elementbothertwo.nextSibling.nextSibling;
        let tablehidden=document.querySelector(".Hiddenssairplans");
        tablehidden.style.display="inline-block";
        this.objectList.push(Elementbother);
        this.objectList.push(Elementbothertwo);
        this.objectList.push(price);
        console.log(this.objectList);
      }
//删除行
async   getdownsairplan(e){
      let Elements=e.target.parentElement.parentElement;
      let Elementschild= Elements.firstChild;
      let Elementbother=Elementschild.nextSibling.nextSibling;
        let Elementbothertwo=Elementbother.nextSibling;
        let price=Elementbothertwo.nextSibling.nextSibling;
        console.log(Elementbother,Elementbothertwo,price);
      let res=await axios.get('http://127.0.0.1:9999/deletesairplans',{
        params:{
          ddates:Elementbother.innerHTML,
          adates:Elementbothertwo.innerHTML,
          pricess:price.innerHTML
        }
      }) 
      this.getDataairadd();
      
  }

async   hoteldataairplan(x,y,z,a,b,c){
    let res= await axios.get('http://127.0.0.1:9999/changeairplan',{params:{
      ddates:x,
      adates:y,
      pricess:z,
      yddates:a,
      yadates:b,
      ypricess:c
    }})
  }
//改变数据
    sendhotel(){
    console.log(1);
    let number10= document.querySelector(".inputone1airplans");
    let number11= document.querySelector(".inputtwo2airplans");
    let number12= document.querySelector(".inputthree3airplans");
    let input1=number10.value;
    let input2=number11.value;
    let input3=number12.value;
    console.log(this.objectList);
    if(input1!=""&&input2!=""&&input3!=""){
        this.hoteldataairplan(input1,input2,input3,this.objectList[0].innerHTML,
            this.objectList[1].innerHTML,
            this.objectList[2].innerHTML
            );
            this.getDataairadd();
          this.objectList=[];
          number10="";
          number11="";
          number12="";
          input1=" ";
          input2=" ";
          input3=" ";
      let tablehidden=document.querySelector(".Hiddenssairplans");
      tablehidden.style.display="none";
      
      
    }

    
  }
  quxiao(){
    let tablehidden=document.querySelector(".Hiddenssairplans");
    tablehidden.style.display="none";
  }
    render(){
        // console.log(this.state.arr)
        return(
            <div className="nameoneairaddmans">
            <table border={1}>
            <thead>
            <tr>
            {/* <th></th> */}
            <th>目的地</th>
            <th>是否往返</th>
            <th>出发日期</th>
            <th>到达日期</th>
            <th>孩童</th>
            <th>价格</th>
            <th>总票数</th>
            <th>总价</th>
            <th>是否处理</th>
            <th>出发地</th>
            <th>更新</th>
            <th>删除</th>
            </tr>
            </thead>
            <tbody >
              {this.state.array.map((item)=>{
                  return (
                      
                      <tr key={item.id}   onClick={this.getchange}>
                        <td>{item.destination}</td>
                        <td>{item.round}</td>
                        <td>{item.ddate}</td>
                        <td>{item.adate}</td>
                        <td>{item.child}</td>
                        <td>{item.aprice}</td>
                        <td>{item.acount}</td>
                        <td>{item.asum}</td>
                        <td>{item.adeal}</td>
                        <td>{item.departure}</td>                       
                        <td className="tdone"> <button type="button"  className="button2s" onClick={this.getups.bind(this)}>修改</button></td>
                        <td><button type="button"  className="button1s" onClick={this.getdownsairplan.bind(this)}>删除</button></td>
                      </tr>
                    
                  )
              })}
            </tbody>
              </table>
              <Pagination current={this.state.current}  onChange={this.onChange} total={this.state.arr} pageSize={10} simple={true} showQuickJumper={true} className="listts"/>
              
              <div className="Hiddenssairplans">
              <div className="neibu">
                    出发时间：<input type="text" className="inputone1airplans" />
                    到达时间：<input type="text" className="inputtwo2airplans" />
                    价格：<input type="text" className="inputthree3airplans" />
                    
              </div>
              <button type="button" className="submitss" onClick={this.quxiao.bind(this)}>取消</button>
              <button type="button" className="submits2" onClick={this.sendhotel.bind(this)}>提交</button> 
              </div>
            </div>
            
        )
    }
}