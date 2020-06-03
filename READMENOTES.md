# componentplay
for learning reactstrap and implementing responsive web design

## setup
```
npx create-react-app componentplay
npm install bootstrap --save-dev
npm install reactstrap --save-dev
npm install @popperjs/core
npm install classnames --save-dev
```
## library use
```
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
```

## further reading
https://reactstrap.github.io/
https://mdbootstrap.com/docs/react/utilities/flexbox/
https://medium.com/better-programming/make-a-flexbox-react-component-e96a038da7ec
https://blog.bitsrc.io/12-react-ui-layout-grid-components-and-libraries-for-2019-16e8aa5d0b08
https://bit.dev/
https://www.markpollmann.com/styling-react
https://glenmaddern.com/articles/css-modules
https://www.npmjs.com/package/classnames#usage-with-reactjs
https://www.digitalocean.com/community/tutorials/how-to-create-wrapper-components-in-react-with-props
https://reactjs.org/docs/faq-styling.html
https://www.digitalocean.com/community/tutorials/how-to-create-wrapper-components-in-react-with-props
https://www.ooaccess.com/products/flex-api/

## css in js
```
import styled from 'styled-components;
const MyWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
...
  render() {
    return (
      <MyWrapper>
        <h1>Hi there</h1>
        <p>We are centered</p>
      </MyWrapper>
    )
  }
...

```
## dynamic classes using classnames (and not)
```
render() {
  let className = 'menu';
  if (this.props.isActive) {
    className += ' menu-active';
  }
  return <span className={className}>Menu</span>
}

var Button = React.createClass({
  // ...
  render () {
    var btnClass = 'btn';
    if (this.state.isPressed) btnClass += ' btn-pressed';
    else if (this.state.isHovered) btnClass += ' btn-over';
    return <button className={btnClass}>{this.props.label}</button>;
  }
});

var classNames = require('classnames');
 
var Button = React.createClass({
  // ...
  render () {
    var btnClass = classNames({
      btn: true,
      'btn-pressed': this.state.isPressed,
      'btn-over': !this.state.isPressed && this.state.isHovered
    });
    return <button className={btnClass}>{this.props.label}</button>;
  }
});

var btnClass = classNames('btn', this.props.className, {
  'btn-pressed': this.state.isPressed,
  'btn-over': !this.state.isPressed && this.state.isHovered
});

```

example submit button
```
/* components/submit-button.js */
import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './submit-button.css';
 
let cx = classNames.bind(styles);
 
export default class SubmitButton extends Component {
  render () {
    let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
    let className = cx({
      base: true,
      inProgress: this.props.store.submissionInProgress,
      error: this.props.store.errorOccurred,
      disabled: this.props.form.valid,
    });
    return <button className={className}>{text}</button>;
  }
};
```

## basic styles
https://reactstrap.github.io/components/alerts/

## using attributes
use attributes for passing in state, apply modifier classes, enable advanced functionality:
isOpen - current state for items like dropdown, popover, tooltip
toggle - callback for toggling isOpen in the controlling component
color - applies color classes, ex: <Button color="danger"/>
size for controlling size classes. ex: <Button size="sm"/>
tag - customize component output by passing in an element name or Component
boolean based props (attributes) when possible for alternative style classes or sr-only content

