import { useState, useContext } from "react";
import { useFormInput } from "../Hooks/useFormInput";
import { UserContext } from "../Contexts/UserContext";

export default function LoginForm() {
  const [status, setStatus] = useState("");
  // similar state variables mapped to form inputs
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  // destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser } = useContext(UserContext);
  // alternative using the useContext hook directly, either works
  //const {currentUser, handleUpdateUser} = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail }); // context function
    }
  };
  return (
    <div className="SubscribeForm componentBox">
      {currentUser ?? currentUser.email}
      <label>
        Email
        {/* form inputs with similar props
         */}
        <input
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </label>
      <label>
        Password: {/* form inputs with similar props */}
        <input
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Subscribe</button>
      <div>{submitResult}</div>
    </div>
  );
}
