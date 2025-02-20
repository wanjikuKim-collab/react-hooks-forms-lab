import React from "react";

function Filter({ onCategoryChange, search, onSearchChange, selectedCategory }) {
  return (
    <div className="Filter">
      <input type="text" value={search} name="search" placeholder="Search..." onChange={onSearchChange} />
      <select name="filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
