import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'

@withRouter
@connect(
	null,
	{loadData}
)
class AuthRoute extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const puplicList = ['/login','/register'];
        const pathname = this.props.location.pathname;
        if(puplicList.indexOf(pathname) > -1) {
            return null;
        }

        axios.get('/user/info').
            then(res => {
                if(res.data.code == 0) {
                    this.props.loadData(res.data.data)
                }else {
                    console.log(2323)
                    this.props.history.push('/login')
                }
            })
    }
    render() {
        return (
            <div></div>
        )
    }



}

export default AuthRoute