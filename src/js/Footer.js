import React, {Component} from  'react';
import {Link} from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <footer>
                <p><Link to= "/contact">Kontakt</Link></p>
                <p><Link to= "/about">O nas</Link></p>
                <p>Facebook</p>
                <p>Insta</p>
            </footer>
        );

    }
}
export default Footer;


