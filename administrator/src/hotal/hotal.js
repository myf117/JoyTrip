import React,{Component} from "react";
import { Pagination } from 'antd';
import "./hotal.css";
import axios from "axios";
export default class Hotel extends Component{
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
        this.getDatas();
  }
   async getDatas(){
    let res=await axios.get('http://127.0.0.1:9999/hotel',{params:{
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
    this.getDatas();
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
        let Elementbother=Elementschild.nextSibling.nextSibling.nextSibling;
        let Elementbothertwo=Elementbother.nextSibling.nextSibling;
        let price=Elementbothertwo.nextSibling;
        let tablehidden=document.querySelector(".Hiddenss");
        tablehidden.style.display="inline-block";
        this.objectList.push(Elementbother);
        this.objectList.push(Elementbothertwo);
        this.objectList.push(price);
        console.log(this.objectList);
      }
//删除行
async   getdowns(e){
      let Elements=e.target.parentElement.parentElement;
      let Elementschild= Elements.firstChild;
      let Elementbother=Elementschild.nextSibling.nextSibling.nextSibling;
        let Elementbothertwo=Elementbother.nextSibling.nextSibling;
        let price=Elementbothertwo.nextSibling;
      let res=await axios.get('http://127.0.0.1:9999/deletes',{
        params:{
          ddates:Elementbother.innerHTML,
          adates:Elementbothertwo.innerHTML,
          pricess:price.innerHTML
        }
      }) 
      this.getDatas();
      
  }

async   hoteldata(x,y,z,a,b,c){
    let res= await axios.get('http://127.0.0.1:9999/changess',{params:{
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
    let number10= document.querySelector(".inputone1");
    let number11= document.querySelector(".inputtwo2");
    let number12= document.querySelector(".inputthree3");
    let input1=number10.value;
    let input2=number11.value;
    let input3=number12.value;
    console.log(this.objectList);
    if(input1!=""&&input2!=""&&input3!=""){
        this.hoteldata(input1,input2,input3,this.objectList[0].innerHTML,
            this.objectList[1].innerHTML,
            this.objectList[2].innerHTML
            );
            this.getDatas();
          this.objectList=[];
          number10="";
          number11="";
          number12="";
          input1=" ";
          input2=" ";
          input3=" ";
      let tablehidden=document.querySelector(".Hiddenss");
      tablehidden.style.display="none";
      
      
    }

    
  }
  quxiao(){
    let tablehidden=document.querySelector(".Hiddenss");
    tablehidden.style.display="none";
  }
    render(){
        // console.log(this.state.arr)
        return(
            <div className="nameonesss">
            <table border={1}>
            <thead>
            <tr>
            <th>酒店id</th>
            <th>目的地</th>
            <th>酒店名</th>
            <th>价格</th>
            <th>位置</th>
            <th>性价比</th>
            <th>空房数</th>
            
            <th>更新</th>
            <th>删除</th>

            </tr>
            </thead>
            <tbody >
              {this.state.array.map((item)=>{
                  return (
                      
                      <tr key={item.id}   onClick={this.getchange}>
                        <td>{item.id}</td>
                        <td>{item.destination}</td>
                        <td>{item.hname}</td>
                        <td>{item.hprice}</td>
                        <td>{item.addtype}</td>
                        <td>{item.cost}</td>
                        <td>{item.emptyroom}</td>                       
                        <td className="tdone"> <button type="button"  className="button2" onClick={this.getups.bind(this)}>修改</button></td>
                        <td><button type="button"  className="button1" onClick={this.getdowns.bind(this)}>删除</button></td>
                      </tr>
                    
                  )
              })}
            </tbody>
              </table>
              <Pagination current={this.state.current}  onChange={this.onChange} total={this.state.arr} pageSize={10} simple={true} showQuickJumper={true} className="listts"/>
              
              <div className="Hiddenss">
              <div className="neibu">
                    房间价格：<input type="text" className="inputone1" />
                    性价比：<input type="text" className="inputtwo2" />
                    空房：<input type="text" className="inputthree3" />
                    
              </div>
              <button type="button" className="submitss" onClick={this.quxiao.bind(this)}>取消</button>
              <button type="button" className="submits2" onClick={this.sendhotel.bind(this)}>提交</button> 
              </div>
            </div>
            
        )
    }
}