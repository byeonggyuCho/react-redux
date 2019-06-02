/**
 *  # Ducks  구조
 *      액션타입, 액션 생성함수, 리듀서 한방에! 모듈화.
 */
import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

/*
    # 1. 액션타입
        문자열 앞에 리듀서 이름 적기
        액션 타입 이름이 서로 다른 리듀서끼리 중복되는것을 막는다.
*/
export const INCREMENT  = 'counter/INCREMENT';
export const DECREMENT  = 'counter/DECREMENT';
export const SET_COLOR  = 'counter/SET_COLOR';
export const CREATE     = 'counter/CREATE';
export const REMOVE     = 'counter/REMOVE';

/*
    #2. 액션생성함수
        payload로 전달받을 경우, 어떤 파라미터가 넘어오는지 모르기때문에 주석으로 메모.
*/
export const create = createAction(CREATE);            //color
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT);      //index
export const decrement = createAction(DECREMENT);      //index
export const setColor = createAction(SET_COLOR);      //{index, color}


/*
    #3. 초기값 설정
        store에서 관리할 상태값을 정하고 초기값을 설정한다.
        counters:[{color:'black',number:0}]
        store를 구독중인 컴포넌트들은 이 값을 props로 전달받을 수 있다.

*/
const initialState = Map({
    counters :List([
        Map({
            color: 'black',
            number:0
        })
    ])
});

/**
 * 
 *  #4. reducer 생성.
 * 
 *   handleActions
 *       param1 : 액션타입에 따라 실행할 함수들을 가지고 있는 객체
 *       param2 : 상태의 기본값.
 *
 *   reducer
 *      store에서 관리중인 상태값(state)과 actionType을 전달받는다.
 *      액션 상태에 맞게 변경한다.
 *      액션타입에 설정했던 접두사를 처기하기위해 [CREATE]같은 형식으로 프로퍼티 설정.
 * 
 */
export default handleActions({
    [CREATE]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.push(
            Map({
                color: action.payload,
                number: 0
            })
        ))
    },

    [REMOVE]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.pop())
    },

    [INCREMENT]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload, 
            (counter) => counter.set('number', counter.get('number') + 1))
        );
    },

    [DECREMENT]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload, 
            (counter) => counter.set('number', counter.get('number') - 1))
        );
    },

    [SET_COLOR]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload, 
            (counter) => counter.set('color', action.payload.color))
        );
    },
}, initialState);