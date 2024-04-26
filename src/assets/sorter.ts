import {
	SORTER_REGISTRY,
	Sorter,
} from "@eurydia/dsp-item-registry";

export const sorterFromLabel = (
	label: string,
): Sorter => {
	if (label in SORTER_REGISTRY) {
		return SORTER_REGISTRY[label];
	}
	return {
		label: "Uh oh",
		workConsumptionMW: 1,
		idleConsumptionMW: 1,
	};
};
