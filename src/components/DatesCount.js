import React from "react";
import { Row, Col } from "react-bootstrap";

function DatesCount({ person }) {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="my-1">
        لديك {person.length} مواعيد اليوم
      </Col>
    </Row>
  );
}

export default DatesCount;
