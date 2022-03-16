//Implementation in react
export default function App() {
  const groceryList = [
    {
      name: "carrot",
      type: "vegetable"
    },
    {
      name: "mango",
      type: "fruit"
    },
    {
      name: "banana",
      type: "fruit"
    }
  ];
  const clickHandler = (e) => console.log(e, e.target.textContent);
  const listSelectedHandler = (e) => console.log(e, e.target.textContent);
  return (
    <div className="App">
      <p>
        Q7.1 Create a button in React and print the event Can you print the
        button text from this event?
      </p>
      <button onClick={clickHandler}>Click</button>
      <p>
        Q7.2 Create a list in React. Use array of objects. Use map to render the
        list On every list there should be an onClick handler. Clicking on this
        should print the details of the object.
      </p>
      <ul>
        {groceryList.map((el) => (
          <li
            key={el}
            onClick={listSelectedHandler}
            style={{ backgroundColor: "gray", border: `1px solid white` }}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
