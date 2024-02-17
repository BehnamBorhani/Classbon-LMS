import { Meta, StoryObj } from "@storybook/react";
import { Textbox } from ".";

const meta: Meta<typeof Textbox> = {
  component: Textbox,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Textbox>;

export const BrandColors: Story = {
  render: () => {
    return (
      <>
        <Textbox placeholder="Default" />
        <Textbox variant="primary" placeholder="Primary" />
        <Textbox variant="secondary" placeholder="Secondary" />
        <Textbox variant="accent" placeholder="Accent" />
        <Textbox variant="neutral" placeholder="Neutral" />
        <Textbox variant="ghost" placeholder="Ghost" />
      </>
    );
  },
};

export const StateColors: Story = {
  render: () => {
    return (
      <>
        <Textbox variant="success" placeholder="Success" />
        <Textbox variant="error" placeholder="Error" />
        <Textbox variant="warning" placeholder="Warning" />
        <Textbox variant="info" placeholder="Info" />
      </>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    return (
      <>
        <Textbox variant="primary" placeholder="Primary" />
      </>
    );
  },
};

export const TextboxSizes: Story = {
  render: () => {
    return (
      <>
        <Textbox size="tiny" variant="primary" placeholder="Tiny" />
        <Textbox size="small" variant="primary" placeholder="Small" />
        <Textbox size="normal" variant="primary" placeholder="Normal" />
        <Textbox size="large" variant="primary" placeholder="Large" />
      </>
    );
  },
};

export const Test: Story = {
  render: (args) => <Textbox {...args} placeholder="placeholder" />,
};
