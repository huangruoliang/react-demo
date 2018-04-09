import React from 'react'
import {connect} from 'react-redux'

import {addGun,removeGun} from './index.redux'
const mapStateToProps = state => {
  return {
    num: state.Counter,
  }
}
const actionsCreators = {
  addGun,
  removeGun,
}
@connect(mapStateToProps,actionsCreators)
class App extends React.Component {
  render() {
    const num = this.props.num;
    return (
      <div> 
         <h1>现在有机枪{num}</h1>
        <button onClick={this.props.addGun }>申请武器</button>
      </div>
    )
  }
}


export default App;  