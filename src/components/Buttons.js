/**
 * 프레젠테이션 컴포넌트.
 */


import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

const Buttons = ({onCreate, onRemove}) =>{
    return (
        <div className="Buttons">
            <div 
                className="btn add" 
                onClick={onCreate}      // dispatch(actions.create(getRandomColor()))
                >
            생성
            </div>
            <div 
                className="btn remove" 
                onClick={onRemove}      // dispatch(actions.remove())
                >
            제거
            </div>
        </div>
    );
}

Buttons.propTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
};

Buttons.defaultProps = {
    onCreate: () => console.warn('onCreate not defined'),
    onRemove: () => console.warn('onRemove not defined')
};

export default Buttons;

