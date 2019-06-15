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


import './navbar.css'

export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
        }
        this.toggle = this.toggle.bind(this)
        this.LinkClick = this.LinkClick.bind(this)
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    LinkClick() {
        this.state.isOpen && this.toggle()
      }

    render() {
        return (
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
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }

}