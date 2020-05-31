import React from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class AppJumbotron extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          isOpen: false
      };
  }

  render() {
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
}
  
export default AppJumbotron;