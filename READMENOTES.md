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

