/*
    # 리듀서
    액션 타입에 따라 변화를 일으키는 함수다.
    여기서 컴포넌트 초기값을 정의한다.

    # 루트 리듀서
    서브 리듀서들을 하나로 합치는 곳.

*/

import * as types from '../actions/ActionTypes';

const initialState = {
    counters :[
        {
            color: 'black',
            number:0
        }
    ]
};


function counter(state= initialState, action){

    const { counters } = state;

    console.warn(action);

    switch (action.type) {
        case types.CREATE:
            return {
                counter:[
                    ...counters,
                    {
                        color:action.color,
                        number:0
                    }
                ]
            };
        case types.REMOVE:
            return {
                counters:counter.slice(0, counters.length -1)
            };

        case types.INCREMENT:
            return {
                counters:[
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number:counters[action.index].number +1
                    },
                    ...counters.slice(action.index +1, counters.length)
                ]
            }
            case types.DECREMENT:
                return {
                    counters:[
                        ...counters.slice(0,action.index),
                        {
                            ...counters[action.index],
                            number:counters[action.index].number-1
                        },
                        ...counters.slice(action.index + 1, counters.length)
                    ]
                };
            case types.SET_COLOR:
                return {
                    counter:[
                        ...counter.slice(0,action.index),
                        {
                            ...counter[action.index],
                            color:action.color
                        },
                        ...counters.slice(action.index + 1, counters.length)
                    ]
                };
            default:
                return state;
    }
}

export default counter;



/*
//서브 리듀서
import number from './number';
import color from './color';

import { combineReducers } from 'redux';



    // 리듀서 함수 정의
    // state와 action을 파라미터로 받는다.
    // state undefined일 때 state 기본 값을 initialState로 사용한다.
    // action.type에 따라 다른 작업을 하고 새 상태를 만들어서 반환한다.

    // 주의할 점은 state를 직접 수정하면 안 되고,
    // 기존 상태 값에 


 //서브리듀서를 합친다.

const reducers = combineReducers({
    numberData: number,
    \:color
});


export default reducers;
*/