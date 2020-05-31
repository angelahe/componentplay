import React from 'react';
import { Badge, Container, Row, Col } from 'reactstrap';

const ReactstrapBadge = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <h2>Badges</h2>
        </Row>
        <Row>
          <Col>
            <Row>
              <h4>auto-sizes</h4>
            </Row>
            <Row>
              <h1>Heading<Badge color="secondary">New</Badge></h1>
              <h2>Heading <Badge color="secondary">New</Badge></h2>
              <h3>Heading <Badge color="secondary">New</Badge></h3>
              <h4>Heading <Badge color="secondary">New</Badge></h4>
              <h5>Heading <Badge color="secondary">New</Badge></h5>
              <h6>Heading <Badge color="secondary">New</Badge></h6>
            </Row> 
          </Col>
          <Col>
            <Row>
              <h4>colored</h4>
            </Row>
            <Row>
              <Badge color="primary">Primary</Badge>
              <Badge color="secondary">Secondary</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="danger">Danger</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="info">Info</Badge>
              <Badge color="light">Light</Badge>
              <Badge color="dark">Dark</Badge>
            </Row>
          </Col>
          <Col>
            <Row>
              <h4>as pills</h4>
            </Row>
            <Row>
              <Badge color="primary" pill>Primary</Badge>
              <Badge color="secondary" pill>Secondary</Badge>
              <Badge color="success" pill>Success</Badge>
              <Badge color="danger" pill>Danger</Badge>
              <Badge color="warning" pill>Warning</Badge>
              <Badge color="info" pill>Info</Badge>
              <Badge color="light" pill>Light</Badge>
              <Badge color="dark" pill>Dark</Badge>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ReactstrapBadge;