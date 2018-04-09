import React from 'react'
import { Link, Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import { logout } from './Auth.redux'
function erying() {
    console.log('erying')
    return <h2>二英</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}

class Error extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return <h2>404</h2>
    }
}
@connect(
    state => state.auth,
    { logout }
)
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const redirectToLogin = <Redirect to='/login'>login</Redirect>
        const app = <div>
            <ul>
                <li>
                    <Link to='/dashboard'>一营</Link>
                </li>
                <li>
                    <Link to='/dashboard/erying'>er营</Link>
                </li>

                <li>
                    <Link to='/dashboard/qibinglian'>骑兵连</Link>
                </li>
            </ul>
            <Route path='/dashboard' exact component={App}></Route>
            <Route path='/dashboard/erying' component={erying}></Route>
            <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>

        </div>
        return this.props.isAuth ? app : redirectToLogin

    }
}

export default Dashboard;