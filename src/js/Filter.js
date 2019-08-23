import React, {Component} from  'react';
import Results from "./Results";
//this.props.nazwapropsa  this.props.kitchen

class Filter extends Component {

    handleSortPrice = (e) =>{
        if(typeof this.props.changeSorPrice === 'function'){
            this.props.changeSorPrice(e.target.value)
        }
    }
    handleChangeKitchen = (e) =>{
        if(typeof this.props.changeFiltKitch === 'function'){
            this.props.changeFiltKitch(e.target.value)
        }
    }
    handleChangeLocation = (e) =>{
        if(typeof this.props.changeFilterLocation === 'function'){
            this.props.changeFilterLocation(e.target.value)
        }
    }
    handleChangeCategory = (e) =>{
        if(typeof this.props.changeFilterCategory === 'function'){
            this.props.changeFilterCategory(e.target.value)
        }
    }



    render() {
        return (
            <div>
                {/*<div>*/}
                {/*    <input placeholder="Znajdź co chcesz"/>*/}
                {/*    <button>Szukaj</button>*/}
                {/*</div>*/}
                <div className="display">
                    <div className="filters">
                        <p>FILTRY</p>
                        <div>
                            <form>
                                <fieldset>
                                    <legend>Sortuj po:</legend>
                                    {/*<label>Ocena - malejąco*/}
                                    {/*    <input type="radio" value="raiting" name="sort"/>*/}
                                    {/*</label><br/>*/}
                                    <label>
                                        <input onChange={this.handleSortPrice} type="radio" value="price-to-min" name="sort"/>Cena - malejąco
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleSortPrice} type="radio" value="price-to-max" name="sort"/>Cena - rosnąco
                                    </label>
                                </fieldset>
                            </form>
                        </div>
                            <div>
                                <form>
                                    <fieldset>
                                        <legend>Lokalizacja:</legend>
                                        <label>
                                            <input onChange={this.handleChangeLocation} type="radio" value="Dębniki" name="location"/>Dębniki
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeLocation} type="radio" value="Grzegórzki" name="location"/>Grzegórzki
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeLocation} type="radio" value="Kazimierz" name="location"/>Kazimierz
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeKLocation} type="radio" value="Kleparz" name="location"/>Kleparz
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeLocation} type="radio" value="Podgórze" name="location"/>Podgórze
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeLocation} type="radio" value="Stare Miasto" name="location"/>Stare Miasto
                                        </label><br/>
                                    </fieldset>
                                </form>
                            </div>
                        <div>
                            <form>
                                <fieldset>
                                    <legend>Rodzaj Kuchni:</legend>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Azjatycka" name="kitchen"/>Azjatycka
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Burgery" name="kitchen"/>Burgery
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Drinki" name="kitchen"/>Drinki
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Europejska" name="kitchen"/>Europejska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Fast Food" name="kitchen"/>Fast Food
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Francuska" name="kitchen"/>Francuska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Gruzińska" name="kitchen"/>Gruzińska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Indyjska" name="kitchen"/>Indyjska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Japońska" name="kitchen"/>Japońska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Kawiarnia" name="kitchen"/>Kawiarnia
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Koreańska" name="kitchen"/>Koreańska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Lodziarnia" name="kitchen"/>Lodziarnia
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Meksykańska" name="kitchen"/>Meksykańska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Międzynarodowa" name="kitchen"/>Międzynarodowa
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Pizza" name="kitchen"/>Pizza
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Polska" name="kitchen"/>Polska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Przekąski" name="kitchen"/>Przekąski
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Ryby i owoce morza" name="kitchen"/>Ryby i owoce morza
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Steak" name="kitchen"/>Steak
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Sushi" name="kitchen"/>Sushi
                                    </label><br/>
                                    <label>
                                    <input onChange={this.handleChangeKitchen} type="radio" value="Śródziemnomorska" name="kitchen"/>Śródziemnomorska
                                     </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Tajska" name="kitchen"/>Tajska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Wegańska" name="kitchen"/>Wegańska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Wegetariańska" name="kitchen"/>Wegetariańska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Węgierska" name="kitchen"/>Węierska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Wietnamska" name="kitchen"/>Wietnamska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Włoska" name="kitchen"/>Włoska
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="radio" value="Zdrowe jedzenie" name="kitchen"/>Zdrowe jedzenie
                                    </label><br/>



                                </fieldset>
                            </form>
                        </div>
                            <div>
                                <form>
                                    <fieldset>
                                        <legend>Rodzaj Miejsca:</legend>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="radio" value="BAR" name="place"/>Bar
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="radio" value="CUKIERNIA" name="place"/>Cukiernia
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="radio" value="EKSKLUZYWNA RESTAURACJA" name="place"/>Ekskluzywna restauracja
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="radio" value="KAWIARNIA" name="place"/>Kawiarnia
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="radio" value="PUB" name="place"/>PUB
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="radio" value="RESTAURACJA" name="place"/>Restauracja
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="radio" value="SZYBKIE JEDZENIE" name="place"/>Szybkie jedzenie
                                        </label>
                                    </fieldset>
                                </form>
                            </div>
                        {/*    <div>*/}
                        {/*        <form>*/}
                        {/*            <fieldset>*/}
                        {/*                <legend>Cena dla dwóch osób:</legend>*/}
                        {/*                <label>Mniej niż 40zł*/}
                        {/*                    <input type="radio" value="40" name="price"/>*/}
                        {/*                </label><br/>*/}
                        {/*                <label>40zł-80zł*/}
                        {/*                    <input type="radio" value="from40" name="price"/>*/}
                        {/*                </label><br/>*/}
                        {/*                <label>80zł-120zł*/}
                        {/*                    <input type="radio" value="from80" name="price"/>*/}
                        {/*                </label><br/>*/}
                        {/*                <label>120zł-180zł*/}
                        {/*                    <input type="radio" value="from120" name="price"/>*/}
                        {/*                </label><br/>*/}
                        {/*                <label>180 zł i więcej*/}
                        {/*                    <input type="radio" value="from180" name="price"/>*/}
                        {/*                </label><br/>*/}
                        {/*            </fieldset>*/}
                        {/*        </form>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <form>*/}
                        {/*            <fieldset>*/}
                        {/*                <legend>Otwarte o:</legend>*/}
                        {/*                <label>I tutaj będzie aktualny zegar*/}
                        {/*                    <input type="radio" value="time"/>*/}
                        {/*                </label>*/}
                        {/*            </fieldset>*/}
                        {/*        </form>*/}
                        {/*    </div>*/}
                    </div>
                </div>
            </div>
        )
    }
}
export default Filter;


