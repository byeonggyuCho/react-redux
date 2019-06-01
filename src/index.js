import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';


// 리덕스 관련 호출
import { createStore } from 'redux';
import reducers  from './modules';
import { Provider } from 'react-redux';



/**
 * @name createStore
 * @description 
 *      스토어 생성 : 내가 만든 리듀서를 전달
 *      개발자도구 활성화( window.devToolsException )
 */
const store = createStore(reducers, window.devToolsException && window.devToolsException());

//프로바이더 :  스토어를 쉽게 연동할 수 있도록 도와주는 컴포넌트
/**
 * @name Provider
 * @description 
 *      store.subscribe(App);처럼 
 *      일일이 스토어 구독신청하는것을 대신해준다.
 */
ReactDOM.render(
    <Provider   store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

