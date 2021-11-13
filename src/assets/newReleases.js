import { irons } from "./Images/Irons";

const newReleases = [
  {
    id: "PingI59",
    brand: "Ping",
    model: "i59",
    details: [
      "Standard Lie Angle",
      "Forged 1025 carbon steel body improves shot versatility",
      "MircoMax™ Grooves combine steeper sidewalls with tighter spacing for consistent results in all conditions",
      "17-4 SS laser-cut face with short iron flier reduction and long iron spin preservation",
      "Toe and Hosel Weights increase moment of inertia (MOI)",
      "Solid feel and crisp impact with added forgiveness",
      "Hydropearl 2.0 finish protects the head and repels water",
    ],
    photos: [irons[0].src, irons[1].src, irons[2].src, irons[3].src],
  },
  {
    id: "TitleistT200",
    brand: "Titleist",
    model: "T200",
    details: [
      "Max impact design delivers high-launching distance and forgiveness",
      "Engineered muscle plate for fine-tuned sound and feel",
      "D18 tungsten weighting for enhanced MOI and precise CG placement",
      "Forged L-face for incredible feel through set",
      "High resilience polymer core for added feel with speed across face",
    ],
    photos: [irons[4].src, irons[5].src, irons[6].src, irons[7].src],
  },
];

export { newReleases };
