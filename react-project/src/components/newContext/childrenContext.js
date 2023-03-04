import React, { Component } from 'react';
import SonContext from './sonContext'
export default class childrenPage extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }
    render() {
        return(
            <div>
                <p>这是子组件</p>
                <SonContext/>
            </div>
        )
    }
}