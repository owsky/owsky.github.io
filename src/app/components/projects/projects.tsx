import { Col, Container, Row } from "react-bootstrap"
import Project from "../project"
import "./projects.css"

import projectsData from "./projectsData"

export default function Projects() {
  const projectsElements = projectsData.map(project => {
    return (
      <Col lg="6">
        <Project {...project} />
      </Col>
    )
  })
  return (
    <section id="projects" style={{ backgroundColor: "#f8f8f8" }}>
      <Container>
        <Col lg="10" style={{ margin: "0 auto" }}>
          <Row className="g-5">{projectsElements}</Row>
        </Col>
      </Container>
    </section>
  )
}
