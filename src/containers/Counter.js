import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';


const Counter = ({number, color, index,onIncrement, onDecrement, onSetColor}) => {
    return (
        <div
            className ="Counter"
            onClick      = {()=>onIncrement(index)}
            onDoubleClick= {() => onSetColor(index)}
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