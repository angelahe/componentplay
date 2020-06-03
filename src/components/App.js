import React, { Component } from 'react';
import ReactstrapNavbar from './ReactstrapNavbar';
import ReactstrapJumbotron from './ReactstrapJumbotron';
import ReactstrapAlerts from './ReactstrapAlerts';
import ReactstrapBadge from './ReactstrapBadge';
import ReactstrapBreadcrumbs from './ReactstrapBreadcrumbs';
import ReactstrapBtnDropdown from './ReactstrapBtnDropdown';
import ReactstrapBtnGroup from './ReactstrapBtnGroup';
import ReactstrapBtn from './ReactstrapBtn';
import ReactstrapCard from './ReactstrapCard';
import ReactstrapCarousel from './ReactstrapCarousel';
import ReactstrapCollapse from './ReactstrapCollapse';
import ReactstrapDropdowns from './ReactstrapDropdowns';
import ReactstrapFade from './ReactstrapFade';
import ReactstrapForm from './ReactstrapForm';
import ReactstrapInputGroup from './ReactstrapInputGroup';
import ReactstrapLayout from './ReactstrapLayout';
import ReactstrapListGroup from './ReactstrapListGroup';
import ReactstrapMedia from './ReactstrapMedia';
import ReactstrapModal from './ReactstrapModals';
import ReactstrapNavs from './ReactstrapNavs';
import ReactstrapPagination from './ReactstrapPagination';
import ReactstrapPopovers from './ReactstrapPopovers';
import ReactstrapProgress from './ReactstrapProgress';
import ReactstrapSpinners from './ReactstrapSpinners';
import ReactstrapTables from './ReactstrapTables';
import ReactstrapToasts from './ReactstrapToasts';
import ReactstrapTooltips from './ReactstrapTooltips';
import FlexboxPage from './FlexboxPage';

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
            <ReactstrapCard />
            <ReactstrapCarousel />
            <ReactstrapCollapse />
            <ReactstrapDropdowns />
            <ReactstrapFade />
            <ReactstrapForm />
            <ReactstrapInputGroup />
            <ReactstrapLayout />
            <ReactstrapListGroup />
            <ReactstrapMedia />
            <ReactstrapModal />
            <ReactstrapNavbar />
            <ReactstrapNavs />
            <ReactstrapPagination />
            <ReactstrapPopovers />
            <ReactstrapProgress />
            <ReactstrapSpinners />
            <ReactstrapTables />
            <ReactstrapToasts />
            <ReactstrapTooltips />
            <FlexboxPage />
          </div>
        );
    }
}

export default App;