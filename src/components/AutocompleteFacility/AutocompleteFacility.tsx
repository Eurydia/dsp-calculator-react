import { FC, SyntheticEvent } from "react";
import {
  Autocomplete,
  TextField,
  AutocompleteChangeReason,
} from "@mui/material";

import { AssetFacilities, Facility } from "../../assets";

import { filterOptions } from "./helper";
import { AutocompleteOption } from "./AutocompleteOption";

type AutocompleteFacilityProps = {
  facility: Facility;
  onFacilityChange: (next_facility: Facility) => void;
};
export const AutocompleteFacility: FC<AutocompleteFacilityProps> = (
  props,
) => {
  const { facility, onFacilityChange } = props;

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: Facility | null,
    reason: AutocompleteChangeReason,
  ): void => {
    if (value === null) {
      return;
    }
    onFacilityChange(value);
  };

  return (
    <Autocomplete
      fullWidth
      disableClearable
      options={AssetFacilities}
      value={facility}
      onChange={handleChange}
      isOptionEqualToValue={(option, value) => {
        return option.label === value.label;
      }}
      renderOption={(props, option) => {
        return (
          <AutocompleteOption
            key={option.label}
            LIProps={props}
            option={option}
          />
        );
      }}
      filterOptions={filterOptions}
      renderInput={(params) => {
        return <TextField {...params} label="Facility" />;
      }}
    />
  );
};