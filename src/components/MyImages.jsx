import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "./Pagination";

const apiKey =
  "live_yXwSg37DSxwMnLwlG2KaxT5wDQtPW8jk5lTvrQ5rChMn9elMn6KDgHSb1OF5mJyN";

const MyImages = () => {
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const getImages = async (pageNumber = 0) => {
    const api = `https://api.thedogapi.com/v1/images/?limit=2&order=DESC&page=${pageNumber}`;
    const response = await fetch(api, {
      headers: { "x-api-key": apiKey },
    });
    const result = await response.json();
    setPageNumber(pageNumber + 1);
    if (images.length) {
      setImages((images) => [...images, ...result]);
    } else {
      setImages(result);
    }
    if (result.length === 0) {
      setDisabled(true);
    }
  };
  useEffect(() => {
    getImages();
  }, []);

  // const loadImage = () => {
  //   getImages();
  // };

  return (
    <div>
      {images.map((item) => (
        <div>
          <img
            className="rounded mx-auto d-block"
            src={item.url}
            style={{
              width: "200px",
              margin: "10px",
            }}
            alt="img"
          />
        </div>
      ))}
      <button disabled={disabled} onClick={(e) => getImages(e.target.value)}>
        Load more...
      </button>
      <Pagination
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        setImages={setImages}
      />
    </div>
  );
};

export default MyImages;
