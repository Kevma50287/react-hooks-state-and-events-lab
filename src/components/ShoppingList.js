import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setFilter] = useState("All")

  function filterHandler(e) {
    setFilter(e.target.value)
  }

  const itemlist = items.map((item) => {
    if (selectedCategory !== "All") {
      if (item.category == selectedCategory) {
        return (
          <Item key={item.id} name={item.name} category={item.category} />
        )
      };
    } else {
      return (
        <Item key={item.id} name={item.name} category={item.category} />
      )
    };
  })

  console.log(selectedCategory)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterHandler}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemlist}
      </ul>
    </div>
  );
}

export default ShoppingList;
