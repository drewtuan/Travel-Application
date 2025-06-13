import { useState } from "react";
import { Stats } from "./Stats";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Logo } from "./Logo";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // creates a new array with the new item added
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    // creates a new array that contains only the items with ids that are not equal to the id of the item being deleted.
    // excludes delete item from new array.
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    // create a new object that has the item.packed attribute changed when the checkbox is checked.
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    // eslint-disable-next-line no-unused-vars
    const confirmed = window.confirm(
      "Are you sure you want to delete the entire list"
    );
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
export default App;
