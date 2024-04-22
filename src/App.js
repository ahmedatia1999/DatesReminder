import { Button, Container, Row, Col } from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import React, { useState, useEffect } from "react";

function App() {
  const [personData, setPersonData] = useState(person);

  useEffect(() => {
    setPersonData([]);
  }, []);

  const onDelete = () => {
    setPersonData([]);
  };

  const onDisplay = () => {
    setPersonData(person);
  };

  return (
    <div className="font color-body">
      <Container className="py-4">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction onDelete={onDelete} onDisplay={onDisplay} />
      </Container>
    </div>
  );
}

export default App;
