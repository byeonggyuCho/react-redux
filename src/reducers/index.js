/*
    # 리듀서
    액션 타입에 따라 변화를 일으키는 함수다.
    여기서 컴포넌트 초기값을 정의한다.

    # 루트 리듀서
    서브 리듀서들을 하나로 합치는 곳.

    #immutable
    fromJS
        자동으로 Map List 넣어줌 편리함.
    Map
        get()
        getIn()
        set()
        setIn()
        metge();
        mergeIn()       //성능상으로는 setIn을하는게 낫다.
    List
        map
        filter
        sort
        push
        pop

*/
import {Map, fromJS, List} from 'immutable';
import * as types from '../actions/ActionTypes';
import {handleActions} from 'redux-actions'



const initialState = Map({
    counters :List([
        Map({
            color: 'black',
            number:0
        })
    ])
});


// const reducer = handleActions({
//     INCREMENT: (satte, action) =>({
//         counter :
//     })

// })

function counter(state= initialState, action){

    const { counters } = state;

    switch (action.type) {
        case types.CREATE:
            return {
                counters:[
                    ...counters,
                    {
                        color:action.payload,
                        number:0
                    }
                ]
            };
        case types.REMOVE:
            return {
                counters:counters.slice(0, counters.length -1)
            };

        case types.INCREMENT:
            return {
                counters:[
                    ...counters.slice(0, action.payload),
                    {
                        ...counters[action.payload],
                        number:counters[action.payload].number +1
                    },
                    ...counters.slice(action.payload +1, counters.length)
                ]
            }
            case types.DECREMENT:
                return {
                    counters:[
                        ...counters.slice(0,action.payload),
                        {
                            ...counters[action.payload],
                            number:counters[action.payload].number-1
                        },
                        ...counters.slice(action.payload + 1, counters.length)
                    ]
                };
            case types.SET_COLOR:
                return {
                    counters:[
                        ...counters.slice(0,action.payload.index),
                        {
                            ...counters[action.payload.index],
                            color:action.payload.color
                        },
                        ...counters.slice(action.payload.index + 1, counters.length)
                    ]
                };
            default:
                return state;
    }
}

//export default counter;

export default handleActions({
    [INCREMENT]: (status, action) =>{
    
    const {number,color} = action.payload;




    },
    [DECREMENT]: (status, action) => {

    }
})



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