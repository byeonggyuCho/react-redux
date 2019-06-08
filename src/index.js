import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import store from './store'

// 리덕스 관련 호출
import { Provider } from 'react-redux';




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
