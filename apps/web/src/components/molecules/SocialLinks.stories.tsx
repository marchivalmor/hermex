import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SocialLinks } from "./SocialLinks";

const meta = {
  title: "Molecules/SocialLinks",
  component: SocialLinks,
  tags: ["autodocs"],
  args: {
    size: 32,
    links: [
      { network: "whatsapp", href: "https://wa.me/5500000000000" },
      { network: "instagram", href: "https://instagram.com/hermex" },
      { network: "tiktok", href: "https://tiktok.com/@hermex" },
    ],
  },
  globals: { backgrounds: { value: "azul" } },
} satisfies Meta<typeof SocialLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
