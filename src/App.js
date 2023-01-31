import "./App.css";

function App() {
  return (
    <>
      <HeaderNews>
        <Link>Сейчас в СМИ</Link>
        <Link>в Германии</Link>
        <Link>Рекомендуем</Link>
        <CurrentDate />
      </HeaderNews>

      <News>
        <NewsItem icon="ria" text="текст" href="#" />
        <NewsItem icon="ria" text="текст" href="#" />
        <NewsItem icon="rg" text="текст" href="#" />
        <NewsItem icon="kom" text="текст" href="#" />
        <NewsItem icon="g" text="текст" href="#" />
      </News>

      <ExchangeRates>
        <ExchangeRateItem currency="USD" rate="73,34" change="+0,09" />
        <ExchangeRateItem currency="EUR" rate="85,34" change="+0,09" />
        <ExchangeRateItem currency="НЕФТЬ" rate="73,34" change="+0,09" />
      </ExchangeRates>

      <YandexPromo />

      <SectionWithLinks>
        <Link href="#">Видео</Link>
        <Link href="#">Картинки</Link>
        <Link href="#">Новости</Link>
        <Link href="#">Карты</Link>
        <Link href="#">Маркет</Link>
        <Link href="#">Переводчик</Link>
        <Link href="#">Эфир</Link>
        <Link href="#">ещё</Link>
      </SectionWithLinks>

      <Logo />
      <SearchField />
      <SearchExample href="#" />
      <Advertising />
      <WeatherWidget />

      <PopularLinksWidget title="Карта Германии" href="#" />

      <PopularLinksWidget title="Посещаемое" href="#">
        <Link>Маркет</Link>
        <Link>Авто.ру</Link>
        <Link>Недвижимость</Link>
      </PopularLinksWidget>

      <PopularLinksWidget title="Телепрограмма" href="#">
        <TvProgramItem
          time="02:00"
          channel="ТНТ International"
          program="ТНТ Best"
        />
        <TvProgramItem
          time="02:15"
          channel="Карусель INT"
          program="Джинглики"
        />
        <TvProgramItem
          time="02:25"
          channel="Первый"
          program="Наедине со всеми"
        />
      </PopularLinksWidget>

      <PopularLinksWidget title="Эфир" href="#">
        <OnairItem
          icon="play"
          name="Управление как искусство"
          programm="Успех"
        />
        <OnairItem
          icon="play"
          name="Ночь. Мир в это время"
          programm="earthTV"
        />
        <OnairItem
          icon="play"
          name="Андрей Возн..."
          programm="Совершенно секретно"
        />
      </PopularLinksWidget>
    </>
  );
}

export default App;
