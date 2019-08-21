import React, {Component} from  'react';
import {Link} from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p><Link to= "/contact">Kontakt</Link></p>
                <p><Link to= "/about">O nas</Link></p>
                <p><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></p>
                <p><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></p>
            </footer>
        );
    }
}
export default Footer;


