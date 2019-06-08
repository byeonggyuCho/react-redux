import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

/*
    CounterList에서 전달받은 index를 각 이벤트가 실행될때 호출할 함수의 파마리터로 전달한다.

*/
const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => {

    
    return (
        <div
            className ="Counter"
            onClick      = {()=> onIncrement(index)}
            onDoubleClick= {()=> onSetColor(index)}
            onContextMenu= {(e) => {
                e.preventDefault();
                onDecrement(index);
            }}
            style={{
                backgroundColor:color
            }}>
                {number}
            </div>
    );
}

//데이터 타입 설정
Counter.protoTypes = {
    index       : PropTypes.number,
    number      : PropTypes.number,
    color       : PropTypes.string,
    onIncrement : PropTypes.func,
    onDecrement : PropTypes.func,
    onSetColor  : PropTypes.func
};

Counter.defaultProps = {
    index:0,
    number : 0,
    color : 'black',
    onIncrement : () => console.warn('onIncrement not definde'),
    onDecrement : () => console.warn('onDecrement not definde'),
    onSetColor : () => console.warn('onSetColor not definde')
};


export default Counter;