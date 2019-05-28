import React, { Component } from 'react';
import { connect } from 'react-redux';

//Component
import Buttons from '../components/Buttons'
import CounterListContainer from './CounterListContainer';

//lib
import getRandomColor from '../lib/getRandomColor'

//모듈
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


const mapToDispatch = (dispatch) =>({
    onCreate: () => dispatch(calculator.create(getRandomColor())),
    onRemove: () => dispatch(calculator.remove())
});

export default connect(null, mapToDispatch)(App);