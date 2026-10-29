import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "./Icon";

const SCREEN_ICONS = [
  "search",
  "location_on",
  "calendar_month",
  "keyboard_arrow_down",
  "account_circle",
  "login",
] as const;

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: { name: "search", size: 24 },
  argTypes: {
    name: { control: "select", options: SCREEN_ICONS },
    size: { control: { type: "range", min: 12, max: 64, step: 2 } },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Every Material Symbols glyph used on the home screen. */
export const ScreenIcons: Story = {
  render: () => (
    <ul className="flex flex-wrap gap-8 text-neutral-text">
      {SCREEN_ICONS.map((name) => (
        <li key={name} className="flex w-28 flex-col items-center gap-2">
          <Icon name={name} size={32} />
          <code className="font-sans text-xs">{name}</code>
        </li>
      ))}
    </ul>
  ),
};
