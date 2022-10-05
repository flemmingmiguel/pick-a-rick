//[ ] aim to create a good baseline of presets
import presetUno from "@unocss/preset-uno";
import presetTypography from "@unocss/preset-typography";
import { presetFlowbite } from "@julr/unocss-preset-flowbite";

export default {
  resetCSS: "tailwind",
  presets: [presetUno(), presetTypography(), presetFlowbite()],
};
