import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import App from './APP.jsx';
import store from './store/index';
render(<Provider store={store}>
    <App></App>
</Provider>, document.getElementById('root'));