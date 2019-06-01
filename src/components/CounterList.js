import React from 'react';
import Counter from '../containers/Counter';
import PropTypes from 'prop-types';


import './CounterList.css';


/**
 * Store에서 전달받은 props를 컴포넌트의 event와 props에 매핑한다.
 */

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {

        const counterList = counters.map((counter, i) =>(
            <Counter
                key={i}
                index={i}
                {...counter}
                onIncrement={onIncrement}       // dispatch(actions.increment(index))
                onDecrement={onDecrement}       // dispatch(actions.decrement(index))
                onSetColor={onSetColor}         // dispatch(actions.setColor(index, getRandomColor()))
            />
        ));


        return (
            <div className="CounterList">
                {counterList}
            </div>
        );
};

CounterList.propTypes = {
    counters    : PropTypes.arrayOf(PropTypes.shape({color:PropTypes.string, number: PropTypes.number})),
    onIncrement : PropTypes.func,
    onDecrement : PropTypes.func,
    onSetColor  : PropTypes.func
};


CounterList.defaultProps = {
    counters:[]
}

export default CounterList;