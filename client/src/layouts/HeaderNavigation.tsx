import { FC } from "react";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";

export const HeaderNavigation:FC = () => {
    return(
       <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Row className="justify-content-md-center w-100">
            <Col xs lg="4">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            </Col>
            <Col md="auto">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Col>
            <Col xs lg="4"></Col>
          </Row>
        </Container>
      </Navbar>
    )
}