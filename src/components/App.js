import React, { Component } from 'react';
import ReactstrapNavbar from './ReactstrapNavbar';
import ReactstrapJumbotron from './ReactstrapJumbotron';
import ReactstrapAlerts from './ReactstrapAlerts';
import ReactstrapBadge from './ReactstrapBadge';
import ReactstrapBreadcrumbs from './ReactstrapBreadcrumbs';
import ReactstrapBtnDropdown from './ReactstrapBtnDropdown';
import ReactstrapBtnGroup from './ReactstrapBtnGroup';
import ReactstrapBtn from './ReactstrapBtn';

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
            <ReactstrapNavbar />
            <ReactstrapJumbotron />
            <ReactstrapAlerts />
            <ReactstrapBadge />
            <ReactstrapBreadcrumbs />
            <ReactstrapBtnDropdown />
            <ReactstrapBtnGroup />
            <ReactstrapBtn />
            
          </div>
        );
    }
}

export default App;