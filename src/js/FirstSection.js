import React, {Component} from  'react';


import {
    Link,
} from 'react-router-dom';

class FirstSection extends Component {
    render() {
        return (
            <section>
                <div>Zdjęcie jako tło</div>
                <div>Znajdź najlepsze miejsca kulinarne w Krakowie</div>
                <p><Link to= "/search">Przejdź do wyszukiwarki</Link></p>
            </section>
        );
    }
}
export default FirstSection;