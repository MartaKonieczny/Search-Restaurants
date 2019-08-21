import React, {Component} from  'react';


import {
    Link,
} from 'react-router-dom';

class FirstSection extends Component {
    render() {
        return (
            <section className="first">
                <div className="img">
                    <p>Znajdź najlepsze miejsca kulinarne w Krakowie</p>
                    <button><Link className="first" to= "/search">Przejdź do wyszukiwarki</Link></button>
                </div>
            </section>
        );
    }
}
export default FirstSection;