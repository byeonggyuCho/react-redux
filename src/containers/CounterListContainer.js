import CounterList from '../components/CounterList';
import { connect } from 'react-redux';

//module
import * as calculator from '../modules/calculator';
//libary
import getRandomColor from '../lib/getRandomColor';



//store 안의 state 값을 props로 연결한다.
const mapStateToProps = (state) =>({counters:state.counters});

/*
    액션 생성자를 사용하여 액션을 만들고
    해당 액션을 dispatch 하는 함수를 만든 후 이를 props로 연결한다.
*/

const mapDispatchToProps = (dispatch) =>({
    onIncrement : (index) => dispatch(calculator.increment(index)),
    onDecrement : (index) => dispatch(calculator.decrement(index)),
    onSetColor  : (index) => {
        const color = getRandomColor();
        dispatch(calculator.setColor(index,color));
    }
})

// 데이터와 함수들이 props로 붙은 컴포넌트 생성.
const CounterListContainer = connect(mapStateToProps,mapDispatchToProps)(CounterList);

export default CounterListContainer;