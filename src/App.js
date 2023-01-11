import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import QuestionForm from './components/QuestionForm';
import DiscussionList from './components/DiscussionList';
import NavigationBar from './components/NavigationBar';
import Notice from './components/Notice';

function App() {
  const [discussions, setDiscussions] = useState([]);
  const [update, setUpdate] = useState(0);

  const getDiscussion = () => {
    return fetch('http://localhost:4000/discussions').then((res) => res.json());
  };

  // * discussions 배열 fetch해온 데이터로 채워주기. 첫 렌더링에는 기본에 있는 데이터를 받아오고,
  // * update의 상태가 바뀔 때 마다 다시 데이터를 받아온다. (GET 요청)
  useEffect(() => {
    getDiscussion().then((data) => {
      setDiscussions(data);
    });
  }, [update]);

  return (
    <>
      <section className="main_bar">
        <p className="codestates">
          <span>CODESTATES</span>
        </p>
        <div className="agorastates_title">
          <h1>Welcome to </h1>
          <h1>
            My
            <br />
            Agora States.
          </h1>
        </div>
        <NavigationBar />
        <hr />
      </section>
      <main>
        <Routes>
          <Route path="/" element={<DiscussionList discussions={discussions} />} />
          <Route
            path="/question-form"
            element={<QuestionForm update={update} setUpdate={setUpdate} />}
          />
          <Route path="/notice" element={<Notice discussions={discussions} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
