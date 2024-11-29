import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../../Redux/SearchBarSlice";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.searchbar.input);
  const searchresults = useSelector((state) => state.searchbar.data);

  console.log("here are search rs", searchresults);

  const [localState, setLocalState] = useState(false);
  const containerRef = useRef();

  const handleFocus = () => {
    setLocalState(true);
  };

  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setLocalState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <input
        className="p-3 focus:outline-none w-full m-2"
        onFocus={handleFocus}
        onChange={(e) => dispatch(updateInput(e.target.value))}
        autoFocus
        placeholder="Shop Cotton T-shirts, Organic Soaps, or Search by Product Code."
      />
      {localState && currentState && (
        <div className="h-94 w-94 bg-green-700">
          <ul>
            {searchresults
              .filter((items) => {
                return items.name.toLowerCase().includes(currentState.toLowerCase());
              })
              .map((items, index) => {
                return <Link to={`category/${items.category}/${items.id}`}> <li key={index} >{items.name}</li></Link>;
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
