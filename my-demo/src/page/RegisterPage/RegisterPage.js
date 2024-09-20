import React, { useState, startTransition } from 'react';
import { Button, Form, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleRegister = async (values) => {
        console.log(values);
        // Mock 数据验证
        if (values.password === values.confirmPassword) {
            try {
                const response = await fetch('/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                const result = await response.json();
                if (result.code === 200) {
                    message.success(result.message);
                    startTransition(() => {
                        navigate('/login');
                    })
                } else {
                    message.error(result.message);
                }
            } catch (error) {
                console.error('Error during registration:', error);
                message.error('注册失败，请稍后再试！');
            }
        } else {
            message.error('两次输入的密码不一致！');
        }
    };

    return (
        <div className="register-container">
            <Form
                form={form}
                name="normal_register"
                className="register-form"
                onFinish={handleRegister}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    rules={[{ required: true, message: '请再次输入密码!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="register-form-button">
                        注册
                    </Button>
                    或者 <a href="/login">登录</a>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegisterPage;