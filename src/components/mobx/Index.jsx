import React, { Component } from 'react'

import appState from './appState'

import BasicUse from './BasicUse'
import BasicUse2 from './BasicUse2'

import AppState2 from './AppState2'
const appState2 = new AppState2()

// appState 返回的不再是一个普通的对象，而是一个Proxy代理对象
// console.log(appState)

class Index extends Component {
    render() {
        return (
            <div>
                {/* <BasicUse appState={appState}/> */}

                <BasicUse2 appState2={appState2}/>
            </div>
        );
    }
}

export default Index;