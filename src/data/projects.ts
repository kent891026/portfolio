import { coralLamp } from "./projects/coral-lamp";
import { meshLantern } from "./projects/mesh-lantern";
import { waveLantern } from "./projects/wave-lantern";
import { coralAlgorithm } from "./projects/coral-algorithm";
import { differentialGrowth } from "./projects/differential-growth";
import { beeTracking } from "./projects/bee-tracking";
import { stijlGenerator } from "./projects/stijl-generator";
import { dispatchSystem } from "./projects/dispatch-system";
import { airMonitor } from "./projects/air-monitor";
import { roboticArm } from "./projects/robotic-arm";
import { architectureThesis } from "./projects/architecture-thesis";

// 首頁展示順序由這個陣列決定；分類跳轉仍使用各專案的固定 id。
export const projectsData = [
  coralLamp,
  meshLantern,
  waveLantern,
  coralAlgorithm,
  differentialGrowth,
  beeTracking,
  stijlGenerator,
  dispatchSystem,
  airMonitor,
  roboticArm,
  architectureThesis,
];

export type { Project, GallerySection } from "./project-types";
