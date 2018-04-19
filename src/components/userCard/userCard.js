import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
import {withRouter} from  'react-router-dom'
@withRouter
class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    static propTypes = {
        userList: PropTypes.array.isRequired
    }
    handleClick(v) {
        this.props.history.push(`./chat/${v.user}`)
    }
    render() {
        const Body = Card.Body
        return (
            <div>
                <WingBlank>
                    {this.props.userList.map(v => (
                        v.avator ?
                            <div key={v._id}>
                                <WhiteSpace></WhiteSpace>
                                <Card key={v._id}
                                    onClick= {()=> this.handleClick(v)}
                                >
                                    <Card.Header
                                        title={v.user}
                                        thumb={require(`../img/${v.avator}.png`)}
                                        extra={<span>{v.title}</span>}
                                    >
                                    </Card.Header>
                                    <Body>
                                        {v.type == 'boss' ? <div>公司: {v.company}</div>: null}
                                        {v.desc.split('\n').map(v => (
                                            <div key={v}>{v}</div>
                                        ))}
                                        {v.type === 'boss' ? <div>薪资:{v.money}</div> : null}
                                    </Body>
                                </Card>
                            </div> : null
                    ))}
                </WingBlank>
            </div>
        )
    }
}

export default UserCard;