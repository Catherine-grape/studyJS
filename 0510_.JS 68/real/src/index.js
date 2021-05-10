import React from 'react';
import ReactDOM from 'react-dom';


import App from './page3/3.函数式组件useState';
ReactDOM.render(<App num={100} b={1} c={2} d={3} > <span>我是插槽内容</span> </App>, document.getElementById('root'));