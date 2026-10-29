import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Heading } from "./atoms/Heading";
import { Text } from "./atoms/Text";

const COLORS = [
  { token: "brand-primary", value: "#f29849", usage: "Botão primário" },
  { token: "brand-primary-dark", value: "#e28634", usage: "Faixa de busca, hover" },
  { token: "brand-secondary", value: "#1d2f40", usage: "Botão Buscar, filtro" },
  { token: "brand-secondary-dark", value: "#23384d", usage: "Rodapé" },
  { token: "neutral-white", value: "#ffffff", usage: "Fundo, texto invertido" },
  { token: "neutral-text", value: "#444444", usage: "Texto de apoio" },
  { token: "neutral-details", value: "#e7e7e7", usage: "Bordas, fundo de imagem" },
];

const TYPE = [
  { token: "heading-xxl", className: "font-heading font-bold text-heading-xxl", sample: "Exo 2 Bold 76" },
  { token: "heading-xs", className: "font-heading font-bold text-heading-xs", sample: "Exo 2 Bold 25" },
  { token: "body-lg", className: "font-sans text-body-lg", sample: "Inter Regular 20" },
  { token: "body-md", className: "font-sans text-body-md", sample: "Inter Regular 16" },
];

const SPACING = [
  { token: "spacing-xxs", tailwind: "1", px: "4px" },
  { token: "spacing-xs", tailwind: "2", px: "8px" },
  { token: "spacing-sm", tailwind: "3", px: "12px" },
  { token: "spacing-md", tailwind: "4", px: "16px" },
  { token: "spacing-lg", tailwind: "8", px: "32px" },
];

function Tokens() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <section className="flex flex-col gap-4">
        <Heading size="xs">Cores</Heading>
        <ul className="flex flex-wrap gap-4">
          {COLORS.map((color) => (
            <li key={color.token} className="w-56">
              <div
                className="h-20 rounded-sm border border-neutral-details"
                style={{ background: color.value }}
              />
              <Text size="md" className="mt-2 font-bold">
                {color.token}
              </Text>
              <Text size="md" tone="muted">
                {color.value} · {color.usage}
              </Text>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <Heading size="xs">Tipografia</Heading>
        <ul className="flex flex-col gap-4">
          {TYPE.map((type) => (
            <li key={type.token} className="border-b border-neutral-details pb-4">
              <Text size="md" tone="muted">
                {type.token} · {type.sample}
              </Text>
              <p className={type.className}>Hermex locadora</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <Heading size="xs">Espaçamento</Heading>
        <Text size="md" tone="muted">
          Os tokens do Figma caem na escala padrão do Tailwind.
        </Text>
        <ul className="flex flex-col gap-2">
          {SPACING.map((space) => (
            <li key={space.token} className="flex items-center gap-4">
              <span
                className="block h-4 bg-brand-primary"
                style={{ width: space.px }}
              />
              <Text size="md" tone="muted">
                {space.token} · {space.px} · p-{space.tailwind}
              </Text>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <Heading size="xs">Elevação e borda</Heading>
        <div className="flex gap-4">
          <div className="rounded-sm bg-neutral-white p-8 shadow-elevation-2">
            <Text size="md">shadow-elevation-2</Text>
          </div>
          <div className="rounded-sm border border-neutral-details p-8">
            <Text size="md">rounded-sm · 4px</Text>
          </div>
        </div>
      </section>
    </div>
  );
}

const meta = {
  title: "Foundations/Design Tokens",
  component: Tokens,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Tokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tokens_: Story = { name: "Design Tokens" };
