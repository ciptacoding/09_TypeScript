type CoreCount = 2 | 4 | 8 | 16;
type CoreName = "DualCore" | "QuadCore" | "OctaCore" | "SuperCore";

type Core = CoreCount | CoreName;

interface IProcessor {
  brand: string;
  baseModel: string;
  modelName: string;
  coreTotal: Core;
  clockSpeed: number;
}

interface Intel extends IProcessor {
  turboBoost: boolean;
}

interface AMD extends IProcessor {
  precisionBoost: boolean;
}

function create(processor: Intel): void {
  console.log(`
  ----
  Terima kasih ${processor.brand}👌
  ----
  anda telah berhasil membuat prosesor dengan detail berikut:

  nama base model: ${processor.baseModel}
  nama model: ${processor.modelName}
  core total: ${processor.coreTotal}
  kecepatan clock: ${processor.clockSpeed}
  boosting turbo: ${processor.turboBoost}
  `);
}

const CoreI5: Intel = {
  brand: "intel",
  baseModel: "core i5",
  modelName: "i5-11350F",
  coreTotal: "SuperCore",
  clockSpeed: 4,
  turboBoost: true,
};

create(CoreI5);
