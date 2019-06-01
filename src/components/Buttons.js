/**
 * 프리젠테이션 컴포넌트.
 * 
 */


import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

const Buttons = ({onCreate, onRemove}) =>{
    return (
        <div className="Buttons">
            <div className="btn add" onClick={onCreate}>생성</div>
            <div className="btn remove" onClick={onRemove}>제거</div>
        </div>
    );
}

/**
 * @ 프로퍼티 설정
    - 전달받을 프로퍼티를 설정한다.
    - 프로퍼티의 데이터 타입을 설정한다. 
 */
Buttons.propTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
};

// 기본값 설정.
Buttons.defaultProps = {
    onCreate: () => console.warn('onCreate not defined'),
    onRemove: () => console.warn('onRemove not defined')
};

export default Buttons;

