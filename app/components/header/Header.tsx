import HeaderBar from "~/components/header/HeaderBar";
import { HeaderStats } from "~/components/header/stats/HeaderStats";
import { HeaderPhone } from "~/components/header/HeaderPhone";
import { HeaderNav } from "~/components/header/stats/nav/HeaderNav";

export default function Header() {
  return (
    <div className={"flex flex-col gap-6"}>
      <HeaderBar />

      <header className={"flex gap-5"}>
        <img src={"dodo.svg"} height={100} width={300} alt={"dodo"} />
        <HeaderStats />
        <HeaderPhone />
      </header>

      <HeaderNav />
    </div>
  );
}
