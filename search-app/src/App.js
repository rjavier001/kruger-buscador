import "./App.css";
import { useState } from "react";
import SearchBar from "./components/searchbar";

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:before{
    content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(2px);
  -webkit-filter: blur(2px);
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
  }
  &:after{
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  } 
  .activated{
    background-color: white;
    color: white;
    border: solid 2px #26aeff;
  }
`;

const emails = [
  {
    id: "email-01",
    title: "Reporte de resultados",
  },
  {
    id: "email-02",
    title: "Requisitos para cambio",
  },
  {
    id: "email-03",
    title: "Estatus de funcionalidad",
  },
  {
    id: "email-04",
    title: "Próximos eventos",
  },
  {
    id: "email-05",
    title: "Participa en la encuesta",
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Sesión de seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revisión de propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal de equipo",
  },
  {
    id: "calendar-05",
    title: "Revisión de pendientes con cliente",
  },
];

const people = [
  {
    id: "people-01",
    title: "Juan Perez",
  },
  {
    id: "people-02",
    title: "Marcos Rivas",
  },
  {
    id: "people-03",
    title: "Sergio Martinez",
  },
  {
    id: "people-04",
    title: "Laura Jimenez",
  },
  {
    id: "people-05",
    title: "Horario Martinez",
  },
];

function App() {
  const [data, setData] = useState([...people, ...emails, ...calendar]);

  const [selection, setSelection] = useState(null);
  const [setCurrentOption] = useState("all");

  function handleClick(e) {
    const location = e.target.name;

    switch (location) {
      case "all":
        setData([...people, ...emails, ...calendar]);
        setCurrentOption("all");
        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;
        default:
    }
  }

  function handleOnItemSelected(item) {
    setSelection(item);
  }

  return (
    <div className="App">
      <div className="btn-container">
      <StyledButton name="all" onClick={handleClick}>
        Search in All
      </StyledButton>
      <StyledButton name="emails" onClick={handleClick}>
        Search in Emails
      </StyledButton>
      <StyledButton name="calendar" onClick={handleClick}>
        Search in Calendar
      </StyledButton>
      <StyledButton name="people" onClick={handleClick}>
        Search in People
      </StyledButton>
      </div>     
      {selection ? <div>You selected: {selection.title}</div> : ""}
      <SearchBar items={data} onItemSelected={handleOnItemSelected} />
    </div>
  );
}

export default App;
