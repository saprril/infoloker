import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <section id="navigation">
            <Link to="/">Home</Link>
            <Link to="/free">Free Component</Link>
            <Link to="/auth">Auth Component</Link>
          </section>
        </Col>
      </Row>

      {/* define routes using the Routes component */}
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/free" element={<FreeComponent />} />
        <Route path="/auth" element={<ProtectedRoutes component={AuthComponent} />} />
      </Routes>

      {/* The Outlet component renders the matched route's content */}
      <Outlet />
    </Container>
  );
}

export default App;