import {
	Facility,
	Proliferator,
	Recipe,
} from "@eurydos/dsp-item-registry";

export type ConfigFormData = {
	f: Facility;
	r: Recipe;
	p: Proliferator;
	s: Record<string, string>;
	pSprayCount: string;
	flowrate: Record<string, string>;
};

export type configFormHandlers = {
	handleFChange: (f: Facility) => Promise<void>;
	handleRChange: (r: Recipe) => Promise<void>;
	handlePChange: (p: Proliferator) => void;
	handlePSprayCount: (v: string) => void;
	handleSChange: (
		l: string,
		v: string,
	) => Promise<void>;
	handleFlowrateChange: (
		l: string,
		v: string,
	) => Promise<void>;
};

export type ComputeFormData = {
	capacity: Record<string, string>;
	constraint: Record<string, string>;
	mode: "constraint" | "capacity";
};

export type ConfigFormOptions = {
	f: Facility[];
	r: Recipe[];
	p: Proliferator[];
};
