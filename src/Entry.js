import React from "react";

const mappings = ["second", "third", "final"];

const Entry = ({ date, word, number }) => {
  return <>
    <hr></hr>
    <div>
      <p>
        <strong>{new Date(date).toLocaleTimeString()} >> </strong>
        Got another weird text. It said <strong>{word.toUpperCase()}</strong>. It fits the theme, I'll use this as the <strong>{mappings[number]} digit</strong>.</p>
    </div>
  </>
}

export default Entry;