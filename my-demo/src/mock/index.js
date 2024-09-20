import Mock from 'mockjs';

Mock.setup({
    timeout: '350-600'
});

Mock.mock(/\/login/, 'post', () => {
    return {
        code: 200,
        message: '登录成功',
        data: {
            token: 'mock-token'
        }
    };
});

Mock.mock(/\/register/, 'post', () => {
    return {
        code: 200,
        message: '注册成功',
        data: {
            token: 'mock-token'
        }
    };
});