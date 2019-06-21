import React, { Component } from 'react'
import {
    Button, Form, FormGroup, Input,
    InputGroup, InputGroupAddon,
} from 'reactstrap'
import LoginModal from '../../../components/login'
import UserObj from '../../../utilities/user'
const User = new UserObj()

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
        if (User.userLogged)
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
                        <a href="#" onClick={this.toggleLogin}>Iniciar sesión</a>
                        para poder escribir
                    </div>
                    <LoginModal modalLogin={this.state.modalLogin} toggleModalLogin={this.toggleModalLogin} loginSuccess={this.loginSuccess} />
                </React.Fragment>

            )
    }
}