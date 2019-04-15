import React, { Component } from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import '@/resource/style/login.css'
  

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        });
    }
   
    handUser = (e) =>{
        this.setState({
            userName : e.target.value
        })
    }
    handPassword = (e)=>{
        this.setState({
            password : e.target.value
        })
    }

    handLogin = () =>{
    var userName = this.state.userName;
    var password = this.state.password;
    var reg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
    if(userName !== undefined && reg.test(password) && password !== undefined){
        this.props.history.push('./admin/home')
    }else{
        return
    }
    }



  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login" >
        <div className = "login_header">Background</div>
           <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                         rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                         <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" onChange={this.handUser} />
                     )}
                </Form.Item>
                <Form.Item>
                     {getFieldDecorator('password', {
                        rules: [
                            { required: true, message: 'Please input your Password!',pattern:/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/,max:12,min:6 }
                    ],
                     })(
                         <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"  onChange={this.handPassword} />
                     )}
                </Form.Item>
                <Form.Item>
                     {getFieldDecorator('remember', {
                         valuePropName: 'checked',
                         initialValue: true,
                    })(
                    <Checkbox>Remember me</Checkbox>
                )}
                    <Button type="primary"  className="login-form-button" onClick={this.handLogin.bind()}>
                     Log in
                    </Button>
                </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create({})(Login);
