import React, { Component } from 'react';


export default function imoocForm(Comp) {
    return class WrapperComp  extends Component {
        constructor(props) {
            super(props);
            this.state = {}
            this.handleChange = this.handleChange.bind(this)
        }
        handleChange(key,val) {
            this.setState({
                [key]: val
            })
        }
        render() { 
            console.log(2)
            return (
                <Comp {...this.props} state= {this.state} handleChange = {this.handleChange}></Comp>
            )
        }
    }
     
}

