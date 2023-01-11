import './DiscussionList.css';
import { useEffect, useState } from 'react';
import { HiCheckBadge } from 'react-icons/hi2';
import { HiOutlineCheckBadge } from 'react-icons/hi2';
import Pagenation from './Pagenation';
import Search from './Search';

const DiscussionList = ({ discussions }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [data, setData] = useState([...discussions]);

  const onSearch = (input, type) => {
    setData(
      discussions.filter((discussion) => {
        return discussion[type].toLowerCase().includes(input.toLowerCase());
      })
    );
  };

  useEffect(() => {
    setData(discussions);
  }, [discussions]);

  return (
    <section className="discussion_wrapper">
      <div className="discussion_items">
        <Search onSearch={onSearch} />
        <label>
          Rows per page:&nbsp;
          <select
            className="limit_select"
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </label>
      </div>
      <div className="discussion_list-wrapper">
        <ul className="discusstion_list">
          {data.slice(offset, offset + limit).map((discussion) => {
            return (
              <li key={discussion.id} className="discussion_container">
                <div className="discussion_content">
                  <h2 className="discussion_title">
                    {discussion.answer ? (
                      <HiCheckBadge size={25} style={{ color: 'rgb(42, 211, 0' }} />
                    ) : (
                      <HiOutlineCheckBadge size={25} style={{ color: '#888' }} />
                    )}
                    <a href={discussion.url}>&nbsp;{discussion.title}</a>
                  </h2>
                  <div className="discussion_info">
                    <span className="discussion_info-author">
                      <img
                        className="discussion_avatar-image"
                        src={discussion.avatarUrl}
                        alt={`avatar of ${discussion.author}`}
                      />{' '}
                      <b>{discussion.author}</b>&nbsp;
                      <span className={discussion.answer ? 'answered_text' : 'unanswered_text'}>
                        {discussion.answer ? '⋅ Answered' : '⋅ Unanswered'}
                      </span>
                    </span>
                    <span className="discussion_info-date">
                      {new Date(discussion.createdAt).toLocaleDateString('en-us', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <Pagenation total={data.length} limit={limit} page={page} setPage={setPage} />
    </section>
  );
};

export default DiscussionList;
