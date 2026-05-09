import { UserProvider } from "./Contexts/UserContext";

import ActivityFinder from "./Components/ActivityFinder";
import SubscribeForm from "./Components/SubscribeForm";
import MyThemeProvider from "./Contexts/MyThemeContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRouter";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <MyThemeProvider>
            <NavBar></NavBar>
            <AppRoutes></AppRoutes>
          </MyThemeProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
