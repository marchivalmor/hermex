import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Thumbnail } from "./Thumbnail";

const meta = {
  title: "Atoms/Thumbnail",
  component: Thumbnail,
  tags: ["autodocs"],
  args: {
    src: "/fixtures/hyundai-hb20.png",
    alt: "Hyundai HB20 1.0",
    width: 280,
    height: 160,
  },
} satisfies Meta<typeof Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The 280 × 160 slot used by the vehicle card. */
export const Default: Story = {};

export const Large: Story = {
  args: { width: 480, height: 274 },
};
