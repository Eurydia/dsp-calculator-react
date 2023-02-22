import { FC, ReactNode, useState } from "react";
import {
  Container,
  ThemeProvider,
  CssBaseline,
  Typography,
  Paper,
  Stack,
  Divider,
  useTheme,
  FormControlLabel,
  Switch,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";

import {
  FormPreferences,
  FormObjectives,
  usePreferences,
  ViewSummary,
  FormConfig,
} from "../components";
import { Configuration, Preferences } from "../types";

import { theme } from "./theme";
import { AppLayout } from "./AppLayout";
import {
  computeBillMaterialsPerFacility,
  computeBillProductsPerFacility,
  computeFacilitiesNeeded,
  computeFacilitiesPerArray,
  computeIdlePowerPerFacility,
  computeWorkPowerPerFacility,
} from "./helper";

export const App = () => {
  const { preferences, setPreferences } = usePreferences(
    "preferences",
    Preferences.create(),
  );

  const [config, setConfig] = useState<Configuration>(
    Configuration.create(),
  );

  const [objectives, setObjectives] = useState<
    Record<string, number>
  >({});

  const handleObjectiveChange = (key: string, next_value: number) => {
    setObjectives((prev) => {
      const next = { ...prev };
      next[key] = next_value;
      return next;
    });
  };

  const facilitiesPerArray = computeFacilitiesPerArray(
    config,
    preferences,
  );
  const facilitiesNeeded = computeFacilitiesNeeded(
    objectives,
    config,
  );

  const powerIdlePerFacility = computeIdlePowerPerFacility(config);
  const powerWorkPerFacility = computeWorkPowerPerFacility(config);

  const billMaterialsPerFacility =
    computeBillMaterialsPerFacility(config);
  const billProductsPerFacility =
    computeBillProductsPerFacility(config);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppLayout
          slotSideTop={
            <Card>
              <CardHeader
                title="1. Config"
                titleTypographyProps={{
                  fontWeight: "bold",
                  fontSize: "x-large",
                }}
              />
              <CardContent>
                <FormConfig onConfigChange={setConfig} />
              </CardContent>
            </Card>
          }
          slotSideButton={
            <Paper sx={{ padding: 4 }}>
              <Stack spacing={3}>
                <Typography fontWeight="bold" fontSize="x-large">
                  Preferences
                </Typography>
                <FormPreferences
                  preferences={preferences}
                  onPrefernceChange={setPreferences}
                />
              </Stack>
            </Paper>
          }
          slotMainTop={
            <Paper
              sx={{
                padding: 4,
              }}
            >
              <Stack spacing={3}>
                <Typography fontWeight="bold" fontSize="x-large">
                  {Object.values(objectives).length > 1
                    ? "2. Objectives"
                    : "2. Objective"}
                </Typography>
                <FormObjectives
                  product_ratios={config.recipe_product_ratios}
                  objectives={objectives}
                  onObjectiveChange={handleObjectiveChange}
                />
              </Stack>
            </Paper>
          }
          slotMainBottom={
            <Paper
              sx={{
                padding: 4,
              }}
            >
              <Stack spacing={3}>
                <Typography fontWeight="bold" fontSize="x-large">
                  3. Results
                </Typography>
                <ViewSummary
                  facilitiesNeeded={facilitiesNeeded}
                  facilitiesPerArray={facilitiesPerArray}
                  powerIdlePerFacility={powerIdlePerFacility}
                  powerWorkPerFacility={powerWorkPerFacility}
                  billMaterialPerFacility={billMaterialsPerFacility}
                  billProductPerFacility={billProductsPerFacility}
                />
              </Stack>
            </Paper>
          }
        />
      </Container>
    </ThemeProvider>
  );
};
