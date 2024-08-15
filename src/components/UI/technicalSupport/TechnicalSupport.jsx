import { useState } from "react";
import "./technicalSupport.css";
import { AiFillMessage } from "react-icons/ai";
import { FaRegSadCry } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

function TechnicalSupport() {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <div onClick={() => setActiveModal(!activeModal)} className="technicalSupport">
        <AiFillMessage style={{ color: "white", width: "1.5em", height: "1.5em" }} />
      </div>

      {activeModal ? (
        <div className="modalTechnicalSupport">
            <div className="chat_header">
                <ul className="chat_header_wrap">
                    <li className="chat_header_wrap_support">Поддержка Wildberries</li>
                    <li onClick={() => setActiveModal(!activeModal)} className="chat_header_wrap_to-close"><IoCloseSharp className="chat_header_wrap_to-close_icon"/></li>
                </ul>
            </div>

            <div className="chat__message-error">
                <p><FaRegSadCry style={{width: '2em', height: '2em', color: 'grey'}}/></p>
                <p style={{fontWeight: '600'}}>Чат с поддержкой не загрузился</p>
                <p>Обновите страницу или вернитесь позже, мы всё починим</p>
            </div>

        </div>
      ) : (
        ""
      )}

    </>
  );
}

export default TechnicalSupport;
