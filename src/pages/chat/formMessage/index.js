import React, { Component } from 'react'
import {
    Button, Form, FormGroup, Input,
    InputGroup, InputGroupAddon,
} from 'reactstrap'
import LoginModal from '../../../components/login'

export default class formMessage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalLogin: false,
        }
        this.toggleLogin = this.toggleLogin.bind(this)
    }

    toggleLogin() {
        this.setState({
            modalLogin: !this.state.modalLogin
        })
    }

    render() {
        if (this.props.user)
            return (
                <React.Fragment>
                    <Form onSubmit={this.props.sendMessage} className="formChat">
                        <FormGroup>
                            <InputGroup>
                                <Input onChange={this.props.onChange} value={this.props.message.Message} id="Message" placeholder="Write a message.." />
                                <InputGroupAddon addonType="append">
                                    <Button color="success">Send</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    </Form>
                </React.Fragment>

            )
        else
            return (
                <React.Fragment>
                    <div>
                        Debes
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" onClick={this.toggleLogin}>{` Iniciar sesión `}</a>
                        para poder escribir
                    </div>
                    <LoginModal modalLogin={this.state.modalLogin} toggleModalLogin={this.toggleModalLogin} loginSuccess={this.loginSuccess} />
                </React.Fragment>

            )
    }
}