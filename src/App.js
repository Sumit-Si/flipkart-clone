import { useState } from "react";
import "./App.css";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import ButtonUsage from "./Components/Button";

function App() {

  const [mode,setMode] = useState('dark');

  function handleClick() {
    setMode(mode === 'dark' ? 'light' : 'dark');
  }


  return (
    <ThemeContext.Provider value={mode}>
      <div className={`App ${mode}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "0.4em 1em",
          }}
        >
          <button variant={'outlined'} className="theme-btn"  onClick={handleClick}>
            {mode === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
        <div className="main-container">
          <Header />
          <div className="container">
          <Sidebar />
          <Main />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
