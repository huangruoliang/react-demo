import React from 'react'
import { NavBar } from 'antd-mobile';
import AvatorSelector from '../../components/avator-selector/avator-selector'
import { InputItem, TextareaItem, Button, WingBlank } from 'antd-mobile'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { update } from '../../redux/user.redux'
@connect(
    state => state.user,
    { update }
)
class BossInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: '',
            avator:''
        }
        this.selectAvator = this.selectAvator.bind(this)
    }
    onChange(key, value) {
        this.setState({
            [key]: value
        })
    }
    selectAvator(text) {
        this.setState({
            avator: text
        })
    }

    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to= {this.props.redirectTo}></Redirect> : null }
                <NavBar
                    mode="dark"
                >牛人完善信息</NavBar>
                <AvatorSelector
                    selectAvator={this.selectAvator}
                ></AvatorSelector>
                <InputItem onChange={v => this.onChange('title', v)}>求职岗位</InputItem>

                <TextareaItem
                    title="个人简介"
                    onChange={v => this.onChange('desc', v)}
                    autoHeight
                    rows={3}
                />
                <WingBlank>
                    <Button
                        type='primary'
                        style={{ marginTop: 30 }}
                        onClick={() => {
                            this.props.update(this.state)
                        }}
                    >保存</Button>
                </WingBlank>

            </div>
        )
    }
}
export default BossInfo