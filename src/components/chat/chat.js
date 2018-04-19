import React, { Component } from 'react';
import { List, InputItem } from 'antd-mobile'
import io from 'socket.io-client'


const socket = io('ws://localhost:9093')
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            msg: []
        }
    }
    componentDidMount() {
        socket.on('receiveMsg',data => {
            this.setState({
                msg: [...this.state.msg,data]
            })
        })
    }
    handleSubmit() {
        socket.emit('msg',{text:this.state.text})
        this.setState({...this.state,text: ''})
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder='请输入'
                            value={this.state.text}
                            onChange={v => this.setState({ text: v })}
                            extra={<span onClick={() => this.handleSubmit()}>发送</span>}
                        >
                        </InputItem>
                    </List>
                </div>
                <h2>chat with user: {this.props.match.params.user}</h2>
            </div>
        )
    }
}

export default Chat;
