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