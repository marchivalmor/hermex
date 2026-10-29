import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Heading } from "./Heading";

const meta = {
  title: "Atoms/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: { children: "Siga nossas redes:", size: "xs", as: "h2" },
  argTypes: {
    size: { control: "inline-radio", options: ["xxl", "xs"] },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `heading-xs` — 25px Exo 2 Bold. */
export const HeadingXs: Story = {};

/** `heading-xxl` — 76px Exo 2 Bold, the banner headline. */
export const HeadingXxl: Story = {
  args: {
    size: "xxl",
    as: "h1",
    children: (
      <>
        <span className="text-brand-primary">Encontre o carro ideal</span> para
        todas as ocasiões
      </>
    ),
  },
  parameters: { layout: "padded" },
};
