import PropTypes from "prop-types";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Truck } from "src/components/truck";
import { Chart } from "src/components/chart";
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
        <Stack
          // alignItems=""
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Truck />
            {/* <Chart/> */}
          </Stack>
          <Stack
            sx={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
            // spacing={0}
          >
            <Typography color="textSecondary" variant="overline">
              Total OCR
            </Typography>
            <Typography color="textPrimary" variant="h6">
              2,890
            </Typography>
          </Stack>
          {/* <Avatar
            sx={{
              backgroundColor: "error.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <CurrencyDollarIcon />
            </SvgIcon>
          </Avatar> */}
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
