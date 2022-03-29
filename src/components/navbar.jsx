import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    state = {

    }
    render() {
        console.log('nav');
        return (
            <header>
                <nav className='navbar'>
                    <span className='navbar-logo'><i className="fa-solid fa-leaf"></i></span>
                    <span className='navbar-title'>Habit Tracker</span>
                    <span className='navbar-count'>{this.props.count}</span>
                </nav>
            </header>
        );
    }
}

export default Navbar;