export function HeaderStats() {
  return (
    <div className={"flex flex-col gap-1"}>
      <div className={"flex gap-1"}>
        <h4>Доставка пиццы:</h4>
        <h4>Минск</h4>
      </div>
      <div className={"flex gap-1 items-center justify-start"}>
        <span>37 мин</span>
        <span className={"w-[4px] h-[5px] bg-black rounded-full"}></span>
        <span>4.76</span>
      </div>
    </div>
  );
}
