import './Notice.css';

const Notice = ({ discussions }) => {
  const notices = discussions.filter((discussion) => {
    return discussion.title.includes('[notice]');
  });
  return (
    <section className="discussion_notice">
      <ul>
        {notices.map((discussion) => (
          <li key={discussion.id} className="discussion_container">
            <div className="discussion_content">
              <h2 className="discussion_title">
                📣&nbsp;<a href={discussion.url}>{discussion.title}</a>
              </h2>
              <div className="discussion_info">
                <span className="discussion_info-author">
                  <img
                    className="discussion_avatar-image"
                    src={discussion.avatarUrl}
                    alt={`avatar of ${discussion.author}`}
                  />{' '}
                  {discussion.author}
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
        ))}
      </ul>
    </section>
  );
};

export default Notice;
