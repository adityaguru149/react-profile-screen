import * as React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { LoginPage } from "./containers/LoginPage";
import { NotFoundPage } from "./containers/NotFoundPage";

export default function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
