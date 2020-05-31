# componentplay
for learning reactstrap and implementing responsive web design

## setup
```
npx create-react-app componentplay
npm install bootstrap --save-dev
npm install reactstrap --save-dev
npm install @popperjs/core
```
## library use
```
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
```

## further reading
https://reactstrap.github.io/
https://mdbootstrap.com/docs/react/utilities/flexbox/
https://blog.bitsrc.io/12-react-ui-layout-grid-components-and-libraries-for-2019-16e8aa5d0b08
https://bit.dev/
https://www.markpollmann.com/styling-react
https://glenmaddern.com/articles/css-modules

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

