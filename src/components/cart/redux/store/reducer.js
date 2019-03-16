
/**
 * preState 就代表之前的数据
 * 
 * action 进行的操作 
 *  新增商品
 *  修改商品
 *  删除商品
 */

// 创建仓库的时候，从本地仓库里面去取
const state = JSON.parse(localStorage.getItem('CART') || '[]')

export default (preState = state,action) => {
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

        case "UPDATE_CART":
             //1.把preState，进行深拷贝一次
             const updateArray = JSON.parse(JSON.stringify(preState))
             const updateGoods = updateArray.find(item=> item.id === action.goods.id)

             //2.把仓库中的数量修改成最新的
            updateGoods.num = action.goods.num
            
            //3.把修改之后的结果，返回给store
            return updateArray

        case "DELETE_CART":
             //1.把preState，进行深拷贝一次
             const deleteArray = JSON.parse(JSON.stringify(preState))
             const deleteIndex = deleteArray.findIndex(item=>item.id === action.id)

             deleteArray.splice(deleteIndex,1)

             return deleteArray
        default:
            return JSON.parse(JSON.stringify(preState))
    }
}