import { Search, SearchOutlined } from "@mui/icons-material";
import "./Header.css";

import { Box, Container, Grid, Stack } from "@mui/material";

function Header() {
  return (
    <Stack sx={{ bgcolor: "primary.main", py: 1 }}>
      <Container
        sx={{ border: "1px solid", position: "relative", width: "76%" }}
      >
        <Grid container>
          <Grid item xs={6} sx={{ border: "1px solid red" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={2}
            >
              <Box>
                <Stack direction='row' gap={1}>
                  <img
                    style={{ width: "4.8em" }}
                    src="images/flipkartIcon.png"
                    alt="logo"
                  />
                  <input
                    type="text"
                    style
                    placeholder="Search for products,brands and more"
                  />
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </Container>
      <Container>End</Container>
    </Stack>
  );
}

export default Header;
