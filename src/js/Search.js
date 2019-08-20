import React, {Component} from  'react';

import Header from './Header.js';
import Footer from './Footer.js';

class Search extends Component {
    render() {
        return (
            <>
                <Header/>
                <section>
                    <div><input placeholder="Znajdź co chcesz"/></div>
                    <div>
                        <div>
                            <p>FILTRY</p>
                            <div>
                                <form>
                                    <fieldset>
                                        <legend>Sortuj po</legend>
                                        <label>Ocena - malejąco
                                            <input type="radio" value="raiting"/>
                                        </label><br/>
                                        <label>Cena - malejąco
                                            <input type="radio" value="price-to-min"/>
                                        </label><br/>
                                        <label>Cena - rosnąco
                                            <input type="radio" value="price-to-max"/>
                                        </label>
                                    </fieldset>
                                </form>
                            </div>
                            <div>
                                <form>
                                    <fieldset>
                                        <legend>Lokalizacja</legend>
                                        <label>1
                                            <input type="radio" value="polish"/>
                                        </label><br/>
                                        <label>2
                                            <input type="radio" value="european"/>
                                        </label><br/>
                                        <label>3
                                            <input type="radio" value="italian"/>
                                        </label><br/>
                                        <label>4
                                            <input type="radio" value="american"/>
                                        </label><br/>
                                        <label>5
                                            <input type="radio" value="asian"/>
                                        </label><br/>
                                    </fieldset>
                                </form>
                            </div>
                            <div>
                                <form>
                                    <fieldset>
                                        <legend>Rodzaj Kuchni</legend>
                                        <label>Polska
                                            <input type="radio" value="polish"/>
                                        </label><br/>
                                        <label>Europejska
                                            <input type="radio" value="european"/>
                                        </label><br/>
                                        <label>Włoska
                                            <input type="radio" value="italian"/>
                                        </label><br/>
                                        <label>Amerykańska
                                        <input type="radio" value="american"/>
                                        </label><br/>
                                        <label>Azjatycka
                                            <input type="radio" value="asian"/>
                                        </label><br/>
                                    </fieldset>
                                </form>
                            </div>
                            <div>
                                <form>
                                    <fieldset>
                                        <legend>Rodzaj Miejsca</legend>
                                        <label>Restauracje
                                            <input type="radio" value="restaurant"/>
                                        </label><br/>
                                        <label>Kawiarnie
                                            <input type="radio" value="cafe"/>
                                        </label><br/>
                                        <label>Bary
                                            <input type="radio" value="bar"/>
                                        </label>
                                    </fieldset>
                                </form>
                            </div>
                            <div>
                                <form>
                                    <fieldset>
                                        <legend>Cena dla dwóch osób</legend>
                                        <label>Mniej niż 40zł
                                            <input type="radio" value="40"/>
                                        </label><br/>
                                        <label>40zł-80zł
                                            <input type="radio" value="from40"/>
                                        </label><br/>
                                        <label>80zł-120zł
                                            <input type="radio" value="from80"/>
                                        </label><br/>
                                        <label>120zł-180zł
                                            <input type="radio" value="from120"/>
                                        </label><br/>
                                        <label>180 zł i więcej
                                            <input type="radio" value="from180"/>
                                        </label><br/>
                                    </fieldset>
                                </form>
                            </div>
                            <div>
                                <form>
                                    <fieldset>
                                        <legend>Otwarte o</legend>
                                        <label>I tutaj będzie aktualny zegar
                                            <input type="radio" value="time"/>
                                        </label>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div>Wynik1</div>
                            <div>Wynik2</div>
                            <div>Wynik3</div>
                            <div>Wynik4</div>
                            <div>Wynik5</div>
                            <div>Wynik6</div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>

        );
    }
}
export default Search;


