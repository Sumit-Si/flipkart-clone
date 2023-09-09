import { useState } from "react";
import "./App.css";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import ButtonUsage from "./Components/Button";
import { Container, Typography, Box, Paper, Button, Grid, Stack } from "@mui/material";
import Data from "./data/productData";

function App() {
  const [mode, setMode] = useState("dark");
 
  const serviceList = ["Service1", "Service2", "Service3"];

  function handleClick() {
    setMode(mode === "dark" ? "light" : "dark");
  }
  

  return (
    <ThemeContext.Provider value={mode}>
      {/* <Container sx={{ bgcolor: "cyan", height: "100vh" }}>
        <Box sx={{ p: 1 }}>
          <Typography
            variant="h1"
            sx={{ my: 4, textAlign: "center", color: "primary.main" }}
          >
            Hello World!
          </Typography>
          <Typography variant="h2">Overview</Typography>
          <Box
            sx={{
              pt: 4,
              display: "flex",
              flexDirection: {xs:'column',md:'row'},
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            {serviceList.map((service) => (
              <Paper elevation={3} sx={{width: {xs: 1,md:'320'}}}>
                <Box sx={{ m: 3 }}>
                  <Typography variant="h3">{service}</Typography>
                  <Typography sx={{ mt:1 }}>
                    lksjdflksdjfsdf klsdjflksdjfsdklf sdlkkfjsdlkf jsdlkfjlk
                    kjsdklf jsdklf jsdklf jfklj lkklsjdflks jflkj sdlkf jsdlkfj
                    sdlkfj sldkfj sdklfj sdlkf jsdfsdf
                  </Typography>
                  <Button variant="contained" color="secondary" sx={{mt:1}}>Learn more</Button>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container> */}
      <div className={`App`}>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "0.4em 1em",
          }}
        >
          <button variant={'outlined'} className="theme-btn"  onClick={handleClick}>
            {mode === 'light' ? 'Dark' : 'Light'}
          </button>
        </div> */}
        <Grid sx={{height: '100vh'}}>
          <Stack>
            <Header />
          </Stack>
          <Grid container gap={1} mt={1}>
            <Grid item xs={2.2} sx={{bgcolor: 'yellow'}}>
              <Sidebar />
            </Grid>
            <Grid item xs={9.6} sx={{bgcolor: 'yellow'}}>
              <Main />
            </Grid>
          </Grid>
        </Grid>
      </div> 
    </ThemeContext.Provider>
  );
}

export default App;
