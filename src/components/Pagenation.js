import './Pagenation.css';
import { RiArrowLeftSFill } from 'react-icons/ri';
import { RiArrowRightSFill } from 'react-icons/ri';

const Pagenation = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  return (
    <div className="pagenation">
      <button
        className="button_arrow"
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page === 1}
      >
        <RiArrowLeftSFill />
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => {
              setPage(i + 1);
            }}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </button>
        ))}
      <button
        className="button_arrow"
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === numPages}
      >
        <RiArrowRightSFill />
      </button>
    </div>
  );
};

export default Pagenation;
