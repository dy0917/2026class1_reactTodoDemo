import { useState, useContext } from "react";
import { useFormInput } from "../Hooks/useFormInput";
import { UserContext } from "../Contexts/UserContext";
export default function SubscribeForm() {
  const [status, setStatus] = useState("");

  // similar state variables mapped to form inputs
  const [firstNameInputProps, firstNameReset, firstNameResetDefault] =
    useFormInput("Mary");
  const [emailInputProps, emailReset, emailResetDefault] =
    useFormInput("mary@poppins.com");
  const { currentUser, handleUpdateUser, function1 } = useContext(UserContext);
  // similar handler functions

  function handleSubscribe() {
    firstNameResetDefault();
    emailResetDefault();
    console.log(firstNameInputProps.value, emailInputProps.value);
    function1();
    handleUpdateUser({
      name: firstNameInputProps.value,
      email: emailInputProps.value,
    });
    setStatus("Thanks for subscribing!");
  }
  return (
    <div className="SubscribeForm componentBox">
      <label>
        First name:{currentUser.name}
        {/* form inputs with similar props
         */}
        <input {...firstNameInputProps} />
      </label>
      <label>
        Email: {/* form inputs with similar props */}
        <input {...emailInputProps} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}
