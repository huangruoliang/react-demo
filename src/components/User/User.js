import React, { Component } from 'react';
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import browserCookie from 'browser-cookies'
import { logoutSubmit } from '../../redux/user.redux'
@connect(
    state => state.user,
    { logoutSubmit }
)
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.logout = this.logout.bind(this)
    }
    logout() {
        const alert = Modal.alert
        alert('退出', '确认退出？', [
            { text: '取消', onPress: () => console.log('cancel') },
            {
                text: '确认', onPress: () => {
                    browserCookie.erase('userid')
                    this.props.logoutSubmit();
                }
            },
        ])
        // browserCookie.erase('userid')
    }
    render() {
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief
        return (

            this.props.user ?
                <div>
                    <Result
                        img={<img src={require(`../img/${this.props.avator}.png`)} style={{ width: 40 }} />}
                        title={this.props.user}
                        message={this.props.type == 'boss' ? this.props.company : null}
                    ></Result>
                    <List renderHeader={() => '简介'}>
                        <Item wrap	>{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}{this.props.title}
                            <Brief>{props.desc}</Brief>
                            {props.money ? <Brief>薪资: {props.money}</Brief> : null}
                        </Item>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <List>
                        <Item onClick={this.logout}>退出登录</Item>
                    </List>
                </div>
                :<Redirect to={props.redirectTo} />
               
                
        )
    }
}

export default User;