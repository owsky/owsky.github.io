import { IconType } from "react-icons"
import { BiCameraMovie, BiHash } from "react-icons/bi"
import { GiSushis } from "react-icons/gi"
import { GoFileBinary } from "react-icons/go"
import { IoLogoGameControllerB } from "react-icons/io"
import { MdGridOff } from "react-icons/md"

type ProjectType = {
  title: string
  description: string
  technologies: string[]
  repoLink: string
  icon: IconType
}

const projectsData: ProjectType[] = [
  {
    title: "Game Libraries Crosschecker",
    description:
      "Cross platform application that crosschecks a CSV file with the Steam API to facilitate the user into managing multiple game libraries. Also available as a Go CLI module",
    technologies: ["JavaScript", "React.js", "Electron", "Go"],
    repoLink: "https://github.com/owsky/game-libraries-crosschecker",
    icon: IoLogoGameControllerB,
  },
  {
    title: "Connect Four",
    description:
      "Full stack application of the classic game Connect Four. It provides multiplayer and social features such as friends lists, game invites and spectating",
    technologies: ["TypeScript", "Node.js", "Angular", "Docker"],
    repoLink: "https://github.com/owsky/connect-four",
    icon: MdGridOff,
  },
  {
    title: "SushiHub Redone",
    description:
      "Android application that facilitates group ordering at a restaurant. P2P features powered by the Nearby technology allow local synchronization for the devices running the app",
    technologies: ["Android", "Kotlin"],
    repoLink: "https://github.com/owsky/SushiHub_Redone",
    icon: GiSushis,
  },
  {
    title: "Cinema",
    description:
      "Full stack application of a cinema that serves both customers and admins",
    technologies: ["Node", "PostgreSQL", "React"],
    repoLink: "https://github.com/owsky/Cinema",
    icon: BiCameraMovie,
  },
  {
    title: "CVM Assembler",
    description:
      "Program that interprets assembly code and compiles it into an executable. Originally written in C, I've since rewritten it in Rust for a better implementation",
    technologies: ["Rust", "C"],
    repoLink: "https://github.com/owsky/CVM-Assembler",
    icon: GoFileBinary,
  },
  {
    title: "SharpSolver",
    description:
      "F# program that solves simple equations, inequalities and computes derivatives",
    technologies: ["F#"],
    repoLink: "https://github.com/owsky/SharpSolver",
    icon: BiHash,
  },
]

export default projectsData
