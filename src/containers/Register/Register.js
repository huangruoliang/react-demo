import React from 'react'
import Logo from '../../components/Logo/Logo'
import {List,Button,InputItem,WhiteSpace,WingBlank,Radio} from 'antd-mobile'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'genius'
        }
    } 
    render() {

        const RadioItem = Radio.RadioItem;

        return (
            <div>
                <Logo></Logo>
                <h2>登陆</h2>
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <InputItem>密码</InputItem>
                        <InputItem>确认密码</InputItem>
                        <RadioItem checked= {this.state.type== 'genius'}>牛人</RadioItem>
                        <RadioItem checked= {this.state.type == 'boss'}>Boss</RadioItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register
