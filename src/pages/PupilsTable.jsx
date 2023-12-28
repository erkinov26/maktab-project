/* eslint-disable react/prop-types */
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { DeleteOutline } from "@mui/icons-material";
import PupilInfo from "../ui-components/PupilInfo";
const PupilsTable = ({ currentClass }) => {
  const colums = [
    {
      id: "index",
      name: "#",
    },
    {
      id: "fullName",
      name: "F.I.SH",
    },
    {
      id: "phoneNumber",
      name: "TELEFON NOMER",
    },
    {
      id: "payment",
      name: "HISOB HOLATI",
    },
    {
      id: "grand_per",
      name: "O`QUVCHI GRANTLARI",
    },
    {
      id: "action",
      name: "Action",
    },
  ];
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleRowsPerPage = (event) => {
    setRowPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#E6EEF4" }}>
              {colums.map((column) => (
                <TableCell key={column.id}>{column.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentClass.pupils &&
              currentClass.pupils
                .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
                .map((row, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{row.full_name}</TableCell>
                      <TableCell>{row.phone_number}</TableCell>
                      <TableCell>UZS {row.money}</TableCell>
                      <TableCell>0%</TableCell>
                      <TableCell>
                        <PupilInfo clickedPupil={row} />
                        <Button sx={{ color: "#FA0000" }}>
                          <DeleteOutline />
                        </Button>
                        <Button sx={{ color: "#0094FF" }}>
                          <BorderColorIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        page={page}
        rowsPerPage={rowPerPage}
        component="div"
        count={currentClass.pupils.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleRowsPerPage}
      ></TablePagination>
    </Paper>
  );
};

export default PupilsTable;
