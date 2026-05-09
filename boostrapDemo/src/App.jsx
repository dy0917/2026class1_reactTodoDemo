import { Button } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="primary" >
        Click me! {count}
      </Button>
    </>
  );
}

export default App;
