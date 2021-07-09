import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import React from "react";

function MyPreferenceCard(props) {
  return (
    <Card className="m-2">
      <Row>
        <strong>Jenis:</strong>
        <p className="mb-0" style={{ width: "154px" }}>{props.pref["jenis"]}</p>
      </Row>

      <Row>
        <strong>Brand:</strong>
        <p className="mb-0" style={{ width: "154px" }}>{props.pref["brand"]}</p>
      </Row>

      <Row>
        <strong>Size  :</strong>
        <p className="mb-0" style={{ width: "154px" }}>{props.pref["size"]}</p>
      </Row>
    </Card>
  );
}

export default MyPreferenceCard;