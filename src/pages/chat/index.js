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
import MessageItem from '../../components/messageItem';


export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
            messages:[]
        }
    }


    render() {
        return (
            <React.Fragment>
                <h1>Chat</h1>
                {
                    this.state.messages.map(msg => <MessageItem message={msg} />)
                }
            </React.Fragment>
        )
    }
}