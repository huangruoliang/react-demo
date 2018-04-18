import React from 'react';
import axios from 'axios'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
import { spawn } from 'child_process';

class Boss extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('/user/list?type=genius')
            .then(res => {
                if (res.data.code == 0) {
                    console.log(22)
                    this.setState({
                        data: res.data.data
                    })
                }
            })
    }
    render() {
        console.log(this.state.data)
        const Body = Card.Body
        return (
            <WingBlank>
                {this.state.data.map(v => (
                    v.avator ?
                        <div>
                            <WhiteSpace></WhiteSpace>
                            <Card key={v._id}>
                                <Card.Header
                                    title={v.user}
                                    thumb={require(`../img/${v.avator}.png`)}
                                    extra={<span>{v.title}</span>}
                                >
                                </Card.Header>
                                <Body>
                                    {v.desc.split('\n').map(v => (
                                        <div key={v}>{v}</div>
                                    ))}
                                </Body>
                            </Card>
                        </div>: null
                ))}
            </WingBlank>
        )
    }
}

export default Boss;