import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../../Redux/SearchBarSlice";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.searchbar.input);
  const searchresults = useSelector((state) => state.searchbar.data);

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
    <div ref={containerRef} className="relative">
      <input
        className="bg-[#F6F6F6] relative rounded-xl h-10 w-80 focus:outline-none px-4"
        onFocus={handleFocus}
        onChange={(e) => dispatch(updateInput(e.target.value))}
        autoFocus
        placeholder="Find something extraordinary"
      />
      {localState && currentState && (
        <div className="h-auto w-96 absolute top-12 left-0 max-h-64 bg-white bg-opacity-10 backdrop-blur-lg p-4 m-4 overflow-y-auto shadow-lg">
          <ul>
            {searchresults
              .filter((items) => {
                return items.name.toLowerCase().includes(currentState.toLowerCase());
              })
              .map((items, index) => {
                return <Link to={`category/${items.category}/${items.id}`}> <div className="flex items-center w-full"><div className=" hover:bg-[#00765e] hover:text-white rounded-3xl flex items-center w-full px-1"><img src={items.image_url} alt={items.name} className="h-8 w-8 rounded-full" /><li key={index} className="p-2 w-full" >{items.name}</li><div className="ml-auto p-1">Rs{items.price}</div></div></div></Link>;
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
