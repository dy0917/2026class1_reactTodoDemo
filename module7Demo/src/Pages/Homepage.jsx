import SubscribeForm from "../Components/SubscribeForm";
import ActivityFinder from "../Components/ActivityFinder";
import NavBar from "../Components/Navbar";
export default function Homepage() {
  // Save in pages/Homepage.jsx
  return (
    <div className="Homepage">
      <h1>Home</h1>
      <SubscribeForm></SubscribeForm>
      <ActivityFinder />
    </div>
  );
}
