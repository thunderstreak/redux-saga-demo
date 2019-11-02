import React, { Component } from 'react'
import { Route, Switch, HashRouter, withRouter, Link, BrowserRouter} from 'react-router-dom'
import routers from './router'
import './tools/demo'
class App extends Component{
    render(){
        return(
            <HashRouter>
                <button><Link to="/counter">counter</Link></button>
                <button><Link to="/user">user</Link></button>
                <Switch>
                    <Route exact path="/counter" component={ routers.Counter }/>
                    <Route exact path="/user" component={ routers.User }/>
                </Switch>
            </HashRouter>
        )
    }
}
export default App