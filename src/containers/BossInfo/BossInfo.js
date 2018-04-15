import React from 'react'
import { NavBar } from 'antd-mobile';
class BossInfo extends React.Component {
    constructor(props) {
        super(props)
    }
        
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                >BOSS完善信息</NavBar>
            </div>
        )
    }
}
export default BossInfo