import { connect } from 'react-redux';
import * as actions from '../actions';
import getRandomColor from '../lib/getRandomColor';
import CounterList from '../components/CounterList';


/**
 * @name mapStateToProps
 * @description store에서 관리중인 state 값을 props로 전달한다.
 * store.getState()의 결과값인 state값을 넘긴다.
 * 
 */
const mapStateToProps = (state) =>({counters:state.counters});

/**
 * @name mapDispatchToProps
 * 액션 생성자를 사용하여 액션을 만들고
 * 해당 액션을 dispatch 하는 함수를 만든 후 이를 props로 연결한다. 
 */
const mapDispatchToProps = (dispatch) =>({
    onIncrement : (index) => dispatch(actions.increment(index)),
    onDecrement : (index) => dispatch(actions.decrement(index)),
    onSetColor  : (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor(index,color));
    }
})

/**
 * @name connect 
 * 리덕스 스토어에서 관리중인 State와 
 * 스토어의 상태값을 변경시키는 dispatch를 
 * CounterList컴포넌트의 props에 연결시킨다.
 */
const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList);

export default CounterListContainer;