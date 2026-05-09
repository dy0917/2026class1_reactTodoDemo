import { useState, useEffect, useContext } from "react";
import { useData } from "../Hooks/useData";
import { UserContext } from "../Contexts/UserContext";
function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const { currentUser } = useContext(UserContext);
  const data = useData(
    "https://bored.api.lewagon.com/api/activity?" +
      "participants=" +
      participants,
  );
  const activity = data ? data.activity : "not found";
  return (
    <div className="ActivityFinder componentBox">
      <h3> {currentUser.name} Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
      <button onClick={() => setParticipants({})}>More Participants</button>
    </div>
  );
}
export default ActivityFinder;
