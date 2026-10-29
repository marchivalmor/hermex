import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Logo } from "./Logo";

const meta = {
  title: "Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  args: { variant: "default", width: 180 },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "inverted"] },
    width: { control: { type: "range", min: 80, max: 360, step: 10 } },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Header lockup. */
export const Default: Story = {};

/** Footer lockup on the navy surface. */
export const Inverted: Story = {
  args: { variant: "inverted" },
  globals: { backgrounds: { value: "azul" } },
};
