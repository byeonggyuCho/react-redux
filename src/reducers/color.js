import * as types from '../actions/ActionTypes';

const initialState = {
    color: 'black'
};


const color = (state = initialState, action) =>{
    switch(state.color){
        case types.SET_COLOR:
            return {
                color :action.color
            };
        default:
            return state;
    }
}

export default color;