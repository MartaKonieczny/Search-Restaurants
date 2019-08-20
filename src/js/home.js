import React, {Component} from 'react';


// import './../sass/style.scss'; // adres do głównego pliku SASS
import Header from './Header.js';
import FirstSection from './FirstSection.js';
import SecondSection from './SecondSection.js';
import ThirdSection from './ThirdSection.js';
import Footer from './Footer.js';

class Home extends Component {

    render() {
        return (
            <>
                <Header/>
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <Footer/>
            </>
        )
    }

}

export default Home;
