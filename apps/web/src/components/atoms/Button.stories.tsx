import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Ver detalhes",
    variant: "primary",
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Card call to action. */
export const Primary: Story = {};

/** "Buscar" on the orange search band. */
export const Secondary: Story = {
  args: { variant: "secondary", children: "Buscar" },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: "padded" },
};

export const Disabled: Story = {
  args: { disabled: true },
};
