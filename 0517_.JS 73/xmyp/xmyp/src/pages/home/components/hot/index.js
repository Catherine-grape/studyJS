import React,{useEffect} from 'react';
import Title from '../../../../components/title';
import {connect } from 'react-redux';
import action from '../../../../store/actions';
import './index.less'
function Hot(props){

  useEffect(()=>{
    props.hot()
  },[])
  let {hotData} = props;
  console.log(hotData,11);
  // props.hot()
  return <div className="recommend">
    {hotData && hotData.length && <div>
      <Title title="有品推荐" link="/more"></Title>
      <div className="first">
        <img src={hotData[0].title}/>
        <img src={hotData[0].describe}/>
      </div>
      <ul className="list">
        {hotData.slice(1).map(item=>{
            return <li key={item.gid}>
           
              <img src={item.url}/>
            
              
            </li>
        })}
      </ul>
    </div>}
  </div>
}

let mapStateToProps = state=>({...state.home});

export default connect(mapStateToProps,action.home)(Hot);


