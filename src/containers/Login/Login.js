import React from 'react'
import Logo from '../../components/Logo/Logo'
import {List,Button,InputItem,WhiteSpace,WingBlank} from 'antd-mobile'
class Login extends React.Component {

    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
    }
    register() {
        console.log(2323)
        this.props.history.push('/register')
    }


    render() {
        return (
            <div>
                <Logo></Logo>
                <h2>登陆</h2>
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button type='primary'>登陆</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login
