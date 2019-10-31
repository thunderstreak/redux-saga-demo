import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter/Counter'

const mapStateToProps = (state) => {
    return {
        value:state.counter.value
    }
};
@connect(mapStateToProps)
class Saga extends Component{
    constructor(props){
        super(props)
    }

    render(){

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}
export default Saga