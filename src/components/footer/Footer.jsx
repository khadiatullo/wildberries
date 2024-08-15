import { useEffect, useState } from "react";
import "./footer.css";
import { FaChevronDown } from "react-icons/fa";
import useWindowResize from "../../hooks/useWindowResize";

function Footer() {
  const [display, setDisplay] = useState("none");
  const [display1, setDisplay1] = useState("none");
  const [display2, setDisplay2] = useState("none");
  const [display3, setDisplay3] = useState("none");
  const [display4, setDisplay4] = useState("none");
  const { width } = useWindowResize();
   

  return (
    <footer>
      <div className="footer_conteiner">
        <div className="footer_nav">
            {width < 1024 ? (
                <div className="footer_service_wrap">

                        <section className="footer_list_wrap footer_list_wrap_one">
                            <h2 className="footer_section_name">Покупателям</h2>
                            <ul style={{display: `${display}`}} id='footer_list_1' className='footer_list'>
                                <li><a href="#">Как сделать заказ</a></li>
                                <li><a href="#">Способы оплаты</a></li>
                                <li><a href="#">Доставка</a></li>
                                <li><a href="#">Возврат товара</a></li>
                                <li><a href="#">Возврат денежных средств</a></li>
                                <li><a href="#">Правила продажи</a></li>
                                <li><a href="#">Правила пользования торговой площадкой</a></li>
                                <li><a href="#">Политика обработки персональных данных</a></li>
                                <li><a href="#">Вопросы и ответы</a></li>
                                <li><a href="#">Проверка совместимости</a></li>
                            </ul>
                            <div onClick={() => setDisplay(display == 'block' ? 'none' : 'block')}><FaChevronDown className='icon_footer_menu'/></div>
                        </section>

                        <div className="footer_inner_wrap footer_list_wrap_too">
                            <section className='footer_list_wrap'>
                                <h2 className="footer_section_name">Партнерам</h2>
                                <ul style={{display: `${display1}`}} id='footer_list_2' className='footer_list'>
                                    <li><a href="#">Продавайте на Wildberries</a></li>
                                    <li><a href="#">Водителем</a></li>
                                    <li><a href="#">Курьерам</a></li>
                                    <li><a href="#">Перевозчиком</a></li>
                                    <li><a href="#">Партнерский пункт выдачи</a></li>
                                    <li><a href="#">Франшизный пункт выдачи</a></li>
                                </ul>
                                <div onClick={() => setDisplay1(display1 == 'block' ? 'none' : 'block')}><FaChevronDown className='icon_footer_menu'/></div>
                            </section>

                            <section className='footer_list_wrap'>
                                <h2 className="footer_section_name">Наши проекты</h2>
                                <ul style={{display: `${display2}`}} id='footer_list_3' className='footer_list'>
                                    <li><a href="#">WB Guru</a></li>
                                    <li><a href="#">Трудоустройство</a></li>
                                    <li><a href="#">Цифровые товары</a></li>
                                    <li><a href="#">WB Путешествия</a></li>
                                    <li><a href="#">WB Stream</a></li>
                                </ul>
                                <div onClick={() => setDisplay2(display2 == 'block' ? 'none' : 'block')}><FaChevronDown className='icon_footer_menu'/></div>
                            </section>
                        </div>

                        <section className="footer_list_wrap footer_list_wrap_three">
                            <h2 className="footer_section_name">Компания</h2>
                            <ul style={{display: `${display3}`}} id='footer_list_4' className='footer_list'>
                                <li><a href="#">О нас</a></li>
                                <li><a href="#">Реквизиты</a></li>
                                <li><a href="#">Пресс-центр</a></li>
                                <li><a href="#">Контакты</a></li>
                                <li><a href="#">Bug Bounty</a></li>
                                <li><a href="#">Горячая линия</a></li>
                                <li><a href="#">Wb.Tech</a></li>
                            </ul>
                            <div onClick={() => setDisplay3(display3 == 'block' ? 'none' : 'block')}><FaChevronDown className='icon_footer_menu'/></div>
                        </section>

                        <section className="footer_list_wrap footer_list_wrap_four">
                            <h2 className="footer_section_name">Мы в соцсетях</h2>
                            <ul style={{display: `${display4}`}} id='footer_list_5' className='footer_list'>
                                <li><a href="#">ВКонтакте</a></li>
                                <li><a href="#">Одноклассники</a></li>
                                <li><a href="#">YouTube</a></li>
                                <li><a href="#">Телеграмм</a></li>
                            </ul>
                            <div onClick={() => setDisplay4(display4 == 'block' ? 'none' : 'block')}><FaChevronDown className='icon_footer_menu'/></div>
                        </section>

                        <div className='footer_social_wrap'>
                            <section className="footer_list_wrap">
                                <h2 className='footer_section_name'>Приложение Wildberries</h2>
                                <div className="footer_apps">
                                    <img className='footer_apps_img' src="https://static-basket-01.wbbasket.ru/vol0/i/v3/apps/qr.png" alt="приложения" />
                                    <p className='footer_apps_text'>Наведите камеру, чтобы скачать приложение</p>
                                    <ul className='footer_apps_list'>
                                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apple_Store_logo.svg/1200px-Apple_Store_logo.svg.png" alt="apple" /></li>
                                        <li><img src="https://limerickgroup.ru/img/nav/burger/googleplay.png" alt="playmarket" /></li>
                                        <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png" alt="huawei" /></li>
                                        <li><img src="https://avatars.mds.yandex.net/get-entity_search/1579191/785923768/S122x122Fit_2x" alt="RuStore" /></li>
                                    </ul>
                                </div>
                            </section>
                        </div>


                        <div className='footer_apps_list_too'>
                            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apple_Store_logo.svg/1200px-Apple_Store_logo.svg.png" alt="apple" /></li>
                            <li><img src="https://limerickgroup.ru/img/nav/burger/googleplay.png" alt="playmarket" /></li>
                            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png" alt="huawei" /></li>
                            <li><img src="https://avatars.mds.yandex.net/get-entity_search/1579191/785923768/S122x122Fit_2x" alt="RuStore" /></li>
                        </div>

                </div>
            ) : (
                <div className="footer_service_wrap">

                    <section className="footer_list_wrap footer_list_wrap_one">
                        <h2 className="footer_section_name">Покупателям</h2>
                        <ul id='footer_list_1' className='footer_list'>
                            <li><a href="#">Как сделать заказ</a></li>
                            <li><a href="#">Способы оплаты</a></li>
                            <li><a href="#">Доставка</a></li>
                            <li><a href="#">Возврат товара</a></li>
                            <li><a href="#">Возврат денежных средств</a></li>
                            <li><a href="#">Правила продажи</a></li>
                            <li><a href="#">Правила пользования торговой площадкой</a></li>
                            <li><a href="#">Политика обработки персональных данных</a></li>
                            <li><a href="#">Вопросы и ответы</a></li>
                            <li><a href="#">Проверка совместимости</a></li>
                        </ul>
                    </section>

                    <div className="footer_inner_wrap footer_list_wrap_too">
                        <section className='footer_list_wrap'>
                            <h2 className="footer_section_name">Партнерам</h2>
                            <ul id='footer_list_2' className='footer_list'>
                                <li><a href="#">Продавайте на Wildberries</a></li>
                                <li><a href="#">Водителем</a></li>
                                <li><a href="#">Курьерам</a></li>
                                <li><a href="#">Перевозчиком</a></li>
                                <li><a href="#">Партнерский пункт выдачи</a></li>
                                <li><a href="#">Франшизный пункт выдачи</a></li>
                            </ul>
                        </section>

                        <section className='footer_list_wrap'>
                            <h2 className="footer_section_name">Наши проекты</h2>
                            <ul id='footer_list_3' className='footer_list'>
                                <li><a href="#">WB Guru</a></li>
                                <li><a href="#">Трудоустройство</a></li>
                                <li><a href="#">Цифровые товары</a></li>
                                <li><a href="#">WB Путешествия</a></li>
                                <li><a href="#">WB Stream</a></li>
                            </ul>
                        </section>
                    </div>

                    <section className="footer_list_wrap footer_list_wrap_three">
                        <h2 className="footer_section_name">Компания</h2>
                        <ul id='footer_list_4' className='footer_list'>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Реквизиты</a></li>
                            <li><a href="#">Пресс-центр</a></li>
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">Bug Bounty</a></li>
                            <li><a href="#">Горячая линия</a></li>
                            <li><a href="#">Wb.Tech</a></li>
                        </ul>
                    </section>

                    <section className="footer_list_wrap footer_list_wrap_four">
                        <h2 className="footer_section_name">Мы в соцсетях</h2>
                        <ul id='footer_list_5' className='footer_list'>
                            <li><a href="#">ВКонтакте</a></li>
                            <li><a href="#">Одноклассники</a></li>
                            <li><a href="#">YouTube</a></li>
                            <li><a href="#">Телеграмм</a></li>
                        </ul>
                    </section>

                    <div className='footer_social_wrap'>
                        <section className="footer_list_wrap">
                            <h2 className='footer_section_name'>Приложение Wildberries</h2>
                            <div className="footer_apps">
                                <img className='footer_apps_img' src="https://static-basket-01.wbbasket.ru/vol0/i/v3/apps/qr.png" alt="приложения" />
                                <p className='footer_apps_text'>Наведите камеру, чтобы скачать приложение</p>
                                <ul className='footer_apps_list'>
                                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apple_Store_logo.svg/1200px-Apple_Store_logo.svg.png" alt="apple" /></li>
                                    <li><img src="https://limerickgroup.ru/img/nav/burger/googleplay.png" alt="playmarket" /></li>
                                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png" alt="huawei" /></li>
                                    <li><img src="https://avatars.mds.yandex.net/get-entity_search/1579191/785923768/S122x122Fit_2x" alt="RuStore" /></li>
                                </ul>
                            </div>
                        </section>
                    </div>

                </div>
            )}

          <div className="footer_info">
            <p>
              <span>
                2004-2023 © Wildberries — модный интернет-магазин одежды, обуви
                и аксессуаров. Все права защищены. Доставка по всей России.
              </span>
              <span>
                На Торговой площадке wildberries.ru применяются рекомендательные
                технологии. Адрес для направления юридически значимых сообщений:
                sales@wildberries.ru
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
