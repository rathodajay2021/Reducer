import { ACTION_TYPE } from "./iceCreamAction";

const initialState = {
    ice_cream_num : 20
}

const ice_cream_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.BUY_ICE_CREAM:
            return{
                ...state, ice_cream_reducer: state.ice_cream_num - 1
            }
        default: return state
    }
}

export default ice_cream_reducer