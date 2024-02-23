import type { Alignment, Fit } from "@rive-app/canvas";

export type RiveProps = {
  src: string;
  fit: Fit;
  alignment: Alignment;
  autoplay: boolean;
  stateMachines: string | string[];
};
