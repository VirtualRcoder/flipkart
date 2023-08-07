import { Box } from "@mui/material"
//Components
import Header from "./components/header/Header";
import Home from "./components/home/Home";

export default function App() {
  return (
    <div>
      <Header/>
      <Box style={{ marginTop: 54}}>
        <Home/>
      </Box>
    </div>
  );
}
