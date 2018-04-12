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

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
))
console.log(store.getState())


ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/login' component={Login} ></Route>
                <Route path='/register' component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>)
    , document.getElementById('root')
)


