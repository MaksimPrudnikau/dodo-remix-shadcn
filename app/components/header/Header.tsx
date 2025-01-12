import HeaderBar from "~/components/header/HeaderBar";
import { HeaderStats } from "~/components/header/stats/HeaderStats";
import { HeaderPhone } from "~/components/header/HeaderPhone";
import { HeaderNav } from "~/components/header/stats/nav/HeaderNav";
import { Link } from "@remix-run/react";
import { UserMenu } from "~/components/header/user-menu/UserMenu";

export default function Header() {
  return (
    <div className={"flex flex-col gap-6"}>
      <HeaderBar />

      <header className={"flex items-center justify-between"}>
        <div className={"flex gap-14"}>
          <Link to={"/"}>
            <img src={"dodo.svg"} height={100} width={300} alt={"dodo"} />
          </Link>
          <div className={"flex gap-14 pt-1"}>
            <HeaderStats />
            <HeaderPhone />
          </div>
        </div>
        <UserMenu />
      </header>

      <HeaderNav />
    </div>
  );
}
