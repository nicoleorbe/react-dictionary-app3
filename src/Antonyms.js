import React from "react";

export default function Antonyms(props) {
  return (
    <div className="antonym ps-5">
      <div>
        {props.data.map((word, index) => {
          if (index === 0) {
            return <strong>opposite</strong>;
          }
        })}
      </div>
      <div>
        {props.data.map((word, index) => {
          if (index === props.data.length - 1) {
            return <span key={index}> {word}</span>;
          } else {
            return <span key={index}> {word},</span>;
          }
        })}
      </div>
    </div>
  );
}
