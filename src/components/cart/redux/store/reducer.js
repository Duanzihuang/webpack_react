
/**
 * preState 就代表之前的数据
 * 
 * action 进行的操作 
 *  新增商品
 *  修改商品
 *  删除商品
 */
export default (preState,action) => {
    switch (action.type) {
        case "ADD_CART":
            return [{id:222,name:'测试'}]
    
        default:
            return [{id:222,name:'测试'}]
    }
}