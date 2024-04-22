import { Row, Col } from "react-bootstrap";

export default function DatesAction({ onDelete, onDisplay }) {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="d-flex justify-content-between">
        <button className="btn-style p-2" onClick={onDelete}>
          مسح الكل
        </button>
        <button className="btn-style p-2" onClick={onDisplay}>
          عرض البيانات
        </button>
      </Col>
    </Row>
  );
}
