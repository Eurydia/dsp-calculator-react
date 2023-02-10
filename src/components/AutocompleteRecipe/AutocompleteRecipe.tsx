import { FC, SyntheticEvent } from "react";
import {
  Autocomplete,
  AutocompleteChangeReason,
  TextField,
} from "@mui/material";

import { AssetRecipes, Recipe, RecipeEnum } from "../../assets";

import { filterOptions } from "./helper";

type AutocompleteRecipeProps = {
  recipeType: RecipeEnum;
  recipe: Recipe;
  onRecipeChange: (next_recipe: Recipe) => void;
};
export const AutocompleteRecipe: FC<AutocompleteRecipeProps> = (
  props,
) => {
  const { recipe, recipeType, onRecipeChange } = props;

  const handleRecipeChange = (
    event: SyntheticEvent<Element, Event>,
    value: null | Recipe,
    reason: AutocompleteChangeReason,
  ) => {
    if (value === null) {
      return;
    }
    onRecipeChange(value);
  };

  return (
    <Autocomplete
      fullWidth
      disableClearable
      options={AssetRecipes}
      value={recipe}
      onChange={handleRecipeChange}
      filterOptions={(options, state) => {
        const filtered_options = options.filter((option) => {
          return option.recipe_type === recipeType;
        });
        return filterOptions(filtered_options, state);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Recipe" />
      )}
    />
  );
};