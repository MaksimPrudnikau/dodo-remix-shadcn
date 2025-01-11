import "./styles.css";
import { Link } from "@remix-run/react";

export function HeaderNav() {
  return (
    <nav>
      <ul className={"flex gap-5"}>
        <Link to={"#new"}>Новинки</Link>
        <Link to={"#tasty"}>Сытные пиццы</Link>
        <Link to={"#pizzas"}>Пиццы</Link>
        <Link to={"#combo"}>Комбо</Link>
        <Link to={"#snacks"}>Закуски</Link>
        <Link to={"#breakfasts"}>Завтраки</Link>
      </ul>
    </nav>
  );
}
