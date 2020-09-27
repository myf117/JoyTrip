import React,{Component} from "react";
import "./adminer.css";
import { Menu, Switch } from 'antd';
import List from "../list/list.js";
import Hotal from "../hotal/hotal.js";
import Airplanadd from "../selectairplan/selectairplan.js";
import Manager from "../manager/manager.js";
import Airadd from "../airadd/airadd.js";
import Hotaladd from "../hoteladd/hoteladd.js";
import Hotelorder from "../hotelorder/hotelorder.js";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
export default class adminer extends Component{
    constructor(){
        super();
        this.state={
            theme: 'dark',
            current: '1',
        }    
    }
    changeTheme = value => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      };
    
      handleClick = e => {
        console.log(e.key);
        let divlist=document.querySelector(".divList");
        let divlist2=document.querySelector(".divList1");
        // let divlist3=document.querySelector(".divList2");
        let divlist4=document.querySelector(".divList3");
        let divlist5=document.querySelector(".divList4");
        let divlist6=document.querySelector(".divList5");
        let divlist7=document.querySelector(".divList8");
        let divlist8=document.querySelector(".divList9");
        divlist.style.display="none";
        divlist2.style.display="none";
        // divlist3.style.display="none";
        divlist4.style.display="none";
        divlist5.style.display="none";
        divlist6.style.display="none";
        divlist7.style.display="none";
        divlist8.style.display="none";
        if(e.key==1){
          divlist.style.display="inline-block";
        }else if(e.key==2){
          divlist2.style.display="inline-block"
        }else if(e.key==3){
          // divlist3.style.display="inline-block"
        }else if(e.key==4){
          // divlist4.style.display="inline-block"
        }else if(e.key==5){
          divlist5.style.display="inline-block"
        }else if(e.key==6){
          // divlist6.style.display="inline-block"
        }else if(e.key==7){
          divlist4.style.display="inline-block"
        }else if(e.key==8){
          divlist6.style.display="inline-block"
        }else if(e.key==9){
          divlist7.style.display="inline-block"
        }else if(e.key==10){
          divlist8.style.display="inline-block"
        };
        this.setState({
          current: e.key,
        });
        // console.log(this.state.current);
      };
      changess(e){
        
        // console.log(e.target);
        // Listss.style.display="none"
      }
    render(){
        return (
            <div className="classdiv">
              {/* <Switch
                checked={this.state.theme === 'dark'}
                onChange={this.changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
              /> */}
              <br />
              <br />
              <Menu
                theme={this.state.theme}
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[this.state.current]}
                mode="inline"
              >
                {/* onClick={this.getchar.bind(this)} */}
                <SubMenu key="sub1" icon={<MailOutlined />} title="出行管理">
                  <Menu.Item key="1">航班</Menu.Item>
                  <Menu.Item key="2">酒店</Menu.Item>
                  {/* <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item> */}
                   <SubMenu key="sub3" title="预定">
                    <Menu.Item key="7">航班预定</Menu.Item>
                    <Menu.Item key="8">酒店预定</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="管理员信息管理">
                  <Menu.Item key="5">管理员信息</Menu.Item>
                  {/* <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 6</Menu.Item> */}
                 
                </SubMenu>
                <SubMenu key="sub4" icon={<SettingOutlined />} title="信息添加">
                  <Menu.Item key="9">航班添加</Menu.Item>
                  <Menu.Item key="10">酒店添加</Menu.Item>
                </SubMenu>
              </Menu>
             <div className="divList"><List/></div>
             <div className="divList1"><Hotal/></div>
             {/* <div className="divList2">22222222</div>*/}
             <div className="divList3"><Airplanadd/></div> 
             <div className="divList4"><Manager/></div>
             <div className="divList5"><Hotelorder/></div>
             <div className="divList8"><Airadd/></div>
             <div className="divList9"><Hotaladd/></div>
            </div>
          );
        
    }
}