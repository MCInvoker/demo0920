import React, { useState, startTransition } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // 处理登录逻辑
        console.log('Login with username:', username, 'and password:', password);
    };

    const handleGoRegister = () => {
        console.log('handleGoRegister')
        startTransition(() => {
            navigate(`/register`)
        })
    }

    return (
        <div className="container">
            <h2>登录</h2>
            <form onSubmit={handleLogin}>
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

                <div>
                    <label>
                        <input type="checkbox" name="remember" /> 记住我
                    </label>
                    {/* <a>忘记密码?</a> */}
                    <span>忘记密码?</span>
                </div>

                <button type="submit">登录</button>
                <p>还没有账号？
                    <span
                        onClick={handleGoRegister}
                    >
                        注册</span>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;