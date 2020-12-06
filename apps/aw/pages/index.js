import React, { useState } from "react";

import { Col, Input, InputGroup, InputGroupAddon, Row } from "reactstrap";
import ReviewList from "../components/ReviewList";

function Home() {
  const [query, updateQuery] = useState("");
  return (
    <>
      <Row>
        <Col>
          <ReviewList search={""} />
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </>
  );
}
export default Home;