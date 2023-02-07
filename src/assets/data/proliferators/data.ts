import { Proliferator } from "./proliferator";

export const AssetProliferators: Proliferator[] = [
  Proliferator.create("None", 1, 1, 1),
];

(() => {
  const DATA_WORK_CONSUMPTION_MULTIPLIERS: number[] = [1.3, 1.7, 2.5];
  const DATA_PRODUCTION_MULTIPLIERS: number[] = [1.125, 1.2, 1.25];
  const DATA_SPEEDUP_MULTIPLIERS: number[] = [1.25, 1.5, 2];

  DATA_WORK_CONSUMPTION_MULTIPLIERS.forEach(
    (work_consumption_multiplier, level_index) => {
      const level: string = "I".repeat(level_index);

      AssetProliferators.push(
        Proliferator.create(
          `Proliferator Mk.${level}`,
          work_consumption_multiplier,
          DATA_PRODUCTION_MULTIPLIERS[level_index],
          1,
        ),
      );

      AssetProliferators.push(
        Proliferator.create(
          `Proliferator Mk.${level}`,
          work_consumption_multiplier,
          1,
          DATA_SPEEDUP_MULTIPLIERS[level_index],
        ),
      );
    },
  );
})();