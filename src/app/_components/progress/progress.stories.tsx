import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

import results from "../../../../.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";

const meta: Meta<typeof Progress> = {
  component: Progress,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const BrandColors: Story = {
  render: () => (
    <>
      <Progress value={75} variant="neutral" />
      <Progress value={75} variant="primary" />
      <Progress value={75} variant="secondary" />
      <Progress value={75} variant="accent" />
    </>
  ),
};

export const StateColors: Story = {
  render: () => (
    <>
      <Progress value={75} variant="success" />
      <Progress value={75} variant="info" />
      <Progress value={75} variant="warning" />
      <Progress value={75} variant="error" />
    </>
  ),
};

export const ProgressSizes: Story = {
  render: () => (
    <>
      <Progress value={75} variant="success" size="tiny" />
      <Progress value={75} variant="info" size="small" />
      <Progress value={75} variant="warning" size="normal" />
      <Progress value={75} variant="error" size="large" />
    </>
  ),
};

export const Test: Story = {
  render: (args) => <Progress {...args} />,
};
Test.decorators = [withTests({ results })];
