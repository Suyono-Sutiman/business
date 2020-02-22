import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render () {
        return (
            <div className='navbar'>
                <h1>No[o]ne Business</h1>
                <div className='menu'>
                    <p>
                    Introduction
                    </p>
                    <p>
                    Vision
                    </p>
                    <p>
                    Services
                    </p>
                    <p>
                    Contact
                    </p>
                </div>
            </div>
        )
    }
}
export default Navbar;