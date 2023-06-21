import reportWebVitals from './reportWebVitals';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/reduxStore'
import { Provider } from './context';


const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>
        </BrowserRouter>
    );
};

rerenderTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderTree(state)
})

reportWebVitals();