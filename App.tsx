import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false); //array to determine the state of the alert

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}
export default App;
