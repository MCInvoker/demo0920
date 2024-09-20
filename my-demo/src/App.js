import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import GetRouter from './components/GetRouter';

function App () {
    return (
        <Router>
            <div>
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/login">登录</Link>
                        </li>
                        <li>
                            <Link to="/register">注册</Link>
                        </li>
                    </ul>
                </nav> */}

                <GetRouter />
            </div>
        </Router>
    );
}

export default App;