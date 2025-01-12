import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { UserLoginForm } from "~/components/header/user-menu/UserLoginForm";

export function UserMenu() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={"bg-zinc-200 rounded-full"} variant={"outline"}>
          Войти
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Вход в аккаунт</DialogTitle>
          <DialogDescription>
            Подарим подарок на день рождения, сохраним адрес доставки и
            расскажем об акциях
          </DialogDescription>
        </DialogHeader>

        <UserLoginForm />
      </DialogContent>
    </Dialog>
  );
}
