//@ts-ignore
import resume from "./resume.pdf"

import "./navbar.css"

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
              <a href={resume} download="resume.pdf" className="nav--button">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
