export interface ProjectInterface {
  title: string
  description: string
  repository: string
  tech_stack: {
    icon: string
    alt: string
  }[]
}

export const projects = [
  {
    title: "VP-CCS Compiler",
    description:
      "Compiler for the Value Passing extension of Milner's Calculus of Communicating Systems language which transpiles the code into pure CCS.",
    repository: "https://github.com/owsky/VP-CCS-Compiler",
    tech_stack: [{ icon: "devicon:haskell", alt: "Haskell" }],
  },
  {
    title: "Strict Fibonacci Heaps",
    description:
      "Implementation of the theoretically efficient data structure presented by Brodal et al. Also includes a benchmark against binary heaps.",
    repository: "https://github.com/owsky/strict-fibonacci-heaps",
    tech_stack: [{ icon: "devicon:kotlin", alt: "Kotlin" }],
  },
  {
    title: "Rec-Sys Advanced",
    description:
      "Bundle of recommender systems for the MovieLens dataset, implemented from scratch.",
    repository: "https://github.com/owsky/Rec-Sys-Advanced",
    tech_stack: [
      { icon: "devicon:python", alt: "Python" },
      { icon: "devicon:numpy", alt: "Numpy" },
      { icon: "devicon:apachespark", alt: "Spark" },
    ],
  },
  {
    title: "TinyML",
    description:
      "Type inference program and interpreter for a reduced version the of Milner's ML language.",
    repository: "https://github.com/owsky/TinyML",
    tech_stack: [{ icon: "devicon:fsharp", alt: "F#" }],
  },
  {
    title: "cinema-but-fast",
    description: "RESTful backend for a fictious cinema.",
    repository: "https://github.com/owsky/cinema-but-fast",
    tech_stack: [
      { icon: "devicon:fastify", alt: "Fastify" },
      { icon: "devicon:typescript", alt: "TypeScript" },
      { icon: "devicon:postgresql", alt: "Postgres" },
    ],
  },
  {
    title: "SushiHub Redone",
    description:
      "Android app for synchronizing restaurant orders locally in a group.",
    repository: "https://github.com/owsky/SushiHub_Redone",
    tech_stack: [
      { icon: "devicon:android", alt: "Android" },
      { icon: "devicon:kotlin", alt: "Kotlin" },
      { icon: "devicon:sqlite", alt: "SQLite" },
    ],
  },
]
