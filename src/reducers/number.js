import * as types from '../actions/ActionTypes';


/**
 * 서브 리듀서
 * 
 */


const initialState = {
    number:0
};

const number = (state= initialState, action) => {
    switch(action.types) {
        case types.INCREMENT:
            return {
                number:state.number + 1
            };
        case types.DECREMENT:
            return {
                number:state.number - 1
            };
        default:
            return state;
    }
}

export default number;