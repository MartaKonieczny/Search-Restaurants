import React, {Component} from  'react';

import Header from './Header.js';
import Footer from './Footer.js';
import Results from './Results.js';
import Filter from './Filter.js';

class Searcher extends Component {
    state={
        filterKitchen:"",
        sortPrice:false,
        filterLocation: false,
        filterCategory: false

    };
    changeSortPrice = value =>{
        this.setState({
            sortPrice:value
        })
    };

//tworzę funkcję modyfikującą state
    changeFilterKitchen = value =>{
        // console.log("ok");
        this.setState({
            filterKitchen: value
        })
    };
    changeFilterLocation = value =>{
        // console.log("ok");
        this.setState({
            filterLocation: value
        })
    };
    changeFilterCategory = value =>{
        this.setState({
            filterCategory: value
        })
    };


    /* przekazuję do <Filter/>*/
    /*<Results/> filterKitchen=this.filterKitchen*/
    render() {
        return(
            <>
                <Header/>
                <section className="display">
                    <Filter changeSorPrice={this.changeSortPrice} changeFiltKitch={this.changeFilterKitchen} changeSortLocation={this.changeFilterLocation} changeFilterCategory={this.changeFilterCategory}/>
                    <Results sortPrice={this.state.sortPrice} filterKitchen={this.state.filterKitchen} filterLocation={this.filterLocation} filterCategory={this.state.filterCategory}/>
                </section>
                <Footer/>
            </>
        );
    }
}

export default Searcher;


