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
import { useState } from "react";
import CurrenClassPage from "./pages/CurrenClassPage";
import { useSelector } from "react-redux";
function App() {
  const ID_CLASSES = useSelector((state) => state.classData);
  console.log(ID_CLASSES);
  const [classId, setClassId] = useState();
  const [currentClass, setCurrentClass] = useState();
  console.log("🚀 ~ file: App.jsx:22 ~ App ~ currentClass:", currentClass);
  const findId = (id) => {
    ID_CLASSES.map((item) => {
      if (item.id === id) {
        setClassId(id);
        setCurrentClass(item);
      }
    });
  };

  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/sinflar" element={<ClassesPage findId={findId} />} />
      <Route path="/o'qituvchilar" element={<Teachers />} />
      <Route path="/o'quvchilar" element={<Pupils />} />
      <Route path="/fanlar" element={<Subjects />} />
      <Route path="/jadval" element={<Table />} />
      <Route path="/jurnal" element={<Journal />} />
      <Route path="KPI" element={<KPI />} />
      <Route
        path={"/sinflar/" + classId}
        element={<CurrenClassPage currentClass={currentClass} />} 
      />
    </Routes>
  );
}

export default App;
