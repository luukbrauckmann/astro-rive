export interface RiveProps {
  src: string;
  fit: "Cover" | "Contain" | "Fill" | "FitWidth" | "FitHeight" | "None" | "ScaleDown";
  alignment: "Center" | "TopLeft" | "TopCenter" | "TopRight" | "CenterLeft" | "CenterRight" | "BottomLeft" | "BottomCenter" | "BottomRight";
  autoplay: boolean;
  stateMachines: string | string[];
  width: number;
  height: number;
}