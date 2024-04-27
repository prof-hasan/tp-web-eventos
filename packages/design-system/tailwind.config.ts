import type { Config } from "tailwindcss";
import * as sharedConfig from "tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./atoms/**/*.tsx", "./molecules/**/*.tsx", "./organisms/**/*.tsx"],
  prefix: "ui-",
  presets: [sharedConfig],
};

export default config;