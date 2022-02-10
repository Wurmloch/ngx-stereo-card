import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  paddings: {
    values: [
      { name: "Small", value: "16px" },
      { name: "Medium", value: "32px" },
      { name: "Large", value: "64px" },
    ],
    default: "Medium",
  },
};
