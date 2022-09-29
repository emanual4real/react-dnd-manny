import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Droppable from "../Droppable";

export default {
  title: "Droppable",
  component: Droppable,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Droppable>;

const Template: ComponentStory<typeof Droppable> = (args) => (
  <Droppable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: ["1", "2", "3", "4"],
};
