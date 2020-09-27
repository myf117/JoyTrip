import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from "axios";
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { Link } from "react-router-dom"; 
import './login.css';
import Password from "antd/lib/input/Password";
export default class login extends React.Component{
    constructor(){
        super();
        this.state={
          
        }
    }
 onFinish = values => {
          console.log('Received values of form: ', values);
        };   
    localin(){
        this.props.history.push({ pathname: "/First", query: { id: 89 } });
        
    }
    async loginss(){
        let username=document.querySelector(".ant-input").value;
         let password=document.querySelector("#normal_login_password").value;
         let res=await axios.post('http://127.0.0.1:9999/test',{
                username,
                password
         })
         let list=res.data;
         console.log(list);
         if(list[0].username=="admin"&&list[0].password=="123456i"){
            this.localin();
         }
         else{
             console.log(false);
         }
        }
    render(){
        return (
            <div  className="divbox">
            <Form   
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item    
                name="username"
                rules={[{ required: true, message: '请输入你的用户名' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名"  />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入你的密码' }]}
              >
                <Input 
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"  className="input1"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox locale={locale}>记住密码</Checkbox>
                </Form.Item>
        
                <a className="login-form-forgot" href="">
                  忘记密码
                </a>
              </Form.Item>
        
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.loginss.bind(this)}>
                  登录
                </Button>
              </Form.Item>
            </Form>
            </div>
          ); 
     }
    }
