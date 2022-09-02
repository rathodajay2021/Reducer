import { ACTION_TYPES } from './cakeAction'

const initialState = {
    numOfCakes : 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.BUY_CAKE: return{
            ...state, numOfCakes: state.numOfCakes - 1
        };
        case ACTION_TYPES.STOCK_FILL: return{
            ...state, numOfCakes: state.numOfCakes + 10
        }
        default: return state
    }
}

export default cakeReducer