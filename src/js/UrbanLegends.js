// import React, {Component} from  'react';
//
// import Header from './Header.js';
// import Footer from './Footer.js';
//
//
// class UrbanLegends extends Component {
//
//     render() {
//         return (
//             <>
//                 <Header/>
//                 <section>
//                   <UrbanResult urbanLegends={this.props.extras}> </UrbanResult>
//                 </section>
//                 <Footer/>
//             </>
//
//         );
//     }
// }
//
// export default UrbanLegends;
//
// class UrbanResult extends Component {
//     apiUrl='http://localhost:3000';
//     state ={
//         restaurants: null,
//
//     };
//
//     componentDidMount() {
//         fetch(`${this.apiUrl}/restaurants`)
//             .then(resp => resp.json())
//             .then(data => {
//                 this.setState({
//                     restaurants: data,
//                 });
//                 // console.log(data)
//             })
//             .catch(err => {
//                 alert('cos jest nie tak');
//                 // console.error(err);
//             })
//     }
//     render(){
//         if(this.state.restaurants===null){
//             return null
//         }
//         const restaurants = this.state.restaurants.filter (item =>{
//             return item.extras === extras
//         })
//
//         const extra = this.restaurants('Legenda');
//
//         const list = restaurants.map(r=>{
//             return(
//                 <div categoty="extra" className="results" key={r.id}>
//                     <div className="result">
//                         <div className="result-element">
//                             <img src={r.img} className="result-img"/>
//                             <div className="result-info" >
//                                 <h4><i className="fa fa-star" aria-hidden="true"></i> {r.rating}</h4>
//                                 <h1><span>Nazwa: </span> <span className="rest">{r.name}</span></h1>
//                                 <h2>{r.category}</h2>
//                                 <h3><span>Kuchnia: </span>{r.kitchen}</h3>
//                                 <h3><span>Godziny otwarcia</span>{r.hours}</h3>
//                                 <h3><span>Adres: </span>{r.address}</h3>
//                                 <h3><span>Cena dla dwóch osób: </span>{r.price} zł</h3>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )
//             }
//         )
//
//
//
//
//
//
//         return (
//             <>{list}</>
//
//         )
//     }
// }