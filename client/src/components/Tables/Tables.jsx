import * as React from "react";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import { TableRow } from "@mui/material";

const Tables = ({order}) => {
  const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({theme}) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <StyledTableRow key={order.id}>
      <StyledTableCell align="center" component="th" scope="row">
        {order.attributes.products[0].title}
      </StyledTableCell>
      <StyledTableCell align="center">{order.attributes.products[0].price}</StyledTableCell>
      <StyledTableCell align="center">{order.attributes.products[0].quantity}</StyledTableCell>
      <StyledTableCell align="center">{order.attributes.stripeId}</StyledTableCell>
      <StyledTableCell align="center">{order.attributes.createdAt}</StyledTableCell>
      <StyledTableCell align="center">{order.attributes.Status}</StyledTableCell>
    </StyledTableRow>
  );
};

export default Tables;
