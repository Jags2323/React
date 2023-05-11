import ListGroup from "./components/ListGroup";

function App() {
  const items = ["NewYork", "chicago", "bangalore", "mumbai"];

  const handleSelectItem = (item: string) =>{
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="cities" onSelectItem={ handleSelectItem} />
    </div>
  );
}

export default App;
