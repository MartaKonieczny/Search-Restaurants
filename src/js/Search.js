// import React, {Component} from  'react';
//
// import Header from './Header.js';
// import Footer from './Footer.js';
//
// class Searcher extends Component {
//     state={
//         sortPrice:'',
//         filterKitchen:false
//     }
//
// //tworzę funkcję modyfikującą state
//     changeFilterKitchen = value =>{
//         console.log("ok");
//         this.setState({
//             filterKitchen: value
//         })
//
//     }
//
//
// /* przekazuję do <Filter/>*/
// /*<Results/> filterKitchen=this.filterKitchen*/
//         render() {
//         return(
//                 <>
//                     <Header/>
//                     <section className="display">
//                         <Filter changeFiKitch={this.changeFilterKitchen}/>
//                         <Results filterKitchen={this.state.filterKitchen}/>
//                     </section>
//                     <Footer/>
//                 </>
//         );
//     }
// }
//
//             //this.props.nazwapropsa  this.props.kitchen
// class Filter extends Component {
//     handleChangeKitchen = (e) =>{
//         if(typeof this.props.changeFiKitch === 'function'){
//             this.props.changeFiKitch(e.target.value)
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 {/*<div>*/}
//                 {/*    <input placeholder="Znajdź co chcesz"/>*/}
//                 {/*    <button>Szukaj</button>*/}
//                 {/*</div>*/}
//                 <div className="display">
//                     <div className="filters">
//                         <p>FILTRY</p>
//                         <div>
//                             <form>
//                                 <fieldset>
//                                     <legend>Sortuj po:</legend>
//                                     {/*<label>Ocena - malejąco*/}
//                                     {/*    <input type="radio" value="raiting" name="sort"/>*/}
//                                     {/*</label><br/>*/}
//                                     <label>Cena - malejąco
//                                         <input type="radio" value="price-to-min" name="sort"/>
//                                     </label><br/>
//                                     <label>Cena - rosnąco
//                                         <input  type="radio" value="price-to-max" name="sort"/>
//                                     </label>
//                                 </fieldset>
//                             </form>
//                         </div>
//                         {/*    <div>*/}
//                         {/*        <form>*/}
//                         {/*            <fieldset>*/}
//                         {/*                <legend>Lokalizacja:</legend>*/}
//                         {/*                <label>1*/}
//                         {/*                    <input type="radio" value="polish" name="location"/>*/}
//                         {/*                </label><br/>*/}
//                         {/*                <label>2*/}
//                         {/*                    <input type="radio" value="european" name="location"/>*/}
//                         {/*                </label><br/>*/}
//                         {/*                <label>3*/}
//                         {/*                    <input type="radio" value="italian" name="location"/>*/}
//                         {/*                </label><br/>*/}
//                         {/*                <label>4*/}
//                         {/*                    <input type="radio" value="american" name="location"/>*/}
//                         {/*                </label><br/>*/}
//                         {/*                <label>5*/}
//                         {/*                    <input type="radio" value="asian" name="location"/>*/}
//                         {/*                </label><br/>*/}
//                         {/*            </fieldset>*/}
//                         {/*        </form>*/}
//                         {/*    </div>*/}
//                         <div>
//                             <form>
//                                 <fieldset>
//                                     <legend>Rodzaj Kuchni:</legend>
//                                     <label>Polska
//                                         <input onChange={this.handleChangeKitchen} type="radio" value="Polska" name="kitchen"/>
//                                     </label><br/>
//                                     <label>Europejska
//                                         <input onChange={this.handleChangeKitchen} type="radio" value="Europejska" name="kitchen"/>
//                                     </label><br/>
//                                     <label>Włoska
//                                         <input onChange={this.handleChangeKitchen} type="radio" value="Włoska" name="kitchen"/>
//                                     </label><br/>
//                                     <label>Amerykańska
//                                         <input onChange={this.handleChangeKitchen} type="radio" value="Amerykańska" name="kitchen"/>
//                                     </label><br/>
//                                     <label>Azjatycka
//                                         <input onChange={this.handleChangeKitchen} type="radio" value="asian" name="kitchen"/>
//                                     </label><br/>
//                                 </fieldset>
//                             </form>
//                         </div>
//                         {/*    <div>*/}
//                         {/*        <form>*/}
//                         {/*            <fieldset>*/}
//                         {/*                <legend>Rodzaj Miejsca:</legend>*/}
//                         {/*                <label>Restauracje*/}
//                         {/*                    <input type="radio" value="restaurant" name="place"/>*/}
//                         {/*                </label><br/>*/}
//                         {/*                <label>Kawiarnie*/}
//                         {/*                    <input type="radio" value="cafe" name="place"/>*/}
//                         {/*                </label><br/>*/}
//                         {/*                <label>Bary*/}
//                         {/*                    <input type="radio" value="bar" name="place"/>*/}
//                         {/*                </label>*/}
//                         {/*            </fieldset>*/}
//                         {/*        </form>*/}
//                         {/*    </div>*/}
//                         {/*    <div>*/}
//                         {/*        <form>*/}
//                         {/*            <fieldset>*/}
//                         {/*                <legend>Cena dla dwóch osób:</legend>*/}
//                         {/*                <label>Mniej niż 40zł*/}
//                         {/*                    <input type="radio" value="40" name="price"/>*/}
//                         {/*                </label><br/>*/}
//                         {/*                <label>40zł-80zł*/}
//                         {/*                    <input type="radio" value="from40" name="price"/>*/}
//                         {/*                </label><br/>*/}
//                         {/*                <label>80zł-120zł*/}
//                         {/*                    <input type="radio" value="from80" name="price"/>*/}
//                         {/*                </label><br/>*/}
//                         {/*                <label>120zł-180zł*/}
//                         {/*                    <input type="radio" value="from120" name="price"/>*/}
//                         {/*                </label><br/>*/}
//                         {/*                <label>180 zł i więcej*/}
//                         {/*                    <input type="radio" value="from180" name="price"/>*/}
//                         {/*                </label><br/>*/}
//                         {/*            </fieldset>*/}
//                         {/*        </form>*/}
//                         {/*    </div>*/}
//                         {/*    <div>*/}
//                         {/*        <form>*/}
//                         {/*            <fieldset>*/}
//                         {/*                <legend>Otwarte o:</legend>*/}
//                         {/*                <label>I tutaj będzie aktualny zegar*/}
//                         {/*                    <input type="radio" value="time"/>*/}
//                         {/*                </label>*/}
//                         {/*            </fieldset>*/}
//                         {/*        </form>*/}
//                         {/*    </div>*/}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
//
// class Results extends Component {
//     apiUrl='http://localhost:3000';
//     state ={
//         restaurants: null
//     }
//
//     componentDidMount() {
//         fetch(`${this.apiUrl}/restaurants`)
//             .then(resp => resp.json())
//             .then(data => {
//                 this.setState({
//                     restaurants: data,
//                 })
//                 console.log(data)
//             })
//             .catch(err => {
//                 alert('cos jest nie tak');
//                 console.error(err);
//             })
//     }
//     render() {
//         if(this.state.restaurants===null){
//             return null
//         }
//         const restaurants = this.state.restaurants.filter (item =>{
//             console.log(item.kitchen, this.props.filterKitchen)
//             if(item.kitchen.indexOf(this.props.filterKitchen) === -1){
//                 return false
//             }
//             return true
//
//         })
//         console.log(restaurants)
//         const list = restaurants.map(r => {
//             return(
//                 <div key={r.id}>
//                     <div className="results">
//                         <div className="result">
//                             <div className="result-element">
//                                 <div className="result-img"></div>
//                                 <div className="result-info" >
//                                     <h1>Nazwa restauracji:{r.name}</h1>
//                                     <h2>{r.category}</h2>
//                                     <h2>Kuchnia:{r.kitchen}</h2>
//                                     <h3>Godziny otwarcia:{r.hours}</h3>
//                                     <h3>Adres:{r.address}</h3>
//                                     <h3>Cena dla dwóch osób:{r.price} zł</h3>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//
//             )
//         })
//         return (
//             <>{list}</>
//
//         )
//         }
//
//
// }
//
// export default Searcher;
//
//
