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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TeacherTable = ({ findId }) => {
  const CLASS_DATA_SLICE = useSelector((state) => state.classData);
  const navigate = useNavigate();
  const colums = [
    {
      id: "name",
      name: "#",
    },
    {
      id: "nameOfClasses",
      name: "SINF NOMLARI",
    },
    {
      id: "pupilsNumber",
      name: "OQUVCHILAR SONI",
    },
    {
      id: "group",
      name: "Guruh",
    },
    {
      id: "tutor",
      name: "SINF RAHBARLAR",
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
    <div>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {colums.map((column) => (
                  <TableCell key={column.id}>{column.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {CLASS_DATA_SLICE &&
                CLASS_DATA_SLICE.slice(
                  page * rowPerPage,
                  page * rowPerPage + rowPerPage
                ).map((row, i) => {
                  return (
                    <TableRow
                      sx={{
                        backgroundColor: i % 2 === 0 ? "#0095ff15" : "$fff",
                      }}
                      key={i}
                    >
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{row.classNumber} - sinf</TableCell>
                      <TableCell>{row.pupils.length} nafar</TableCell>
                      <TableCell>Guruh #1</TableCell>
                      <TableCell>{row.tutor}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            findId(row.id);
                            navigate(`/sinflar/${row.id}`);
                          }}
                          variant="outlined"
                        >
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
          count={CLASS_DATA_SLICE.length}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleRowsPerPage}
        ></TablePagination>
      </Paper>
    </div>
  );
};

export default TeacherTable;
