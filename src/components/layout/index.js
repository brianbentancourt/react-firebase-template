import React from 'react'
import Navbar from '../navbar'
import './layout.css'

export default function Layout(props) {
    // const children = props.children;
    return (
        <React.Fragment>
            <Navbar />
            <div className="layoutChildren">
                {props.children}
            </div>
        </React.Fragment>
    )
}
