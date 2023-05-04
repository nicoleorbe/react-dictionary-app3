import React from "react";

export default function Synonyms(props) {
  return (
    <div className="synonym">
      <div>
        {props.data.map((word, index) => {
          if (index === 0) {
            return <strong>similar</strong>;
          } else {
            return null;
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
