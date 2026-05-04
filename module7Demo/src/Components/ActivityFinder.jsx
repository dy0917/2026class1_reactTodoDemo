import { useState, useEffect } from "react";
function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState("");
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        "https://bored.api.lewagon.com/api/activity?" +
          "participants=" +
          participants,
      );
      const json = await response.json();
      setActivity(json.activity);
    };
    loadData();
  }, [participants]);

  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
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
