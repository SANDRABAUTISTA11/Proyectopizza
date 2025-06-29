import style from "./styles/pizza-style.module.css"
export default function Pizza({ pizzaObj,onDelete }) {
  if (!pizzaObj) return null;
  return (
    <li className={`${style.pizza} ${pizzaObj.soldOut ? style["sold-out"] : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p> {pizzaObj.ingredients}</p>
        <p>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</p>
        <button onClick={() => onDelete(pizzaObj.name)}>Borrar Pizza 🗑️</button>
      </div>
    </li>
  );
}