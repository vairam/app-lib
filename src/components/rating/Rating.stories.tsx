import React from "react";
import Rating from "./Rating";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "App Library/Rating",
  component: Rating,
} as Meta<typeof Rating>;

const Template: StoryFn<typeof Rating> = (args) => <Rating {...args} />;

export const RatingTest = Template.bind({});
RatingTest.args = {
  title: "Default Theme",
  theme: "primary",
  idPrefix: "rating",
};

export const RatingSecondary = Template.bind({});
RatingSecondary.args = {
  title: "Secondary Theme",
  theme: "secondary",
  idPrefix: "rating",
};
