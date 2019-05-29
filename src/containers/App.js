import React, { Component } from 'react';
import { connect } from 'react-redux';

//Component
import Buttons from '../components/Buttons'
import CounterListContainer from './CounterListContainer';

//lib
import getRandomColor from '../lib/getRandomColor'

//module
import * as calculator from '../modules/calculator';


class App extends Component {
    render () {
        const { onCreate, onRemove} = this.props;
        return (
            <div className="App">
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer/>
            </div>
        );
    }
}

//파라미터는 payload 속성에 저장된다.
const mapToDispatch = (dispatch) =>({
    onCreate: () => dispatch(calculator.increment(getRandomColor())),
    onRemove: () => dispatch(calculator.decrement())
});

export default connect(null, mapToDispatch)(App);