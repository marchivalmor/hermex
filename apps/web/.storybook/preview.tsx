import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    backgrounds: {
      options: {
        white: { name: "Branco", value: "#ffffff" },
        laranja: { name: "Laranja (busca)", value: "#e28634" },
        azul: { name: "Azul (rodapé)", value: "#23384d" },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "white" },
  },
};

export default preview;
