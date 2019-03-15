
/**
 * preState 就代表之前的数据
 * 
 * action 进行的操作 
 *  新增商品
 *  修改商品
 *  删除商品
 */
export default (preState = [],action) => {
    console.log("----reducer------",action)
    switch (action.type) {
        case "ADD_CART":
            //1.把preState，进行深拷贝一次
            const newArray = JSON.parse(JSON.stringify(preState))
            const goods = newArray.find(item=> item.id === action.goods.id)
            if (goods){
                goods.num += action.goods.num
            } else {
                newArray.push(action.goods)
            }
    
            return newArray

        default:
            return preState
    }
}