import { useRef, useState } from "react";
import { useEffect } from "react";

const apiKey =
  "live_yXwSg37DSxwMnLwlG2KaxT5wDQtPW8jk5lTvrQ5rChMn9elMn6KDgHSb1OF5mJyN";

const InfiniteScroll = () => {
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [fetchMore, setFetchMore] = useState(true);
  const getImages = async () => {
    const api = `https://api.thedogapi.com/v1/images/?limit=4&page=${pageNumber}`;
    const response = await fetch(api, {
      headers: { "x-api-key": apiKey },
    });
    const result = await response.json();
    setImages((images) => [...images, ...result]);
    if (response.status !== 200) {
      if (result.length < 2) {
        setFetchMore(false);
      }
    }
  };

  const listInnerRef = useRef();
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      if (scrollTop + clientHeight === scrollHeight && fetchMore) {
        setPageNumber(pageNumber + 1);
      }
    }
  };

  useEffect(() => {
    getImages();

    // eslint-disable-next-line
  }, [pageNumber]);
  return (
    <div
      className="d-flex flex-wrap justify-content-around"
      style={{ height: "600px", overflowY: "auto" }}
      ref={listInnerRef}
      onScroll={onScroll}
    >
      {images.map((image) => {
        return (
          <div key={image.id} className="d-flex justify-content-center ">
            <div className="flex-column">
              <img
                style={{
                  width: "800px",
                  marginLeft: "10px",
                  marginTop: "10px",
                  height: "auto",
                  marginBottom: "10px",
                }}
                src={image.url}
                alt="img"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfiniteScroll;
