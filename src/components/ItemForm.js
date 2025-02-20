import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, items}) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleItemNameChange(e){
    setItemName(e.target.value)
  }

  function handleItemCategoryChange(e){
    setItemCategory(e.target.value)
  }
  console.log(itemName, itemCategory)

  function handleSubmit(e){
    e.preventDefault();

    let newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    }

    onItemFormSubmit([...items, newItem])
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input onChange={handleItemNameChange} type="text" value={itemName} name="name" />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
