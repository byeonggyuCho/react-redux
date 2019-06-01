import React, { Component } from 'react';
import Buttons from '../components/Buttons'
import CounterListContainer from './CounterListContainer';
//import CounterContainer from './CounterContainer';
import getRandomColor from '../lib/getRandomColor'

import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {
    render () {
        const { onCreate, onRemove } = this.props;
        return (
            <div className="App">
                <Buttons
                    onCreate={onCreate} // dispatch(actions.create(getRandomColor()))
                    onRemove={onRemove} // dispatch(actions.remove())
                />
                <CounterListContainer/>
            </div>
        );
    }
}

/**
 * @name mapDispatchToProps
 * onCreate와 onRemove를 App의 Props로 전달한다.
 */
const mapDispatchToProps = (dispatch) =>({
    onCreate: ()=>dispatch(actions.create(getRandomColor())),
    onRemove: ()=>dispatch(actions.remove())
});

export default connect(null, mapDispatchToProps)(App);