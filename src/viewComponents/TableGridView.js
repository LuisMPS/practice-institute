import React, { useState } from "react";
import { DnDBuilder, useEditor, useActions } from "build-ui";
import { TableGrid } from "../components/TableGrid";
import { Button, Table } from "react-bootstrap";
import { SectionLabel } from "../components/SectionLabel";

export const TableGridView = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  const editorLabel = useEditor({
    id: id,
  });
  const handleMoveToBack = () => {
    actions.timeBatched.triggerShift({
      id: id,
      // Send to last position
    });
  };
  const handleMoveOneBack = () => {
    actions.timeBatched.triggerShift({
      id: id,
      // Send to one position
      // before
      relative: -1,
    });
  };

  // const [inputFields, setInputFields] = useState([{ id: id }]);
  // const removeFields = (index) => {
  //   let data = [...inputFields];
  //   data.splice(index, 1);
  //   setInputFields(data);
  // };
  const actions = useActions();
  const handleDelete = () => {
    actions.timeBatched.triggerDelete({
      id: id,
    });
  };

  return (
    // <div>
    //   {inputFields.map((input, index) => {
    //     return (
    <DnDBuilder
      onDragStart={editor.handleDragStart}
      onDragEnd={editor.handleDragEnd}
      onDragLeave={editor.toDnDHandler}
      // onDrop={editor.handleDrop}
      draggable={true}
    >
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Drop element</th>
            <th>Drop element</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <DnDBuilder
              className="tableGrid"
              onDrop={editor.handleDrop}
              as="td"
              {...props}
            ></DnDBuilder>

            <DnDBuilder
              onDrop={editor.handleDrop}
              as="td"
              {...props}
            ></DnDBuilder>
          </tr>
        </tbody>
      </Table>
      <Button variant="danger" onClick={() => handleDelete()}>
        x
      </Button>
    </DnDBuilder>
    //     );
    //   })}
    // </div>
  );
};
