import "./styles.css";
import { Link } from "@remix-run/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function HeaderNav() {
  const [menuOpened, setOpened] = useState(false);
  return (
    <nav>
      <ul className={"place-center gap-5 justify-start"}>
        <li>
          <Link to={"#new"}>Новинки</Link>
        </li>
        <li>
          <Link to={"#tasty"}>Сытные пиццы</Link>
        </li>
        <li>
          <Link to={"#pizzas"}>Пиццы</Link>
        </li>
        <li>
          <Link to={"#combo"}>Комбо</Link>
        </li>
        <li>
          <Link to={"#snacks"}>Закуски</Link>
        </li>
        <li>
          <Link to={"#breakfasts"}>Завтраки</Link>
        </li>
        <li>
          <DropdownMenu open={menuOpened} onOpenChange={setOpened}>
            <DropdownMenuTrigger
              className={"flex px-3 py-2 bg-zinc-200 rounded-full place-center"}
            >
              <div>Еще</div>
              <div className={"mt-0.5"}>
                {menuOpened ? (
                  <ChevronUp size={17} />
                ) : (
                  <ChevronDown size={17} />
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <MenuItem to="#coctails" label="Коктейли" />
                <MenuItem to="#coffee" label="Кофе" />
                <MenuItem to="#drinks" label="Напитки" />
                <MenuItem to="#desserts" label="Десерты" />
                <MenuItem to="#souses" label="Соусы" />
                <MenuItem to="#misc" label="Другие товары" />
                <MenuItem to="#hits" label="Хиты" />
                <MenuItem to="#party" label="На компанию" />
                <MenuItem to="#kids" label="Детям" />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className={"bg-black w-[3px] h-[3px] rounded-full"}></li>
        <li>
          <Link to={"#prom"}>Акции</Link>
        </li>
      </ul>
    </nav>
  );
}

const MenuItem = ({ to, label }: { to: string; label: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <DropdownMenuItem
      className={"dropdown-item hover:cursor-pointer hover:text-primary"}
      onClick={() => ref.current?.click()}
    >
      <Link ref={ref} to={to}>
        {label}
      </Link>
    </DropdownMenuItem>
  );
};
