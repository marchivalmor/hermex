import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IconSelect } from "./IconSelect";

const CATEGORIAS = [
  { value: "hatch", label: "Hatch" },
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "minivan", label: "Minivan" },
];

const HORARIOS = [
  { value: "08:00", label: "08:00" },
  { value: "12:00", label: "12:00" },
  { value: "18:00", label: "18:00" },
];

const meta = {
  title: "Molecules/IconSelect",
  component: IconSelect,
  tags: ["autodocs"],
  args: {
    options: CATEGORIAS,
    placeholder: "Selecione a categoria",
    tone: "default",
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["default", "inverted"] },
  },
  parameters: { layout: "padded" },
} satisfies Meta<typeof IconSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Figma: "Filtro" — category filter above the vehicle grid. */
export const Filtro: Story = {
  args: { className: "w-[219px]" },
};

/** Figma: "Dropdown horário" — on the orange band. */
export const Horario: Story = {
  args: {
    options: HORARIOS,
    placeholder: "Horário",
    tone: "inverted",
    className: "w-[128px]",
  },
  globals: { backgrounds: { value: "laranja" } },
};

export const ComLabel: Story = {
  args: { label: "Categoria", className: "w-[219px]" },
};
