import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Text } from "./Text";

const meta = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "Desenvolvido por Alura. Projeto fictício sem fins comerciais.",
    size: "md",
    tone: "default",
  },
  argTypes: {
    size: { control: "inline-radio", options: ["md", "lg"] },
    tone: { control: "inline-radio", options: ["default", "muted", "inverted"] },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `body-md` — 16px Inter Regular. */
export const BodyMd: Story = {};

/** `body-lg` — 20px Inter Regular, used for vehicle names. */
export const BodyLg: Story = {
  args: { size: "lg", children: "Hyundai HB20 1.0" },
};

/** On the navy footer. */
export const Inverted: Story = {
  args: { tone: "inverted", children: "O carro ideal para sua ocasião" },
  globals: { backgrounds: { value: "azul" } },
};
