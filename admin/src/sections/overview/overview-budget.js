import PropTypes from "prop-types";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Truck } from "src/components/truck";
import chart from "../../../public/chart.png";
import Image from "next/image";

export const OverviewBudget = (props) => {
  const { difference, positive = false, sx, value } = props;

  return (
    <Card
      sx={{
        backgroundColor: "#F5F5F5",
        width: "300px",
        height: "160px",
      }}
    >
      <CardContent>
        <Stack direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Truck />
          </Stack>
          <Stack
            sx={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Typography color="textSecondary" variant="overline">
              Total
            </Typography>
            <Typography color="textPrimary" variant="h6">
              2,890
            </Typography>
          </Stack>
        </Stack>
        {difference && (
          <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
            <Stack alignItems="center" direction="row" spacing={0.5}>
              <Image src={chart} alt="chart" width={100} height={40} />
              <Typography
                color={positive ? "success.main" : "error.main"}
                variant="body2"
              >
                {difference}%
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="caption">
              Since last month
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

OverviewBudget.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired,
};
