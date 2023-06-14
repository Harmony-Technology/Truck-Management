import { format } from "date-fns";
import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { SeverityPill } from "src/components/severity-pill";
import Image from "next/image";

const statusMap = {
  Active: "success",
  Inactive: "error",
};

export const OverviewLatestOrders = (props) => {
  const { orders = [], sx } = props;

  return (
    <Card sx={sx}>
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image Truck</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Plate Number</TableCell>
                <TableCell>In Time</TableCell>
                <TableCell>Out Time</TableCell>
                <TableCell>Tag</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                return (
                  <TableRow hover key={order.id}>
                    <TableCell
                      sx={{
                        marginLeft: "20px",
                        paddingLeft:"20px",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={order.image}
                        alt="Picture of the author"
                        width={80}
                        height={50}
                      />
                      <Image
                        src={order.image1}
                        alt="Picture of the author"
                        width={80}
                        height={50}
                      />
                    </TableCell>

                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.plate_number}</TableCell>
                    <TableCell
                      sx={{
                        // alignItems: "center",
                        display: "grid",
                        justifyContent: "flex-start",
                      }}
                    >
                      {order.intime}
                      <SeverityPill>{order.hour}</SeverityPill>
                    </TableCell>
                    <TableCell>
                      {order.outtime ? order.outtime : "--/--/----"}
                    </TableCell>
                    <TableCell
                      sx={{
                        // alignItems: "center",
                        display: "grid",
                        justifyContent: "flex-start",
                      }}
                    >
                      {order.tag}
                      <SeverityPill color={statusMap[order.status]}>
                        {order.status}
                      </SeverityPill>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      {/* <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions> */}
    </Card>
  );
};

OverviewLatestOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};
