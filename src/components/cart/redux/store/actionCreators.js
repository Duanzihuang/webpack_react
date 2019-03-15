export const addToCart = goods => {
    return {
        type:'ADD_CART', // 类型：添加购物车
        goods
    }
}