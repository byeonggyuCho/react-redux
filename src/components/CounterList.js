import React from 'react';
import Counter from '../containers/Counter';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import './CounterList.css';
/*
 * @name CounterList
    여러 카운터를 렌더링하는 역할
*/
const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {

        const counterList = counters.map((counter, i) =>(
            <Counter
                key={i}
                index={i}
                {...counter.toJS()}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSetColor={onSetColor}
            />
        ));

        return (
            <div className="CounterList">
                {counterList}
            </div>
        );
};

CounterList.propTypes = {
    counters    : PropTypes.instanceOf(List),
    onIncrement : PropTypes.func,
    onDecrement : PropTypes.func,
    onSetColor  : PropTypes.func
};


CounterList.defaultProps = {
    counters:[],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default CounterList;