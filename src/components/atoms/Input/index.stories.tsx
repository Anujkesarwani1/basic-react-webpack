import { StoryFn, Meta } from "@storybook/react";
import CustomTextField from ".";
import theme from "../../../themes";

export default {
  title: "Atoms/TextField",
  component: CustomTextField,
} as Meta<typeof CustomTextField>;

const Template: StoryFn<typeof CustomTextField> = (args) => (
  <CustomTextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: "outlined",
  placeholder: "Search",
  onChange: () => console.log("onChange event"),
  style: {
    border: `1px solid ${theme.palette.Structural.stroke100}`,
    background: theme.palette.Structural.main,
    borderRadius: "8px",
  },
};
