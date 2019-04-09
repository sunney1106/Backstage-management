import React, { Component } from 'react';
import {Form, Icon, Input, Button, Checkbox,Card } from 'antd';
import '@/resource/style/login.css'
  

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        });
    }
    handLogin(){
        alert(1)
    }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Card className="login" title="BackStage Manage">
           <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                         rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                         <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                     )}
                </Form.Item>
                <Form.Item>
                     {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                     })(
                         <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
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
      </Card>
    );
  }
}

export default Form.create({})(Login);
