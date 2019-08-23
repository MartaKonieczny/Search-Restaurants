import React, {Component} from  'react';

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
            <div className="width">
                {/*<div>*/}
                {/*    <input placeholder="Znajdź co chcesz"/>*/}
                {/*    <button>Szukaj</button>*/}
                {/*</div>*/}
                <div className="width">
                    <div className="filters width">
                        <p>FILTRY</p>
                        <div className="width">
                            <form>
                                <fieldset>
                                    <legend>Sortuj po:</legend>
                                    {/*<label>Ocena - malejąco*/}
                                    {/*    <input type="radio" value="raiting" name="sort"/>*/}
                                    {/*</label><br/>*/}
                                    <label>
                                        <input onChange={this.handleSortPrice} type="checkbox" value="price-to-min" name="sort"/><span>Cena - malejąco</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleSortPrice} type="checkbox" value="price-to-max" name="sort"/><span>Cena - rosnąco</span>
                                    </label>
                                </fieldset>
                            </form>
                        </div>
                            <div>
                                <form>
                                    <fieldset>
                                        <legend>Lokalizacja:</legend>
                                        <label>
                                            <input onChange={this.handleChangeLocation} type="checkbox" value="Dębniki" name="location"/><span>Dębniki</span>
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeLocation} type="checkbox" value="Grzegórzki" name="location"/><span>Grzegórzki</span>
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeLocation} type="checkbox" value="Kazimierz" name="location"/><span>Kazimierz</span>
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeKLocation} type="checkbox" value="Kleparz" name="location"/><span>Kleparz</span>
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeLocation} type="checkbox" value="Podgórze" name="location"/><span>Podgórze</span>
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeLocation} type="checkbox" value="Stare Miasto" name="location"/><span>Stare Miasto</span>
                                        </label><br/>
                                    </fieldset>
                                </form>
                            </div>
                        <div>
                            <form>
                                <fieldset>
                                    <legend>Rodzaj Kuchni:</legend>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Azjatycka" name="kitchen"/><span>Azjatycka</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Burgery" name="kitchen"/><span>Burgery</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Drinki" name="kitchen"/><span>Drinki</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Europejska" name="kitchen"/><span>Europejska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Fast Food" name="kitchen"/><span>Fast Food</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Francuska" name="kitchen"/><span>Francuska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Gruzińska" name="kitchen"/><span>Gruzińska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Indyjska" name="kitchen"/><span>Indyjska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Japońska" name="kitchen"/><span>Japońska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Kawiarnia" name="kitchen"/><span>Kawiarnia</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Koreańska" name="kitchen"/><span>Koreańska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Lodziarnia" name="kitchen"/><span>Lodziarnia</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Meksykańska" name="kitchen"/><span>Meksykańska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Międzynarodowa" name="kitchen"/><span>Międzynarodowa</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Pizza" name="kitchen"/><span>Pizza</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Polska" name="kitchen"/><span>Polska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Przekąski" name="kitchen"/><span>Przekąski</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Ryby i owoce morza" name="kitchen"/><span>Ryby i owoce morza</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Steak" name="kitchen"/><span>Steak</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Sushi" name="kitchen"/><span>Sushi</span>
                                    </label><br/>
                                    <label>
                                    <input onChange={this.handleChangeKitchen} type="checkbox" value="Śródziemnomorska" name="kitchen"/><span>Śródziemnomorska</span>
                                     </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Tajska" name="kitchen"/><span>Tajska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Wegańska" name="kitchen"/><span>Wegańska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Wegetariańska" name="kitchen"/><span>Wegetariańska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Węgierska" name="kitchen"/><span>Węierska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Wietnamska" name="kitchen"/><span>Wietnamska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Włoska" name="kitchen"/><span>Włoska</span>
                                    </label><br/>
                                    <label>
                                        <input onChange={this.handleChangeKitchen} type="checkbox" value="Zdrowe jedzenie" name="kitchen"/><span>Zdrowe jedzenie</span>
                                    </label><br/>



                                </fieldset>
                            </form>
                        </div>
                            <div>
                                <form>
                                    <fieldset>
                                        <legend>Rodzaj Miejsca:</legend>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="checkbox" value="BAR" name="place"/><span>Bar</span>
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="checkbox" value="CUKIERNIA" name="place"/><span>Cukiernia</span>
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="checkbox" value="EKSKLUZYWNA RESTAURACJA" name="place"/><span>Ekskluzywna restauracja</span>
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="checkbox" value="KAWIARNIA" name="place"/><span>Kawiarnia</span>
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="checkbox" value="PUB" name="place"/><span>PUB</span>
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="checkbox" value="RESTAURACJA" name="place"/><span>Restauracja</span>
                                        </label><br/>
                                        <label>
                                            <input onChange={this.handleChangeCategory} type="checkbox" value="SZYBKIE JEDZENIE" name="place"/><span>Szybkie jedzenie</span>
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


