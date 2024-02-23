import { Layout, Rive } from "@rive-app/canvas";
import type { RiveProps } from "./rive";

class RiveCanvas extends HTMLElement {
  constructor() {
    super();

    const canvas = this.querySelector("canvas") as HTMLCanvasElement;

    const { src, fit, alignment, autoplay, stateMachines }: RiveProps =
      JSON.parse(canvas.dataset.props as string);

    const layout = new Layout({ fit, alignment });

    new Rive({
      canvas,
      src,
      layout,
      autoplay: typeof autoplay != "undefined",
      stateMachines,
    });
  }
}

customElements.define("rive-canvas", RiveCanvas);
