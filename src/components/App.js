import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import AppJumbotron from './AppJumbotron';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false, 
            currentView: ''
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
          <div>
            <AppNavbar />
            <AppJumbotron />
          </div>
        );
    }
}

export default App;