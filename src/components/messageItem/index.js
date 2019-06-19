import React, { Component } from 'react'
import { Alert } from 'reactstrap'
import {FormattedTime, FormattedDate } from 'react-intl'

export default class MessageItem extends Component {

    render() {
        return (
            <Alert color="info">
                <span>{this.props.message.data().user}</span>
                <div>{this.props.message.data().Message}</div>
                <div>{}</div>
                <FormattedTime value={this.props.message.data().Date.toDate()} />{' '}
                <FormattedDate value={this.props.message.data().Date.toDate()} />
            </Alert>
        )
    }
}