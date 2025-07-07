import React, { useState } from 'react';
import './Style.css';

function Todo() {
  const [inputs, setInputs] = useState('');
  const [items, setItems] = useState([]);

  function handleInput(event) {
    setInputs(event.target.value);
  }

  function addItem() {
    if (inputs.trim() !== '') {
      setItems((prevItems) => [...prevItems, inputs]);
      setInputs('');
    }
  }

  function deleteItem(indexToDelete) {
    setItems((prevItems) => prevItems.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div>
      <div className="container">
        <h1>TO-DO TASK</h1>
        <div className="form">
          <input type="text" value={inputs} onChange={handleInput} />
          <button onClick={addItem}>Submit</button>
        </div>

        <div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => deleteItem(index)} style={{ marginLeft: '10px' }}>
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
