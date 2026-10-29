import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { VehicleSpecs } from "./VehicleSpecs";

const meta = {
  title: "Molecules/VehicleSpecs",
  component: VehicleSpecs,
  tags: ["autodocs"],
  args: { name: "Hyundai HB20 1.0", category: "Hatch Manual" },
  parameters: { layout: "padded" },
} satisfies Meta<typeof VehicleSpecs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Longer category line, as on the GM Spin card. */
export const LongCategory: Story = {
  args: { name: "GM Spin 1.8", category: "Minivan Automática 7 Lugares" },
};
