import { Box } from "@mui/material";
//Components
import Header from "./components/header/Header";
import Home from "./components/home/Home";

import DataProvider from './context/DataProvider';

export default function App() {
  return (
    <DataProvider>
      <Header/>
      <Box style={{ marginTop: 54}}>
        <Home/>
      </Box>
    </DataProvider>
  );
}
