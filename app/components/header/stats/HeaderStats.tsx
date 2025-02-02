import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import "./styles.css";
import { StarRating } from "~/components/ui/StarRating";

export function HeaderStats() {
  return (
    <div className={"flex flex-col gap-2"}>
      <div className={"flex gap-1"}>
        <h3>Доставка пиццы:</h3>
        <h3>Минск</h3>
      </div>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={
                "flex gap-2 items-center justify-start cursor-pointer w-fit"
              }
            >
              <h3>37 мин</h3>
              <h3 className={"w-[6px] h-[6px] bg-black rounded-full"}> </h3>
              <div className={"place-center gap-1"}>
                <h3>4.76</h3>
                <div className={"w-6 pb-0.5"}>
                  <StarRating value={1} items={1} readOnly />
                </div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent
            className={"rounded-2xl"}
            id={"header-stats"}
            side={"bottom"}
          >
            <div className={"flex flex-col gap-10 px-1 py-3"}>
              <div className={"flex flex-col gap-2"}>
                <h2>Время и стоимость доставки могут меняться</h2>
                <div className={"text-disabled"}>
                  В зависимости от нагрузки на пиццерию
                </div>
              </div>
              <div className={"flex flex-col gap-3"}>
                <div className={"row"}>
                  <h1>37 минут</h1>
                  <div className={"flex justify-start items-center gap-1"}>
                    <h1 className={"text-yellow"}>4.76</h1>
                    <StarRating value={4.5} readOnly />
                  </div>
                </div>
                <div className={"row"}>
                  <div>Среднее время доставки:</div>
                  <div>5483 оценки</div>
                </div>
                <div className={"row text-disabled"}>
                  <div>
                    Если не успеем за 60 минут, пришлем промокод на бесплатную
                    пиццу
                  </div>
                  <div>Оценить заказ можно в мобильном приложении</div>
                </div>
              </div>
              <div className={"text-disabled"}>
                Данные за последние 7 дней в вашем городе
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
