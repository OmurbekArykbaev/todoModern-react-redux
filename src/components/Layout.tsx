import { Container, Grid } from "@mui/material"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <main>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

export default Layout
