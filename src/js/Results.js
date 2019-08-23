import React, {Component} from  'react';

class Results extends Component {
    apiUrl='http://localhost:3000';
    state ={
        restaurants: null,

    };

    componentDidMount() {
        fetch(`${this.apiUrl}/restaurants`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    restaurants: data,
                });
                // console.log(data)
            })
            .catch(err => {
                alert('cos jest nie tak');
                // console.error(err);
            })
    }
    render() {
        if(this.state.restaurants===null){
            return null
        }
        const restaurants = this.state.restaurants


        .filter (item =>{
            // console.log(item.kitchen, this.props.filterKitchen);
            if(this.props.filterKitchen !== "" && item.kitchen.indexOf(this.props.filterKitchen) === -1){
                return false
            }
            // else if(item.address.indexOf(this.props.filterLocation) === -1){
            //     return false
            // }
            // else if(item.category.indexOf(this.props.filterCategory) === -1){
            //     return false
            // }
            return true
            })
        restaurants.sort ((a, b) =>{
            if (this.props.sortPrice === 'price-to-min'){
                return a.price - b.price
            }
            else{
                return b.price-a.price
            }
             })
        // restaurants.filter (item =>{
        //     console.log(item.address, this.props.filterLocation);
        //
        //             return true
        //     })
        // restaurants.filter (item =>{
        //     // console.log(item.category, this.props.filterCategory);
        //     if(item.category.indexOf(this.props.filterCategory) === -1){
        //         return false
        //     }
        //         return true
        // })



        // console.log(restaurants);
        const list = restaurants.map(r => {
            return(
                <div key={r.id}>
                    <div className="results">
                        <div className="result">
                            <div className="result-element">
                                <img src={r.img} className="result-img"/>
                                <div className="result-info" >
                                    <h4><i className="fa fa-star" aria-hidden="true"></i> {r.rating}</h4>
                                    <h1><span>Nazwa: </span> {r.name}</h1>
                                    <h2>{r.category}</h2>
                                    <h2><span>Kuchnia: </span>{r.kitchen}</h2>
                                    <h3><span>Godziny otwarcia</span>{r.hours}</h3>
                                    <h3><span>Adres: </span>{r.address}</h3>
                                    <h3><span>Cena dla dwóch osób: </span>{r.price} zł</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <>{list}</>

        )
    }


}
export default Results;