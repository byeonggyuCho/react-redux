import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';


// 리덕스 관련 호출
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

//스토어 생성 :내가 만든 리듀서를 전달
//개발자도구 활성화( window.devToolsException)
const store = createStore(reducer, window.devToolsException && window.devToolsException());


ReactDOM.render(
    //프로바이더 :  스토어를 쉽게 연동할 수 있도록 도와주는 컴포넌트
    <Provider   store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

