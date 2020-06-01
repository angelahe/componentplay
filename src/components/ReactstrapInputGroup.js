import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const ReactstrapInputGroup = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Check it out" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon addonType="append">
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Dolla dolla billz yo!" />
        <InputGroupAddon addonType="append">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default ReactstrapInputGroup;

/* properties:
InputGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  className: PropTypes.string
};

InputGroupAddOn.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  className: PropTypes.string
};

InputGroupButton.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  children: PropTypes.node,
  groupClassName: PropTypes.string, // only used in shorthand
  groupAttributes: PropTypes.object, // only used in shorthand
  className: PropTypes.string
};
*/