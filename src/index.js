import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter,Link,Route,Redirect,Switch} from 'react-router-dom'
import thunk from 'redux-thunk'
import App from './App';
import Auth from './Auth'
import Dashboard from './Dashboard'
import reducers from './reduces'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f=> f
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
))
console.log(store.getState())


ReactDOM.render(
    (<Provider store={store}>  
        <BrowserRouter>
           <Switch>
                    <Route path='/login' component={Auth} exact></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                    <Redirect to='dashboard'></Redirect>
                </Switch>
        </BrowserRouter>
    </Provider>)
    ,document.getElementById('root')
)


