import { createStore, applyMiddleware, combineReducers  } from 'redux';
import modules from './modules';
import post from './modules/post'

//middleware
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

/* 로그 미들웨어를 생성 할 때 설정을 커스터마이징 할 수 있습니다.
   https://github.com/evgenyrodionov/redux-logger#options
*/
const logger = createLogger(); 


/**
 * @name createStore
 * @description 
 *      스토어 생성 : 내가 만든 리듀서를 전달
 *      개발자도구 활성화( window.devToolsException )
 */

const reducer = combineReducers({modules,    post});
const store = createStore(modules, applyMiddleware(logger, ReduxThunk), window.devToolsException && window.devToolsException());

export default store;