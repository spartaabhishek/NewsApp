import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsNew from "./components/NewsNew";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = { progress: 0 };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  apiKey = process.env.REACT_APP_API_KEY;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            apiKey={this.apiKey}
            color="#f11945"
            height={2}
            shadow={true}
            progress={this.state.progress}
          />
          {/* <NewsNew setProgress={this.setProgress} pageSize={5} country="in" category="general" /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsNew
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
  }
}
