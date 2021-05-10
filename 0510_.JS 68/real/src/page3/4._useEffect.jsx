import React, { useEffect, useState } from 'react';

let flag = true;
function App() {
    // 函数组件每次更新状态的时候，当前函数都会重新执行一遍
    const [num, setNum] = useState(0);
    const [msg, setMsg] = useState('hello');
    useEffect(() => {//effect是app执行它就执行了，里面的回调函数是后面执行的
        //当组件初始化的时候此时的回调函数就相当于componentDidMount
        console.log('effect');
        // 当以后去更改状态的时候，它就相当于componentDidUpdate
    }, []);//DidUpadte在状态更新后就会更新，[num]就是只有这个数组里面num改变的时候才会执行，如果是一个空数组的话，不论谁更改都不再执行。
    // useEffect使用的时候，第一个参数是模拟钩子的回调函数，第二个参数，是一个数组它是当前钩子函数的依赖，可以指定具体的状态更新再去执行回调钩子
    // 如果不传递第二个数组参数，那就是依赖所有的状态的变化而执行，
    // 如果第二个参数是一个空数组，那就是谁也不依赖
    // 数组里执行具体的依赖状态



    /* useEffect(() => {
        if (flag) {
            flag = false;
            return
        }
        console.log('');
    }) 或者用下面这种模拟*/ 
    if (flag) {
        flag = false;
        useEffect(() => {
            console.log('componentDidMount');
        })
    }
    function add() {
        setNum(num + 1);
        // setMsg('word');
    }
    return (//所有东西一定要卸载return上面
        <div>我是App组件
            <button onClick={add}>点击</button>{num} {msg}
        </div>
    )
}
export default App