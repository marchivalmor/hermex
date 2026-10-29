import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "O que você procura?", tone: "default" },
  argTypes: {
    tone: { control: "inline-radio", options: ["default", "inverted"] },
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The bare control — molecules/IconInput draws the border around it. */
export const Default: Story = {};

export const Inverted: Story = {
  args: { tone: "inverted", placeholder: "Local de retirada" },
  globals: { backgrounds: { value: "laranja" } },
};
