import { HOME_INIT } from "./action-types";

let initState = {
    activity: [],
    crowdfunding: [],
    recommend: [],
    sliders: []
}
function reducer(state = initState, action) {
    switch (action.type) {
        case HOME_INIT:
            let { activity, crowdfunding, recommend, sliders } = action.payload;
            return { ...state, activity, crowdfunding, recommend, sliders}
        default:
            return state
            break;
    }
}
export default reducer;