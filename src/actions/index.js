/*
action 객체를 만드는 액션 생성 함수들을 선언한다. (action creators)

//모든 자원을  임포트받고 types로 별칭을 정의한다.
import * as types from './ActionTypes';

export const create = (color) => ({
    type:types.CREATE,
    color
});

export const remove = (color) => ({
    type:types.REMOVE,
    color
});


export const increment = (index) => ({
    type: types.INCREMENT,
    index
});


export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});

//파라미터가 있다.
export const setColor = (index,color) => ({
    type: types.SET_COLOR,
    index,
    color
});

*/
