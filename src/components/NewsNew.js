import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  let { setProgress, pageSize, country, category } = props;
  document.title = `${category}-NewsFire`;

  useEffect(() => {
    async function fetchDate() {
      setProgress(15);
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&page=1&pageSize=${pageSize}`;
      setloading(true);
      let data = await fetch(url);
      setProgress(30);
      let parsedData = await data.json();
      setProgress(50);
      setarticles(parsedData.articles);
      setloading(false);
      settotalResults(parsedData.totalResults);
      setProgress(100);
    }
    fetchDate();
  }, [setProgress, pageSize, country, category]);

  const fetchMoreData = async () => {
    setpage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
      process.env.REACT_APP_API_KEY
    }&page=${page + 1}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="d-flex justify-content-center"
        style={{ paddingTop: "100px", paddingBottom: "25px" }}
      >
        NewsFire - Top {category} Headlines
      </h1>
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {articles.map((e) => {
              return (
                <div className="col-md-3 my-3" key={e.url}>
                  <NewsItem
                    title={e.title ? e.title.slice(0, 40) : ""}
                    description={
                      e.description ? e.description.slice(0, 80) : ""
                    }
                    imageUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
export default News;
News.defautProps = {
  country: "in",
  pageSize: 16,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
