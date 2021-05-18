import { INIT, HOT } from '../action-types';
let initState = {
  sliders: null,
  activity: null,
  hotData: null,
  flag: true
};

function home(state = initState, action) {
  state = JSON.parse(JSON.stringify(state));
  console.log(action);
  switch (action.type) {
    case INIT:
      let { sliders, activity } = action.payload;
      state.sliders = sliders;
      state.activity = activity;

      break;
    case HOT:
      state.hotData = action.payload;
      break;

  }
  return state; // 这个return每一次执行都走
}

export default home;

// 先在组件里定义好事件-->写api接口-->action-->action-types-->reducers-->页面可以正常派发action行为了--->可以正常获取store中的state中的状态了