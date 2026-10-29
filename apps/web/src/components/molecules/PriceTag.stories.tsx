import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PriceTag } from "./PriceTag";

const meta = {
  title: "Molecules/PriceTag",
  component: PriceTag,
  tags: ["autodocs"],
  args: { value: 120, period: "/diária" },
  argTypes: {
    value: { control: { type: "number", min: 0, step: 10 } },
  },
} satisfies Meta<typeof PriceTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The most expensive vehicle on the grid. */
export const Premium: Story = {
  args: { value: 320 },
};
