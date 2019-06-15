import React, { Component } from 'react'


export default class MessageItem extends Component {

    render(){
        return(
            <div>
                <span>{this.props.message.data().user}</span>
                <div>{this.props.message.data().message}</div>
                <div>{this.props.message.data().date}</div>
            </div>
        )
    }
}