import React, { Component } from 'react'

import {observer} from 'mobx-react'

@observer
class BasicUse2 extends Component {
    render() {
        return (
            <div>
                <p>BasicUse2值是：{this.props.appState2.val2}</p>
                <button onClick={() => {
                    this.props.appState2.val2 ++
                }}>改变+1</button>
            </div>
        );
    }
}

export default BasicUse2