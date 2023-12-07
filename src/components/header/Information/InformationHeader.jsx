import './InformationHeader.css'

function InformationHeader() {

  return (
    <div className="header_location_and_works">
      <span>
        <svg
          style={{ opacity: 0.3, paddingRight: "0.3em" }}
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>

      <a href="/" className="header_location">
        Москва
      </a>

      <a href="/" className="header_work">
        Продавайте на Wildberries
      </a>
      <a href="/" className="header_work">
        Работа в Wildberries
      </a>
    </div>
  );
}

export default InformationHeader