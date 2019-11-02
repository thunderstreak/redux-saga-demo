import React, { Component } from 'react';
import { connect } from 'react-redux'

import Counter from '../Counter/Counter'

const mapStateToProps = (state) => {
    return {
        value: state.counter.value
    }
};
@connect(mapStateToProps)
class Saga extends Component{

    componentDidMount(){

    }
    onIncrement = () => {
        this.props.dispatch({
            type:'INCREMENT',
        })
    };
    onDecrement = () => {
        this.props.dispatch({
            type:'DECREMENT',
        })
    };
    onIncrementAsync = () => {
        this.props.dispatch({
            type: 'INCREMENT_ASYNC'
        })
    };
    onDecrementAsync = () => {
        this.props.dispatch({
            type: 'DECREMENT_ASYNC'
        })
    };
    render(){
        const { value } = this.props;
        const { onIncrement, onDecrement, onIncrementAsync, onDecrementAsync } = this;
        return (
            <div className="App">
                <Counter
                    value={value}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onIncrementAsync={onIncrementAsync}
                    onDecrementAsync={onDecrementAsync}
                />
            </div>
        )
    }
}
export default Saga