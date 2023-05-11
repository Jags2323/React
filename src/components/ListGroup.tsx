//import { MouseEvent } from "react";

import { useState } from "react";

// {items:[], heading: string} using interface we can define that
interface Props{
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;

}

function ListGroup({items, heading, onSelectItem}: Props) {
  
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    //conditional rendering
    return items.length === 0 && <p>No items found</p>;
  };

  //Event Handler
  //const handleClick = (event:MouseEvent) => console.log(event);

  return (
    //fragment to wrap all the children
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);

            }}
            //onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
          }

export default ListGroup;
