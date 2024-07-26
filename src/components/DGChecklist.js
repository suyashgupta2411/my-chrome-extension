import React, { useState } from "react";
import "../styles/DGChecklist.css";
import { FaTrashAlt } from "react-icons/fa"; // Import delete icon

const DGChecklist = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem) {
      setItems([...items, { text: newItem, completed: false }]);
      setNewItem("");
    }
  };

  const toggleItemCompletion = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="dg-checklist">
      <h2>Daily Growth Checklist</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={item.completed ? "completed" : ""}
            onClick={() => toggleItemCompletion(index)}
          >
            {item.text}
            <FaTrashAlt
              className="delete-icon"
              onClick={(e) => {
                e.stopPropagation();
                removeItem(index);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DGChecklist;
