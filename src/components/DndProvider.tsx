import React, { ReactNode, useState } from "react";
import Droppable from "./Droppable";

export interface DragAndDropData {
  [key: string]: string[];
}

const DndProvider = ({
  initialState,
  children,
}: {
  initialState: DragAndDropData;
  children: ReactNode | ReactNode[];
}) => {
  const [data, setData] = useState<DragAndDropData>(initialState);

  const handleOnDrop = (dragId: string, dropId: string) => {
    if (data) {
      const newData = { ...data };

      const sourceId = Object.keys(newData).find((key) =>
        newData[key].includes(dragId)
      );

      if (sourceId) {
        newData[sourceId] = [...newData[sourceId]].filter(
          (row) => row !== dragId
        );
        newData[dropId] = [...newData[dropId], dragId];

        setData(newData);
      }
    }
  };

  const getItems = (dropId: string) => (data ? data[dropId] : []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {children}
        {/* <Droppable id="1" items={getItems("1")} onDrop={handleOnDrop} />
        <Droppable id="2" items={getItems("2")} onDrop={handleOnDrop} /> */}
      </div>
    </div>
  );
};

export default DndProvider;
