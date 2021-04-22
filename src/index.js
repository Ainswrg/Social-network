import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/state.js'
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <React.StrictMode>
            <App 
               state={state}
               dispatch={store.dispatch.bind(store)}
               store={store}/>
         </React.StrictMode>,
      </BrowserRouter>,
      document.getElementById('root')
   );
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// addMessage={store.addMessage.bind(store)}
// updateNewMessageText={store.updateNewMessageText.bind(store)}