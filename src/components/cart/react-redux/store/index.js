import {createStore,applyMiddleware,compose} from 'redux'

import thunk from 'redux-thunk';

// 导入reducer
import reducer from './reducer'

// 参考:https://blog.csdn.net/qq_34765914/article/details/78598031
const store = createStore(
    reducer, /* preloadedState, */
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store