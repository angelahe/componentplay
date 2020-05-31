import React, { useState } from 'react';
import { Button, ButtonGroup, ButtonToggle } from 'reactstrap';

const ReactstrapBtn = (props) => {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }

  return (
    <div>
      <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button>
      <Button outline color="primary">primary</Button>{' '}
      <Button outline color="secondary">secondary</Button>{' '}
      <Button outline color="success">success</Button>{' '}
      <Button outline color="info">info</Button>{' '}
      <Button outline color="warning">warning</Button>{' '}
      <Button outline color="danger">danger</Button>
      <Button color="primary" size="lg">Large Button</Button>{' '}
      <Button color="secondary" size="lg">Large Button</Button>
      <Button color="primary" size="sm">Small Button</Button>{' '}
      <Button color="secondary" size="sm">Small Button</Button>
      <Button color="primary" size="lg" block>Block level button</Button>
      <Button color="secondary" size="lg" block>Block level button</Button>
      <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
      <Button color="secondary" size="lg" disabled>Button</Button>
      <div>
          <div>
          <h5>Radio Buttons</h5>
          <ButtonGroup>
            <Button color="primary" onClick={() => setRSelected(1)} active={rSelected === 1}>One</Button>
            <Button color="primary" onClick={() => setRSelected(2)} active={rSelected === 2}>Two</Button>
            <Button color="primary" onClick={() => setRSelected(3)} active={rSelected === 3}>Three</Button>
          </ButtonGroup>
          <p>Selected: {rSelected}</p>

          <h5>Checkbox Buttons</h5>
          <ButtonGroup>
            <Button color="primary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>One</Button>
            <Button color="primary" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>Two</Button>
            <Button color="primary" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Three</Button>
          </ButtonGroup>
          <p>Selected: {JSON.stringify(cSelected)}</p>
        </div>
      </div>
      <div>
        <ButtonToggle color="primary">primary</ButtonToggle>{' '}
        <ButtonToggle color="secondary">secondary</ButtonToggle>{' '}
        <ButtonToggle color="success">success</ButtonToggle>{' '}
        <ButtonToggle color="info">info</ButtonToggle>{' '}
        <ButtonToggle color="warning">warning</ButtonToggle>{' '}
        <ButtonToggle color="danger">danger</ButtonToggle>{' '}
      </div>
    </div>
  );
}

export default ReactstrapBtn;

/*
Button.propTypes = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,
  outline: PropTypes.bool,

  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    ]))
  ]),

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),

  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,

  // use close prop for BS4 close icon utility
  close: PropTypes.bool,
}

Button.defaultProps = {
  color: 'secondary',
  tag: 'button',
}
*/