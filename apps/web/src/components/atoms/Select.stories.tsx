import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select } from "./Select";

const meta = {
  title: "Atoms/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    tone: "default",
    defaultValue: "hatch",
    children: (
      <>
        <option value="hatch">Hatch</option>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
      </>
    ),
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["default", "inverted"] },
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The bare control — molecules/IconSelect draws the border and the chevron. */
export const Default: Story = {};

export const Inverted: Story = {
  args: { tone: "inverted" },
  globals: { backgrounds: { value: "laranja" } },
};
