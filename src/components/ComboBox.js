import React from "react";
import { Dropdown, ButtonGroup, DropdownButton } from "react-bootstrap";

const ComboBox = (props) => {
  return (
    <>
    <div className="mb-3 mt-3">
    {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup} 
            variant="secondary"
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size={props.size}
            title={props.label}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          </DropdownType>
        ))}
      </div>
    </>
  );
};

export default ComboBox;
