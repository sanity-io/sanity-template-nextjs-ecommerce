import { ColorFieldDiff } from "./color";

export default function geopointDiffResolver({ schemaType }) {
  if (schemaType.name === "color") {
    return ColorFieldDiff;
  }

  return undefined;
}
