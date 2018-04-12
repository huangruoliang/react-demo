import React from 'react'
import {Redirect} from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import { List, Button, InputItem, WhiteSpace, WingBlank, Radio } from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'

@connect(
    state => state.user,
    {register}
)
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            password: '',
            repeatpwd: '',
            type: 'genius'
        }

        this.handleRegister = this.handleRegister.bind(this)
    }

    handleChange(key, value) {
        this.setState({
            [key]: value,
        })
    }
    handleRegister() {
        console.log(this.state)
        this.props.register(this.state)
    }
    render() {

        const RadioItem = Radio.RadioItem;

        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo></Logo>
                <h2>{this.props.msg}</h2>
                <WingBlank>
                    <List>
                        <InputItem onChange={v => this.handleChange('user', v)}>用户</InputItem>
                        <InputItem type='password' onChange={v => this.handleChange('password', v)}>密码</InputItem>
                        <InputItem type='password'  onChange={v => this.handleChange('repeatpwd', v)}>确认密码</InputItem>
                        <RadioItem
                            checked={this.state.type === 'genius'}
                            onChange={() => this.handleChange('type', 'genius')}
                        >牛人</RadioItem>
                        <RadioItem
                            checked={this.state.type === 'boss'}
                            onChange={() => this.handleChange('type', 'boss')}
                        >Boss</RadioItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.handleRegister} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register
