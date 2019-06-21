import React, { Component } from 'react'
import { Alert, Row, Col } from 'reactstrap'
import { FormattedTime, FormattedDate } from 'react-intl'
import './messageItem.css'

export default class MessageItem extends Component {

    render() {
        return (
            <Alert color="info">
                <Row>
                    <Col xs={10}>
                        <span>{this.props.message.data().user ? this.props.message.data().user : 'User'}</span>
                        <div>{}</div>
                    </Col>
                    <Col className="messageDate">
                        <FormattedTime value={this.props.message.data().Date.toDate()} />{' '}
                        <FormattedDate value={this.props.message.data().Date.toDate()} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{this.props.message.data().Message}</p>
                    </Col>
                </Row>
            </Alert>
        )
    }
}