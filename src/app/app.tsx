import Navbar from "./components/navbar"
import About from "./components/about"
import Projects from "./components/projects"
import Social from "./components/social"

import "./app.css"

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Social />
    </main>
  )
}
