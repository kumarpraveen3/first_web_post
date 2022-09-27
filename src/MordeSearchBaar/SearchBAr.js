import React from "react";
import "./SearchBar.css";
import SearchInput from "./SearchInput";
import SearchList from './SearchList'
 
const ItemList = [
  {
    id: 1,
    name: "Speaker",
  },
  {
    id: 2,
    name: "Headphone",
  },
  {
    id: 3,
    name: "Bottle",
  },
  {
    id: 4,
    name: "Lamp",
  },
];
 
const SearchBAr = (props) => {
  const [searchText, setSearchText] = useState(" ");
  return (
    <>{searchText}
      <div className="container container-Search-bar">
        <h1>Search Bar</h1>
        <SearchInput  setSearchText={setSearchText}/>
        <SearchList searchListItem={ItemList}/>
      
      </div>
    </>
  );
};
 
export default SearchBAr;
