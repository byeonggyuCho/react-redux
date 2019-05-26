import * as actions from '../actions';
import {connect} from 'react-redux';
import Counter from '../containers/Counter';

/*
    컨테이너
    - 스토어가 연동되어있다.
    - connect 함수를 이용하여 스토어에 연동시킨다.

    # connect
    1. mapStateToProps :
        store.getState()겨과값인 state를 파라미터로 받아 컴포넌트의 props로 사용할 객체를 반한한다.

    2. mapDispatchToProps : 
        dispatch를 파라미터로 받아서 액션을 디스패치하는 함수들을 객체안에 넣어서 반환한다.
    3.mergeProps


    connect 함수를 호출하고 나면 반환하는 함수의 파라미터로 리덕스에 연결시킬 컴포넌트를 넣으면
    mapStateToProps와 mapdDispatchToProps에서 정의한 값들을 props로 받아오는 새 컴포넌트를 만든다.
*/

/*
export function getRandomColor(){
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb',
        '#1c7cd6',
        '#1098ad',
        '#0ca678',
        '#37b24d',
        '#74b816',
        '#f59f00',
        '#f76707'
    ];
    // 0부터 12까지 랜덤숫자
   const random = Math.floor(Math.random() * 13);

   //랜덤 색상 변환
   return colors[random];
}    
 //   state를 props로 사용할 객체로 변환한다.
const mapStateToProps = (state) => ({
    color   : state.colorData.color,
    number  : state.numberData.number
});

    // 액션 생성 함수를 사용하여 액션을 생성하고,
    // 해당 액션을 dispatch하는 함수를 만든 후 이를 props로 연결한다.
    // 디스패치를 파라미터로 받아 액션을 디스패치하는 함수들을 객체에 넣어서 반환.
const mapDispatchToProps = (dispatch) =>({
    onIncrement : () => dispatch(actions.increment()),
    onDecrement : () => dispatch(actions.decrement()),
    onSetColor : () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

//Counter 컴포넌트의 Container 컴포넌트
//Counter 컴포넌트를 애플리케이션 데이터 레이어와 묶는 역할
//Counter의 props를 셋팅한다.
//리덕스와 연동된 컴포넌트를 CounterContainer에 담아 내보낸다.
//mapStateToProps, mapDispatchToProps의 결과로 나오는 props를 가지는 컴포넌트를 리턴한다.
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;

*/