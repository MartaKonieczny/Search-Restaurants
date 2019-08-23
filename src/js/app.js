import React, {Component} from "react";
import ReactDOM from "react-dom"

import './../sass/style.scss'; // adres do głównego pliku SASS
import Home from './home.js';
import Searcher from './Searcher.js';
import UrbanLegends from './UrbanLegends.js';
import Breakfasts from './Breakfasts.js';
import Italy from './Italy.js';
import Desserts from './Desserts.js';
import Vegan from './Vegan.js';
import Cheap from './Cheap.js';
import ForCustomers from './ForCustomers.js';
import ForRestaurants from './ForRestaurants.js';
import Contact from './Contact.js';
import About from './About.js';

import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';



class App extends Component {

    render() {
        return (
            <section className='container' >
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/search' component={Searcher} />
                        {/*<Route path='/legend' component={UrbanLegends} />*/}
                        <Route path='/italy' component={Italy} />
                        <Route path='/breakfast' component={Breakfasts} />
                        <Route path='/desserts' component={Desserts} />
                        <Route path='/vegan' component={Vegan} />
                        <Route path='/cheap' component={Cheap} />
                        <Route path='/customer' component={ForCustomers} />
                        <Route path='/restaurant' component={ForRestaurants} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                    </Switch>
                </HashRouter>
            </section>

        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));