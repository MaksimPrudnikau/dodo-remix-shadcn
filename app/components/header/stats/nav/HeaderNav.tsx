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
import { Anchor } from "~/components/ui/anchor";

export function HeaderNav() {
  const [menuOpened, setOpened] = useState(false);
  return (
    <nav>
      <ul className={"place-center gap-5 justify-start"}>
        <li>
          <Anchor to={"#new"}>Новинки</Anchor>
        </li>
        <li>
          <Anchor to={"#tasty"}>Сытные пиццы</Anchor>
        </li>
        <li>
          <Anchor to={"#pizzas"}>Пиццы</Anchor>
        </li>
        <li>
          <Anchor to={"#combo"}>Комбо</Anchor>
        </li>
        <li>
          <Anchor to={"#snacks"}>Закуски</Anchor>
        </li>
        <li>
          <Anchor to={"#breakfasts"}>Завтраки</Anchor>
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
                {menuItems.map((item) => {
                  return (
                    <MenuItem key={item.to} to={item.to} label={item.label} />
                  );
                })}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li className={"bg-black w-[3px] h-[3px] rounded-full"}></li>
        <li>
          <Anchor to={"#prom"}>Акции</Anchor>
        </li>
      </ul>
    </nav>
  );
}

const menuItems = [
  { to: "#coctails", label: "Коктейли" },
  { to: "#coffee", label: "Кофе" },
  { to: "#drinks", label: "Напитки" },
  { to: "#desserts", label: "Десерты" },
  { to: "#souses", label: "Соусы" },
  { to: "#misc", label: "Другие товары" },
  { to: "#hits", label: "Хиты" },
  { to: "#party", label: "На компанию" },
  { to: "#kids", label: "Детям" },
];

const MenuItem = ({ to, label }: { to: string; label: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const click = () => {
    const section = document.getElementById(to);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <DropdownMenuItem
      className={"dropdown-item hover:cursor-pointer focus:text-primary"}
      onClick={() => {
        ref.current?.click();
      }}
    >
      <Link ref={ref} to={to} onClick={click}>
        {label}
      </Link>
    </DropdownMenuItem>
  );
};
