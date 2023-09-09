import { Search, SearchOutlined } from "@mui/icons-material";
import "./Header.css";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";

function Header() {
  return (
    <>
      <Stack sx={{ bgcolor: "primary.main", py: 1 }}>
        <Container
          sx={{ border: "1px solid", width: "80%" }}
        >
          <Grid container>
            <Grid item xs={7} sx={{ border: "1px solid red" }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Box>
                  <Stack direction="row" gap={2} alignItems={"center"}>
                    <img
                      style={{ width: "4.8em" }}
                      src="images/flipkartIcon.png"
                      alt="logo"
                    />
                    <input
                      type="text"
                      style={{ padding: "0.68em", width: "41em" }}
                      placeholder="Search for products,brands and more"
                    />
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={5} sx={{ border: "1px solid" }}>
              <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'}>
                {/* <h5>My Account</h5>
                <h5>Became a Seller</h5>
                <h5>More</h5>
                <h5>Cart</h5> */}
                <Typography variant="">

                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
      <Stack sx={{backgroundColor: '#edf2f4'}}>
      <Container sx={{py: 1}}>
        <Stack>
          
        </Stack>
      </Container>

      </Stack>
    </>
  );
}

export default Header;
