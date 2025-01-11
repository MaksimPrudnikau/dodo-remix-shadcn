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
    <div className={"flex flex-col gap-1"}>
      <div className={"flex gap-1"}>
        <h4>Доставка пиццы:</h4>
        <h4>Минск</h4>
      </div>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={
                "flex gap-1 items-center justify-start cursor-pointer w-fit"
              }
            >
              <span>37 мин</span>
              <span className={"w-[3px] h-[3px] bg-black"}></span>
              <span>4.76</span>
            </div>
          </TooltipTrigger>
          <TooltipContent id={"header-stats"} side={"bottom"}>
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
