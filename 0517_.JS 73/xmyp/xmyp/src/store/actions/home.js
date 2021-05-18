import { INIT,HOT} from '../action-types';
import api from '../../api';

export default {
  init() {
    return async dispatch => {
      let data = await api.home.queryInit();

      dispatch({
        type:INIT,
        payload:data
      })

    //  api.home.queryInit().then((res) => {
    //     dispatch({
    //       type: INIT,
    //       payload: res
    //     })
    //   })

    }
  },
  hot() {
    return async dispatch => {
      let data = await api.home.queryHot();
      console.log(data,26);
      dispatch({
        type:HOT,
        payload:data
      });
    }
  }
}