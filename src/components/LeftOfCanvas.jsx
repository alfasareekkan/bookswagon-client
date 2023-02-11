import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FlexColumn from './list/FlexColumn';

function LeftOfCanvas({
  show, handleClose, handleShow, children,
}) {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Category</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <FlexColumn>
          {
             children
                  }
        </FlexColumn>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

// render(<Example />);
export default LeftOfCanvas;
