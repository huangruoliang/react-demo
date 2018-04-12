import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import { List, Button, InputItem, WhiteSpace, WingBlank } from 'antd-mobile'
import { login } from '../../redux/user.redux'

@connect(
    state => state.user,
    { login }
)
class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: '',
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register() {
        this.props.history.push('/register')
    }
    handleChange(key, value) {
        this.setState({
            [key]: value,
        })
    }
    handleLogin() {
        console.log(this.state)
        this.props.login(this.state)
    }

    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
      
                <Logo></Logo>
                <h2>{this.props.msg}</h2>
                <WingBlank>
                    <List>
                        <InputItem onChange={v => this.handleChange('user', v)}>用户</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem type='password' onChange={v => this.handleChange('password', v)}>密码</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.handleLogin} type='primary'>登陆</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login
