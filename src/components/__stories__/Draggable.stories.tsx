import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Draggable from "../Draggable";

export default {
  title: "Draggable",
  component: Draggable,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Draggable>;

const ChildComponent = () => (
  <div id="1">
    <iframe
      src="https://giphy.com/embed/OQsa4Yca9BJFS"
      width="100"
      height="100"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
  </div>
);
const Template: ComponentStory<typeof Draggable> = (args) => (
  <Draggable {...args}>
    <ChildComponent />
  </Draggable>
);

export const Default = Template.bind({});
Default.args = {};
