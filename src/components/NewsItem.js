import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, date, author, source } = props;
  return (
    <div>
      <div className="card">
        <span
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
          className=" badge rounded-pill bg-danger "
        >
          {source}
        </span>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/jammu-and-kashmir-earthquake-051138-16x9.jpeg?VersionId=4xXLpchioWkKRXkn6JmRpgUcW8qPHP1I"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}..</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "unknown"} on {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
