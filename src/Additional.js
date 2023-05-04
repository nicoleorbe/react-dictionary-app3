import React from "react";

export default function Additional(props) {
  return (
    <div className="additional">
      <div>
        {props.data.map((partOfSpeech, index) => {
          if (index > 0) {
            const firstDefinition = partOfSpeech.definitions[0].definition;
            return (
              <div key={index}>
                <div className="container result additional">
                  <h3 className="type">{partOfSpeech.partOfSpeech}</h3>
                  <p>{firstDefinition}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
