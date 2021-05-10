import React from 'react';
import ReactDOM from 'react-dom';

class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 10
        }
    }
    fn() {
        let a = this.state.num;
        return this.setState({
            num: ++a
        })
    }
    render() {
        let { aa } = this.props;
        console.log(this.props);
        return (
            <div>
                <div className="asa" style={aa} onClick={() => { this.fn() }}>点击</div>
                {this.state.num}
            </div>
        )
    }
}
let sty = {
    fontWeight: 800,
    color: 'lightblue',

}
let res = <div>
    <ul>
        <li>
            111
             <A ClassName="qqq" aa={sty}> </A>
        </li>
    </ul>
</div>
ReactDOM.render(res, document.getElementById('root'), () => {
    let ree = document.getElementsByTagName('li');
    console.log(ree);
})