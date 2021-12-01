import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";

const Popup = ({ children, containerClassName, header, body }) => {
  return (
    <div
      className={
        containerClassName
          ? containerClassName + " popover-container"
          : "popover-container"
      }
    >
      <OverlayTrigger
        placement="bottom"
        trigger="click"
        overlay={
          <Popover style={{ minWidth: 300 }}>
            <Popover.Header as="h3">{header}</Popover.Header>
            <Popover.Body>{body}</Popover.Body>
          </Popover>
        }
      >
        {/* {children} */}
        <Button className="popover-container__button" variant="">
          {children}
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export { Popup };
