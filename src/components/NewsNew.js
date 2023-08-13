import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defautProps = {
    country: "in",
    pageSize: 16,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    console.log("cnstr");

    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.props.category}-NewsFire`;
  }

  //   async updateNews() {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);
  //     this.setState({
  //       article: parsedData.articles,
  //       totalResults: parsedData.totalResults,
  //       loading: false,
  //     });
  //   }

  async componentDidMount() {
    this.props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${
      process.env.REACT_APP_API_KEY
    }&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article: this.state.article.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    console.log("render");
    return (
      <>
        <h1
          className="d-flex justify-content-center"
          style={{ paddingTop: "100px", paddingBottom: "25px" }}
        >
          NewsFire - Top {this.props.category} Headlines
        </h1>
        {this.state.loading && <Loading />}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="container">
            <div className="row">
              {this.state.article.map((e) => {
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
  }
}
