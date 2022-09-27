import { useState } from "react";
 
const SearchInput = (props) => {
  const{setSearchText}=props
 
  const onHendleChang = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Search kewWord  "
        onChange={onHendleChang}
      />
      <button className="btn btn-primary ms-3"> Search</button>
    </div>
  );
};
export default SearchInput;
