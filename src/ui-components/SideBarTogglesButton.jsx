import { useLocation, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function SideBarNav({ toggleDrawer, anchor }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <div
        className="profileLittleInfo"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px 15px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          className="sircleProfileImgBox"
        ></div>
        <div className="profileLittleInfoText" style={{ marginRight: "25px" }}>
          <h1 style={{ fontSize: "17px", color: "#fff", fontWeight: "400" }}>
            Ahad Qadirov
          </h1>
          <p style={{ color: "#0094FF" }}>Oqituvchi</p>
        </div>
        <i
          onClick={toggleDrawer(anchor, false)}
          className="bx bx-log-in"
          style={{ fontSize: "25px", color: "#0094FF", cursor: "pointer" }}
        ></i>
      </div>
      <hr />
      <ul>
        <li
          onClick={() => {
            navigate("/sinflar");
          }}
          className={`navbarLeftListItem ${
            pathname === "/sinflar" ? "active" : ""
          }`}
        >
          <i style={{ marginRight: "12px" }} className="bx bx-group"></i>
          <p style={{ display: "inline-block" }}>Sinflar</p>
        </li>
        <li
          onClick={() => {
            navigate("/o'qituvchilar");
          }}
          className={`navbarLeftListItem ${
            pathname === "/o'qituvchilar" ? "active" : ""
          }`}
        >
          <i style={{ marginRight: "12px" }} className="bx bx-group"></i>
          <p style={{ display: "inline-block" }}>O`qituvchilar</p>
        </li>
        <li
          onClick={() => navigate("/o'quvchilar")}
          className={`navbarLeftListItem ${
            pathname === "/o'quvchilar" ? "active" : ""
          }`}
        >
          <i style={{ marginRight: "12px" }} className="bx bx-group"></i>
          <p style={{ display: "inline-block" }}>O`quvchilar</p>
        </li>
        <li
          onClick={() => navigate("/fanlar")}
          className={`navbarLeftListItem ${
            pathname === "/fanlar" ? "active" : ""
          }`}
        >
          <i style={{ marginRight: "12px" }} className="bx bx-group"></i>
          <p style={{ display: "inline-block" }}>Fanlar</p>
        </li>
        <li
          onClick={() => navigate("/jadval")}
          className={`navbarLeftListItem ${
            pathname === "/jadval" ? "active" : ""
          }`}
        >
          <i style={{ marginRight: "12px" }} className="bx bx-group"></i>
          <p style={{ display: "inline-block" }}>Dars jadval</p>
        </li>
        <li
          onClick={() => navigate("/jurnal")}
          className={`navbarLeftListItem ${
            pathname === "/jurnal" ? "active" : ""
          }`}
        >
          <i style={{ marginRight: "12px" }} className="bx bx-group"></i>
          <p style={{ display: "inline-block" }}>Jurnal</p>
        </li>
        <li
          onClick={() => navigate("/KPI")}
          className={`navbarLeftListItem ${
            pathname === "/KPI" ? "active" : ""
          }`}
        >
          <i style={{ marginRight: "12px" }} className="bx bx-group"></i>
          <p style={{ display: "inline-block" }}>KPI</p>
        </li>
      </ul>
    </>
  );
}
