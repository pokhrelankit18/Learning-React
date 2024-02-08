import { useState } from "react";




export default function App() {

  const[items,setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items,item] );
  }

  function handleToggleItems(id) {
   setItems((items) => items.map((item) =>
    item.id === id ? {...item, packed: !item.packed} : items))
  }

  function handleDeleteItems(id) {
setItems((items) => items.filter(item => item.id !== id)
)


  }

  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAddItems}/>
      <PackingList items={items} onDeleteitems = {handleDeleteItems} onToggleitems ={handleToggleItems}/>
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away‎ ‎ ‎ ‎ ‎  💼 </h1>;
}
function Form({onAdditems}) {
  //Controlled Elements
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

   const newItem = {description, quantity,packed:false, id:Date.now()}

   onAdditems(newItem);
   
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}

function PackingList({items,onDeleteitems,onToggleitems}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteitems={onDeleteitems} onToggleitems={onToggleitems} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item,onDeleteitems,onToggleitems }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() =>onToggleitems(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteitems(item.id)}>❌</button>
    </li>
  );
}

function Stats({items}) {
  return (
    <footer className="stats">
      <em>You have {items.length} items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
