import React from 'react'

import Navbar from '../navbar'

export default function Layout(props) {
    // const children = props.children;
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    )
}
