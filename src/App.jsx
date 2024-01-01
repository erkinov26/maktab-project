/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./pages/LogIn";
import ClassesPage from "./pages/Classes";
import Teachers from "./pages/Teachers";
import Pupils from "./pages/Pupils";
import Subjects from "./pages/Subjects";
import Table from "./pages/Table";
import Journal from "./pages/Journal";
import KPI from "./pages/KPI";
import CurrenClassPage from "./pages/CurrenClassPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/sinflar" element={<ClassesPage />} />
      <Route path="/o'qituvchilar" element={<Teachers />} />
      <Route path="/o'quvchilar" element={<Pupils />} />
      <Route path="/fanlar" element={<Subjects />} />
      <Route path="/jadval" element={<Table />} />
      <Route path="/jurnal" element={<Journal />} />
      <Route path="KPI" element={<KPI />} />
      <Route path={"/sinflar/:id"} element={<CurrenClassPage />} />
    </Routes>
  );
}

export default App;
