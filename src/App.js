import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsNew from "./components/NewsNew";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  //state = { progress: 0 };
  const [progress, setProgress] = useState(0);
  // setProgress = (progress) => {
  //   setState({ progress: progress });
  // };
  //setProgress(progress);
  // const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11945"
          height={2}
          shadow={true}
          progress={progress}
        />
        {/* <NewsNew setProgress={setProgress} pageSize={5} country="in" category="general" /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsNew
                setProgress={setProgress}
                key="/general"
                pageSize={5}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <NewsNew
                setProgress={setProgress}
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <NewsNew
                setProgress={setProgress}
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NewsNew
                setProgress={setProgress}
                key="sports"
                pageSize={5}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <NewsNew
                setProgress={setProgress}
                key="health"
                pageSize={5}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <NewsNew
                setProgress={setProgress}
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <NewsNew
                setProgress={setProgress}
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
