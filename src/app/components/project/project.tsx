import { Button, Card } from "react-bootstrap"
import { IconType } from "react-icons"

import "./project.css"

type ProjectProps = {
  title: string
  description: string
  technologies: string[]
  repoLink: string
  icon: IconType
}

export default function Project(props: ProjectProps) {
  const techs = props.technologies.reduce((prev, tech) =>
    prev.concat(`, ${tech}`)
  )

  return (
    <Card
      style={{
        width: "23rem",
        height: "23rem",
        borderRadius: "10px",
        fontSize: "0.9em",
      }}
    >
      <Card.Body className="project--card">
        <Card.Title style={{ height: "1.5em", marginBottom: "0.5em" }}>
          {props.title}
        </Card.Title>
        <props.icon style={{ height: "1em" }} className="project--icon" />
        <div className="project--description">
          <Card.Text>{props.description}</Card.Text>
        </div>

        <Card.Text>
          Technologies:
          <br />
          {techs}
        </Card.Text>

        <Button
          style={{ height: "2.7em", borderRadius: "25px" }}
          className="project--button"
          onClick={() => window.open(`${props.repoLink}`, "_blank")}
        >
          Repository
        </Button>
      </Card.Body>
    </Card>
  )
}
// export default function Project(props: ProjectProps) {
//   const techs = props.technologies.reduce((prev, tech) =>
//     prev.concat(`, ${tech}`)
//   )

//   return (
//     <Card sx={{ width: 400, height: 300 }}>
//       <CardContent sx={{ height: "85%", textAlign: "center" }}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-evenly",
//             rowGap: 1.5,
//             height: "100%",
//           }}
//         >
//           <>
//             <Typography variant="h5" textAlign="center">
//               {props.title}
//             </Typography>
//             <div className="project--icon">{<props.icon />}</div>
//             <Typography variant="body2">{props.description}</Typography>
//             <Typography variant="body2" fontStyle="italic">
//               Technologies:
//               <br />
//               {techs}
//             </Typography>
//           </>
//         </Box>
//       </CardContent>
//       <CardActions sx={{ height: "15%" }}>
//         <Button
//           size="small"
//           onClick={() => window.open(`${props.repoLink}`, "_blank")}
//         >
//           Repository
//         </Button>
//       </CardActions>
//     </Card>
//   )
// }
