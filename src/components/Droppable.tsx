import React, { Children, ReactNode } from "react";
import Draggable from "./Draggable";

const Droppable = ({
  children,
  id,
  items,
  onDrop,
}: {
  children: ReactNode | ReactNode[];
  id: string;
  items: string[];
  onDrop: (dragId: string, dropId: string) => void;
}) => {
  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");

    onDrop(data, id);
  };

  // const arrayChildren = Children.toArray(children);

  return (
    <div
      id={id}
      style={{ width: "200px", height: "200px", backgroundColor: "#EEE" }}
      onDrop={handleOnDrop}
      onDragOver={onDragOver}
    >
      {`Droppable ${id}`}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: "40px",
          zIndex: -1,
        }}
      >
        {/* {arrayChildren.map((child) => ))} */}
        {items.map((row) => (
          <Draggable key={row} id={row.toString()} />
        ))}
      </div>
    </div>
  );
};

export default Droppable;
