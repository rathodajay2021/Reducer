export const ACTION_TYPES = {
    BUY_CAKE : 'BUY_CAKE',
    STOCK_FILL: 'STOCK_FILL'
}

export const buyCake = () => {
    return{
        type: ACTION_TYPES.BUY_CAKE
    }
}

export const stockFill = () => {
    return{
        type: ACTION_TYPES.STOCK_FILL
    }
}