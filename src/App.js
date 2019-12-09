import React, { useState } from "react";

import Routes from "./routes";
import GlobalStyles from "./globalStyles";

function App() {
  const [activePage, setActivePage] = useState("/");

  function handlePageChange(path) {
    setActivePage(path);
  }

  return (
    <>
      <GlobalStyles activePage={activePage} />
      <Routes activePage={activePage} handlePageChange={handlePageChange} />
    </>
  );
}

export default App;
