import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  const items = ["NewYork", "chicago", "bangalore", "mumbai"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}

      <Button onClick={() => setAlertVisibility(true)}>
        Click Here
      </Button>
         
      <Like onClick={()=> console.log("clicked")}/>
    </div>
  );
}

export default App;
