import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";

const Popup = ({ children }) => {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <OverlayTrigger
        placement="bottom"
        trigger="click"
        overlay={
          <Popover>
            <Popover.Header as="h3">GeeksforGeeks</Popover.Header>
            <Popover.Body>Greetings from GeeksforGeeks</Popover.Body>
          </Popover>
        }
      >
        {children}
        {/* <Button variant="success">Open Popover</Button> */}
      </OverlayTrigger>
    </div>
  );
};

export { Popup };
