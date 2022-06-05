import { layoutElement as LE } from "./layoutElement.type";
import { layoutParser } from "./layoutParser";

export function render(le: LE, root: HTMLElement) {
  if (le instanceof LE) {
    layoutParser();

    return;
  }

  throw "TypeError";
}
