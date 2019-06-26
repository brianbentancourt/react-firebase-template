import React, { Component } from 'react'
import {
    Container, Row, Col
} from 'reactstrap'
import UserObj from '../../utilities/user'
import './userPage.css'
const User = new UserObj()

export default class UserPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null
        }
    }

    componentWillMount() {
        //this.loadMessages()
        const _this = this
        User.getUserLogged().then(user => {
            _this.setState({ user })
        })
    }

    render() {
        if (this.state.user)
            return (
                <Container className="pageUser">
                    <Row>
                        {
                            this.state.user.photoURL &&
                            <Col sm={4}>
                                <img src={this.state.user.photoURL} alt={this.state.user.displayName} className="rounded-circle"/>
                            </Col>
                        }
                        <Col>
                            <Row>
                                <h1>{this.state.user.displayName}</h1>
                            </Row>
                            <Row>
                                <h3>{this.state.user.email}</h3>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            )
        else
            return (
                <Container>

                </Container>
            )
    }

}