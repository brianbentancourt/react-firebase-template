import React, { Component } from 'react'
import LoginObj from '../../utilities/login'
import LoginContainer from './container'
import { AuthErrorCode } from '../../utilities/firebaseErrors'
const login = new LoginObj()

export default class LoginUsers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            showPassword: false,
            messageLoginError: '',
            messageLoginErrorDetails: '',
            loading: false,
            toggleErrorDetalle: false,
            loginWithEmail: false
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.toggleShowPass = this.toggleShowPass.bind(this)
        this.onLogin = this.onLogin.bind(this)
        this.loginSuccess = this.loginSuccess.bind(this)
        this.onLoginError = this.onLoginError.bind(this)
        this.onLoginFacebook = this.onLoginFacebook.bind(this)
        this.onLoginGoogle = this.onLoginGoogle.bind(this)
        this.onLoginEmail = this.onLoginEmail.bind(this)
        this.onToggleErrorDetalle = this.onToggleErrorDetalle.bind(this)
    }

    onToggleErrorDetalle(e) {
        e.preventDefault()
        this.setState({
            toggleErrorDetalle: !this.state.toggleErrorDetalle
        })
    }

    onInputChange(el) {
        this.setState({
            [el.target.id]: el.target.value
        })
    }

    toggleShowPass(e) {
        e.preventDefault()
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    onLogin(e) {
        e.preventDefault()
        const { email, password } = this.state
        let usuario = {
            email,
            password
        }
        this.setState({
            loading: true
        })
        login.loginWithEmail(usuario, this.loginSuccess, this.onLoginError)
    }

    loginSuccess(user) {
        this.setState({
            loading: false
        })
        this.props.loginSuccess(user)
    }

    onLoginError(error) {
        console.error(error)
        this.setState({
            messageLoginError: AuthErrorCode(error.code),
            messageLoginErrorDetails: <div className="messageLoginErrorDetails">Código: {error.code}<p>Detalle: {error.message}</p></div>,
            loading: false
        })
    }

    onLoginFacebook(e) {
        e.preventDefault()
        login.loginWithFacebook(this.loginSuccess, this.onLoginError)
    }

    onLoginGoogle(e) {
        e.preventDefault()
        login.loginWithGoogle(this.loginSuccess, this.onLoginError)
    }

    onLoginEmail(e) {
        this.setState({
            loginWithEmail: true
        })
    }

    render() {
        return (
            <LoginContainer
                onLogin={this.onLogin}
                toggleShowPass={this.toggleShowPass}
                modalLogin={this.props.modalLogin}
                toggleModalLogin={this.props.toggleModalLogin}
                onInputChange={this.onInputChange}
                email={this.state.email}
                showPassword={this.state.showPassword}
                messageLoginError={this.state.messageLoginError}
                onToggleErrorDetalle={this.onToggleErrorDetalle}
                toggleErrorDetalle={this.state.toggleErrorDetalle}
                messageLoginErrorDetails={this.state.messageLoginErrorDetails}
                loading={this.state.loading}
                password={this.state.password}
            />
        )
    }
}