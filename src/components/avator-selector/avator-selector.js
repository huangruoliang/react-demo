import React from 'react'
import { Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatorSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    static propTypes = {
        selectAvator: PropTypes.func.isRequired
    }
    render() {
        const avatarList =
            'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                .split(',')
                .map(val => ({
                    icon: require(`../img/${val}.png`),
                    text: val
                }))

        const gridHeader =
            this.state.icon
                ? (<div>
                    <span>已选择头像</span>
                    <img style={{ width: 20 }} src={this.state.icon} alt="" />
                </div>)
                : <div>请选择头像</div>
        return (
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid data={avatarList} columnNum={5}
                        onClick={elm => {
                            this.props.selectAvator(elm.text)
                            this.setState(elm)
                        }} />
                </List>

            </div>
        )
    }
}
export default AvatorSelector