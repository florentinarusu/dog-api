import React from "react";
import { useState } from "react";

const apiKey =
  "live_yXwSg37DSxwMnLwlG2KaxT5wDQtPW8jk5lTvrQ5rChMn9elMn6KDgHSb1OF5mJyN";

const Pagination = ({ setPageNumber, pageNumber, setImages }) => {
  const [disabled, setDisabled] = useState(false);
  const [buttons, setButtons] = useState([1, 2, 3]);

  const previousPage = async () => {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/?limit=2&order=DESC&page=${
        pageNumber - 1
      }`,
      {
        headers: { "x-api-key": apiKey },
      }
    );
    const result = await response.json();
    setImages([...result]);
    setPageNumber((pageNumber) => pageNumber - 1);
    if (pageNumber === 0) {
      setDisabled(true);
    }
  };

  const fetchPage = async (number) => {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/?limit=2&order=DESC&page=${
        number - 1
      }`,
      {
        headers: { "x-api-key": apiKey },
      }
    );
    const result = await response.json();
    setImages([...result]);
    if (result.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setPageNumber(number - 1);
  };

  const nextPage = async () => {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/?limit=2&order=DESC&page=${
        pageNumber + 1
      }`,
      {
        headers: { "x-api-key": apiKey },
      }
    );
    const result = await response.json();
    if (result.length === 0) {
      setDisabled(true);
    } else {
      setImages([...result]);
      setButtons((buttons) => [...buttons, buttons.length + 1]);
      setDisabled(false);
    }
    setPageNumber((pageNumber) => pageNumber + 1);
  };

  return (
    <div className="buttons">
      <button
        className="btn btn-secondary"
        disabled={pageNumber === 0}
        onClick={previousPage}
      >
        Previous
      </button>
      {buttons.map((item) => (
        <button className="btn btn-secondary" onClick={() => fetchPage(item)}>
          {item}
        </button>
      ))}
      <button
        className="btn btn-secondary"
        disabled={disabled}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
