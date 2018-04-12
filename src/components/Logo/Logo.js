import React from 'react'
import Logoimg from './job.png'
import './logo.css'
import {} from 'antd-mobile'

class Logo extends React.Component {
    
    render() {
        return (
            <div className='logo-container'>
                <img src={Logoimg} alt=""/>
            </div>
        )
    }
}

export default Logo
