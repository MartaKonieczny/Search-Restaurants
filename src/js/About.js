import React, {Component} from  'react';

import Header from './Header.js';
import Footer from './Footer.js';


class About extends Component {
    render() {
        return (
            <>
                <Header/>
                <section>
                    <div>
                        <div className="w-budowie"></div>
                    </div>
                </section>
                <Footer/>
            </>
        );
    }
}
export default About;