import { Button } from "react-bootstrap"
import { BsLinkedin, BsGithub, BsEnvelopeFill } from "react-icons/bs"

import scrolls from "./img/scrolls-min.png"

import "./social.css"

export default function Social() {
  return (
    <section id="social">
      <div className="social--first-row">
        <h2 className="social--heading">Get in Touch</h2>
      </div>
      <div className="social--second-row">
        <div className="social--left-column">
          <div className="social--buttons">
            <Button
              className="social--button"
              onClick={() => {
                window.open("https://www.linkedin.com/in/owsky/", "_blank")
              }}
            >
              <span>
                <BsLinkedin /> LinkedIn
              </span>
            </Button>
            <Button
              className="social--button"
              onClick={() => {
                window.open("mailto:nick.bertocco@gmail.com", "_blank")
              }}
            >
              <span>
                <BsEnvelopeFill /> Email
              </span>
            </Button>
            <Button
              className="social--button"
              onClick={() => window.open("https://github.com/owsky", "_blank")}
            >
              <span>
                <BsGithub /> GitHub
              </span>
            </Button>
          </div>
        </div>
        <div className="social--right-column">
          <img className="social--img" src={scrolls} alt="" />
        </div>
      </div>
    </section>
  )
}
