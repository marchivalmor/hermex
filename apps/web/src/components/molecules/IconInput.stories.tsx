import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IconInput } from "./IconInput";

const meta = {
  title: "Molecules/IconInput",
  component: IconInput,
  tags: ["autodocs"],
  args: {
    icon: "search",
    tone: "default",
    placeholder: "O que você procura?",
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["default", "inverted"] },
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof IconInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Figma: "Campo de busca" — header search. */
export const Busca: Story = {};

/** Figma: "Campo de busca localização" — on the orange band. */
export const Localizacao: Story = {
  args: {
    icon: "location_on",
    tone: "inverted",
    placeholder: "Local de retirada",
  },
  globals: { backgrounds: { value: "laranja" } },
};

/** Figma: "Campo de data". */
export const Data: Story = {
  args: {
    icon: "calendar_month",
    tone: "inverted",
    placeholder: "Data",
    type: "date",
    className: "w-[128px]",
  },
  globals: { backgrounds: { value: "laranja" } },
};

export const ComLabel: Story = {
  args: { label: "Local de retirada", icon: "location_on" },
};
