import { Row, Col } from "react-bootstrap";

export default function DatesList({ person }) {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="">
        <div className="rectangle p-2">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex border-bottom m-3">
                  <img className="img-avatar" src="person.jpg" alt="person" />
                  <div className="p-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">{item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center">لا يوجد مواعيد اليوم</h2>
          )}
        </div>
      </Col>
    </Row>
  );
}
