import React, {Component} from  'react';

import {
    Link,
} from 'react-router-dom';

class SecondSection extends Component {
    render() {
        return (
            <section className="second">
                <p>Na skróty:</p>
                <div className="shorts">
                    <article>
                        <div className="short-wrapper">
                            <div className="short-img"></div>
                            <div className="short-info"><Link to= "/legend">Miejskie legendy</Link><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</p></div>
                        </div>
                    </article>
                    <article>
                        <div className="short-wrapper">
                            <div className="short-img"></div>
                            <div className="short-info"><Link to= "/italy">Zasmakuj we Włoszech</Link><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</p></div>
                        </div>
                    </article>
                    <article>
                        <div className="short-wrapper">
                            <div className="short-img"></div>
                            <div className="short-info"><Link to= "/breakfast">Na dobry początek dnia</Link><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</p></div>
                        </div>
                    </article>
                    <article>
                        <div className="short-wrapper">
                            <div className="short-img"></div>
                            <div className="short-info"><Link to= "/desserts">Coś słodkiego</Link><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</p></div>
                        </div>
                    </article>
                    <article>
                        <div className="short-wrapper">
                            <div className="short-img"></div>
                            <div className="short-info"><Link to= "/vegan">Vegan</Link><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</p></div>
                        </div>
                    </article>
                    <article>
                        <div className="short-wrapper">
                            <div className="short-img"></div>
                            <div className="short-info"><Link to= "/cheap">Na każdą kieszeń</Link><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</p></div>
                        </div>
                    </article>
                </div>
            </section>
        );
    }
}
export default SecondSection;