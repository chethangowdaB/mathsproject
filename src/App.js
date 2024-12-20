import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/js/Navbar';
import Topics from './components/js/Topics';
import Ques from './components/js/Ques';
import SW from './components/js/SW';
import GM from './components/js/GM';
import HC from './components/js/HC';
import HS from './components/js/HS';
import HE from './components/js/HE';
import SCS from './components/js/SCS';

function App() {
  const [no, setno] = useState(1);
  const [topic, setTopic] = useState("Great Learning");

  // Reset `no` and optionally reset the topic
  const handleSetTopic = (newTopic = "Great Learning") => {
    setTopic(newTopic);
    setno(1); // Reset question number to 1
  };

  return (
    <Router>
      <Navbar topic={topic} />
      <Routes>
        <Route exact path="/" element={<Topics setTopic={handleSetTopic} />} />
        <Route
          path="/ques"
          element={
            <Ques
              no={no}
              setno={setno}
              topic={topic}
              setTopic={handleSetTopic}
            />
          }
        />
        <Route
          path="/SW"
          element={
            <SW
              no={no}
              setno={setno}
              topic={topic}
              setTopic={handleSetTopic}
            />
          }
        />
        <Route
          path="/GM"
          element={
            <GM
              no={no}
              setno={setno}
              topic={topic}
              setTopic={handleSetTopic}
            />
          }
        />
        <Route
          path="/HC"
          element={
            <HC
              no={no}
              setno={setno}
              topic={topic}
              setTopic={handleSetTopic}
            />
          }
        />
        <Route
          path="/HS"
          element={
            <HS
              no={no}
              setno={setno}
              topic={topic}
              setTopic={handleSetTopic}
            />
          }
        />
        <Route
          path="/HE"
          element={
            <HE
              no={no}
              setno={setno}
              topic={topic}
              setTopic={handleSetTopic}
            />
          }
        />
        <Route
          path="/SCS"
          element={
            <SCS
              no={no}
              setno={setno}
              topic={topic}
              setTopic={handleSetTopic}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
