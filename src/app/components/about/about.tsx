import brogrammer from "./img/stock-programmer.svg"

import "./about.css"

export default function About() {
  return (
    <section className="about">
      <img src={brogrammer} alt="programmer" className="brogrammer" />
      <div className="about--description">
        <p>
          I'm an enthusiastic full stack developer eager to constantly learn new
          things. My favorite programming languages are Kotlin and TypeScript,
          but more broadly I like to make use of modern technologies and
          languages. <br />
          <br />I have experience with both web development and mobile
          development, with a focus towards building user interfaces and user
          experiences centered around accessibility. <br />
          <br />
          I'm currently attending the Computer Science course at the University
          of Venice.
        </p>
      </div>
    </section>
  )
}
