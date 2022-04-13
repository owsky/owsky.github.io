//@ts-ignore
import resume from "./resume.pdf"

import "./navbar.css"
import { Button } from "react-bootstrap"

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="nav--container">
          <span className="nav--logo">owsky</span>
          <ul className="nav--items">
            <li>
              <a href="#root" className="nav--link">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="nav--link">
                Personal Projects
              </a>
            </li>
            <li>
              <a href="#social" className="nav--link">
                Contact Me
              </a>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
