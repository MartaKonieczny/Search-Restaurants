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
                            <img src="../images/alcohol-architecture-bar-260922.jpg" className="short-img"/>
                            <div className="short-info"><Link className="link" to= "/legend">Miejskie legendy</Link><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</p></div>
                        </div>
                    </article>
                    <article>
                        <div className="short-wrapper">
                            <img src="../images/blow-cheese-cuisine-723031.jpg" className="short-img"/>
                            <div className="short-info"><Link className="link" to= "/italy">Zasmakuj we Włoszech</Link><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</p></div>
                        </div>
                    </article>
                    <article>
                        <div className="short-wrapper">
                            <img src="../images/almonds-berries-bread-knife-2113556.jpg" className="short-img"/>
                            <div className="short-info"><Link className="link" to= "/breakfast">Na dobry początek dnia</Link><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</p></div>
                        </div>
                    </article>
                    <article>
                        <div className="short-wrapper">
                            <img src="../images/blur-chocolate-close-up-1352245.jpg" className="short-img"/>
                            <div className="short-info"><Link className="link" to= "/desserts">Coś słodkiego</Link><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</p></div>
                        </div>
                    </article>
                    <article>
                        <div className="short-wrapper">
                            <img src="../images/assortment-cabbage-cherry-tomatoes-1458694.jpg" className="short-img"/>
                            <div className="short-info"><Link className="link" to= "/vegan">Vegan</Link><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</p></div>
                        </div>
                    </article>
                    <article>
                        <div className="short-wrapper">
                            <img src="../images/basil-dinner-food-64208.jpg" className="short-img"/>
                            <div className="short-info"><Link className="link" to= "/cheap">Na każdą kieszeń</Link><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, minima.</p></div>
                        </div>
                    </article>
                </div>
            </section>
        );
    }
}
export default SecondSection;