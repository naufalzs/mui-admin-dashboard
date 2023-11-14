import { useMediaQuery, useTheme } from "@mui/material";
import { tokens } from "@/src/theme";
import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData as data } from "@/src/data/mockData";
import { geoFeatures } from "@/src/data/mockGeoFeatures";

export default function GeoChart({ isDashboard = false }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isTabletOnly = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <ResponsiveChoropleth
      data={data}
      features={geoFeatures.features}
      theme={{
        tooltip: {
          basic: {
            color: colors.primary[500],
          },
        },
      }}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : isTabletOnly ? 100 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor={colors.grey[100]}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[300],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: colors.grey[100],
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
}
