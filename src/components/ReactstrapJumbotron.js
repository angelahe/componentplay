import React from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

  const ReactstrapJumbotron = (props) => {
    return (
      <div>
       <Jumbotron>
        <Container>
            <Row>
                <Col>
                    <h1>Welcome to React</h1>
                    <p>
                        <Button
                            tag="a"
                            color="success"
                            size="large"
                            href="http://reactstrap.github.io"
                            target="_blank"
                        >
                            View Reactstrap Docs
                        </Button>
                    </p>
                </Col>
            </Row>
        </Container>
      </Jumbotron> 
      </div>
    );
  }
  
export default ReactstrapJumbotron;

/* properties
Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};
*/