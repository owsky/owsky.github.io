//@ts-ignore
import resume from "./resume.pdf"

import "./navbar.css"
import { Navbar as BsNavbar, Button, Nav, Stack } from "react-bootstrap"

export default function Navbar() {
  return (
    <header style={{ position: "sticky", top: "0", zIndex: "1" }}>
      <BsNavbar bg="light" expand="md" style={{ padding: "0 20px" }}>
        <BsNavbar.Brand
          style={{
            fontSize: "2.5em",
            fontWeight: "500",
            fontFamily: "'Courgette', serif",
            userSelect: "none",
          }}
        >
          owsky
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Stack
              direction="horizontal"
              gap={3}
              style={{ fontSize: "1.2em", letterSpacing: "0.01em" }}
            >
              <Nav.Link href="#root">About Me</Nav.Link>
              <Nav.Link href="#projects">Personal Projects</Nav.Link>
              <Nav.Link href="#social">Contact Me</Nav.Link>
              <Button
                style={{
                  borderRadius: "25px",
                  padding: "6px 18px",
                  fontSize: "1em",
                }}
                onClick={() => {
                  window.open(resume, "__blank")
                }}
              >
                Resume
              </Button>
            </Stack>
          </Nav>
        </BsNavbar.Collapse>
      </BsNavbar>
    </header>
  )
}
