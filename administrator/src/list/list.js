import React,{Component} from "react";
import { Pagination } from 'antd';
import "./list.css";
import axios from "axios";
export default class List extends Component{
    constructor(){
        super();
        this.state={
            array:[],
            current: 1,
            arr:0,
        }
    }
    objects=[];
    componentDidMount() {
        this.getData();
    
  }
   async getData(){
    let res=await axios.get('http://127.0.0.1:9999/date',{params:{
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
    this.getData();
  };
  getchange(e){
       console.log(e.target);
       e.target.contenteditable = true;
    //    let changs=document.createElement("input");

  }
  getup(e){
        let Elements=e.target.parentElement.parentElement;
        let Elementschild= Elements.firstChild;
        let Elementbother=Elementschild.nextSibling.nextSibling.nextSibling;
        let Elementbothertwo=Elementbother.nextSibling;
        let price=Elementbothertwo.nextSibling;
        let tablehidden=document.querySelector(".Hiddens");
        tablehidden.style.display="inline-block";
        this.objects.push(Elementbother);
        this.objects.push(Elementbothertwo);
        this.objects.push(price);
        console.log(this.objects);
      }
async   getdown(e){
      let Elements=e.target.parentElement.parentElement;
      let Elementschild= Elements.firstChild;
      let Elementbother=Elementschild.nextSibling.nextSibling.nextSibling;
        let Elementbothertwo=Elementbother.nextSibling;
        let price=Elementbothertwo.nextSibling;
      let res=await axios.get('http://127.0.0.1:9999/delete',{
        params:{
          ddates:Elementbother.innerHTML,
          adates:Elementbothertwo.innerHTML,
          pricess:price.innerHTML
        }
      }) 
      this.getData();
      
  }
  async senddatatwo(x,y,z,a,b,c){
    let res= await axios.get('http://127.0.0.1:9999/change',{params:{
      ddates:x,
      adates:y,
      pricess:z,
      yddates:a,
      yadates:b,
      ypricess:c
    }})
  }
  senddata(){
    let number10= document.querySelector(".inputone");
    let number11= document.querySelector(".inputtwo");
    let number12= document.querySelector(".inputthree");
    let input1=number10.value;
    let input2=number11.value;
    let input3=number12.value;
    console.log(input1,input2,input3);
    if(input1!=""&&input2!=""&&input3!=""){
      this.senddatatwo(input1,input2,input3,this.objects[0].innerHTML,
        this.objects[1].innerHTML,
        this.objects[2].innerHTML
        );
      this.objects[0].innerHTML=input1;
      this.objects[1].innerHTML=input2;
      this.objects[2].innerHTML=input3;
     
      this.objects=[];
      number10="";
      number11="";
      number12="";
      input1=" ";
      input2=" ";
      input3=" ";
      let tablehidden=document.querySelector(".Hiddens");
      tablehidden.style.display="none";
      
      
    }

    
  }
  quxiao(){
    let tablehidden=document.querySelector(".Hiddens");
    tablehidden.style.display="none";
  }
    render(){
        // console.log(this.state.arr)
        return(
            <div className="nameones">
            <table border={1}>
            <thead>
            <tr>
            <th>出发地</th>
            <th>目的地</th>
            <th>是否往返</th>
            <th>出发日期</th>
            <th>到达日期</th>
            <th>票价</th>
            <th>机场</th>
            <th>更新</th>
            <th>删除</th>

            </tr>
            </thead>
            <tbody >
              {this.state.array.map((item)=>{
                  return (
                      
                      <tr key={item.id}   onClick={this.getchange}>
                        <td>{item.departure}</td>
                        <td>{item.destination}</td>
                        <td>{item.round}</td>
                        <td>{item.ddata}</td>
                        <td>{item.adate}</td>
                        <td>{item.price}</td>
                        <td>{item.air_name}</td>
                        <td className="tdone"> <button type="button"  className="button2" onClick={this.getup.bind(this)}>修改</button></td>
                        <td><button type="button"  className="button1" onClick={this.getdown.bind(this)}>删除</button></td>
                      </tr>
                    
                  )
              })}
            </tbody>
              </table>
              <Pagination current={this.state.current}  onChange={this.onChange} total={this.state.arr} pageSize={10} simple={true} showQuickJumper={true} className="listts"/>
              
              <div className="Hiddens">
              <div className="neibu">
                    出发时间：<input type="text" className="inputone" />
                    到达时间：<input type="text" className="inputtwo" />
                    票价：<input type="text" className="inputthree" />
                    
              </div>
              <button type="button" className="submitss" onClick={this.quxiao.bind(this)}>取消</button>
              <button type="button" className="submits2" onClick={this.senddata.bind(this)}>提交</button>
              
              </div>
            </div>
            
        )
    }
}