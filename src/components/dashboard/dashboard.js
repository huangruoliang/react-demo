import React from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navlink from '../Navlink/Navlink'
import Boss from '../Boss/Boss'
import Genius from '../Genius/Genius'
import User from '../User/User'

function Msg() { return <div>Msg</div> }
@connect(
    state => state
)
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
		

render() {
    const { pathname } = this.props.location
    const user = this.props.user
    const navList = [
        {
            path: '/boss',
            text: '牛人',
            icon: 'boss',
            title: '牛人列表',
            component: Boss,
            hide: user.type === 'genius'
        },
        {
            path: '/genius',
            text: 'boss',
            icon: 'job',
            title: 'BOSS列表',
            component: Genius,
            hide: user.type === 'boss'
        },
        {
            path: '/msg',
            text: '消息',
            icon: 'msg',
            title: '消息列表',
            component: Msg,
        },
        {
            path: '/me',
            text: '我',
            icon: 'user',
            title: '个人中心',
            component: User,
        }
    ]
    var path = navList.find(v => v.path == pathname)
    return (
        <div>
            <NavBar
                mode="dark"
            >{path && path.title}</NavBar>

            <div style={{ marginTop: 45 }}>
                <Switch>
                    {navList.map(v => (
                        <Route path={v.path} component={v.component} key={v.path}></Route>
                    ))}
                </Switch>
            </div>
            <Navlink data={navList}></Navlink>

        </div>
    )
}
}

export default Dashboard