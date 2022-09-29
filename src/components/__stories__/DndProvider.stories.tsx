import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DndProvider from "../DndProvider";
import { data } from "../__fixtures__/data";

export default {
  title: "DndProvider",
  component: DndProvider,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DndProvider>;

const Template: ComponentStory<typeof DndProvider> = (args) => (
  <DndProvider {...args} />
);

export const Default = Template.bind({});
Default.args = {
  initialState: data,
};
