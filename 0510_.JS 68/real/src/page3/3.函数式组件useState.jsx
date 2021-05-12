// useState，让函数拥有响应式的状态
import React, { useState } from 'react';

function App(props) {
    console.log(props);
    // 函数式组件是拥有属性的,但是没有this，没有生命周期，没有状态
    // let [a, setState] = useState(5);

    // let [[e, b], setState] = useState([0, 1]);//0是a的默认值，useState函数的返回值是一个数组，数组的第一项就是当前响应式的状态，第二项是改状态的方法
    // useState 可以让当前的函数式组件拥有响应式的状态（而且轻便灵活，使用就引入，不使用就不引入，这样可以提高组件的运行效率）
    console.log(useState);
    // let state = { a: 1 } 想增加响应式的数据，但是不能成功
    const [state, setState] = useState({//如果当前的useState执行的时候参数是一个对象的话，当后期设置值的时候，传递的值会把之前的对象进行覆盖，所以要把之前的对象进行解构，再赋新值。
        s: 1,
        z: 2,
        c: 3
    })
    function add() {
        /* console.log('add');
        state.a = 600;
        console.log(state); 这样虽然改了，但是视图没有变化*/
        // setState(b + 1);
        setState({
            ...state,
            c: 100
        })
    }
    let { num } = props;
    return (
        <div onClick={add}>我是App组件{num},{state.c},{props.children}</div>
    )
}

export default App;