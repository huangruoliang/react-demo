import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Redirect, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import reducers from './reduces'
import Login from './containers/Login/Login'
import Register from './containers/Register/Register'
import AuthRoute from './components/authroute/authroute'
import BossInfo from './containers/BossInfo/BossInfo'
import GeniusInfo from './containers/GeniusInfo/GeniusInfo'
import Dashboard from './components/dashboard/dashboard'
import Chat from './components/chat/chat'
import './config'
import './index.css'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
))


ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/login' component={Login} ></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/geniusinfo' component={GeniusInfo}></Route>
                    <Route path='/chat/:user' component={Chat}></Route>
                    <Route component= {Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>)
    , document.getElementById('root')
)


