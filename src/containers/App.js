import React, { Component } from 'react';
import Buttons from '../components/Buttons'
import CounterListContainer from './CounterListContainer';
//import CounterContainer from './CounterContainer';
import getRandomColor from '../lib/getRandomColor'

import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {
    render () {
        //여기서 왜 this.props에 onCreate,onRemove가 있는지 모르겠음
        //아마 프로바이더의 actions를 on뭐시기로 매핑하는듯.
        const { onCreate, onRemove} = this.props;
        console.log(this.props);
        debugger;
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
    onCreate: () =>dispatch(actions.create(getRandomColor())),
    onRemove: () =>dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(App);