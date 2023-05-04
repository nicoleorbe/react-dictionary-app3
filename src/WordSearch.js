import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import Additional from "./Additional";

export default function WordSearch(props) {
  console.log(props.data.additional);
  return (
    <div className="WordSearch">
      <div className="container result main">
        <h2 className="main-word">{props.data.word}</h2>
        <p className="pronunciation">{props.data.pronounce}</p>
        <div>
          <audio controls controlsList="nodownload nofullscreen noplaybackrate">
            <source src={props.data.audio} type="audio/mpeg" />
          </audio>
        </div>
      </div>
      <div className="container result main-def">
        <h3 className="type">{props.data.type}</h3>
        <p>{props.data.definition}</p>
        <div className="grid similar-opp">
          <Synonyms data={props.data.synonyms} />
          <Antonyms data={props.data.antonyms} />
        </div>
      </div>
      <Additional data={props.data.additional} />
    </div>
  );
}
