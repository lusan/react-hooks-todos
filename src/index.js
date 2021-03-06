import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const Main = React.lazy(() => import("./Main"));

const Root = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Main />
  </Suspense>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
