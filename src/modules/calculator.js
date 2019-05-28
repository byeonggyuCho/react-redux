/**
 *  Ducks 파일 구조
 *      액션타입, 액션 생성함수, 리듀서 한방에! 모듈화.
 */
import {Map, fromJS} from 'immutable';
import {handleActions, createActions} from 'redux-actions';


//문자열 앞에 리듀서 이름 적기
//액션 타입 이름이 서로 다른 리듀서끼리 중복되는것을 막는다.
//1. 액션타입
export const INCREMENT = 'calculator/INCREMENT';
export const DECREMENT = 'calculator/DECREMENT';
export const SET_COLOR = 'calculator/SET_COLOR';

//2. 액션생성함수.
export const increment = createActions(INCREMENT);
export const decrement = createActions(DECREMENT);
export const set_color = createActions(SET_COLOR);


//3.초기값 설정
const initialState = fromJS({
    counters :[
        {
            color: 'black',
            number:0
        }
    ]
});

//4.리듀서 정의
export default handleActions({
    [INCREMENT]: (state, action) => {
        return state.set('value',action.payload)
    },
    [DECREMENT]: (state, action) => {
        return state.set('value',action.payload)
    },
    [SET_COLOR]: (state, action) => {
        return state.set('value', action.payload)
    }
}, initialState);