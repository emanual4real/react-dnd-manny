import React, { ReactNode } from "react";

const Draggable = ({ id, children }: { id: string; children: ReactNode }) => {
  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", id);
    console.log("onDragStart");
    console.log(e.dataTransfer.getData("text/plain"));
  };

  return (
    <div
      id={id}
      draggable
      style={{
        zIndex: 9,
      }}
      onDragStart={onDragStart}
    >
      {children}
    </div>
  );
};

export default Draggable;
