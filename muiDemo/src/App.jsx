import { useState } from "react";
import CustomCard from "./Components/CustomCard";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BasicGrid from "./Components/BasicGrid";
import MUIForm from "./Components/MuiForm";
import MUIDialog from "./Components/MuiDialog";
import BasicUsage from "./Components/BasicUsage";

import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from "./theme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={tealTheme}>
       App.jsx components
          <BasicUsage></BasicUsage>
      <MUIForm></MUIForm>
      <BasicGrid></BasicGrid>
      <MUIDialog text="My first MUI Dialog"></MUIDialog>
      </ThemeProvider>
    </>
  );
}

export default App;
