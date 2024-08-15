import { Link } from 'react-router-dom';
import './InformationHeader.css'
import { IoLocationSharp } from "react-icons/io5";

function InformationHeader() {

  return (
    <div className="header_location_and_works">
      <span>
        <IoLocationSharp className='location_icon'/>
      </span>

      <Link to="/" className="header_location">
        Москва
      </Link>

      <Link to="/" className="header_work header_location">
        Продавайте на Wildberries
      </Link>

      <Link to="/" className="header_work header_location">
        Работа в Wildberries
      </Link>
    </div>
  );
}

export default InformationHeader