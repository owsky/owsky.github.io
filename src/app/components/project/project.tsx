import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
} from "@mui/material"
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
    <Card sx={{ width: 400, height: 300 }}>
      <CardContent sx={{ height: "85%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            rowGap: 1.5,
            height: "100%",
          }}
        >
          <>
            <Typography variant="h5" textAlign="center">
              {props.title}
            </Typography>
            <div className="project--icon">{<props.icon />}</div>
            <Typography variant="body2">{props.description}</Typography>
            <Typography variant="body2" fontStyle="italic">
              Technologies:
              <br />
              {techs}
            </Typography>
          </>
        </Box>
      </CardContent>
      <CardActions sx={{ height: "15%" }}>
        <Button
          size="small"
          onClick={() => window.open(`${props.repoLink}`, "_blank")}
        >
          Repository
        </Button>
      </CardActions>
    </Card>
  )
}
