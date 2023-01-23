import React from "react";
import {useSelector} from "react-redux";
import Tables from "../../components/Tables/Tables";
import useFetch from "../../hooks/useFetch";
import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Order = () => {
  const user = useSelector((state) => state.user.currentUser);
  const {data, loading, error} = useFetch(
    `/orders?[filters][email]=${user.email}`
  );
  console.log(data);

  const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 700}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" >Product Name</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Qty</StyledTableCell>
              <StyledTableCell align="center">StripeId</StyledTableCell>
              <StyledTableCell align="center">Created At</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {error ? "Something Went Wrong!! " : loading
              ? "Loading Orders"
              : data !== null
              ? data.map((order) => <Tables key={order.id} order={order} />)
              : "Loading"}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Order;
