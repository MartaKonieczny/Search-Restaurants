import React, {Component} from  'react';

import Header from './Header.js';
import Footer from './Footer.js';


class UrbanLegends extends Component {
    render() {
        return (
            <>
                <Header/>
                <section>
                    <div>
                        <div>Wynik1Legendy</div>
                        <div>Wynik2</div>
                        <div>Wynik3</div>
                        <div>Wynik4</div>
                        <div>Wynik5</div>
                        <div>Wynik6</div>
                    </div>
                </section>
                <Footer/>
            </>

        );
    }
}
export default UrbanLegends;