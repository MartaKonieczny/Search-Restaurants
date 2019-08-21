import React, {Component} from  'react';


import {
    Link,
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div><Link className="link" to= "/"><p>GdzieZjem<span>Kraków</span></p></Link></div>
            </header>
        );
    }
}
export default Header;