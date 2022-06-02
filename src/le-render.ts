import { layoutElement } from "./layoutElement";
import { layoutParser } from "./layoutParser";

export function render(le: layoutElement) {
  if (le instanceof layoutElement) {
    layoutParser();
  }
}
