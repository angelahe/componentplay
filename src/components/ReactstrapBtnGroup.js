import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const ReactstrapBtnGroup = (props) => {
  return (
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  );
}

export default ReactstrapBtnGroup;

/*
ButtonGroup.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool
};
*/