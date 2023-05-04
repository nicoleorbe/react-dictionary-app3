import React from "react";

export default function Images(props) {
  return (
    <div className="container images">
      <div className="row">
        {props.data.map((image, index) => {
          if (index < 6) {
            return (
              <div className="col-4" key={index}>
                <a href={image.webformatURL} target="_blank">
                  <img
                    src={image.webformatURL}
                    alt=""
                    className="img-responsive p-2 w-100"
                  />
                </a>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
