import React from 'react';
import ReactDOM from 'react-dom';

class Foo extends React.Component {
    constructor() {
        super();

    }
    render() {
        // 在组件中通过插槽接收传递过来的信息，可以使用this.props.children来接收
        console.log(this);
        return (
            <div>我是Foo组件
                {this.props.children}
            </div>
        )
    }
}
export default Foo