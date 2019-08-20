import React, {Component} from  'react';

import {
    Link,
} from 'react-router-dom';

class SecondSection extends Component {
    render() {
        return (
            <section>
                <p>Na skróty</p>
                <div><Link to= "/legend">Miejskie legendy</Link></div>
                <div><Link to= "/italy">Zasmakuj we Włoszech</Link></div>
                <div><Link to= "/breakfast">Na dobry początek dnia</Link></div>
                <div><Link to= "/desserts">Coś słodkiego</Link></div>
                <div><Link to= "/vegan">Vegan</Link></div>
                <div><Link to= "/cheap">Na każdą kieszeń</Link></div>
            </section>
        );
    }
}
export default SecondSection;