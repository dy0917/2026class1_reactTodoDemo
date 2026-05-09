import ActivityFinder from "./Components/ActivityFinder";
import SubscribeForm from "./Components/SubscribeForm";
import UserProvider from "./Contexts/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <SubscribeForm></SubscribeForm>
        <ActivityFinder />
      </UserProvider>
    </>
  );
}

export default App;
