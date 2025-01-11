import HeaderBar from "~/components/header/HeaderBar";

export default function Header() {
  return (
    <>
      <HeaderBar />

      <header className={'flex gap-5'}>
        <img src={'dodo.svg'} height={100} width={300} alt={'dodo'}/>
          <div className={'flex flex-col gap-2'}>
              <div className={'flex gap-1`'}>
                  <h4>Доставка пиццы:</h4>
                  <h4>Минск</h4>
              </div>
              <div className={'flex gap-1 items-center justify-start'}>
                  <span>37 мин</span>
                  <span className={'w-[4px] h-[5px] bg-black rounded-full'}></span>
                  <span>4.76</span>
              </div>
          </div>
      </header>
    </>
  );
}
