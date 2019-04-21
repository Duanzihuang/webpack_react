import React, { Component } from 'react'

import {observer} from 'mobx-react'

class BasicUse extends Component {
    render() {
        return (
            <div>
                <p>值是：{this.props.appState.val}</p>
                <button onClick={() => {
                    this.props.appState.val ++
                }}>改变</button>
            </div>
        );
    }
}

export default observer(BasicUse)