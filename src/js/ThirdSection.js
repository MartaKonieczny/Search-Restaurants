import React, {Component} from  'react';
import {Link} from "react-router-dom";



class ThirdSection extends Component {


    render() {

        return (
            <section className="third">
                {/*<i className="fa fa-chevron-left chevron" aria-hidden="true"></i>*/}
                <ul className="slider">
                    <li>
                        <div className="background-slide1 container"><p><Link to= "/customer">Dla klientów</Link></p></div>
                    </li>
                    <li>
                        <div className="background-slide2 container"><p><Link to= "/restaurant">Dla branży</Link></p></div>
                    </li>
                </ul>
                {/*<i className="fa fa-chevron-right" aria-hidden="true"></i>*/}

            </section>
        );
    }
}
export default ThirdSection;