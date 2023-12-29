import "./App.css";
import Header from "./components/header/Header";
import Menu from "./components/navBar/Menu";
import { IoWoman, IoManSharp, IoCarSportOutline, IoPlay} from "react-icons/io5";
import { PiBootThin, PiTelevisionSimpleThin } from "react-icons/pi";
import { LiaBabyCarriageSolid } from "react-icons/lia";
import { FaHeart, FaHouse } from "react-icons/fa6";
import { TbChristmasTree, TbSofa } from "react-icons/tb";
import { GiDrill, GiLipstick, GiDoorRingHandle, GiWateringCan, GiDress} from "react-icons/gi";
import { BsBag, BsCamera } from "react-icons/bs";
import { RiBearSmileLine, RiPencilFill } from "react-icons/ri";
import { LuMilk, LuBookMinus, LuBadgePercent } from "react-icons/lu";
import { LiaPawSolid } from "react-icons/lia";
import { MdOutlineAirplanemodeActive, MdSportsSoccer } from "react-icons/md";
import Main from "./components/main/Main";

function App() {

  const listMenu = [
    { name: "Женщинам", logo: <IoWoman/> },
    { name: "Обувь", logo: <PiBootThin/> },
    { name: "Детям", logo: <LiaBabyCarriageSolid/> },
    { name: "Мужчинам", logo: <IoManSharp/> },
    { name: "Дом", logo: <FaHouse/> },
    { name: "Новый год", logo: <TbChristmasTree/> },
    { name: "Красота", logo: <GiLipstick/>},
    { name: "Аксессуары", logo: <BsBag/> },
    { name: "Электроника", logo: <BsCamera/> },
    { name: "Игрушки", logo: <RiBearSmileLine/> },
    { name: "Мебель", logo: <TbSofa/> },
    { name: "Продукты", logo: <LuMilk/> },
    { name: "Бытовая техника", logo: <PiTelevisionSimpleThin/> },
    { name: "Зоотовары", logo: <LiaPawSolid/> },
    { name: "Спорт", logo: <MdSportsSoccer/> },
    { name: "Автотовары", logo: <IoCarSportOutline/> },
    { name: "Книги", logo: <LuBookMinus/> },
    { name: "Ювелирные изделия", logo: <GiDoorRingHandle/> },
    { name: "Для ремонта", logo: <GiDrill/> },
    { name: "Сад и дача", logo: <GiWateringCan/> },
    { name: "Здоровье", logo: <FaHeart/> },
    { name: "Канцтовары", logo: <RiPencilFill/> },
    { name: "Народные Промыслы", logo: <GiDress/> },
    { name: "Акции", logo: <LuBadgePercent/> },
    { name: "Цифровые товары", logo: <IoPlay/> },
    { name: "Путешествие", logo: <MdOutlineAirplanemodeActive/> },
  ];

  return (
    <div className="App">
      <Header nameLogo="WILDBERRIES" />
      <Menu listMenu={listMenu} />
      <Main/>
    </div>
  );
}

export default App;
