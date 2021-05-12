import React from 'react';
import ReactDOM from 'react-dom';

class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 100,
            msg: 'hello'
        }
    }
    add = () => {
        /* this.setState({
            num: this.state.num + 1
        })
        // this.state.num = this.state.num + 1; 可以更改但是视图没有更新
        console.log(this);//当前传递的对象会和state对象进行合并，并不是覆盖
 */
        /* // 查看同异步 异步
        this.setState({ num: this.state.num + 1 },()=>{});
        console.log(this.state.num, 'first');//100 first
        this.setState({ num: this.state.num + 1 });
        console.log(this.state.num, 'second');//100 second */


        // 想让num在原来的基础上，加两次
        // 如果想给num加两次，可以给setState传递函数没函数的形参就是上一次最新的state
        /* this.setState((prevState) => {
            return {
                num: prevState.num + 1
            }
        });
        console.log(this.state.num);//100 还是异步执行的，两个还是有先后顺序，不会覆盖
        this.setState((prevState) => {
            return {
                num: prevState.num + 1
            }
        });
        // 1. 在react中给元素绑定方法，当方法执行的时候，方法里的setState是异步执行的 「react合成事件中是异步的」*/


        // 2. setState在定时器中是同步执行的「修改num的值 不是渲染页面与视图更新无关，与console有关」

        setTimeout(() => {
            this.setState({ num: this.state.num + 1 });
            console.log(this.state.num, "first"); //101 'first'
            this.setState({ num: this.state.num + 1 });
            console.log(this.state.num, "second"); //102 'second'
        }, 1000)

        // 3. setState在生命周期函数里也是异步执行的
        // 4. 在原生事件中的setState也是同步的


        // 相当于 this.setState({ num: 200 ,msg: 'word'});
        this.setState({ num: 200 });
        this.setState({ msg: 'word' });
    }
    render() {
        console.log('render');//render
        let { num } = this.state
        return (<>
            <div>{num}</div>
            <button onClick={this.add}>点击</button>
        </>)
    }
}

ReactDOM.render(<Foo />, document.getElementById('root'));