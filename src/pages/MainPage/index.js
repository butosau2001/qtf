import React from "react";

import { Container } from "./styles";

export default function MainPage({ handlePageChange }) {
  return (
    <Container>
      <div onClick={() => handlePageChange("/goal")}>Go</div>
    </Container>
  );
}
