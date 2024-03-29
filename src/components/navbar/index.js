import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown
} from 'reactstrap'
import LoginModal from '../login'
import UsuarioObj from '../../utilities/user'
import LoginObj from '../../utilities/login'
import { Icon } from 'react-icons-kit'
import { user } from 'react-icons-kit/fa/user'
import './navbar.css'

const User = new UsuarioObj()
const Login = new LoginObj()


export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            modalLogin: false,
            user: null
        }
        this.toggle = this.toggle.bind(this)
        this.LinkClick = this.LinkClick.bind(this)
        this.LogIn = this.LogIn.bind(this)
        this.LogOut = this.LogOut.bind(this)
        this.loginSuccess = this.loginSuccess.bind(this)
        this.toggleModalLogin = this.toggleModalLogin.bind(this)
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleModalLogin() {
        this.setState({
          modalLogin: !this.state.modalLogin
        })
      }

    LogIn() {
        this.LinkClick()
        this.setState({
            modalLogin: true
        })
    }

    loginSuccess(user) {
        this.setState({
          user,
          modalLogin: false
        })
      }

    LogOut(e) {
        const _this = this
        _this.LinkClick()
        Login.logOut().then(() => {
            _this.setState({
                user: null
            })
        })
    }

    LinkClick() {
        this.state.isOpen && this.toggle()
    }

    onUserLogged() {
        if (this.state.user) {
            return (
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className="nav-link navlink" nav caret>
                        <Icon size={20} icon={user} />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-principal" right>
                        <DropdownItem className="dropdown-item-principal">
                            <Link className="nav-link DropdownItem-link" to={`/user/${this.state.user && this.state.user.uid}`}>{this.state.user.email}</Link>
                        </DropdownItem>
                        <DropdownItem className="dropdown-divider-principal" divider />
                        <DropdownItem onClick={this.LogOut} className="dropdown-item-principal">
                            <Link onClick={this.LinkClick} className="nav-link DropdownItem-link" to="/">Salir</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            )
        } else {
            return (
                <NavItem>
                    <NavLink className="nav-link-principal" href="#" onClick={this.toggleModalLogin}>Ingresar</NavLink>
                </NavItem>
            )
        }
    }

    componentWillMount() {
        const _this = this
        User.getUserLogged().then(user => {
            _this.setState({
                user
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar className="fixed-top" color="dark" expand="md">
                    <Link className="navbar-brand navlink font-weight-bold" to="/">
                        React-firebase-template
                    </Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link onClick={this.LinkClick} className="nav-link navlink" to="/">Inicio</Link>
                            </NavItem>
                            <NavItem>
                                <Link onClick={this.LinkClick} className="nav-link navlink" to="/chat/">Chat</Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/brianbentancourt/react-firebase-template" target="_blank" >GitHub</NavLink>
                            </NavItem>
                            {
                                this.state.user ?
                                    this.onUserLogged()
                                    :
                                    <NavItem>
                                        <NavLink onClick={this.LogIn} className="navlink" href="#">
                                            Ingresar
                                    </NavLink>
                                    </NavItem>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
                <LoginModal modalLogin={this.state.modalLogin} toggleModalLogin={this.toggleModalLogin} loginSuccess={this.loginSuccess} />
            </React.Fragment>
        )
    }

}