import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IconLink } from "./IconLink";

const meta = {
  title: "Molecules/IconLink",
  component: IconLink,
  tags: ["autodocs"],
  args: {
    href: "/cadastro",
    icon: "account_circle",
    children: "Cadastro",
    tone: "default",
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["default", "inverted"] },
  },
} satisfies Meta<typeof IconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cadastro: Story = {};

export const Login: Story = {
  args: { href: "/login", icon: "login", children: "Login" },
};

export const Inverted: Story = {
  args: { tone: "inverted" },
  globals: { backgrounds: { value: "azul" } },
};
