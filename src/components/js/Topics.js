import React from 'react';
import '../css/Topics.css';
import diff from '../img/diff.jpg';
import inte from '../img/inte.jpg';
import { Link } from 'react-router-dom';

function Topics({ setTopic }) {
  return (
    <div className="container">
      <div>
        <Link to="/ques" onClick={() => setTopic("integration")}>
          <img src={inte} alt="Integration" id="img" />
          <div className="topic-title">Integration</div>
        </Link>
      </div>
      <div>
        <Link to="/ques" onClick={() => setTopic("diffi")}>
          <img src={diff} alt="Differentiation" id="img" />
          <div className="topic-title">Differentiation</div>
        </Link>
      </div>
      {/* Add more topics as needed */}
    </div>
  );
}

export default Topics;
