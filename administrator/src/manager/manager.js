import React,{Component} from "react";
import { Pagination } from 'antd';
import "./manager.css";
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
    let res=await axios.get('http://127.0.0.1:9999/manager',{params:{
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
  getupsadmin(e){
        let Elements=e.target.parentElement.parentElement;
        let Elementschild= Elements.firstChild;
        let Elementbother=Elementschild.nextSibling;
        let Elementbothertwo=Elementbother.nextSibling;
        let price=Elementbothertwo.nextSibling;
        let tablehidden=document.querySelector(".Hiddenadmin");
        tablehidden.style.display="inline-block";
        this.objectList.push(Elementbother);
        this.objectList.push(Elementbothertwo);
        this.objectList.push(price);
        console.log(this.objectList);
      }
//删除行
async   getdownadmin(e){
      let Elements=e.target.parentElement.parentElement;
      let Elementschild= Elements.firstChild;
      let Elementbother=Elementschild.nextSibling;
        let Elementbothertwo=Elementbother.nextSibling;
        let price=Elementbothertwo.nextSibling;
      let res=await axios.get('http://127.0.0.1:9999/deletesmanager',{
        params:{
          ddates:Elementbother.innerHTML,
          adates:Elementbothertwo.innerHTML,
          pricess:price.innerHTML
        }
      }) 
      this.getDatas();
      
  }

async   admindata(x,y,z,a,b,c){
    let res= await axios.get('http://127.0.0.1:9999/changeadmin',{params:{
      ddates:x,
      adates:y,
      pricess:z,
      yddates:a,
      yadates:b,
      ypricess:c
    }})
  }
//改变数据
    sendadmin(){
    console.log(1);
    let number10= document.querySelector(".inputoneadmin1");
    let number11= document.querySelector(".inputtwoadmin2");
    let number12= document.querySelector(".inputthreeadmin3");
    let input1=number10.value;
    let input2=number11.value;
    let input3=number12.value;
    console.log(this.objectList);
    if(input1!=""&&input2!=""&&input3!=""){
        this.admindata(input1,input2,input3,this.objectList[0].innerHTML,
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
      let tablehidden=document.querySelector(".Hiddenadmin");
      tablehidden.style.display="none";
      
      
    }

    
  }
  quxiao(){
    let tablehidden=document.querySelector(".Hiddenadmin");
    tablehidden.style.display="none";
  }
    render(){
        // console.log(this.state.arr)
        return(
            <div className="nameoneadmin">
            <table border={1}>
            <thead>
            <tr>
            <th>管理员id</th>
            <th>管理员姓名</th>
            <th>用户名</th>
            <th>密码</th>
            <th>更新</th>
            <th>删除</th>
            </tr>
            </thead>
            <tbody >
              {this.state.array.map((item)=>{
                  return (
                      
                      <tr key={item.id}   onClick={this.getchange}>
                        <td>{item.id}</td>
                        <td>{item.admin}</td>
                        <td>{item.username}</td>
                        <td>{item.password}</td>                     
                        <td className="tdone"> <button type="button"  className="button2" onClick={this.getupsadmin.bind(this)}>修改</button></td>
                        <td><button type="button"  className="button1" onClick={this.getdownadmin.bind(this)}>删除</button></td>
                      </tr>
                    
                  )
              })}
            </tbody>
              </table>
              <Pagination current={this.state.current}  onChange={this.onChange} total={this.state.arr} pageSize={10} simple={true} showQuickJumper={true} className="listts"/>
              
              <div className="Hiddenadmin">
              <div className="neibu">
                    管理者名：<input type="text" className="inputoneadmin1" />
                    用户名：<input type="text" className="inputtwoadmin2" />
                    密码：<input type="text" className="inputthreeadmin3" />
                    
              </div>
              <button type="button" className="submitss" onClick={this.quxiao.bind(this)}>取消</button>
              <button type="button" className="submits2" onClick={this.sendadmin.bind(this)}>提交</button> 
              </div>
            </div>
            
        )
    }
}