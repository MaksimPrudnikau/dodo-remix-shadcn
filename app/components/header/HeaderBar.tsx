import './styles.css'
import { Link } from "@remix-run/react";

export default function HeaderBar() {
  return (
    <div className={"flex gap-5"}>
      <Link id={'stream'} to={'/stream'}>Прямой эфир</Link>
      <Link to={'/about'}>О нас</Link>
      <Link to={'/contacts'}>Контакты</Link>
    </div>
  );
}

