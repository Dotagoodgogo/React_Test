import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () =>{
    props.callback({data:"test"})

  }

  return (
    <div>
      <h2> Search for an item</h2>
      <form>
        <label for="name-field">Name:</label>
        <input
          id="name_field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlfor="price-field">Max Price:</label>
        <input id="price_field" type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
        <label htmlfor="type-field">Type:</label>
        <input id="type_field" type="text" value={type} onChange={(e) => setType(e.target.value)}></input>
        <label htmlfor="brand-field">Brand:</label>
        <input id="brand_field" type="text" value={brand} onChange={(e) => setBrand(e.target.value)}></input>
        <button type="button" onClick={searchButtonPressed}>Search</button>
      </form>
        <p>Name: {name}</p>
        <p>Max price: {price}</p>
        <p>Type: {type}</p>
        <p>Brand: {brand}</p>
    </div>
  );
}

export default SearchBar;
