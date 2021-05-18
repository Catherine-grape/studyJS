import React from 'react';
import './index.less';
function Menu (props){
  let {data = []} = props;
  console.log(props);
    return <div className="link-box">
      {data.map(item=>{
        return <div className="react-view" key={item.gid}>
        <img src={item.url}/>
        </div>
      })}
    </div>
}

export default Menu