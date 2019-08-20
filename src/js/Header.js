import React, {Component} from  'react';


import {
    Link,
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div><Link to= "/"><p className='logo1'>Gdzie Zjeść<span>Kraków</span></p></Link></div>
            </header>
        );
    }
}
export default Header;