import React,{Component} from "react";
import { Pagination } from 'antd';
import "./hotelorder.css";
import axios from "axios";
export default class hotelorder extends Component{
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
        this.getDatahoteladd();
  }
   async getDatahoteladd(){
    let res=await axios.get('http://127.0.0.1:9999/hotelorders',{params:{
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
    this.getDatahoteladd();
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
        let Elementbother=Elementschild.nextSibling;
        let Elementbothertwo=Elementbother.nextSibling;
        let price=Elementbothertwo.nextSibling;
        let tablehidden=document.querySelector(".Hiddensshotel");
        tablehidden.style.display="inline-block";
        this.objectList.push(Elementbother);
        this.objectList.push(Elementbothertwo);
        this.objectList.push(price);
        console.log(this.objectList);
      }
//删除行
async   getdownshotel(e){
      let Elements=e.target.parentElement.parentElement;
      let Elementschild= Elements.firstChild;
      let Elementbother=Elementschild.nextSibling;
        let Elementbothertwo=Elementbother.nextSibling;
        let price=Elementbothertwo.nextSibling;
        console.log(Elementbother,Elementbothertwo,price);
      let res=await axios.get('http://127.0.0.1:9999/deleteshotels',{
        params:{
          ddates:Elementbother.innerHTML,
          adates:Elementbothertwo.innerHTML,
          pricess:price.innerHTML
        }
      }) 
      this.getDatahoteladd();
      
  }

async   hoteldatahotel(x,y,z,a,b,c){
    let res= await axios.get('http://127.0.0.1:9999/hotelorder',{params:{
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
    let number10= document.querySelector(".inputone1hotel");
    let number11= document.querySelector(".inputtwo2hotel");
    let number12= document.querySelector(".inputthree3hotel");
    let input1=number10.value;
    let input2=number11.value;
    let input3=number12.value;
    console.log(this.objectList);
    if(input1!=""&&input2!=""&&input3!=""){
        this.hoteldatahotel(input1,input2,input3,this.objectList[0].innerHTML,
            this.objectList[1].innerHTML,
            this.objectList[2].innerHTML
            );
            this.getDatahoteladd();
          this.objectList=[];
          number10="";
          number11="";
          number12="";
          input1=" ";
          input2=" ";
          input3=" ";
      let tablehidden=document.querySelector(".Hiddensshotel");
      tablehidden.style.display="none";
      
      
    }

    
  }
  quxiao(){
    let tablehidden=document.querySelector(".Hiddensshotel");
    tablehidden.style.display="none";
  }
    render(){
        // console.log(this.state.arr)
        return(
            <div className="nameoneairaddmansss">
            <table border={1}>
            <thead>
            <tr>
            {/* <th></th> */}
            <th>目的地</th>
            <th>入住日期</th>
            <th>入住时间</th>
            <th>入住人数</th>
            <th>使用者id</th>
            <th>是否处理</th>
            <th>入住房间数</th>
            <th>总价</th>
            <th>酒店名</th>
            <th>更新</th>
            <th>删除</th>
            </tr>
            </thead>
            <tbody >
              {this.state.array.map((item)=>{
                  return (
                      
                      <tr key={item.id}   onClick={this.getchange}>
                        <td>{item.destination}</td>
                        <td>{item.intime}</td>
                        <td>{item.dtime}</td>
                        <td>{item.num}</td>
                        <td>{item.user_id}</td>
                        <td>{item.hdeal}</td>
                        <td>{item.hcount}</td>
                        <td>{item.hsum}</td>
                        <td>{item.hname}</td>                    
                        <td className="tdone"> <button type="button"  className="button2ss" onClick={this.getups.bind(this)}>修改</button></td>
                        <td><button type="button"  className="button1ss" onClick={this.getdownshotel.bind(this)}>删除</button></td>
                      </tr>
                    
                  )
              })}
            </tbody>
              </table>
              <Pagination current={this.state.current}  onChange={this.onChange} total={this.state.arr} pageSize={10} simple={true} showQuickJumper={true} className="listts"/>
              
              <div className="Hiddensshotel">
              <div className="neibu">
                    入住日期：<input type="text" className="inputone1hotel" />
                    入住时间：<input type="text" className="inputtwo2hotel" />
                    入住人数：<input type="text" className="inputthree3hotel" />
                    
              </div>
              <button type="button" className="submitss" onClick={this.quxiao.bind(this)}>取消</button>
              <button type="button" className="submits2" onClick={this.sendhotel.bind(this)}>提交</button> 
              </div>
            </div>
            
        )
    }
}