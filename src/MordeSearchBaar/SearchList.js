import React from "react";
 
const SearchList = (props) => {
  const { searchListItem } = props;
  return (
    <ul>
      {searchListItem.map((itemObj) => {
        const { id, name } = itemObj;
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
};
 
export default SearchList