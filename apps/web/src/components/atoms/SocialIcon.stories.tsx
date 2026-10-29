import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SocialIcon } from "./SocialIcon";

const meta = {
  title: "Atoms/SocialIcon",
  component: SocialIcon,
  tags: ["autodocs"],
  args: { network: "whatsapp", size: 32 },
  argTypes: {
    network: {
      control: "inline-radio",
      options: ["whatsapp", "instagram", "tiktok"],
    },
  },
  globals: { backgrounds: { value: "azul" } },
} satisfies Meta<typeof SocialIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Whatsapp: Story = {};
export const Instagram: Story = { args: { network: "instagram" } };
export const Tiktok: Story = { args: { network: "tiktok" } };
