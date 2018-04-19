import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import { List, Button, InputItem, WhiteSpace, WingBlank } from 'antd-mobile'
import { login } from '../../redux/user.redux'
import imoocForm from '../../components/imooc-form/imooc-form'
// function wrapperHello(Comp) {

//     class WrapComp extends React.Component {

//         render() {
//             return (
//                 <div>
//                     <p>hoc 高阶组件</p>
//                     <Comp {...this.props}></Comp>
//                 </div>
//             )
//         }
//     }
//     return WrapComp
    
// }

// @wrapperHello
// class　Hello extends React.Component {
//     render() {
//         console.log(1)
//       return  <div>hello world</div>
//     }
// }



@connect(
    state => state.user,
    { login }
)
@imoocForm
class Login extends React.Component {
    constructor(props) {
        super(props)
       
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register() {
        this.props.history.push('/register')
    }
    
    handleLogin() {
        console.log(this.props.state)
        this.props.login(this.props.state)
    }

    render() {
        console.log(1)
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
      
                <Logo></Logo>
                <h2>{this.props.msg}</h2>
                <WingBlank>
                    <List>
                        <InputItem onChange={v => this.props.handleChange('user', v)}>用户</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem type='password' onChange={v => this.props.handleChange('password', v)}>密码</InputItem>
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
