export const addToCart = goods => {
    return {
        type:'ADD_CART', // 类型：添加购物车
        goods
    }
}

export const addToCartAsync = goods => {
    return dispatch => {
        setTimeout(() => {
            console.log('...异步添加...')
            dispatch(addToCart(goods))
        }, 1000)
    }
}

export const updateToCart = goods => {
    return {
        type:'UPDATE_CART',
        goods
    }
}

export const deleteToCart = id => {
    return {
        type:'DELETE_CART',
        id
    }
}