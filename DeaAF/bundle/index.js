"use strict";
function create(processor) {
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
const CoreI5 = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-11350F",
    coreTotal: "SuperCore",
    clockSpeed: 4,
    turboBoost: true,
};
create(CoreI5);
