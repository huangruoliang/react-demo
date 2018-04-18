import React from 'react'
import { TabBar } from 'antd-mobile'
import Prototypes from 'prop-types'
import {withRouter} from 'react-router-dom'
@withRouter
class Navlink extends React.Component {
    constructor(props) {
        super(props)
    }
    static proTytypes = {
        data: Prototypes.array.isRequired
    }

    render() {
        const navList = this.props.data.filter(v => !v.hide)
        return (
            <TabBar>
                {navList.map(v => (
                    <TabBar.Item
                        title={v.text}
                        icon={{
                            uri: require(`./img/${v.icon}.png`)
                        }}
                        selectedIcon={{
                            uri: require(`./img/${v.icon}-active.png`)
                        }}
                        selected = {this.props.location.pathname === v.path}
                        key={v.path}
                        onPress={() => {
                           this.props.history.push(v.path)
                          }}
                    >
                    </TabBar.Item>
                ))}
            </TabBar>)
    }
}
export default Navlink