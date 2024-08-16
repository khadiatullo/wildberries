import "./App.css";
import Header from "./components/header/Header";
import Base from "./pages/Base";
import Menu from "./components/navBar/Menu";
import Footer from "./components/footer/Footer";
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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/notFound/NotFound";
import Basket from "./pages/Basket";
import { useState } from "react";
import { CartContext } from "./contex";
import SignUp from "./pages/SignUp/SignUp";
import InformProduct from "./pages/informationProducts/InformProduct";
import { useSelector } from "react-redux";
import TechnicalSupport from "./components/UI/technicalSupport/TechnicalSupport";
import Addresses from "./pages/addresses/Addresses";

function App() {

  const listMenu = [
    {id: 1, name: "Женщинам", logo: <IoWoman/> },
    {id: 2, name: "Обувь", logo: <PiBootThin/> },
    {id: 3, name: "Детям", logo: <LiaBabyCarriageSolid/> },
    {id: 4, name: "Мужчинам", logo: <IoManSharp/> },
    {id: 5, name: "Дом", logo: <FaHouse/> },
    {id: 6, name: "Новый год", logo: <TbChristmasTree/> },
    {id: 7, name: "Красота", logo: <GiLipstick/>},
    {id: 8, name: "Аксессуары", logo: <BsBag/> },
    {id: 9, name: "Электроника", logo: <BsCamera/> },
    {id: 10, name: "Игрушки", logo: <RiBearSmileLine/> },
    {id: 11, name: "Мебель", logo: <TbSofa/> },
    {id: 12, name: "Продукты", logo: <LuMilk/> },
    {id: 13, name: "Бытовая техника", logo: <PiTelevisionSimpleThin/> },
    {id: 14, name: "Зоотовары", logo: <LiaPawSolid/> },
    {id: 15, name: "Спорт", logo: <MdSportsSoccer/> },
    {id: 16, name: "Автотовары", logo: <IoCarSportOutline/> },
    {id: 17, name: "Книги", logo: <LuBookMinus/> },
    {id: 18, name: "Ювелирные изделия", logo: <GiDoorRingHandle/> },
    {id: 19, name: "Для ремонта", logo: <GiDrill/> },
    {id: 20, name: "Сад и дача", logo: <GiWateringCan/> },
    {id: 21, name: "Здоровье", logo: <FaHeart/> },
    {id: 22, name: "Канцтовары", logo: <RiPencilFill/> },
    {id: 23, name: "Народные Промыслы", logo: <GiDress/> },
    {id: 24, name: "Акции", logo: <LuBadgePercent/> },
    {id: 25, name: "Цифровые товары", logo: <IoPlay/> },
    {id: 26, name: "Путешествие", logo: <MdOutlineAirplanemodeActive/> },
  ];

  const [carts, setCarts] = useState([]);
  const [value, setValue] = useState('');
  const { products } = useSelector((state) => state.products);

  const filteredCart = products.filter((product) => {
    return product.title.toLowerCase().includes(value.toLowerCase())
  });

  const addToCart = (product) => {
    let isPresent = false;

    carts.forEach((item) => {
      if(item.id === product.id){
        isPresent = true
      }
    })

    if(isPresent) return;

    setCarts([...carts, product])
  };

  const deleteCart = (id) => {
    setCarts((cart) => {
      return cart.filter(product => { return id !== product.id})
    })
  };

  return (
    <CartContext.Provider value={{addToCart, deleteCart, carts, setCarts, value, setValue, filteredCart }}>

        <BrowserRouter>
          <ScrollToTop/>

            <Header nameLogo='KHADIATULLO'/>
            <Menu listMenu={listMenu}/>

            <Routes>
              <Route element={<NotFound/>} path='*'/>
              <Route element={<Base/>} path="/"/>
              <Route element={<Base/>} path="/wildberries"/>
              <Route element={<Basket/>} path='/basket'/>
              <Route element={<SignUp/>} path='/signUp'/>
              <Route element={<InformProduct/>} path="/informationProduct/:id"/>
              <Route element={<Addresses/>} path='/addresses'/>
            </Routes>

            <TechnicalSupport />

            <Footer/>

      </BrowserRouter>

    </CartContext.Provider>
  );
  
}

export default App;
