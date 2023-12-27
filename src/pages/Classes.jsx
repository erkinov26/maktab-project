/* eslint-disable react/prop-types */
import Navbar from "../ui-components/Navbar";
import TeacherTable from "../ui-components/TeacherTable";

const ClassesPage = ({ findId }) => {
  return (
    <>
      <Navbar />
      <TeacherTable findId={findId} />
    </>
  );
};

export default ClassesPage;
