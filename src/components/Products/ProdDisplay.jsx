import React from "react";
import { Link } from "react-router-dom";

const ProdDisplay = (props) => {
  const { name, id, description, image_url, price, category } = props;
  return (
    <> <Link to={`/category/${category}/${id}`}>
      <div className="border-2 border-green-300 m-4 p-4 rounded-xl flex h-50 w-auto ">
        <img src={image_url} className='bg-contain h-24 w-24' />
        <div>{id}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{category}</div>
        <div>{'Rs'+ price}</div>
      </div></Link>
    </>
  );
};

export default ProdDisplay;
