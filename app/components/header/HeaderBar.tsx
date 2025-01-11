import "./styles.css";
import { Link } from "@remix-run/react";
import { Anchor } from "~/components/ui/anchor";

export default function HeaderBar() {
  return (
    <div className={"py-4 border-b-2"}>
      <div className={"flex gap-5"}>
        <Anchor id={"stream"} to={"/stream"}>
          Прямой эфир
        </Anchor>
        <Link to={"/about"}>О нас</Link>
        <Link to={"/contacts"}>Контакты</Link>
      </div>
    </div>
  );
}
