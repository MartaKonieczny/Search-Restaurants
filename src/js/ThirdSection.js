import React, {Component} from  'react';
import {Link} from "react-router-dom";


class ThirdSection extends Component {
    render() {
        return (
            <section>
                <div><Link to= "/customer">Dla klientów</Link></div>
                <div><Link to= "/restaurant">Dla branży</Link></div>
            </section>
        );
    }
}
export default ThirdSection;