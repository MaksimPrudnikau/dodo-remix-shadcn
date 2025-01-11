import HeaderBar from "~/components/header/HeaderBar";
import { HeaderStats } from "~/components/header/stats/HeaderStats";
import { HeaderPhone } from "~/components/header/HeaderPhone";

export default function Header() {
  return (
    <>
      <HeaderBar />

      <header className={"flex gap-5"}>
        <img src={"dodo.svg"} height={100} width={300} alt={"dodo"} />
        <HeaderStats />
        <HeaderPhone />
      </header>
    </>
  );
}
