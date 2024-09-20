import React, { useState, startTransition } from 'react';
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        // 处理注册逻辑
        if (password !== confirmPassword) {
            alert('密码不匹配');
            return;
        }
        console.log('Register with username:', username, 'and password:', password);
    };

    const handelGoLogin = () => {
        console.log('handelGoLogin')
        startTransition(() => {
            navigate(`/login`)
        })

    }

    return (
        <div className="container">
            <h2>注册</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="username">用户名</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">密码</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label htmlFor="confirm-password">确认密码</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit">注册</button>
                <p>已有账号？ <span
                    onClick={handelGoLogin}
                >
                    登录</span></p>
            </form>
        </div>
    );
};

export default RegisterPage;