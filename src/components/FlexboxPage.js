import React from "react";
import '../styles/mdbootstrap.css';

const FlexboxPage = () => {
    return (
      <div>
        <h1>Enable flex containers</h1>
        <div className="d-flex p-2 col-example">I'm a flexbox container!</div>
        <h1> inline flexbox </h1>
        <div className="d-inline-flex p-2 col-example">I'm an inline flexbox container!</div>
        <h1> flex row</h1>
        <div className="d-flex flex-row">
          <div className="p-2">Flex item 1</div>
          <div className="p-2">Flex item 2</div>
          <div className="p-2">Flex item 3</div>
        </div>
        <div className="d-flex flex-row-reverse">
          <div className="p-2">Flex item 1</div>
          <div className="p-2">Flex item 2</div>
          <div className="p-2">Flex item 3</div>
        </div>
        <h1>flex column</h1>
        <div className="d-flex flex-column">
          <div className="p-2 col-example text-left">Flex item 1</div>
          <div className="p-2 col-example text-left">Flex item 2</div>
          <div className="p-2 col-example text-left">Flex item 3</div>
        </div>
        <div className="d-flex flex-column-reverse">
          <div className="p-2 col-example text-left">Flex item 1</div>
          <div className="p-2 col-example text-left">Flex item 2</div>
          <div className="p-2 col-example text-left">Flex item 3</div>
        </div>
        <h2> justify content </h2>
        <div className="d-flex justify-content-start">
          <div className="p-2 col-example text-left">Flex item 1</div>
          <div className="p-2 col-example text-left">Flex item 2</div>
          <div className="p-2 col-example text-left">Flex item 3</div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="p-2 col-example text-left">Flex item 1</div>
          <div className="p-2 col-example text-left">Flex item 2</div>
          <div className="p-2 col-example text-left">Flex item 3</div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="p-2 col-example text-left">Flex item 1</div>
          <div className="p-2 col-example text-left">Flex item 2</div>
          <div className="p-2 col-example text-left">Flex item 3</div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="p-2 col-example text-left">Flex item 1</div>
          <div className="p-2 col-example text-left">Flex item 2</div>
          <div className="p-2 col-example text-left">Flex item 3</div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="p-2 col-example text-left">Flex item 1</div>
          <div className="p-2 col-example text-left">Flex item 2</div>
          <div className="p-2 col-example text-left">Flex item 3</div>
        </div>
        <h2>

        </h2>
      </div>
    );
}
export default FlexboxPage;

/* 
************************
flex direction properties:
************************
.flex-row
.flex-row-reverse
.flex-column
.flex-column-reverse
.flex-sm-row
.flex-sm-row-reverse
.flex-sm-column
.flex-sm-column-reverse
.flex-md-row
.flex-md-row-reverse
.flex-md-column
.flex-md-column-reverse
.flex-lg-row
.flex-lg-row-reverse
.flex-lg-column
.flex-lg-column-reverse
.flex-xl-row
.flex-xl-row-reverse
.flex-xl-column
.flex-xl-column-reverse

*******************************
justify content 
*******************************
.justify-content-start
.justify-content-end
.justify-content-center
.justify-content-between
.justify-content-around
.justify-content-sm-start
.justify-content-sm-end
.justify-content-sm-center
.justify-content-sm-between
.justify-content-sm-around
.justify-content-md-start
.justify-content-md-end
.justify-content-md-center
.justify-content-md-between
.justify-content-md-around
.justify-content-lg-start
.justify-content-lg-end
.justify-content-lg-center
.justify-content-lg-between
.justify-content-lg-around
.justify-content-xl-start
.justify-content-xl-end
.justify-content-xl-center
.justify-content-xl-between
.justify-content-xl-around

*/