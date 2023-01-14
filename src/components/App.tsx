import * as React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { LoginPage } from "./containers/LoginPage";
import { NotFoundPage } from "./containers/NotFoundPage";
import { ProfileEditionPage } from "./containers/ProfileEditonPage";

export default function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/edit" element={<ProfileEditionPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
