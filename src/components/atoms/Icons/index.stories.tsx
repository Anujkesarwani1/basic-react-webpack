import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import account from "../../../../public/assets/images/Account.svg";
import Add from "../../../../public/assets/images/Add_box.svg";
import Back from "../../../../public/assets/images/Back.svg";
import Close from "../../../../public/assets/images/Close.svg";
import Contacts from "../../../../public/assets/images/Contacts.svg";
import Dashboard from "../../../../public/assets/images/Dashboard.svg";
import search from "../../../../public/assets/images/search.svg";
import Icon from "./index";

export default {
  title: "Atoms/Icons",
  component: Icon,
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const AccountIcon = Template.bind({});
AccountIcon.args = {
  src: account,
};

export const AddIcon = Template.bind({});
AddIcon.args = {
  src: Add,
};

export const BackIcon = Template.bind({});
BackIcon.args = {
  src: Back,
};

export const CloseIcon = Template.bind({});
CloseIcon.args = {
  src: Close,
};

export const ContactIcon = Template.bind({});
ContactIcon.args = {
  src: Contacts,
};

export const DashboardIcon = Template.bind({});
DashboardIcon.args = {
  src: Dashboard,
};

export const searchIcon = Template.bind({});
searchIcon.args = {
  src: search,
};
