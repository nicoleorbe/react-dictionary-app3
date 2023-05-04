import React, { useState } from "react";
import "./Dictionary.css";
import WordSearch from "./WordSearch";
import Images from "./Images";
import axios from "axios";

export default function Dictionary() {
  const [search, setSearch] = useState({ ready: false });
  const [images, setImages] = useState(null);

  function handleResponse(response) {
    setSearch({
      ready: true,
      word: response.data[0].word,
      pronounce: response.data[0].phonetic,
      audio: response.data[0].phonetics[0].audio,
      type: response.data[0].meanings[0].partOfSpeech, //noun, etc
      definition: response.data[0].meanings[0].definitions[0].definition,
      antonyms: response.data[0].meanings[0].antonyms,
      synonyms: response.data[0].meanings[0].synonyms,
      additional: response.data[0].meanings,
    });
  }

  function handleImageResponse(response) {
    setImages(response.data.hits);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearch(event.target[0].value);
    urlSearch();
  }

  function handleWordChange(event) {
    setSearch(event.target.value);
  }

  //documentation: https://dictionaryapi.dev/
  function urlSearch() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    axios.get(url).then(handleResponse);

    let imgUrl = `https://pixabay.com/api/?key=36029855-4c738434be11b19682cb333f0&q=${search}&image_type=photo`;
    axios.get(imgUrl).then(handleImageResponse);
    // console.log(imgUrl);
  }

  if (search.ready) {
    return (
      <div>
        <div className="container text-center p-5 Dictionary">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              id="search"
              onChange={handleWordChange}
              placeholder="Search Dictionary..."
              autoFocus
            />
            <input className="btn btn-primary" type="submit" value="Search" />
          </form>
        </div>
        <WordSearch data={search} />
        <Images data={images} />
      </div>
    );
  } else {
    return (
      <div>
        <div className="container text-center p-5 Dictionary">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              id="search"
              onChange={handleWordChange}
              placeholder="Search Dictionary..."
              autoFocus
            />
            <input className="btn btn-primary" type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}
