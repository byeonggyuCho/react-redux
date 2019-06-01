import React, { Component } from 'react';
import { connect } from 'react-redux';

//Component
import Buttons from '../components/Buttons'
import CounterListContainer from './CounterListContainer';

//lib
import getRandomColor from '../lib/getRandomColor'
//module
import * as actions from '../modules';

/*
    프로퍼티로 전달받은 이벤트를 버튼컴포넌트에 전달한다.


*/
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
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: (index) => dispatch(actions.remove(index))
});
// 리덕스에 연결을 시키고 내보낸다

/*  
    # connect API
        mapTateToProps : store에 필요한 값이 없으니 null
        mapDisptchToProps :
*/
export default connect(null, mapToDispatch)(App);