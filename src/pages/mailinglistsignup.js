import React, {Component} from 'react';
import Iframe from '../components/iframe.js';
import Extension from "../components/extensionbanner"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: 'https://gmail.us17.list-manage.com/subscribe?u=4fc38d2c31a66a969bdf6952e&id=e2ac20c621'
        };
    }

    render() {
        return (
            <div className="contentBody">
                <Extension />
                <div className="fullColumn">
                <h1>CompareSmall, The extension</h1>
                <p>We're working on a chome extension to help shoppers quickly compare items on big box retail sites to similar items from small businesses and independent craftsmen.</p>
                </div>
                <Iframe source={this.state.src} />
            </div>
        );
    }
}

export default App;