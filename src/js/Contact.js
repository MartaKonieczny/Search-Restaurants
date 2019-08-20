import React, {Component} from  'react';

import Header from './Header.js';
import Footer from './Footer.js';


class Contact extends Component {
    render() {
        return (
            <>
                <Header/>
                <section>
                    <div>
                        <p>Kontakt</p>
                    </div>
                </section>
                <Footer/>
            </>
        );
    }
}
export default Contact;