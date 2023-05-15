//import { MouseEvent } from "react";

import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItems = styled.li<ListItemProps>`
  padding: 10px 0;
  background: ${(props) => (props.active ? "blue" : "white")};
`;

// {items:[], heading: string} using interface we can define that
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
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
      <List>
        {items.map((item, index) => (
          <ListItems
            active={index === selectedIndex}
            // className=
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            //onClick={handleClick}
          >
            {item}
          </ListItems>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
