import './QuestionForm.css';
import { useState } from 'react';
import axios from 'axios';

const QustionForm = ({ update, setUpdate }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [bodyHTML, setBodyHTML] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    let id = new Date().getTime();

    if (author !== '' && title !== '' && bodyHTML !== '') {
      const newQuestion = {
        id,
        createdAt: new Date(),
        title,
        url: '/',
        author,
        answer: null,
        bodyHTML,
        avatarUrl: 'https://source.boringavatars.com/beam/' + id,
      };

      // * axios를 이용해 POST 요청을 보내 새로 만든 newQuestion 객체를 서버 데이터에 추가.
      // * 그리고 update의 상태를 변경해 다시 GET 요청 보내기
      axios.post('http://localhost:4000/discussions', newQuestion);
      setUpdate(update + 1);

      // * 질문 등록 후 다시 목록으로 이동
      window.location.replace('/');

      // * 질문창 비우기
      setAuthor('');
      setTitle('');
      setBodyHTML('');
    } else {
      alert('빈 칸을 채워주세요.');
    }
  };

  return (
    <section className="form_container">
      <form className="form_question">
        <div className="form_input-name">
          <label>NAME </label>
          <input
            id="name"
            value={author}
            placeholder="Enter your name"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form_input-title">
          <label>TITLE </label>
          <input
            id="title"
            value={title}
            placeholder="Enter your title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form_input-question">
          <label>QUESTION </label>
          <textarea
            id="question"
            value={bodyHTML}
            placeholder="Enter your question"
            onChange={(e) => setBodyHTML(e.target.value)}
          />
        </div>
        <div className="form_submit" onClick={(e) => onSubmit(e)}>
          Add Question
        </div>
      </form>
    </section>
  );
};

export default QustionForm;
