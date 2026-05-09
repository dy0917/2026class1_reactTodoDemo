import { useState } from "react";
import { useFormInput } from "../Hooks/useFormInput";

export default function SubscribeForm() {
  const [status, setStatus] = useState("");
  // similar state variables mapped to form inputs
  const [firstInputProps, firstInputReset, firstResetDefault] =
    useFormInput("Mary");
  const [emailInputProps, emailReset, emailResetDefault] =
    useFormInput("mary@poppins.com");
  // similar handler functions
  function handleSubscribe() {
    firstResetDefault();
    emailResetDefault();
    console.log(firstInputProps.value, emailInputProps.value);
    setStatus("Thanks for subscribing!");
  }
  return (
    <div className="SubscribeForm componentBox">
      <label>
        First name:{" "}
        {/* form inputs with similar props
         */}
        <input {...firstInputProps} />
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
